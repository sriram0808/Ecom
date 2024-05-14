import logo from "../Assests/Images/Amazon_PNG6.png"
import { FaFacebook } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { FaInstagram } from "react-icons/fa6";
import apple from "../Assests/Images/iphone.png"
import samsung from "../Assests/Images/sam.png"
import vivo from "../Assests/Images/vivo.png"
import nothing from "../Assests/Images/nothing.png"
let Footer=()=>{
    return(
       <div>
        <hr />
<footer class="footer">
  <section class="bg-light py-4 py-md-5 py-xl-8 border-top border-light">
    <div class="container overflow-hidden">
      <div class="row gy-4 gy-lg-0 justify-content-xl-between">
        <div class="col-12 col-md-4 col-lg-3 col-xl-2">
          <div class="widget ">
            <a href="#!">
              <img src={logo} alt="logo" width="175" height="57"/>
            </a>
            <p className="my-3">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam cumque sed, quia minus molestiae nobis ratione, aliquam, et error cum doloremque impedit laboriosam sequi adipisci provident voluptate atque ut repudiandae?
            </p>
          </div>
        </div>
        <div class="col-12 col-md-4 col-lg-3 col-xl-2">
          <div class="widget">
            <h4 class="widget-title mb-4">Site link</h4>
            <ul class="list-unstyled">
              <li class="mb-2">
                <a href="#!" class="link-secondary text-decoration-none">Home</a>
              </li>
              <li class="mb-2">
                <a href="#!" class="link-secondary text-decoration-none">Story</a>
              </li>
              <li class="mb-2">
                <a href="#!" class="link-secondary text-decoration-none">Site map</a>
              </li>
            </ul>
            
          </div>
        </div>
        <div class="col-12 col-md-4 col-lg-3 col-xl-2">
          <div class="widget">
            <h4 class="widget-title mb-4">Help</h4>
            <ul class="list-unstyled">
              <li class="mb-2">
                <a href="#!" class="link-secondary text-decoration-none">About us</a>
              </li>
              <li class="mb-2">
                <a href="#!" class="link-secondary text-decoration-none">Contact us</a>
              </li>
              <li class="mb-2">
                <a href="#!" class="link-secondary text-decoration-none">FAQ</a>
              </li>
            </ul>
          </div>
        </div>
        <div class="col-12 col-md-4 col-lg-3 col-xl-2">
          <div class="widget">
            <h4 class="widget-title mb-4">Legal</h4>
            <ul class="list-unstyled">
              <li class="mb-2">
                <a href="#!" class="link-secondary text-decoration-none">About us</a>
              </li>
              <li class="mb-2">
                <a href="#!" class="link-secondary text-decoration-none">Terms Service</a>
              </li>
              <li class="mb-2">
                <a href="#!" class="link-secondary text-decoration-none">Privacy policy</a>
              </li>
              <li class="mb-2">
                <a href="#!" class="link-secondary text-decoration-none">Cookies</a>
              </li>
            </ul>
          </div>
        </div>
       
      </div>
    </div>
  </section>
  <div className="container">
    <div className="row gx-3" style={{margin:"10px"}}>
        <div className="col">
            <img src={apple} alt="" />
        </div>
        <div className="col">
            <img src={samsung} alt="" />
        </div>
        <div className="col">
            <img src={vivo} alt="" />
        </div>
        <div className="col">
            <img src={nothing} alt="" />
        </div>
    </div>
  </div>
  <div class="bg-light border-top border-dark py-4 py-md-5 py-xl-8 ">
    <div class="container overflow-hidden">
      <div class="row gy-4 gy-md-0 align-items-md-center">
        <div class="col-xs-12 col-md-7 order-1 order-md-0">
          <div class="copyright text-center text-md-start">
            &copy; 2024. Mobik All Rights Reserved.
          </div>
        </div>

        <div class="col-xs-12 col-md-5 order-0 order-md-1">
          <div class="social-media-wrapper">
            <ul class="list-unstyled m-0 p-0 d-flex justify-content-center justify-content-md-end">
              <li class="me-3">
                <a href="#!" class="link-dark link-opacity-75-hover">
                <FaFacebook size={25}/>
                </a>
              </li>
              <li class="me-3">
                <a href="#!" class="link-dark link-opacity-75-hover">
                <FaYoutube size={25}/>
                </a>
              </li>
              <li class="me-3">
                <a href="#!" class="link-dark link-opacity-75-hover">
                <BsTwitterX size={25}/>
                </a>
              </li>
              <li class="">
                <a href="#!" class="link-dark link-opacity-75-hover">
                <FaInstagram size={25}/>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>

</footer>
       </div>
    )
}
export default Footer