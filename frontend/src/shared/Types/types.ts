export type createUserType = {
    username: string,
    firstName: string,
    lastName: string,
    email: string,
    password: string,
    confirmPassword: string,
    phoneNumber: string,
    country: string,
    city: string,
    postalCode: string
}

export type loginUserType = {
    email: string,
    password: string,
    remember_me?: boolean
}

export type inputFieldDataTypes = {
    type: string,
    id: string,
    name: string,
    label: string
}

// products && createProduct && useCreateProduct types
export type createProductType = {
    discount: number,
    images: string,
    name: string,
    discountPrice: number,
    originalPrice: number,
    price: number
    reviews: []
}