import React from "react";
import Link from "next/link";

import TopBar from "../TopBar/TopBar";
import { useSelector } from "react-redux";

export default function Header() {
  return (
    <>
      <TopBar />
      <div className="slider-area slider-bg ">    
                <div className="single-slider d-flex align-items-center slider-height ">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-6 col-md-9 ">
                                <div className="hero__caption">
                                    <h1 data-animation="fadeInLeft" data-delay=".3s">Hosting digital  technology web  solution! </h1>
                                    <p data-animation="fadeInLeft" data-delay=".6s">Automated Control Panel with Up to 50% Off  Hosting Starting from $2.50/Month.</p>
                                   
                                   <div className="slider-btns">
                                       
                                        <a data-animation="fadeInLeft" data-delay="1s" href="industries.html" className="btn radius-btn">get started</a>
                                   </div>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="hero__img d-none d-lg-block f-right">
                                    <img src="assets/img/hero/hero_right.png" alt="" data-animation="fadeInRight" data-delay="1.5s"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>    
            
            <div className="slider-shape d-none d-lg-block">
                <img className="slider-shape1" src="assets/img/hero/top-left-shape.png" alt=""/>
                <img className="slider-shape2" src="assets/img/hero/right-top-shape.png" alt=""/>
                <img className="slider-shape3" src="assets/img/hero/left-botom-shape.png" alt=""/>
            </div>
            
            <div className="slider-social d-none d-md-block">
                <a href="#"><i className="fab fa-facebook-f"></i></a>
                <a href="#"><i className="fab fa-twitter"></i></a>
                <a href="#"><i className="fas fa-globe"></i></a>
                <a href="#"><i className="fab fa-instagram"></i></a>
            </div>

        </div>
    </>
  );
}
