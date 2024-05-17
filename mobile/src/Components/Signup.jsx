import image from "../Assests/Images/sign.png";
import Footer from './Footer';
import { Link } from 'react-router-dom';

let SignUp=()=>{
    return(
        <div style={{ backgroundColor: "rgb(248,248,248)" }}>
        <div className="container p-5" >
        <div className="row justify-content-center">
            <div className="col-md-6 mb-4 ">
                <div className="card h-100 p-5 " style={{border:"none"}}>
                    <div className="row no-gutters">
                        <div className="col-md-8">
                            <div className="card-body d-flex flex-column justify-content-center">
                                <h1 className="card-text text-center loginTitle">Sign Up to <br /> My Application</h1>
                                <h6 className="text-center loginSubTitle my-5 ">
                                    Already have account? You can login here <span><Link to="/login">Signin</Link></span>
                                </h6>
                            </div>
                        </div>
                        <div className="col-md-4 image-column d-flex align-items-center justify-content-center">
                            <img src={image} alt="Login Illustration" className="img-fluid" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-md-6 mb-4">
                <div className="card h-100 p-5" style={{border:"none"}}>
                    <div className="card-body" >
                        <h5 className="card-title formTitle">Welcome </h5>
                        <p className="formSubTitle">Sign up your new account & start journey with us</p>
                        <form>
                            <div className="form-group my-4">
                                <label htmlFor="exampleInputEmail1" className="formName mb-3">User Name</label>
                                <input  className="form-control" placeholder="User Name" />
                            </div>
                            <div className="form-group my-4">
                                <label  className="formName mb-3">Email</label>
                                <input  className="form-control" placeholder="Email" />
                            </div>
                            <div className="form-group my-4">
                                <label htmlFor="exampleInputPassword1" className="formName mb-3">Password</label>
                                <input type="password" className="form-control" placeholder="Password" />
                            </div>
                            <div className="form-group my-4">
                                <label htmlFor="exampleInputPassword1" className="formName mb-3">Mobile Number</label>
                                <input  className="form-control" placeholder="Number" />
                            </div>
                            <div className="form-group my-4">
                                <label htmlFor="exampleInputPassword1" className="formName mb-3">Address</label>
                                <input type="password" className="form-control" placeholder="Address" />
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                <label className="form-check-label" htmlFor="flexCheckDefault">
                                    Save Password
                                </label>
                            </div>
                            <Link to="/getotp"><button type="submit" className="btn signinButton mt-3">Get OTP</button></Link>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <Footer/>
    </div>
    )
}
export default SignUp