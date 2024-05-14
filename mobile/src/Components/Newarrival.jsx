import { LuWaves } from "react-icons/lu";
import Mobile1 from "../Assests/Images/mobil1.png"
import { MdDoubleArrow } from "react-icons/md";
import "../Assests/Css/New.css"
import Customer from "./Customer";

let Newarrival=()=>{

    const cardData = [
        {
            image: Mobile1,
            alt: "Card 1",
            content: "Apple 15 pro max",
            amount:"$700",
            delivery:"Free delivery"
        }, 
        {
            image: Mobile1,
            alt: "Card 2",
            content: "Oneplus 11 5g",
            amount:"$699",
            delivery:"Free delivery"
        },
        {
            image: Mobile1,
            alt: "Card 3",
            content: "Samsung s23 ultra",
            amount:"$599",
            delivery:"Free delivery"
        },
        {
            image: Mobile1,
            alt: "Card 3",
            content: "Redmi",
            amount:"$699",
            delivery:"Free delivery"

        },
        {
            image: Mobile1,
            alt: "Card 3",
            content: "Vivo y15",
            amount:"$599",
            delivery:"Free delivery"

        },
        {
            image: Mobile1,
            alt: "Card 3",
            content: "Oppo",
            amount:"$799",
            delivery:"Free delivery"

        },
        {
            image: Mobile1,
            alt: "Card 3",
            content: "Real me",
            amount:"$578",
            delivery:"Free delivery"

        },
        {
            image: Mobile1,
            alt: "Card 3",
            content: "Nothing",
            amount:"$599",
            delivery:"Free delivery"

        }
    ];
    
    return(
        <div>
             <div className="container">
                <div className="row text-center my-5 justify-content-center">
                    <h3 className="cat fw-semibold" > <LuWaves /> New Arrivals</h3>
                </div>
                <div className="row text-center">
                    <h1 className="fw-bold">Fresh Finds Unveiling New <br /> Arrivals For You</h1>
                </div>
            </div>


            <div className="container-fluid my-4 justify-content-center mt-5">
    <div className="row text-center " style={{margin:"50px"}}>
        {cardData.slice(0, 4).map((card, index) => (
            <div className="col mb-4" key={index} >
                <div className="card" style={{ width: "18rem", backgroundColor: "white" }}>
                    <img className="card-img-top" src={card.image} alt={card.alt} style={{ height: "270px" }}/>
                    <div className="card-body">
                        <p className="text-center mobileName">{card.content}</p>
                        <p className="text-center mobileRate">{card.amount}</p>
                        <p className="text-center mobileDelivery">{card.delivery}</p>
                    </div>
                </div>
            </div>
        ))}
    </div>
    <div className="row text-center" style={{margin:"50px"}}>
        {cardData.slice(4).map((card, index) => (
            <div className="col mb-4" key={index}>
                <div className="card" style={{ width: "18rem", backgroundColor: "white" }}>
                    <img className="card-img-top" src={card.image} alt={card.alt} style={{ height: "270px" }}/>
                    <div className="card-body">
                        <p className="text-center mobileName">{card.content}</p>
                        <p className="text-center mobileRate">{card.amount}</p>
                        <p className="text-center mobileDelivery">{card.delivery}</p>
                    </div>
                </div>
            </div>
        ))}
    </div>
    <div className="text-center my-5">
        <button className="view">View all collections <MdDoubleArrow /></button>
    </div>
</div>


            <Customer/>
        </div>
    )
}
export default Newarrival