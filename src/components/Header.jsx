import "../components/Header.style.css";
import headerImg from "../assets/Header_img.jpg";
import Cafepic1 from "../assets/CafePic1.jpg";
import Cafepic2 from "../assets/Cafepic2.jpg";
import Cafepic3 from "../assets/Cafepic3.jpg";
import CafeLogo from "../assets/cafeLogo.jpg";
import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';


const Header = () => {
    return (
        <div className="header-section">
            <div className="cafe-info">
                <div className="cafe-logo">
                    <img src={CafeLogo} alt="CafeLogo" />
                </div>
                <div className="cafe-details">
                    <p className="cafe-name">Wake Up Cafe</p>
                    <p className="cafe-location"><i class="fa-solid fa-location-dot"></i> {" "}2058 Clark Street</p>
                    <p className="cafe-status">OPEN</p>
                </div>
            </div>
            <Carousel
            autoPlay={true}	
            infiniteLoop={true}
            width="650px"		>
                <div className="header-img">
                    <img src={headerImg} alt="" />
                </div>
                <div className="header-img">
                    <img src={Cafepic1} alt="" />
                </div>
                <div className="header-img">
                <img src={Cafepic2} alt="" />
                </div>
                <div className="header-img">
                <img src={Cafepic3} alt="" />
                </div>
            </Carousel>
            <div className="duration">
            <div className="active-hours">
            <i class="fa-solid fa-clock"></i>{" "}  time: 12:00AM - 11:59PM
            </div>
            </div>

        </div>
        );
};

export default Header;
