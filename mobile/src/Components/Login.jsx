
import React from 'react';
import "../Assests/Css/Login.css";
import image from "../Assests/Images/login.png";
import Footer from './Footer';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div style={{ backgroundColor: "rgb(248,248,248)" }}>
            <div className="container p-5" >
            <div className="row justify-content-center">
                <div className="col-md-6 mb-4">
                    <div className="card h-10 p-5 " style={{border:"none"}}>
                        <div className="row no-gutters">
                            <div className="col-md-8">
                                <div className="card-body d-flex flex-column justify-content-center">
                                    <h1 className="card-text text-center loginTitle">Sign in to <br /> My Application</h1>
                                    <h6 className="text-center loginSubTitle my-5">
                                        If you don't have an account  You can register here <span><Link to="/signup">SignUp</Link></span>
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
                            <h5 className="card-title formTitle">Welcome Back</h5>
                            <p className="formSubTitle">Login to your account & start your journey with us</p>
                            <form>
                                <div className="form-group my-4">
                                    <label htmlFor="exampleInputEmail1" className="formName mb-3">Email or Phone Number <span className="text-danger">*</span></label>
                                    <input  className="form-control" placeholder="Enter email" />
                                    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                                </div>
                                <div className="form-group my-4">
                                    <label htmlFor="exampleInputPassword1" className="formName mb-3">Password<span className="text-danger">*</span></label>
                                    <input type="password" className="form-control" placeholder="Password" />
                                </div>
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                    <label className="form-check-label" htmlFor="flexCheckDefault">
                                        Save Password
                                    </label>
                                </div>
                                <button type="submit" className="btn signinButton mt-3">Sign in</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <Footer/>
        </div>
    );
}

export default Login;
