import React from "react";
import './Footer.css'
import { Link } from "react-router-dom";

function Footer() {
  return (
    <>
        <div class="footer pt-100" style={{backgroundColor:'#0B0B47'}}>
        <div class="container">
            <div class="row">
                <div class="col-lg-9">
                    <div class="footer-social-box">
                        <div class="social-content">
                            <h3>Quick Links</h3>
                        </div>
                        <div class="footer-about-social-icon1 pt-20">
                            <ul style={{marginTop:'-1rem'}}>
                                <li className="header-btn">
                                <Link to="/" >Home</Link></li>
                                <li className="header-btn"> <Link to="/About_main" >About Us</Link></li>
                               
                                <li className="header-btn"> <Link to="/How_to_play_main" >Contact</Link></li>
                                <li className="header-btn"><Link to="/Login_main" >Login</Link></li>
                                <li className="header-btn"><Link to="/Register_main" >Register</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="col-lg-3">
                    <div class="footer-social-box">
                        <div class="social-content">
                            <h3>Contact Us</h3>
                        </div>
                        <div class="footer-about-social-icon pt-20 d-flex footer_icon_div">
                            <ul>
                                <li  >
                                    <a href="#"><i class="flaticon-message"></i> </a>
                                   
                                </li>
                                <li >
                                
                                </li>
                                {/* <li>
                                    <a href="#"><i class="fab fa-pinterest"></i></a>
                                </li>
                                <li>
                                    <a href="#"><i class="fab fa-linkedin-in"></i></a>
                                </li> */}
                            </ul>
                            <p className="mt-2 footerinntext" >info@nftxpress.club</p>
                        </div>
                    </div>
                </div>
            </div>

            <div class="row upper11 mt-50 align-items-center">
                <div class="col-lg-12 col-md-12 text-center">
                    <div class="footer-copyright-text">
                        <p class="text-white">Copyright © NFT Xpress all rights reserved.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>

  
    </>
  )
}

export default Footer