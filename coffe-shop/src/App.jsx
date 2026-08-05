import {ToastContainer} from
"react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  Routes,
  Route
} from "react-router-dom";

import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import Products from "./pages/Products";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import Footer from "./components/Footer"

function App(){
  return(
    <div className="min-h-screen bg-amber-100 text-amber-950">
    <Navbar/>
    <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/products" element={<Products/>}/>
    <Route path="/cart" element={<Cart/>}/>
    <Route path="/checkout" element={<Checkout/>}/>
    </Routes>
    <ToastContainer/>
    </div>
  );
}

export default App;
<>

<Footer/>

</>