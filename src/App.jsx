import Header from './includes/Header'
import Home from './Pages/Home'
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './scss/app.scss'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Login from './Auth/Login';
import Register from './Auth/Register';
import Footer from './includes/Footer';
import Cart from './Pages/Cart';
import ProductList from './Pages/ProductLists';
import Wishlists from './Pages/WishLists';
import ProductDetail from './Pages/ProductDetail';
import { useEffect } from 'react';
import { fetchProductsByCategory } from './Features/productSlice';
import { useDispatch } from 'react-redux';
import Checkout from './Pages/Checkout';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchProductsByCategory('allProducts'));
  }
  , [dispatch]);
  return (
    <Router>
      <Header />
      <div className='page-start app'>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/men" element={<ProductList category={"men's clothing"} />} />
          <Route path="/women" element={<ProductList category={"women's clothing"} />} />
          <Route path="/clothes" element={<ProductList categoroes={"women's clothing"} />} />
          <Route path="/jewellery" element={<ProductList category={"jewelery"} />} />
          <Route path="/electronics" element={<ProductList category={"electronics"} />} />
          <Route path="/allProducts" element={<ProductList category={"allProducts"}/>} />
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route path="/checkout" element={<Checkout />} />
          {/* <Route path="/women" element={<MenClothes />} /> */}
          <Route path="/wishlist" element={<Wishlists />} />


        </Routes>
      </div>
      <Footer/>

    </Router>
  )
}

export default App
