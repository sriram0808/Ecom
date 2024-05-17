import { BrowserRouter, Route, Routes } from "react-router-dom"
import Nav from "./Components/Nav"
import Home from "./Components/Home"
import Cart from "./Components/Cart"
import Checkout from "./Components/Checkout"
import Creditcard from "./Components/Creditcard"
import Netbanking from "./Components/Netbanking"
import Upi from "./Components/Upi"
import Login from "./Components/Login"
import SignUp from "./Components/Signup"
import Getotp from "./Components/Getotp"




let App=()=>{
    return(
        <div>
           <BrowserRouter>
           <Nav/>
           <Routes>
            <Route element={<Home/>} path="/"/>
            <Route element={<Cart/>} path="/cart"/>
            <Route element={<Checkout/>} path="/checkout"/>
            <Route element={<Creditcard/>} path="/creditcard"/>
            <Route element={<Netbanking/>} path="/netbanking"/>
            <Route element={<Upi/>} path="/upi"/>
            <Route element={<Login/>} path="/login"/>
            <Route element={<SignUp/>} path="/signup"/>
            <Route element={<Getotp/>} path="/getotp"/>
           </Routes>
           </BrowserRouter>
        </div>
    )
}
export default App