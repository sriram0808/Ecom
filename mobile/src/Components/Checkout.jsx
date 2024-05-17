import { MdFlight } from "react-icons/md";
import { GiBus } from "react-icons/gi";
import "../Assests/Css/Check.css"
import Footer from "./Footer";
import { Link } from "react-router-dom";

let Checkout=()=>{
    return(
        <div style={{ backgroundColor: "rgb(248,248,248)" }}>
        <div className="container">
            <div className="row ">
                <div className="col-lg-6">
                    <div className="card mb-4 my-3">
                        <div className="card-body d-flex " style={{border:"1px solid rgb(20, 70, 160)",borderRadius:"8px"}}>
                            <div className="flex-fill">
                                <h5 className="card-title mb-1" style={{ fontWeight: "700", color: "black",fontSize:"33px" }}>Address Details</h5>
                                <div className="card-text ">
                                    <h6 style={{ fontWeight: "700", color: "rgb(20, 70, 160)",fontSize:"25px" }}>Delivery Address</h6>
                                    <div style={{ color: "rgb(122,122,122)" }}>
                                        <p>27 abc road, abc colony</p>
                                        <p>Madurai, Tamil nadu</p>
                                        <p>India</p>
                                    </div>
                                </div>
                            </div>
                            <div className="flex-fill my-5">
                                <h6 style={{ fontWeight: "700", color: "rgb(20, 70, 160)",fontSize:"25px" }}>Billing Address</h6>
                                <div style={{ color: "rgb(122,122,122)" }}>
                                    <p>27 abc road, abc colony</p>
                                    <p>Madurai, Tamil nadu</p>
                                    <p>India</p>
                                </div>
                            </div>
                        </div>
                    </div>


                    <form action="#!" style={{border:"1px solid rgb(20, 70, 160)",borderRadius:"8px",backgroundColor:"white"}}>
                        <div class="row gy-4 gy-xl-5 p-4 p-xl-5 " >
                        <div class="col-12 col-md-6">
                            <label for="email" class="form-label checkForm">Name <span class="text-danger">*</span></label>
                            <div class="input-group">
                            
                            <input type="email" class="form-control" />
                            </div>
                        </div>
                        <div class="col-12 col-md-6">
                            <label for="phone" class="form-label checkForm">Sure Name <span class="text-danger">*</span></label>
                            <div class="input-group">
                            <input type="tel" class="form-control" />
                            </div>
                        </div>
                        <div class="col-12">
                            <label for="subject" class="form-label checkForm">Phone Number <span class="text-danger">*</span></label>
                            <input type="text" class="form-control" />
                        </div>
                        
                        <div class="col-12 col-md-6">
                            <label for="email" class="form-label checkForm">Country <span class="text-danger">*</span></label>
                            <div class="input-group">
                            
                            <input type="email" class="form-control" />
                            </div>
                        </div>
                        <div class="col-12 col-md-6">
                            <label for="phone" class="form-label checkForm">City <span class="text-danger">*</span></label>
                            <div class="input-group">
                            <input type="tel" class="form-control" />
                            </div>
                        </div>
                        <div class="col-12">
                            <label for="message" class="form-label checkForm">Address <span class="text-danger">*</span></label>
                            <textarea class="form-control"></textarea>
                        </div>
                        <div class="col-12">
                            <div class="d-grid">
                            <button class="btn address btn-lg" type="submit checkForm">Add Address</button>
                            </div>
                        </div>
                        </div>
                    </form>

                </div>



                    <div className="col-lg-6">
                        <div className="card mb-4 my-3 " style={{border:"1px solid rgb(20, 70, 160)",borderRadius:"8px"}}>
                            <div className="card-body" >
                                <h5 className="card-title my-2 shippingTitle">Shipping Details</h5>
                                <p className="card-text shippingSubTitile">Choose your preferred shipping</p>
                                <div className="d-flex  p-4 gap-3">
                                    <div className="card mb-4 my-3" style={{border:"3px solid rgb(20, 70, 160) "}}>
                                        <div className="card-body text-center">
                                        <MdFlight size={50} color="lightblue"/>
                                        <h4 style={{color:"rgb(20, 70, 160)"}}>Ding dong Travels</h4>
                                        <p style={{ color: "rgb(122,122,122)" }}>Free 1-2 days delivery</p>
                                            
                                        </div>
                                    </div>
                                    <div className="card mb-4 my-3" style={{border:"3px solid rgb(20, 70, 160) "}}>
                                        <div className="card-body text-center">
                                        <GiBus size={50} color="red"/>
                                        <h4 style={{color:"rgb(20, 70, 160)"}}>Pichu mani Travels</h4>
                                        <p style={{ color: "rgb(122,122,122)" }}>Free 2-3 days delivery</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="card mb-4 my-3" style={{ border: "1px solid rgb(20, 70, 160)", borderRadius: "8px" }}>
                            <div className="card-body">
                            <h5 className="card-title my-2 CartTitle">Cart Summary</h5>
                            <div className="row my-4">
                                <div className="col">
                                    <h4 className="cartHeading">Apple Iphone 13 128GB</h4>
                                </div>
                                <div className="col">
                                    <h4 className="text-end cartAmount">$599</h4>
                                </div>
                            </div>
                            <div className="row my-4">
                                <div className="col">
                                    <h4 className="cartHeading">Nothing</h4>
                                </div>
                                <div className="col">
                                    <h4 className="text-end cartAmount" >$499</h4>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col">
                                    <h4 className="cartHeading">One plus 128GB</h4>
                                </div>
                                <div className="col">
                                    <h4 className="text-end cartAmount" >$599</h4>
                                </div>
                            </div>
                            <hr />
                            <div className="row">
                                <div className="col">
                                    <h4 className="cartHeading">Total</h4>
                                </div>
                                <div className="col">
                                    <h4 className="text-end cartAmount" >$1611</h4>
                                </div>
                            </div>
                            <Link to="/creditcard"><button className="btn productButton w-100 my-4">Procced to pay</button></Link>
                            </div>
                        </div>


                    </div>




            </div>
        </div>
        <Footer/>
    </div>
    )
}
export default Checkout