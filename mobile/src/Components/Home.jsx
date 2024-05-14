import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation, Grid } from "swiper/modules";
import M1 from "../Assests/Images/M1.jpg"
import M2 from "../Assests/Images/M2.jpg"
import M3 from "../Assests/Images/M3.jpg"
import Categories from "./Categories";
let Home=()=>{
    return(
        <div>
            <div id="carouselExampleRide" class="carousel slide" data-bs-ride="true">
                <div class="carousel-inner">
                    <div class="carousel-item active">
                    <img src={M1} class="d-block w-100" alt="..."/>
                    </div>
                    <div class="carousel-item">
                    <img src={M2} class="d-block w-100" alt="..."/>
                    </div>
                    <div class="carousel-item">
                    <img src={M3} class="d-block w-100" alt="..."/>
                    </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleRide" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleRide" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>
            <Categories/>
        </div>
    )
}
export default Home


