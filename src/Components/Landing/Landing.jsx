import React, { useEffect } from "react";
import "./Landing.css";
import { useRef, useState } from "react";
// import { Autoplay, EffectCards } from "swiper";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
// import "swiper/css";
// import "swiper/css/effect-cards";
// import { Swiper, SwiperSlide } from "swiper/react";
function Landing() {


  return (
    <div>
      <div class="hero-section slider-area style-five d-flex align-items-center" id="home">
        <video class="lazy-video" src="assets2/images/video2.mp4" loop muted autoPlay playsinline="" poster="#"/>
        <div class="container" style={{marginTop:'-7rem'}}>
            <div class="row align-items-center">
                <div class="col-lg-6 col-md-12 header-1-1">
                    <div class="hero-content">
                        <h4 class="wow fadeInUp" data-wow-delay=".2s"><span class="other"></span>NFT-Xpress</h4>
                        <h1 class="wow fadeInUp heading-1" data-wow-delay=".4s">DECENTRALIZED AFFILIATE PLATFORM</h1>
                        <p class="wow fadeInUp para-1" data-wow-delay=".6s" style={{color: "#fff"}}>
                        NFT-Xpress is an affiliate marketing platform providing our community with early access to some of the most innovative NFT projects. Carefully selected NFT projects are then set within a decentralised autonomous organisation where the smart contracts ensure the system is dependable, secure, and trustless. Early access ensures our investors see the ultimate financial gain.
                        </p>
                        <div class="dreamit-btn wow fadeInUp" data-wow-delay=".8s">
                            <a href="/Login_main"> Login</a> 
                        </div> &nbsp;&nbsp;&nbsp;&nbsp;
                        
                        <div class="dreamit-btn wow fadeInUp" data-wow-delay=".8s">
                            <a href="/Register_main">  Register </a>
                        </div>
                    </div>
                </div>
                
                <div class="col-lg-6 col-md-6">
                    <div class="about-box mt_7">
                        <div class="dreamit-cripto-thumb landing-1 wow fadeInLeft" data-wow-delay=".4s">
                            <div class="cripto-main-thumb">
                                <img src="assets2/images/about/cripto.png" width="100%" className="landing_pic" alt="" />
                            </div>
                            <div class="cripto-thumb-inner bounce-animate4">
                                <img src="assets2/images/about/cripto1.png" width="100%" className="landing_pic" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
        <div class="animation-box">
            <div class="about-mercury-animation mobile-hidden visible">
                <div class="coin-animation">
                    <i class="coin coin-1"></i>
                    <i class="coin coin-2"></i>
                    <i class="coin coin-3"></i>
                    <i class="coin coin-4"></i>
                    <i class="coin coin-5"></i>
                    <i class="coin coin-6"></i>
                    <i class="coin coin-7"></i>
                    <i class="coin coin-8"></i>
                    <i class="coin coin-9"></i>
                </div>
            </div>
        </div>
    </div>
      

      
     
    </div>


  );
}

export default Landing;
