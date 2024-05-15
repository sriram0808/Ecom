import { BrowserRouter, Route, Routes } from "react-router-dom"
import Nav from "./Components/Nav"
import Home from "./Components/Home"
import Cart from "./Components/Cart"
import Checkout from "./Components/Checkout"



let App=()=>{
    return(
        <div>
           <BrowserRouter>
           <Nav/>
           <Routes>
            <Route element={<Home/>} path="/"/>
            <Route element={<Cart/>} path="/cart"/>
            <Route element={<Checkout/>} path="/checkout"/>
           </Routes>
           </BrowserRouter>
        </div>
    )
}
export default App