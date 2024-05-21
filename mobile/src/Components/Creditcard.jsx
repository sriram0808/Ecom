import { IoCard } from "react-icons/io5";
import { RiBankFill } from "react-icons/ri";
import { CgPaypal } from "react-icons/cg"
import "../Assests/Css/Procced.css"
import atm from "../Assests/Images/atm.jpg"
import { Link } from "react-router-dom";
import Footer from "./Footer";


let Creditcard=()=>{
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
                                <h3 className="payHeading"><IoCard /> Credit / Debit Card</h3>
                            </div>
                            <div className="col-md-4 col-sm-12 mb-3">
                            <Link to="/netbanking"><h3 className="payHeading"><RiBankFill /> Net Banking</h3></Link>
                            </div>
                            <div className="col-md-4 col-sm-12 mb-3">
                                <Link to="/upi"><h3 className="payHeading"><CgPaypal /> UPI Payment</h3></Link>
                            </div>
                        </div>
                    </div>


            <div className="container">

                <div className="row text-center">
                    <h1 className="title">Card Details</h1>
                </div>
                <div className="row d-flex justify-content-center my-5">
                    <img src={atm} alt=""  className="img-fluid img"/>
                </div>
                <div className="row">



                         <div className="container text-center my-3">
                            <div className="row">
                                <div className="col text-start">
                                        <label className='fw-bolder mb-3 cardTitle'>Card Holder Name</label>
                                <div className="input-group position-relative">
                                    <input type="text" className="form-control" placeholder="John cena" />
                                </div>
                                </div>
                                <div className="col text-start">
                                <label className='fw-bolder mb-3 cardTitle'>Card Number</label>
                                <div className="input-group position-relative">
                                    <input type="text" className="form-control" placeholder="0000 1111 2222 3333" />
                                </div>
                                </div>
                            </div>
                            <div className="row my-4">

                                <div className="col text-start">
                                        <label className='fw-bolder mb-3 cardTitle'>Expiry Date</label>
                                <div className="input-group position-relative">
                                    <input type="text" className="form-control" placeholder="DD/MM/Year" />
                                </div>
                                </div>

                                <div className="col text-start">
                                <label className='fw-bolder mb-3 cardTitle'>CVV</label>
                                <div className="input-group position-relative">
                                    <input type="text" className="form-control" placeholder="***" />
                                </div>
                                </div>
                            </div>

                            <div className="row d-flex justify-content-center">
                            <Link to="/sucess"><button class="btn continueButton" type="button">Continue</button></Link>
                            </div>
                        </div>

                </div>
            </div>
            <Footer/>
        </div>
    )
}
export default Creditcard