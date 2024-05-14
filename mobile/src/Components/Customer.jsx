import { LuWaves } from "react-icons/lu";
import oneplus from "../Assests/Images/mobil1.png"
import Footer from "./Footer";


let Customer=()=>{
    
    return(
        <div>
           <div className="container">
                <div className="row text-center my-5 justify-content-center">
                    <h3 className="cat fw-semibold" > <LuWaves /> Customer Choices</h3>
                </div>
                <div className="row text-center">
                    <h1 className="fw-bold">The customer frequently purchased similar <br />brands through our websites</h1>
                </div>
            </div>
            <div className="container">
                <div className="row " style={{margin:"50px"}}>
                    <div className="col">
                        <img src={oneplus} alt="" style={{ height: "270px" }} />
                    </div>
                    <div className="col">
                    <img src={oneplus} alt="" style={{ height: "270px" }}/>

                    </div>
                    <div className="col">
                    <img src={oneplus} alt="" style={{ height: "270px" }}/>

                    </div>
                </div>
            </div>
            <Footer/>
           
        </div>
    )
}
export default Customer