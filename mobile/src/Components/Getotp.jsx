
import { Link } from "react-router-dom";
import image from "../Assests/Images/otp.png";
import "../Assests/Css/Otp.css"
import Footer from "./Footer";

const Getotp = () => {
    return (
       <div style={{ backgroundColor: "rgb(248,248,248)" }}>
         <div className="container " >
            <div className="row">
                <div className="col-md-6 mb-4 ">
                <div className="card h-100 p-5 " style={{border:"none"}}>
                    <div className="row no-gutters">
                        <div className="col-md-8">
                            <div className="card-body d-flex flex-column justify-content-center">
                                <h1 className="card-text text-center otpTitle my-5">Enter OTP to start journey</h1>
                               
                            </div>
                        </div>
                        <div className="col-md-4 image-column d-flex align-items-center justify-content-center">
                            <img src={image} alt="Login Illustration" className="img-fluid" />
                        </div>
                    </div>
                </div>
                
            </div>

                <div className="col-md-6 mb-4">
                    <div className="card h-100 p-5">
                        <div className="card-body">
                            <h5 className="card-title text-start mb-4 otpTitle">OTP Verification</h5>
                            <p className="text-start otpSubTitle">Please enter the code we <br /> sent  to your mobile <br /> number *******98</p>
                            <form>
                                <div className="form-group row">
                                    <div className="col">
                                        <input type="text" className="form-control otp-input" maxLength="1" pattern="\d" required />
                                    </div>
                                    <div className="col">
                                        <input type="text" className="form-control otp-input" maxLength="1" pattern="\d" required />
                                    </div>
                                    <div className="col">
                                        <input type="text" className="form-control otp-input" maxLength="1" pattern="\d" required />
                                    </div>
                                    <div className="col">
                                        <input type="text" className="form-control otp-input" maxLength="2" pattern="\d" required />
                                    </div>
                                    <h5 className="text-center seconds my-3">00:30</h5>
                                    <h6 className="text-center">Did'nt recieve otp <span><a href="">Resend OTP</a></span></h6>
                                </div>
                                <div className="form-group text-center mt-4">
                                    <button type="submit" className="btn btn-primary verifyOtpButton">Verify OTP</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <Footer/>
       </div>
    );
};

export default Getotp;
