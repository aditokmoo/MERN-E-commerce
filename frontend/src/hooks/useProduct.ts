import { InvalidateQueryFilters, useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { createProduct, getAllProducts, getSearchedProducts, getSingleProduct } from "../api/services/productServices";
import { useLocation, useParams } from "react-router";
import { useActiveCatalogFilterContext } from "../context/ActiveCatalogFilterContext";
import { createProductType } from "../shared/Types/types";
import { useProductFilterContext } from "../context/ProductFilterContext";
import useDebounceValue from "./useDebounceValue";

export function useGetAllProducts() {
    const location = useLocation();
    const category = location.pathname.split('/')[2];
    const admin = location.pathname;

    const { activeProduct } = useActiveCatalogFilterContext();
    const { sortBy } = useProductFilterContext();

    const { data, isLoading } = useQuery({
        queryKey: ["products", category, sortBy, admin, activeProduct],
        queryFn: () => getAllProducts(category, sortBy, admin, activeProduct)
    });

    return { data, isLoading }
}

export function useGetSearchedProducts() {
    const { searchText } = useProductFilterContext();
    const debounceSearchValue = useDebounceValue(searchText, 500);
    const { data, isLoading } = useQuery({
        queryKey: ["searchedProducts", debounceSearchValue],
        queryFn: () => getSearchedProducts(searchText),
        staleTime: 30000
    });

    return { data, isLoading }
}

export function useGetSingleProduct() {
    const { productId } = useParams();

    const { data, isLoading } = useQuery({
        queryKey: ["product", productId],
        queryFn: () => getSingleProduct(productId)
    });

    return { data, isLoading }
}

export function useCreateProduct() {
    const queryClient = useQueryClient();

    const { mutate, isPending } = useMutation({
        mutationFn: (productData: createProductType) => createProduct(productData),
        mutationKey: ["new_product"],
        onSuccess: () => {
            queryClient.invalidateQueries("products" as InvalidateQueryFilters)
        }
    });

    return { mutate, isPending }
}