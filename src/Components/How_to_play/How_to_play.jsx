import React from 'react';
import './How_to_play.css'
import { RiDiscordLine } from 'react-icons/ri'
import { FiTwitter } from 'react-icons/fi'

function How_to_play() {
    return (
        <div>
            <div class="contact-section style-four pt-110 pb-100 abt_bg"  >
                <div class="container">
                    <div class="row">
                        <div class="col-lg-12">
                            <div class="dreamit-section-title two text-center pb-20 pt-5">
                                {/* <div class="dreamit-section-sub-title">
                            <h5>Follow Us</h5>
                        </div> */}
                                <div class="dreamit-section-main-title pt-5">
                                    <h1>Stay Updated With Us</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="row pt-20 ms-5  text-center">
                        {/* <div class="col-lg-3  mt-4">
                    <div class="single-contact-icon-box d-flex align-items-center">
                        <div class="contact-icon">
                            <i class="flaticon-message"></i>
                        </div>
                        <div class="contact-content-text">
                            <p>info@nftxpress.club</p>
                        </div>
                    </div>
                </div> */}
                        <div class="col-lg-3  mt-4">
                            <div class="single-contact-icon-box d-flex align-items-center">
                                <div class="contact-icon">
                                    <i class="fab fa-facebook-f"></i>
                                </div>
                                <div class="contact-content-text">
                                    <p>Join Us on Facebook</p>

                                </div>
                            </div>
                        </div>
                        <div class="col-lg-3  mt-4">
                            <div class="single-contact-icon-box d-flex align-items-center">
                                <a href="https://t.me/la_race" target="_blank">
                                    <div class="contact-icon">
                                        <i class="flaticon-paper-plane"></i>
                                    </div>
                                </a>
                                <div class="contact-content-text">
                                    <p>Join Us on Telegram</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-3  mt-4">
                            <div class="single-contact-icon-box d-flex align-items-center">
                                <a href='https://discord.com/invite/3EP92kbE3B' target="_blank">
                                    <div class="contact-icon">
                                        <i ><RiDiscordLine className='fotter_disc' /></i>
                                    </div>

                                </a>
                                <div class="contact-content-text">
                                    <p>Join Us on Discord</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-3  mt-4">
                            <div class="single-contact-icon-box d-flex align-items-center">
                                <a href="https://twitter.com/LaRace_Official" target="_blank">
                                    <div class="contact-icon">
                                        <i ><FiTwitter className='fotter_disc' /></i>
                                    </div>
                                </a>
                                <div class="contact-content-text">
                                    <p>Join Us on Twitter</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="row upper12 align-items-center pt-60">
                        <div class="col-lg-6 col-md-12 p-0">
                            <div class="contact_from upper10">
                                <div class="dreamit-section-title">
                                    <div class="dreamit-section-sub-title">
                                        <h5>Get In Touch</h5>
                                    </div>
                                </div>
                                <form action="">
                                    <div class="row">
                                        <div class="col-lg-6">
                                            <div class="form_box mb-2">
                                                <input class="form-control" type="text" name="name" placeholder="Name" />
                                            </div>
                                        </div>
                                        <div class="col-lg-6">
                                            <div class="form_box mb-2">
                                                <input class="form-control" type="text" name="email" placeholder="Email" />
                                            </div>
                                        </div>
                                        <div class="col-lg-6">
                                            <div class="form_box mb-1">
                                                <input class="form-control" type="text" name="phone" placeholder="Phone" />
                                            </div>
                                        </div>
                                        <div class="col-lg-6">
                                            <div class="form_box mb-1">
                                                <input class="form-control" type="text" name="Web" placeholder="Website" />
                                            </div>
                                        </div>
                                        <div class="col-lg-12">
                                            <div class="form_box pt-1">
                                                <textarea class="form-control" name="message" id="message" cols="10" rows="5" placeholder=" message"></textarea>
                                            </div>
                                        </div>
                                        <div class="quote_btn text_center mt-2">
                                            <button class="btn" type="submit">Send Now</button>
                                        </div>
                                    </div>
                                </form>
                                <div id="status"></div>
                            </div>
                        </div>
                        <div class="col-lg-6">
                            <div class="contact-form-thumb wow fadeInRight" data-wow-delay=".4s" >
                                <img src="assets/images/about/cartoon-bg.png" alt="" class="img_sett" />
                                <div class="form-inner-thumb bounce-animate3">
                                    <img src="assets/images/about/cartoon.png" alt="" class="img_set2" />
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <div class="row upper12 align-items-center pt-60">
                <div class="col-lg-6 col-md-12 col-12 p-0">
                    <div class="contact_from upper10">
                        <div class="dreamit-section-title">
                            <div class="dreamit-section-sub-title">
                                <h5>Get In Touch</h5>
                            </div>
                        </div>
                        <form action="">
                            <div class="row">
                                <div class="col-lg-6 " >
                                    <div class="form_box mb-2">
                                        <input class="form-control" type="text" name="name" placeholder="Name" />
                                    </div>
                                </div>
                                <div class="col-lg-6 " >
                                    <div class="form_box mb-2">
                                        <input class="form-control" type="text" name="email" placeholder="Email" />
                                    </div>
                                </div>
                                <div class="col-lg-6 " >
                                    <div class="form_box mb-1">
                                        <input class="form-control" type="text" name="phone" placeholder="Phone" />
                                    </div>
                                </div>
                                <div class="col-lg-6 " >
                                    <div class="form_box mb-1">
                                        <input class="form-control" type="text" name="Web" placeholder="Website" />
                                    </div>
                                </div>
                                <div class="col-lg-12">
                                    <div class="form_box pt-1">
                                        <textarea class="form-control" name="message" id="message" cols="10" rows="5" placeholder=" Message"></textarea>
                                    </div>
                                </div>
                                <div class="quote_btn text_center mt-2">
                                    <button class="btn" type="submit">Send Now</button>
                                </div>
                            </div>
                        </form>
                        <div id="status"></div>
                    </div>
                </div>
                <div class="col-lg-6 mt-4">
                    <div class="contact-form-thumb wow fadeInRight" data-wow-delay=".4s">
                        <img src="assets2/images/about/cartoon-bg.png" alt="" />
                        <div class="form-inner-thumb bounce-animate3">
                            <img src="assets2/images/about/cartoon.png" alt="" />
                        </div>
                    </div>
                </div>
            </div> */}
                </div>
            </div>
        </div>
    )
}

export default How_to_play