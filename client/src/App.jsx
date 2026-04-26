// import React from 'react'
// import Navbar from './components/Navbar'
// import { Route, Routes, useLocation } from 'react-router-dom'
// import { Toaster } from 'react-hot-toast';
// import Home from './pages/Home'
// import Footer from './components/Footer'
// import { useAppContext } from './context/AppContext';
// import Login from './components/Login'
// import AllProducts from './pages/AllProducts';
// import ProductCategory from './pages/ProductCategory';
// import ProductDetails from './pages/ProductDetails';
// import Cart from './pages/Cart';
// import AddAddress from './pages/AddAddress';
// import MyOrders from './pages/MyOrders';

// const App = () => {

//   const issellerPath = useLocation().pathname.includes("seller");
//   const {showUserLogin ,isSeller }= useAppContext()
//   return (
//     <div>
//       {issellerPath ? null : <Navbar/>}
//       {showUserLogin ? <Login/> : null}

//       <Toaster />
//       <div className={`${issellerPath ? "" : "px-6 md:px-16 lg:px-24 xl:px-32"}`}>
//         <Routes>
//           <Route path = '/' element = {<Home/>}/>
//           <Route path = '/products' element = {<AllProducts/>}/>
//           <Route path = '/products/:category' element = {<ProductCategory/>}/>
//           <Route path = '/products/:category/:id' element = {<ProductDetails/>}/>
//           <Route path = '/cart' element = {<Cart/>}/>
//           <Route path = '/add-address' element = {<AddAddress/>}/>
//           <Route path = '/my-orders' element = {<MyOrders/>}/>
//           <Route path = '/seller' element = {isSeller ? null : <SellerLogin/>}/>
// </Route>
//         </Routes>
//       </div>
//     {!issellerPath && <Footer/>}
//     </div>
//   )
// }

// export default App





import React from 'react'
import Navbar from './components/Navbar'
import { Route, Routes, useLocation, Navigate } from 'react-router-dom'
import { Toaster } from 'react-hot-toast';
import Home from './pages/Home'
import Footer from './components/Footer'
import { useAppContext } from './context/AppContext';
import Login from './components/Login'
import AllProducts from './pages/AllProducts';
import ProductCategory from './pages/ProductCategory';
import ProductDetails from './pages/ProductDetails';
import Cart from './pages/Cart';
import AddAddress from './pages/AddAddress';
import MyOrders from './pages/MyOrders';
import SellerLogin from "./components/seller/SellerLogin";
import SellerLayout from './pages/seller/SellerLayout';
import AddProduct from './pages/seller/AddProduct';
import ProductList from './pages/seller/ProductList';
import Orders from './pages/seller/Orders';

const App = () => {

  const issellerPath = useLocation().pathname.includes("seller");
  const { showUserLogin, isSeller } = useAppContext()

  return (
    <div className='text-default min-h-screen text-gray-700 bg-white'>

      {!issellerPath && <Navbar />}
      {showUserLogin && <Login />}

      <Toaster />

      <div className={`${issellerPath ? "" : "px-6 md:px-16 lg:px-24 xl:px-32"}`}>

        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/products' element={<AllProducts />} />
          <Route path='/products/:category' element={<ProductCategory />} />
          <Route path='/products/:category/:id' element={<ProductDetails />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/add-address' element={<AddAddress />} />
          <Route path='/my-orders' element={<MyOrders />} />
          <Route path='/seller/login' element={<SellerLogin />} />
         <Route
            path="/seller"
            element={isSeller ? <SellerLayout /> : <Navigate to="/seller/login" />}
>
  <Route index element={<AddProduct />} />
  <Route path="product-list" element={<ProductList />} />
  <Route path="orders" element={<Orders />} />
          </Route>
        </Routes>

      </div>

      {!issellerPath && <Footer />}
    </div>
  )
}

export default App