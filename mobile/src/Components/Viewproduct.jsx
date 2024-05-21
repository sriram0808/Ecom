import { useParams } from "react-router-dom";
import mobile from "../Assests/Images/viewMobileIphone.png";
import "../Assests/Css/Viewproduct.css";
import { FaApple } from "react-icons/fa";
import banner from "../Assests/Images/iiii.png"
import { GoDotFill } from "react-icons/go";
import sri from "../Assests/Images/sri.png"
import review from "../Assests/Images/reviewPhone.png"
import { GoStarFill } from "react-icons/go";
import muruga from "../Assests/Images/muruga.png"
import review2 from "../Assests/Images/reviewPhone2.png"
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import Footer from "./Footer";
import { Link } from "react-router-dom";

const Viewproduct = () => {
  const { id } = useParams();

  return (
    <div style={{backgroundColor:"rgb(248,248,248)"}}>
      <h1>{id}</h1>
      <div className="d-flex justify-content-center min-vh-100" >
        <div className="col-md-6">
          <div className="card" style={{ border: "none" }}>
            <div className="row g-0">
              <div className="col-md-4">
                <img src={mobile} className="img-fluid  rounded-start my-5" alt="Phone 1" />
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <h5 className="card-title viewmobileName">Apple iPhone 13 128GB</h5>
                  <p className="card-text" style={{ color: "orange" }}>
                    ★★★★☆
                    <span style={{ color: "rgb(20, 70, 160)", fontSize: "14px" }}>
                      (4.0) (4K Ratings) (7K Reviews)
                    </span>
                  </p>
                  <hr />
                  <strike>MRP: $799</strike>
                  <p className="card-text viewAmount">$699</p>
                  <p className="viewStock">In stock</p>
                  <p className="card-text viewColor">Colors:</p>
                  <p>
                    <GoDotFill size={35} color="lightblue" />
                    <GoDotFill size={35} color="red" />    
                    <GoDotFill size={35} color="gold" />
                  </p>
                  <p>
                    <button className="viewMinusButton">-</button> 1{" "}
                    <button className="viewPlusButton">+</button>
                  </p>
                  <p className="card-text viewRam">RAM</p>
                  <button className="viewSize">128 GB</button>
                  <button className="viewSize mx-2">256 GB</button>
                  <button className="viewSize mx-1">512 GB</button>
                  <br />
                  <div className="d-grid gap-2 my-3">
                    <Link to="/checkout"><button className="btn viewBuyButton" type="button">
                      Buy Now
                    </button></Link>
                    <button className="btn viewAddButton my-3" type="button">
                      Add to cart
                    </button>
                  </div>
                </div>
              </div>




              
                  {/* Highlights section under the buttons */}

                  <div className="container my-5">
                    <div className="row">
                      <h1 className="text-center viewHighlightsTitle">Highlights</h1>
                      <div className="row text-center my-2">
                        <div className="col text-start"><h5 className="viewHighlightsLeft">Model Name :</h5></div>
                        <div className="col text-end"><h5 className="viewHighlightsRight">Iphone</h5></div>
                      </div>
                      <div className="row text-center my-2">
                        <div className="col text-start"><h5 className="viewHighlightsLeft">Brand :</h5></div>
                        <div className="col text-end"><h5 className="viewHighlightsRight">Apple</h5></div>
                      </div>
                      <div className="row text-center my-2">
                         <div className="col text-start"><h5 className="viewHighlightsLeft">Network service provider :</h5></div>
                        <div className="col text-end"><h5 className="viewHighlightsRight">Unlocked for all categories</h5></div>
                      </div>
                      <div className="row text-center my-2">
                        <div className="col text-start"><h5 className="viewHighlightsLeft">Cellular Technology:</h5></div>
                        <div className="col text-end"><h5 className="viewHighlightsRight">5G</h5></div>
                      </div>
                    </div>
                  </div>

                  {/* Technical section start */}

                  <div className="container">
                    <div className="row">
                        <h1 className="text-center viewTechnicalTitle">Technical Details</h1>
                    </div>
                    <div className="row text-center my-2">
                        <div className="col text-start"><h5 className="viewTechinalLeft">Display :</h5></div>
                        <div className="col text-end"><p className="viewTechincalRight">6.1-ubcg (15.5cm) Super Retina XDR Display with True Tone</p></div>
                    </div>
                    <div className="row text-center my-2">
                        <div className="col text-start"><h5 className="viewTechinalLeft">Capacity:</h5></div>
                        <div className="col text-end"><p className="viewTechincalRight">12GB, 256GB, 512GB</p></div>
                    </div>
                    <div className="row text-center my-2">
                        <div className="col text-start"><h5 className="viewTechinalLeft">Splash Water, and Dust Resistant</h5></div>
                        <div className="col text-end"><p className="viewTechincalRight">All glass and surgical-grade stainless steel design, water and dust resistant (rated IP68)</p></div>
                    </div>
                    <div className="row text-center my-2">
                         <div className="col text-start"><h5 className="viewTechinalLeft">Camera and Video</h5></div>
                        <div className="col text-end"><p className="viewTechincalRight">Dual 12MP Cameras with potrait mode, Depth control, Potrait lighting, Smart HDR and 4k Dolby vision HDR Video upto 30 fbs</p></div>
                    </div>
                    <div className="row text-center my-2">
                        <div className="col text-start"><h5 className="viewTechinalLeft">Front Camera :</h5></div>
                        <div className="col text-end"><p className="viewTechincalRight">12MP TrueDepth Front Camera with potrait mode, Depth control, Potrait Lighting and Smart HDR 4</p></div>
                    </div>
                    <div className="row text-center my-2">
                        <div className="col text-start"><h5 className="viewTechinalLeft">Power and Battery:</h5></div>
                        <div className="col text-end"><p className="viewTechincalRight">Video playback upto 19 hours, Video playback (streamed) upto 15 hours, Audio playback upto 75 hours, 20W adapter or higher (sold seperately), Fast-charge capable upt to 50% charge in around 30 minutes with 20W adapter or higher</p></div>
                    </div>
                    <div className="row text-center my-2">
                        <div className="col text-start"><h5 className="viewTechinalLeft">Height :</h5></div>
                        <div className="col text-end"><p className="viewTechincalRight">Iphone with IOS 15, USB-C to Lighting cable, Documentation</p></div>
                    </div>
                    <div className="row text-center my-2">
                        <div className="col text-start"><h5 className="viewTechinalLeft">Width :</h5></div>
                        <div className="col text-end"><p className="viewTechincalRight">5.78 inched (146.7mm)</p></div>
                    </div>
                    <div className="row text-center my-2">
                        <div className="col text-start"><h5 className="viewTechinalLeft">Width :</h5></div>
                        <div className="col text-end"><p className="viewTechincalRight">2.82 inches (71.5mm)</p></div>
                    </div>
                    <div className="row text-center my-2">
                        <div className="col text-start"><h5 className="viewTechinalLeft">Depth :</h5></div>
                        <div className="col text-end"><p className="viewTechincalRight">2.82 inches (7.65 mm)</p></div>
                    </div>
                    <div className="row text-center my-2">
                        <div className="col text-start"><h5 className="viewTechinalLeft">Weight :</h5></div>
                        <div className="col text-end"><p className="viewTechincalRight">6.14 ounces (174 grams)</p></div>
                    </div>
                  </div>


                  {/* Iphone image start */}

                 <div className="container">
                    <div className="row text-center align-items-center">
                        
                        <div className="col">
                        <h1 className="mb-0 iphoneTitle">
                        <FaApple size={60} color="black"/>
                           iPhone 13</h1>
                        </div>
                    </div>
                    <div className="row text-center my-4">
                        <h1 className="iphoneTitle">Your new super power</h1>
                        <p className="my-3 iphoneSubtitle">A super-bright display in a durable design. Hollywood-worth video shooting made easy. Alighting-fast chip. And a big boost in battery life you notice every day</p>
                    </div>
                    <div class="d-flex justify-content-center">
                    <img src={banner} class="img-fluid" alt="" />
                    </div>
                  </div>


                  {/* Mobile description start */}

                    <div class="container">
                        <div class="row">
                        <h1 className="text-center appleTitle my-3">Apple iPhone 13</h1>
                            <div class="col-md-4 order-md-2 text-center mb-4">
                                <img src={mobile} class="img-fluid   w-100 my-5" alt="Centered Image"/>
                            </div>
                            <div class="col-md-4 order-md-1 mb-4 my-5">
                                    <h5 className="leftHeading">Rear Cameras</h5>
                                    <h6 className="leftSubHeading">12MP,f/1.6,26mm Ultrawide:12MP,f/2.4,120,13mm</h6>
                                    <h5 className="leftHeading">Processor</h5>
                                    <h6 className="leftSubHeading">Apple A15 Bionic (5nm)</h6>
                                    <h5 className="leftHeading">Storage</h5>
                                    <h6 className="leftSubHeading">128GB, 256GB, 512GB</h6>
                                    <h5 className="leftHeading">Memory</h5>
                                    <h6 className="leftSubHeading">4GB RAM</h6>
                                    <h5 className="leftHeading">Operating system</h5>
                                    <h6 className="leftSubHeading">IOS 15, 5G</h6>
                            </div>
                            <div class="col-md-4 order-md-3 mb-4 my-5">
                                    <h5 className="leftHeading">Front Camera</h5>
                                    <h6 className="leftSubHeading">Selfie:12MP,f/22,23mm</h6>
                                    <h5 className="leftHeading">Display</h5>
                                    <h6 className="leftSubHeading">6.1 inches, 90.2 cm2 460 PPI 1170 * 2532 Pixels</h6>
                                    <h5 className="leftHeading">Battery</h5>
                                    <h6 className="leftSubHeading">3240 Mah</h6>
                                    <h5 className="leftHeading">Weight</h5>
                                    <h6 className="leftSubHeading">174 grams</h6>
                                    <h5 className="leftHeading">Released Date</h5>
                                    <h6 className="leftSubHeading">September 21,2021</h6>
                            </div>
                        </div>
                    </div>


                    {/* Rating section start  */}

                        <div class="container">
                            <div class="row">
                                <div class="col-md-12 text-center mb-4">
                                    <h2 className="viewCustomerTitle">Customer Reviews</h2>
                                    <div class="d-flex justify-content-center align-items-center">
                                        <p class="card-text" style={{ color: "orange",fontSize:"40px" }}>★ ★ ★ ★ ☆  <span style={{fontSize:"15px",color:"rgb(20, 70, 160)",fontWeight:"bold"}}>4.0 out of 5</span></p>
                                    </div>
                                    <div class="mt-3">
                                        <div class="progress">
                                            <div class="progress-bar progress progress-bar-animated progress-bar-striped" role="progressbar"  style={{width:"80%"}} aria-valuenow="80" aria-valuemin="0" aria-valuemax="100">75 %</div>
                                        </div>
                                        <div class="progress mt-3">
                                            <div class="progress-bar progress progress-bar-animated progress-bar-striped" role="progressbar"  style={{width:"15%"}} aria-valuenow="15" aria-valuemin="0" aria-valuemax="100">15 %</div>
                                        </div>
                                        <div class="progress mt-3">
                                            <div class="progress-bar progress progress-bar-animated progress-bar-striped" role="progressbar"  style={{width:"13%"}} aria-valuenow="5" aria-valuemin="0" aria-valuemax="100">13 %</div>
                                        </div>
                                        <div class="progress mt-3">
                                            <div class="progress-bar progress progress-bar-animated progress-bar-striped" role="progressbar"  style={{width:"1%"}} aria-valuenow="0" aria-valuemin="0" aria-valuemax="100">1 %</div>
                                        </div>
                                        <div class="progress mt-3">
                                            <div class="progress-bar progress progress-bar-animated progress-bar-striped" role="progressbar"  style={{width:"5%"}} aria-valuenow="0" aria-valuemin="0" aria-valuemax="100">5 %</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>



                        {/* Customer says  */}

                        <div className="container">
                            <div className="row text-center">
                                <h1 className="viewCustomerTitle">Customer Says</h1>
                            </div>
                            <div className="row text-center">
                                <p className="viewCustomerSays my-3">Customer like the battery life, performance and camera of the cellular phone. They mention that it has a powerful A15 Bionic chip, a breathtaking display and that the camera is great</p>
                            </div>
                                <div className="row justify-content-center text-center">
                                <div className="col">
                                    <form>
                                    <div className="d-flex flex-wrap justify-content-center">
                                        <div className="p-2">
                                        <div className="form-check">
                                            <input className="form-check-input" type="checkbox" id="checkbox1" name="checkbox1" checked />
                                            <label className="form-check-label" htmlFor="checkbox1">Quality</label>
                                        </div>
                                        </div>
                                        <div className="p-2">
                                        <div className="form-check">
                                            <input className="form-check-input" type="checkbox" id="checkbox2" name="checkbox2" checked />
                                            <label className="form-check-label" htmlFor="checkbox2">Battery life</label>
                                        </div>
                                        </div>
                                        <div className="p-2">
                                        <div className="form-check">
                                            <input className="form-check-input" type="checkbox" id="checkbox3" name="checkbox3" checked />
                                            <label className="form-check-label" htmlFor="checkbox3">Performance</label>
                                        </div>
                                        </div>
                                        <div className="p-2">
                                        <div className="form-check">
                                            <input className="form-check-input" type="checkbox" id="checkbox4" name="checkbox4" checked />
                                            <label className="form-check-label" htmlFor="checkbox4">Appearance</label>
                                        </div>
                                        </div>
                                        <div className="p-2">
                                        <div className="form-check">
                                            <input className="form-check-input" type="checkbox" id="checkbox6" name="checkbox6" checked />
                                            <label className="form-check-label" htmlFor="checkbox6">Smoothness</label>
                                        </div>
                                        </div>
                                        <div className="p-2">
                                        <div className="form-check">
                                            <input className="form-check-input" type="checkbox" id="checkbox7" name="checkbox7" checked />
                                            <label className="form-check-label" htmlFor="checkbox7">Picture quality</label>
                                        </div>
                                        </div>
                                        <div className="p-2">
                                        <div className="form-check">
                                            <input className="form-check-input" type="checkbox" id="checkbox7" name="checkbox7" checked />
                                            <label className="form-check-label" htmlFor="checkbox7">Cameras</label>
                                        </div>
                                        
                                        </div>
                                    </div>
                                    </form>
                                </div>
                                </div>

                        </div>



                        {/* Review  and comments section start  */}

                        <div class="container">
                            <div class="row text-center">
                              <h1 class="viewReview-CommentsTitle my-3">Reviews and Comments</h1>
                            </div>
                            <div class="row">
                              <div class="col-md-3">
                                  <img src={sri} alt="Profile Image" class="img-fluid rounded-circle mb-3 profile-image"/>
                                  <button className="mx-3 StarButton4">4 <GoStarFill /></button>
                              </div>
                                <p className="reviews-para">Nice mobile for professional use, And I like the rear camera</p>
                              <div class="col-md-3">
                                  <img src={review} alt="Product Image" class="img-fluid img-thumbnail mb-3"/>
                              </div>
                                <p className="customerDetails-para">Sri Ram R  <span style={{fontSize:"12px"}}>Certified buyer, Banglore 2 days ago</span></p>
                            </div>
                            <div class="row">
                              <div class="col-md-3">
                                  <img src={muruga} alt="Profile Image" class="img-fluid rounded-circle mb-3 profile-image"/>
                                  <button className="mx-3 StarButton4">3 <GoStarFill /></button>
                              </div>
                                <p className="reviews-para">Nice mobile for professional use, And I like the rear camera</p>
                              <div class="col-md-3">
                                  <img src={review2} alt="Product Image" class="img-fluid img-thumbnail mb-3"/>
                              </div>
                                <p className="customerDetails-para">Muruganatham  <span style={{fontSize:"12px"}}>Certified buyer, chennai 2 days ago</span></p>
                            </div>
                            <div className="row d-flex justify-content-center my-3">
                              <button className="viewCommentsButton">View all comments <MdKeyboardDoubleArrowRight /></button>
                            </div>
                          </div>


                          {/* Related items you viewed  */}
                          <div className="container">
                            <div className="row text-center ">
                              <h1 className="viewReview-CommentsTitle my-3">Related to items you viewed</h1>
                            </div>
    
                                <div class="row d-flex justify-content-around">
                                  <div class="card col-md-3 mb-3" style={{height:"100%",border:"none"}}>
                                    <div class="card-body text-center">
                                      <img src={mobile} alt="Profile Image" class="img-fluid img-thumbnail mb-3"/>
                                      <h5 class="card-title relatedPhoneName">One plus 11 5G</h5>
                                      <h6 class="card-subtitle mb-2  relatedPhoneRate">$699</h6>
                                      <p class="card-text relatedPhoneDelivery">Free Delivery</p>
                                    </div>
                                  </div>
                                  <div class="card col-md-3 mb-3" style={{height:"100%",border:"none"}}>
                                    <div class="card-body text-center">
                                      <img src={mobile} alt="Profile Image" class="img-fluid img-thumbnail mb-3"/>
                                      <h5 class="card-title relatedPhoneName">Apple iPhone 15</h5>
                                      <h6 class="card-subtitle mb-2  relatedPhoneRate">$599</h6>
                                      <p class="card-text relatedPhoneDelivery">Free Delivery</p>
                                    </div>
                                  </div>
                                  <div class="card col-md-3 mb-3" style={{height:"100%",border:"none"}}>
                                    <div class="card-body text-center">
                                      <img src={mobile} alt="Profile Image" class="img-fluid img-thumbnail mb-3"/>
                                      <h5 class="card-title relatedPhoneName">Samsung s23 ultra</h5>
                                      <h6 class="card-subtitle mb-2  relatedPhoneRate">$499</h6>
                                      <p class="card-text relatedPhoneDelivery">Free Delivery</p>
                                    </div>
                                  </div>
                                </div>
                          </div>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default Viewproduct;
