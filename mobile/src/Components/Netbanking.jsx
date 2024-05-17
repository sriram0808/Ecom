import { IoCard } from "react-icons/io5";
import { RiBankFill } from "react-icons/ri";
import { CgPaypal } from "react-icons/cg"
import "../Assests/Css/Continue.css"
import Footer from "./Footer";
import { Link } from "react-router-dom";
let Netbanking=()=>{
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
                            <Link to="/creditcard"> <h3 className="payHeading"><IoCard /> Credit / Debit Card</h3></Link>
                                
                            </div>
                            <div className="col-md-4 col-sm-12 mb-3">
                                <h3 className="payHeading"><RiBankFill /> Net Banking</h3>
                            </div>
                            <div className="col-md-4 col-sm-12 mb-3">
                                <Link to="/upi"><h3 className="payHeading"><CgPaypal /> UPI Payment</h3></Link>
                            </div>
                        </div>
            </div>
            <div className="container">

                <div className="row text-center">
                    <h1 className="title">Select Bank</h1>
                </div>

                <div className="row ">
                            <div class="dropdown-center d-flex justify-content-center my-4">
                            <button class="btn selectBankButton  dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Select Bank
                            </button>
                            <ul class="dropdown-menu">
                                <li><a class="dropdown-item bankMenu" href="#">Bank 1</a></li>
                                <li><a class="dropdown-item bankMenu" href="#">Bank 2</a></li>
                                <li><a class="dropdown-item bankMenu" href="#">Bank 3</a></li>
                            </ul>
                            </div>
                </div>
                <div className="row">
                    <h5 style={{color:"rgb(20, 70, 160)"}}>Note:</h5>
                    <p style={{fontSize:"15px"}}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam doloribus recusandae nulla qui cumque nisi nihil doloremque numquam debitis asperiores? Animi accusantium laborum labore temporibus, numquam voluptates dicta. Veniam, harum.</p>
                </div>
            </div>
            <Footer/>
        </div>
    )
}
export default Netbanking