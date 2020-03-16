import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import Slider from "react-slick";
import './css/header.css'

class Header extends Component{

    render(){
        const settings = {
            dots: false,
            fade: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 2000,
            cssEase: "linear",
            className:"slides",
            arrows:false
          };

	return (
		<header id="header">
            <div>
                <h1>
                    KD Biz Hub
                </h1>
                <p>Makes it easier to buy and sell</p>
                <div>
                <Slider {...settings}>
                    <h4 className="slides slide" >Bitcoin</h4>
                    <h4 className="slides slide" >Gift Cards</h4>
                    <h4 className="slides slide" >Mobile Phones</h4>
                </Slider>
                </div>
                <Link to="/signup" >Trade Now</Link>
            </div>
            <div>
                <img src={require("./images/Group 224.png")}  alt="logo"/>
                <img src={require("./images/Landing page BG.png")} alt="logo"/>
            </div>
        </header>                                  		
	);

}
}

export default Header;
