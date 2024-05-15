import { BrowserRouter, Route, Routes } from "react-router-dom"
import Nav from "./Components/Nav"
import Home from "./Components/Home"
import Cart from "./Components/Cart"



let App=()=>{
    return(
        <div>
           <BrowserRouter>
           <Nav/>
           <Routes>
            <Route element={<Home/>} path="/"/>
            <Route element={<Cart/>} path="/cart"/>
           </Routes>
           </BrowserRouter>
        </div>
    )
}
export default App