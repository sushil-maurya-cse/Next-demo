import React from "react";

export default function HeroSlider() {
  return (
    <div className="services-area section-padding30 fix">
    <div className="container">
       
        <div className="row">
            <div className="col-lg-12">
                <div className="section-tittle text-center mb-100">
                    <span>Oue Best Services</span>
                    <h2>What we have for you</h2>
                </div>
            </div>
        </div>
        <div className="row">
            <div className="col-lg-4 col-md-6 col-sm-6">
                <div className="services-wrapper mb-50">
                    <div className="single-services">
                        <div className="services-icon">
                            <span className="flaticon-server"></span>
                        </div>
                        <div className="services-cap">
                            <h3><a href="services.html">Shared Hosting</a></h3>
                            <p>Hunky dory barney fannaround up the duff no biggie loo cup of tea jolly good ruddy!</p>
                            <a href="services.html" className="get-btn"><i className="ti-arrow-right"></i> get started</a>
                        </div>
                    </div>
                    <div className="services-shape">
                        <span>.01</span>
                        <img src="assets/img/gallery/shape-services.png" alt=""/>
                    </div>
                </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-6">
                <div className="services-wrapper mb-50">
                    <div className="single-services">
                        <div className="services-icon">
                            <span className="flaticon-green"></span>
                        </div>
                        <div className="services-cap">
                            <h3><a href="services.html">Reseller Hosting</a></h3>
                            <p>Hunky dory barney fannaround up the duff no biggie loo cup of tea jolly good ruddy!</p>
                            <a href="services.html" className="get-btn"><i className="ti-arrow-right"></i> get started</a>
                        </div>
                    </div>
                    <div className="services-shape">
                        <span>.02</span>
                        <img src="assets/img/gallery/shape-services.png" alt=""/>
                    </div>
                </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-6">
                <div className="services-wrapper mb-50">
                    <div className="single-services">
                        <div className="services-icon">
                            <span className="flaticon-servers"></span>
                        </div>
                        <div className="services-cap">
                            <h3><a href="services.html">Cloud Hosting</a></h3>
                            <p>Hunky dory barney fannaround up the duff no biggie loo cup of tea jolly good ruddy!</p>
                            <a href="services.html" className="get-btn"><i className="ti-arrow-right"></i> get started</a>
                        </div>
                    </div>
                    <div className="services-shape">
                        <span>.03</span>
                        <img src="assets/img/gallery/shape-services.png" alt=""/>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
  );
}
