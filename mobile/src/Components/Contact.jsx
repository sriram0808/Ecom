import Footer from "./Footer"
import { Link } from "react-router-dom"
import image from "../Assests/Images/contact.png"
import "../Assests/Css/Contact.css"
let Contact=()=>{
    return(
        <div>
             <div style={{ backgroundColor: "rgb(248,248,248)" }}>
        <div className="container p-5" >
        <div className="row justify-content-center">
            <div className="col-md-6 mb-4 ">
                <div className="card h-10 p-5 " style={{border:"none"}}>
                    <div className="row no-gutters">
                        <div className="col-md-8">
                            <div className="card-body d-flex flex-column justify-content-center">
                                <h1 className="card-text text-center contactTitle">Contact Us</h1>
                                <h6 className="text-center contactSubTitle my-3 ">
                                    Any questions? We would be happy to help you
                                </h6>
                                <button className="contactButton mb-3">+91 9876543210</button>
                                <button className="contactButton mb-3">mobik@gmail.com</button>
                                <button className="contactButton">City</button>

                            </div>
                        </div>
                        <div className="col-md-4 image-column d-flex align-items-center justify-content-center">
                            <img src={image} alt="Login Illustration" className="img-fluid " />
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-md-6 mb-4">
                <div className="card h-100 p-5" style={{border:"none"}}>
                    <div className="card-body" >
                       
                        <form>
                            <div className="form-group my-4">
                                <label htmlFor="exampleInputEmail1" className="contactFormName mb-3">First Name:<span className="text-danger">*</span></label>
                                <input  className="form-control" placeholder="First Name" />
                            </div>
                            <div className="form-group my-4">
                                <label  className="contactFormName mb-3">Last Name: <span className="text-danger">*</span></label>
                                <input  className="form-control" placeholder="Last Name" />
                            </div>
                            <div className="form-group my-4">
                                <label htmlFor="exampleInputPassword1" className="contactFormName mb-3">Phone Number:<span className="text-danger">*</span></label>
                                <input type="password" className="form-control" placeholder="Phone Number" />
                            </div>
                            <div className="form-group my-4">
                                <label htmlFor="exampleInputPassword1" className="contactFormName mb-3">Message: <span className="text-danger">*</span></label>
                                <textarea class="form-control" placeholder="Leave a comment here" id="floatingTextarea"></textarea>
                            </div>
                            
                            <div className="d-flex justify-content-center">
                            <button type="submit" className="btn contactSendMessageButton mt-3">Send Message</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <Footer/>
    </div>
        </div>
    )
}
export default Contact