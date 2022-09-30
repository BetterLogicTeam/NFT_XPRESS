import React from 'react';
import './About.css'



function About() {
    return (
        <div>
            <div class="about-section pt-100 pb-100 abt_bg" >
                <div class="container">
                    <div class="row align-items-center about-display">
                    <div class="col-lg-6 col-md-6 about-lg">
                            <div class="about-right-side">
                                <div class="dreamit-section-title pb-20 ">
                                    <div class="dreamit-section-main-title">
                                        <h1 className='about-head-1'>What is NFT-Xpress?</h1>
                                    </div>
                                    <div class="dreamit-section-content-text" style={{ color: '#fff', fontSize: '15px' }}>
                                        <p className='about-para'>
                                            At NFT-Xpress our primary aim to offer our community opportunities to generate financial gains. As a company we seek to continually innovate and adapt to global economic changes to ensure NFT purchase, trading and investing is available to all. We offer our investors and affiliate partners the most secure and transparent platform through our advanced ecosystem.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-6 col-md-6 about-lg">
                            <div class="about-box">
                                <div class="about-thumb">
                                    <img className='about-img' src="assets2/images/about/phone.png" alt="" />
                                    <div class="shape1 bounce-animate4">
                                        <img src="assets2/images/about/coin.png" alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                       
                    </div>
                </div>
            </div>

            {/* <div class="service-section style-two pt-90 pb-120 token_bg">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-12">
                            <div class="dreamit-section-title-two text-center pb-20">
                                <div class="dreamit-section-main-title">
                                    <h1>Our Product</h1>
                                    <h1 class="larace"><img src="assets/images/larace_logo.png" /></h1>
                        <p className='para-about' >LaRace is set to take the Play2Earn industry to new heights with their customisable range of NFT horses. With the launch imminent excitement has been building within the community. The NFT horses are not just a piece of digital art, they can also engage within the LaRace platform where there are numerous methods of earning financial gains from. Listed below are the main categories with earning potential.</p>

                                </div>
                                
                                <div class="dreamit-section-content-text-inner">
                                        </div>
                            </div>
                        </div>
                    </div>
                    <div class="row mr-5 mt-4 para-img" style={{display: "unset !important"}}>
                        <center>
                            <img className='about-img-2' src="assets2/images/what_token.png"  />
                        </center>
                    </div>
                </div>
            </div> */}
            <div class="service-section style-two pt-90 pb-120 token_bg">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-12">
                            <div class="dreamit-section-title-two text-center pb-20">
                                <div class="dreamit-section-main-title">
                                    {/* <!-- <h1>Our Product <img src="assets/images/larace_logo.png" /></h1> --> */}
                                    <h1 class="larace">Our Product -  <img src="assets/images/larace_logo.png" /></h1>
                                </div>
                                <div class="dreamit-section-content-text-inner">
                                    <p class="laracedata">LaRace is set to take the Play2Earn industry to new heights with their customisable range of NFT horses. With the launch imminent excitement has been building within the community. The NFT horses are not just a piece of digital art, they can also engage within the LaRace platform where there are numerous methods of earning financial gains from. Listed below are the main categories with earning potential.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="row pt-40" style={{display: "unset !important"}}>
                        <center>
                            <img src="assets2/images/what_token.png" width="100%"  className='img_data' />
                        </center>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About