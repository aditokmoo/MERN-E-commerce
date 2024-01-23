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

function App() {
  return (
    <Routes>
      <Route element={<PersistLogin />}>
        <Route path='/' element={
          <>
            <Header />
              <Home />
            <Footer />
          </>
        } />

      <Route path='/catalog/smartphones' element={
        <ActiveCatalogFilterContextProvider>
          <Header />
            <Smartphones />
          <Footer />
        </ActiveCatalogFilterContextProvider>
      } />

      <Route path='/catalog/computers' element={
        <ActiveCatalogFilterContextProvider>
          <Header />
            <Computers />
          <Footer />
        </ActiveCatalogFilterContextProvider>
      } />
      </Route>
      
      <Route path='/user/register' element={<Register />} />
      <Route path='/user/login' element={<Login />} />
      <Route path='/user/verify' element={<VerifyPage />} />
      
      <Route element={<PersistLogin />}>
        <Route element={<RequireAuth allowedRole='user' />}>
          <Route path='/user/profile' element={<UserProfile />} />
        </Route>
        <Route element={<RequireAuth allowedRole='admin' />}>
          <Route path='/admin' element={<AdminProfile />} />
        </Route>
      </Route>
    </Routes> 
  )
}

export default App
