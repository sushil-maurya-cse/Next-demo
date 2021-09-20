import React from 'react'

export default function Pricing() {
    return (
        <div className="our-pricing-area section-padding30 fix">
        <div className="container">
            <div className="row align-items-center">
                <div className="col-lg-6 col-md-6">
                    <div className="tab-content" id="nav-tabContent">
                         
                        <div className="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab">  
                            <div className="single-pricing mb-30">
                                <div className="pricing-caption text-center">
                                <div className="procing-logo">
                                        <img src="assets/img/icon/roket.png" alt=""/>
                                </div>
                                    <span>$ 05.00</span>
                                    <div className="pricing-listing">
                                        <ul>
                                            <li>Increase traffic 50%</li>
                                            <li>Social Media Marketing</li>
                                            <li>10 Free Optimization</li>
                                            <li>24/7  support</li>
                                        </ul>
                                    </div>
                                    <a href="#" className="btn white-btn">Get the plan</a>
                                </div>
                                
                                <div className="pricing-shape">
                                    <img className="pricing1" src="assets/img/gallery/procing-shape1.png" alt=""/>
                                    <img className="pricing2"  src="assets/img/gallery/procing-shape2.png" alt=""/>
                                </div>
                            </div>
                        </div>
                        
                        <div className="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab">
                            <div className="single-pricing  mb-30">
                                <div className="pricing-caption text-center">
                                <div className="procing-logo">
                                        <img src="assets/img/icon/roket.png" alt=""/>
                                </div>
                                    <span>$ 05.00</span>
                                    <div className="pricing-listing">
                                        <ul>
                                            <li>Increase traffic 50%</li>
                                            <li>Social Media Marketing</li>
                                            <li>10 Free Optimization</li>
                                            <li>24/7  support</li>
                                        </ul>
                                    </div>
                                    <a href="#" className="btn white-btn">Get the plan</a>
                                </div>
                                
                                <div className="pricing-shape">
                                    <img className="pricing1" src="assets/img/gallery/procing-shape1.png" alt=""/>
                                    <img className="pricing2"  src="assets/img/gallery/procing-shape2.png" alt=""/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
              
                <div className="col-lg-6 col-md-6">
                   
                    <div className="section-tittle section-tittle3">
                        <span>Oue Best Services</span>
                        <h2>Our pricing</h2>
                        <p className="pt-20 pb-40">Cnsectetur adipisicing cvbelit, sxced dbeo eiucdsmod tempor incididunt ut labore egsfgt dolore magna aliqua. Ut encim ad minim veniam, quis nostrud exercitation ulclamco laboris nisi ufgut aliquip edgx ebrha.</p>
                    </div>
                   
                    <div className="pricing-button">                                         
                        <nav>                                                                     
                            <div className="nav nav-tabs" id="nav-tab" role="tablist">
                                <a className="nav-item nav-link active" id="nav-home-tab" data-toggle="tab" href="#nav-home" role="tab" aria-controls="nav-home" aria-selected="true">Monthly</a>
                                <a className="nav-item nav-link" id="nav-profile-tab" data-toggle="tab" href="#nav-profile" role="tab" aria-controls="nav-profile" aria-selected="false">Yearly</a>
                            </div>
                        </nav>
                    </div>
                   
                </div>
            </div>
        </div>
    </div>
    )
}
