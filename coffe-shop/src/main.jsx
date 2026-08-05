import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

import {
 QueryClient,
 QueryClientProvider
} from "@tanstack/react-query";

import {BrowserRouter} from "react-router-dom";

import {CartProvider} from "./context/CartContext";


const client = new QueryClient();

ReactDOM.createRoot(
document.getElementById("root")
)
.render(

<QueryClientProvider client={client}>

<BrowserRouter>

<CartProvider>

<App/>

</CartProvider>

</BrowserRouter>

</QueryClientProvider>
)
 import {ToastContainer}
 from "react-toastify";
 import "react-toastify/dist/ReactToastify.css";

 