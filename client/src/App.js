import React from 'react'
import {createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom'

// Pages
import Home from './pages/Home'
import Products from './pages/Products'
import ProductDetails from './pages/ProductDetails'
import Search from './pages/Search'

// Components
import Header from './components/Header'
import Footer from './components/Footer'

// layout
const Layout = () => {
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  )
}

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      { path: '/', element: <Home /> },
      { path: '/products/:id', element: <Products /> },
      { path: '/product/:id', element: <ProductDetails /> },
      { path: '/search', element: <Search /> },
    ],
  }
])

const App = () => {
  return <div>
    <RouterProvider router={router} />
  </div>
}

export default App
