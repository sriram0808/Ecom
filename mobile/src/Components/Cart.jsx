import mobile from "../Assests/Images/mobil1.png"
import { CiCircleMinus } from "react-icons/ci";
import { CiCirclePlus } from "react-icons/ci";
import { GoDotFill } from "react-icons/go";
import { LuWaves } from "react-icons/lu";
import { AiFillDelete } from "react-icons/ai";
import { FaShoppingCart } from "react-icons/fa";
import "../Assests/Css/Cart.css"
import Footer from "./Footer";

let Cart=()=>{

    const products = [
        {
            id: 1,
            name: "Apple Iphone 13 128GB",
            color: "lightblue",
            image: mobile,
            price: "$599",
            count: 1
        },
        {
            id: 2,
            name: "Samsung Galaxy S21",
            color: "blue",
            image: mobile,
            price: "$699",
            count: 2
        },
        {
            id: 3,
            name: "Google Pixel 6",
            color: "gold",
            image: mobile,
            price: "$799",
            count: 3
        },
        {
            
                id: 4,
                name: "Pixel 4",
                color: "grey",
                image: mobile,
                price: "$799",
                count: 2
            
        }

    ];
    
    return(
        <div style={{backgroundColor:"rgb(248,248,248)"}}>

            <div className="container">
                <div className="row text-center">
                    <h1 className="my-5" style={{color:"rgb(20, 70, 160)",fontWeight:"bold"}}>Your cart 3 items</h1>
                </div>
            </div>


                    <div className="container-fluid text-center">
                        <div className="container">
                            {products.map((product, index) => (
                                <div key={index} class="row gy-3 mb-4">
                                    <div class="col-lg-5">
                                        <div class="me-lg-5 my-3">
                                            <h3 style={{fontWeight:"700"}}>Product Details</h3> 
                                            <div class="d-flex my-4">
                                                <img src={product.image} class="border rounded me-3" style={{width:"150px",height:"150px"}}  />
                                                <div class=" my-3">
                                                    <a href="#" class="nav-link" style={{fontSize:"20px",fontWeight:"bold"}}>{product.name}</a>
                                                    <p class="" style={{fontSize:"20px",fontWeight:"bold"}}>Color: <GoDotFill size={30} color={product.color}/></p>
                                                    <a href="#" class="nav-link"><AiFillDelete size={30} color=""/></a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-lg-2 col-md-6 col-6 d-flex flex-row flex-lg-column flex-xl-row text-nowrap justify-content-start ">
                                        <div >
                                            <h3 class="my-3" style={{fontWeight:"700"}}>Quantity</h3>
                                            <small class="text-muted text-nowrap my-5"> <CiCircleMinus size={30} color="black"/> <span style={{fontSize:"20px",fontWeight:"bold"}}>{product.count}</span> <CiCirclePlus size={30} color="black"/></small>
                                        </div>
                                    </div>
                                    <div class="col-lg-2 col-md-6 col-6 d-flex flex-row flex-lg-column flex-xl-row text-nowrap justify-content-end ">
                                        <div class="">
                                            <h3 class="my-3" style={{fontWeight:"700"}}>Total</h3>
                                            <small class="text-muted text-nowrap" style={{fontSize:"20px",fontWeight:"100"}}>{product.price}</small>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>



                        <div className="container">
                            <div className="row">
                                <div className="col-lg">
                                    <button className="btn productButton w-100 mb-2 mb-lg-0">Discount $0</button>
                                </div>
                                <div className="col-lg">
                                    <button className="btn productButton w-100 mb-2 mb-lg-0">Delivery $0</button>
                                </div>
                                <div className="col-lg">
                                    <button className="btn productButton w-100 mb-2 mb-lg-0">Subtotal $1611</button>
                                </div>
                                <div className="col-lg">
                                    <button className="btn productButton w-100">Total $1611</button>
                                </div>
                            </div>
                        </div>



                            <div className="container my-5">
                                <div className="row">
                                    <div className="col">
                                        <h5>If you have any coupon code enter here</h5>
                                        <div class="input-group mb-3">
                                            <input type="text" class="form-control" placeholder="Coupon code" aria-label="Recipient's username" aria-describedby="button-addon2"/>
                                            <button class="btn btn-outline-secondary" type="button" id="button-addon2">Apply coupon</button>
                                        </div>
                                        <div className="text-center"> 
                                            <button className="btn productButton w-50"> <FaShoppingCart />  Check out</button>
                                        </div>
                                    </div>
                                </div>
                            </div>




                            <div className="container ">
                                <div className="row text-center">
                                    <h1 className="fw-bold my-3">Pair with your product</h1>
                                </div>
                            </div>
                            <div className="container">
                                <div className="row" style={{margin:"50px"}}>
                                    <div className="col">
                                        <img src={mobile} alt="" style={{ height: "270px" }} />
                                        <p className="text-center mt-2"><span style={{color:"rgb(20, 70, 160",fontSize:"25px",fontWeight:"600"}}>Oneplus 11 5G</span> <br /> <span style={{color:"black",fontWeight:"600",fontSize:"20px"}}>$699</span> <br /><span style={{color:"rgb(31,190,93)"}}> Free delievery</span></p>
                                    </div>
                                    <div className="col">
                                        <img src={mobile} alt="" style={{ height: "270px" }}/>
                                        <p className="text-center mt-2"><span style={{color:"rgb(20, 70, 160",fontSize:"25px",fontWeight:"600"}}>Samsung S23 Ultra</span> <br /> <span style={{color:"black",fontWeight:"600",fontSize:"20px"}}>$599</span> <br /><span style={{color:"rgb(31,190,93)"}}> Free delievery</span></p>
                                    </div>
                                    <div className="col">
                                        <img src={mobile} alt="" style={{ height: "270px" }}/>
                                        <p className="text-center mt-2"><span style={{color:"rgb(20, 70, 160",fontSize:"25px",fontWeight:"600"}}>Iphone 15 Pro-Max</span> <br /> <span style={{color:"black",fontWeight:"600",fontSize:"20px"}}>$499</span> <br /><span style={{color:"rgb(31,190,93)"}}> Free delievery</span></p>
                                    </div>
                                    <div className="col">
                                        <img src={mobile} alt="" style={{ height: "270px" }}/>
                                        <p className="text-center mt-2"><span style={{color:"rgb(20, 70, 160",fontSize:"25px",fontWeight:"600"}}>Samsung A15</span> <br /> <span style={{color:"black",fontWeight:"600",fontSize:"20px"}}>$559</span> <br /><span style={{color:"rgb(31,190,93)"}}> Free delievery</span></p>
                                    </div>
                                </div>
                            </div>






                <Footer/>
        </div>
    )
}
export default Cart

