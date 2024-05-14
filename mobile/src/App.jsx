import { BrowserRouter, Route, Routes } from "react-router-dom"
import Nav from "./Components/Nav"
import Home from "./Components/Home"
import Explore from "./Components/Explore"



let App=()=>{
    return(
        <div>
           <BrowserRouter>
           <Nav/>
           <Routes>
            <Route element={<Home/>} path="/"/>
            <Route element={<Explore/>} path="/explore"/>
           </Routes>
           </BrowserRouter>
        </div>
    )
}
export default App