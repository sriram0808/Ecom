import { IoCard } from "react-icons/io5";
import { RiBankFill } from "react-icons/ri";
import { CgPaypal } from "react-icons/cg"
import { Link } from "react-router-dom";
import { FaGooglePay } from "react-icons/fa";
import { FaPaypal } from "react-icons/fa";
import { SiPaytm } from "react-icons/si";
import "../Assests/Css/Upi.css"
import Footer from "./Footer";

let Upi=()=>{
    return(
        <div style={{ backgroundColor: "rgb(248,248,248)" }}>
           <div className="container">
                        <div className="row text-center ">
                            <div className="col">
                                <h1 className="title my-4">Payment Methods</h1>
                            </div>
                        </div>
                        <div className="row text-center my-5">
                            <div className="col-md-4 col-sm-12 mb-3">
                            <Link to="/creditcard"><h3 className="payHeading"><IoCard /> Credit / Debit Card</h3></Link>
                            </div>
                            <div className="col-md-4 col-sm-12 mb-3">
                            <Link to="/netbanking"><h3 className="payHeading"><RiBankFill /> Net Banking</h3></Link>
                            </div>
                            <div className="col-md-4 col-sm-12 mb-3">
                                <h3 className="payHeading"><CgPaypal /> UPI Payment</h3>
                            </div>
                        </div>

                        <div className="container">
                            <div className="row">
                                <h1 className="text-center title">UPI Payment</h1>
                            </div>
                            
                            <div className="d-flex justify-content-between my-4">
                                <div class="form-check form-check-inline">
                                    <input class="form-check-input custom-radio" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1"/>
                                    <label class="form-check-label" for="inlineRadio1"><FaGooglePay size={50} color="lightblue"/></label>
                                </div>
                                <div class="form-check form-check-inline">
                                    <input class="form-check-input custom-radio" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2"/>
                                    <label class="form-check-label" for="inlineRadio2"><SiPaytm size={50} color="blue"/></label>
                                </div>
                                <div class="form-check form-check-inline ">
                                    <input class="form-check-input custom-radio" type="radio" name="inlineRadioOptions" id="inlineRadio3" value="option3" /> 
                                    <label class="form-check-label" for="inlineRadio3"><FaPaypal size={50} color="red"/></label>
                                </div>
                            </div>


                            <div className="row ">
                                <div className="cold-flex d-flex justify-content-center">
                                <label className='fw-bolder  cardTitle'>UPI</label>
                                <div className="input-group  upiInput position-relative mx-5">
                                    <input type="text" className="form-control" placeholder="Enter UPI Id" />
                                </div>
                            </div>
                            </div>


                            <div className="row my-5 d-flex justify-content-center ttt">
                                     <button class="btn makeapaymentButton" type="button">Make a Payment</button>
                            </div>
                        </div>
         </div>
         <Footer/>

        </div>
    )
}
export default Upi