import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
// import { Toaster } from "react-hot-toast";
import 'react-toastify/dist/ReactToastify.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './index.css'
import Footer from './components/Footer.jsx'
import Navbar from './components/Navbar.jsx'
import DetailsPage from './components/DetailsPage.jsx'

import {Provider} from 'react-redux'
import {store} from './store/store'
import CartPage from './pages/CartPage.jsx';
import ProductsPage from './pages/ProductsPage.jsx';
// import Navbar from './components/Navbar.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  
  <Provider store={store}>
  <BrowserRouter>
  <React.StrictMode>
  {/* <Toaster position="bottom-right" toastOptions={{duration:5000}}/> */}
    <Navbar />
      <Routes>
      <Route exact path="/" element={<App />}>
        </Route>
        {/* <Route exact path="/signup" element={<Signup />}>
        </Route>*/}
        <Route exact path="/products" element={<ProductsPage />}>
        </Route>
        <Route exact path="/cart" element={<CartPage />}>
        </Route>
        <Route exact path="/product/:id" element={<DetailsPage />}>
        </Route> 
      </Routes>
      <Footer />
      </React.StrictMode>
    </BrowserRouter>
    </Provider>

)
