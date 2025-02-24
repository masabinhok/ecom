import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import "./styles/index.css"
import { BrowserRouter, Route, Routes } from 'react-router'
import HomePage from './pages/HomePage.tsx'
import About from './pages/About.tsx'
import Account from './pages/Account.tsx'
import ProductDetails from './pages/ProductDetails.tsx'
import Contact from './pages/Contact.tsx'
import Cart from './pages/Cart.tsx'
import Wishlist from './pages/Wishlist.tsx'
import SignUp from './pages/Signup.tsx'
import Login from './pages/Login.tsx'
import AuthLayout from './pages/AuthLayout.tsx'
import Layout from './pages/Layout.tsx'
import Shop from './pages/Shop.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="about" element={<About />} />
          <Route element={<AuthLayout />}>
            <Route path="signup" element={<SignUp />} />
            <Route path="login" element={<Login />} />
          </Route>
          <Route path="wishlist" element={<Wishlist />} />
          <Route path="cart" element={<Cart />} />
          <Route path="contact" element={<Contact />} />
          <Route path="product-details/:id" element={<ProductDetails />} />
          <Route path="account" element={<Account />} />
          <Route path="shop/:id" element={<Shop />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode >,
)
