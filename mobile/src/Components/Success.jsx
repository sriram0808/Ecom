import tick from "../Assests/Images/sucessTick.png"
import "../Assests/Css/Sucess.css"
import delivery from "../Assests/Images/sucessDelivery.png"
import Footer from "./Footer"
import { Link } from "react-router-dom"
let Sucess=()=>{
    return(
        <div style={{backgroundColor: "rgb(248,248,248)"}}>
           <div className="container">
            <div className="row d-flex justify-content-center ">
                <img src={tick} alt="" className="img-fluid my-3"  style={{ width: '80px', height: '55px' }}/>
            </div>
            <div className="row text-center">
                <p className="sucessTitle">Thankyou for shopping <br /> with us!</p>
            </div>
            <div className="row d-flex justify-content-center">
                <img src={delivery} alt="" className="img-fluid " style={{height:"200px",width:"180px"}}/>
            </div>
            <div className="row">
                 <table className="table mt-4" style={{borderRadius:"5px"}}>
                <thead>
                    <tr>
                        <th>Order Number</th>
                        <th>Date</th>
                        <th>Payment Method</th>
                        <th className="text-center">Order <a href="/">#430-56789-098765</a></th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className="sucessSecondRow" style={{color:"rgb(20, 70, 160)"}}>03</td>
                        <td className="sucessSecondRow" style={{color:"rgb(20, 70, 160)"}}>May, 04, 2024</td>
                        <td className="sucessSecondRow" style={{color:"rgb(20, 70, 160)"}}>Credit Card Payment</td>
                        <td className="">
                            <div className="row">
                                <div className="col-6 text-center">
                                    <p className="sucessSecondRow ">View order details</p>                                                                    
                                </div>
                                <div className="col-6">
                                    <p className="sucessSecondRow ">Track your order</p>
                                </div>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
            </div>
           <div className="d-flex justify-content-center mt-4">
           <Link to="/"><button className="successButton">Continue Shopping</button></Link>
           </div>
           </div>
           <Footer/>
        </div>
    )
}
export default Sucess