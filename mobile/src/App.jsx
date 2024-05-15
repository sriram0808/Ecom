import { BrowserRouter, Route, Routes } from "react-router-dom"
import Nav from "./Components/Nav"
import Home from "./Components/Home"



let App=()=>{
    return(
        <div>
           <BrowserRouter>
           <Nav/>
           <Routes>
            <Route element={<Home/>} path="/"/>
           </Routes>
           </BrowserRouter>
        </div>
    )
}
export default App