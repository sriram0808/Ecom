import { LuWaves } from "react-icons/lu";
import "../Assests/Css/Categories.css"
import samsung from "../Assests/Images/sam.png"
import Iphone from "../Assests/Images/iphone.png"
import Vivo from "../Assests/Images/vivo.png"
import Oneplus from "../Assests/Images/1+.png"
import Nothing from "../Assests/Images/nothing.png"
import Newarrival from "./Newarrival";
let Categories=()=>{
    return(
        <div style={{backgroundColor:"rgb(248,248,248)"}}>
            <div className="container">
                <div className="row text-center ">
                    <h3 className="cat fw-semibold my-5"> <LuWaves /> Categories</h3>
                </div>
                <div className="row text-center">
                    <h1 className="fw-bold">Fresh Finds Unveiling New <br /> Arrivals For You</h1>
                </div>
            </div>
            <div className="container-fluid">
                <div className="row text-center my-5">
                    <div className="col ">
                        <div className="row mx-4">
                            <img src={samsung} alt="samsung" style={{height:"90px",width:"120px"}}/>
                        </div>
                        <div className="row my-4 mx-4 " style={{color:"rgb(20, 70, 160)",fontSize:"25px",fontWeight:"600"}}>Samsung</div>
                    </div>
                    <div className="col ">
                        <div className="row mx-4">
                            <img src={Iphone} alt="samsung" style={{height:"90px",width:"120px"}}/>
                        </div>
                        <div className="row my-4  mx-5" style={{color:"rgb(20, 70, 160)",fontSize:"25px",fontWeight:"600"}}>Iphone</div>
                    </div>
                    <div className="col ">
                        <div className="row mx-4">
                            <img src={Vivo} alt="samsung" style={{height:"90px",width:"120px"}}/>
                        </div>
                        <div className="row my-4  mx-5" style={{color:"rgb(20, 70, 160)",fontSize:"25px",fontWeight:"600"}}>Vivo</div>
                    </div>
                    <div className="col ">
                        <div className="row mx-4">
                            <img src={Oneplus} alt="samsung" style={{height:"90px",width:"120px"}}/>
                        </div>
                        <div className="row my-4  mx-5" style={{color:"rgb(20, 70, 160)",fontSize:"25px",fontWeight:"600"}}>Oneplus</div>
                    </div>
                    <div className="col ">
                        <div className="row mx-4">
                            <img src={Nothing} alt="samsung" style={{height:"90px",width:"120px"}}/>
                        </div>
                        <div className="row my-4  mx-5" style={{color:"rgb(20, 70, 160)",fontSize:"25px",fontWeight:"600"}}>Nothing</div>
                    </div>
                    <div className="col ">
                        <div className="row mx-4">
                            <img src={samsung} alt="samsung" style={{height:"90px",width:"120px"}}/>
                        </div>
                        <div className="row my-4  mx-5" style={{color:"rgb(20, 70, 160)",fontSize:"25px",fontWeight:"600"}}>Samsung</div>
                    </div>
                   
                    
                </div>
            </div>
            <Newarrival/>
        </div>
    )
}
export default Categories