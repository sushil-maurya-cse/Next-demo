import React from 'react'

export default function Testimonial() {
    return (
        <div className="testimonial-area testimonial-padding">
        <div className="container ">
           <div className="row align-items-center">
                <div className="col-lg-7 col-md-7">
                    <div className="h1-testimonial-active">
                       
                    
                       
                        <div className="single-testimonial">
                             
                            <div className="testimonial-caption ">
                                
                                <div className="testimonial-founder d-flex align-items-center mb-30">
                                    <div className="founder-img">
                                        <img src="assets/img/testmonial/Homepage_testi.png" alt=""/>
                                    </div>
                                    <div className="founder-text">
                                        <span>Jahon Ann</span>
                                        <p>CEO, Colorlib</p>
                                    </div>
                                </div>
                                <div className="testimonial-top-cap">
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrice.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-5 col-md-5">
                    <div className="testimonial-banner">
                        <img src="assets/img/gallery/testimonail.png" alt=""/>
                    </div>
                </div>
           </div>
        </div>
        
        <img src="assets/img/testmonial/shape-testimonial.png" className="testimonial-shape d-none d-lg-block" alt=""/>
    </div>
    )
}
