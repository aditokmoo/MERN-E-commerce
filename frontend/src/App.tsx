import { Routes, Route } from 'react-router'
// Pages
import Home from './pages/Home/Home'
import Smartphones from './pages/Catalog/Smartphones/Smartphones'
// Components
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Computers from './pages/Catalog/Computers/Computers'
import Register from './pages/Register/Register'
import Login from './pages/Login/Login'
import VerifyPage from './pages/VerifyPage/VerifyPage'
import RequireAuth from './components/RequireAuth'
import UserProfile from './pages/UserProfile/UserProfile'
import AdminProfile from './pages/AdminProfile/AdminProfile'
import PersistLogin from './components/PersistLogin'
// Context Provider
import { ActiveCatalogFilterContextProvider } from './context/ActiveCatalogFilterContext'
// SCSS
import './App.scss'
// USER PROFILE COMPONENTS
import UserDashboard from './pages/UserProfile/components/Dashboard/UserDashboard'
import Orders from './pages/UserProfile/components/Orders/Orders'
import Address from './pages/UserProfile/components/Address/Address'
import Wishlist from './pages/UserProfile/components/Wishlist/Wishlist'
import Details from './pages/UserProfile/components/Details/Details'
// ADMIN PROFILE COMPONENTS
import AdminDashboard from './pages/AdminProfile/components/Dashboard/AdminDashboard'
import Products from './pages/AdminProfile/components/Products/Products'
import { AddProductModalContextProvider } from './context/AddProductModalContext'
import ProductDetails from './pages/ProductDetails/ProductDetails'
import ShoppingCart from './pages/ShoppingCart/ShoppingCart'
import ShoppingCartContextProvider from './context/ShoppingCartContext'
import ProductFilterContextProvider from './context/ProductFilterContext'
import WishlistContextProvider from './context/WishlistContext'

function App() {
  return (
    <Routes>
      <Route element={<PersistLogin />}>
        <Route path='/' element={
          <ActiveCatalogFilterContextProvider>
            <ProductFilterContextProvider>
              <WishlistContextProvider>
                <Header />
                  <Home />
                <Footer />
              </WishlistContextProvider>
            </ProductFilterContextProvider>
          </ActiveCatalogFilterContextProvider>
        } />

        <Route path='/catalog/smartphone' element={
          <ActiveCatalogFilterContextProvider>
            <ProductFilterContextProvider>
              <WishlistContextProvider>
                <Header />
                  <Smartphones />
                <Footer />
              </WishlistContextProvider>
            </ProductFilterContextProvider>
          </ActiveCatalogFilterContextProvider>
        } />

        <Route path='/catalog/computer' element={
          <ActiveCatalogFilterContextProvider>
            <ProductFilterContextProvider>
              <WishlistContextProvider>
                <Header />
                  <Computers />
                <Footer />
              </WishlistContextProvider>
            </ProductFilterContextProvider>
          </ActiveCatalogFilterContextProvider>
        } />

        <Route path='/catalog/computer/:productId' element={
          <>
            <Header />
            <ProductDetails />
          </>
        } />
        <Route path='/catalog/smartphone/:productId' element={
          <>
            <Header />
            <ProductDetails />
          </>
        } />
        
        <Route path='/user/cart' element={
          <ShoppingCartContextProvider>
            <Header />
              <ShoppingCart />
            <Footer />
          </ShoppingCartContextProvider>
        } />
      </Route>
      
      <Route path='/user/register' element={<Register />} />
      <Route path='/user/login' element={<Login />} />
      <Route path='/user/verify' element={<VerifyPage />} />
      
      <Route element={<PersistLogin />}>
        <Route element={<RequireAuth allowedRole='user' />}>
          <Route path='/user/profile' element={
            <>
                <Header />
                <UserProfile />
              </>
            }>
            <Route path='/user/profile/dashboard' element={<UserDashboard />} />
            <Route path='/user/profile/orders' element={<Orders />} />
            <Route path='/user/profile/address' element={<Address />} />
            <Route path='/user/profile/wishlist' element={<Wishlist />} />
            <Route path='/user/profile/details' element={<Details />} />
          </Route>
        </Route>
        <Route element={<RequireAuth allowedRole='admin' />}>
          <Route path='/admin' element={
              <>
                <Header />
                <AdminProfile />
              </>
            }>
            <Route path='/admin/dashboard' element={<AdminDashboard />} /> 
            <Route path='/admin/products' element={
              <ActiveCatalogFilterContextProvider>
                <AddProductModalContextProvider>
                  <ProductFilterContextProvider>
                    <Products />
                  </ProductFilterContextProvider>
                </AddProductModalContextProvider>
            </ActiveCatalogFilterContextProvider>} /> 
          </Route>
        </Route>
      </Route>
    </Routes> 
  )
}

export default App
