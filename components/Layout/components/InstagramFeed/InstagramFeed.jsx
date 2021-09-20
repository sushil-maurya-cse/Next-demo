import React from "react";

export default function InstagramFeed() {
  return (
    <section className="blogs-area section-padding30">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                      
                        <div className="section-tittle text-center mb-80">
                            <span>Our Blog</span>
                            <h2>Our latest news</h2>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-4 col-md-6">
                        <div className="single-blogs mb-100">
                            <div className="blog-img">
                                <img src="assets/img/gallery/blog1.png" alt=""/>
                            </div>
                            <div className="blog-cap">
                                <span className="color1">23 Dec, 2020</span>
                                <h4><a href="#">Addiction When Gambling Becomes</a></h4>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                        <div className="single-blogs mb-100">
                            <div className="blog-img">
                                <img src="assets/img/gallery/blog2.png" alt=""/>
                            </div>
                            <div className="blog-cap">
                                <span className="color1">23 Dec, 2020</span>
                                <h4><a href="#">Addiction When Gambling Becomes</a></h4>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                        <div className="single-blogs mb-100">
                            <div className="blog-img">
                                <img src="assets/img/gallery/blog3.png" alt=""/>
                            </div>
                            <div className="blog-cap">
                                <span className="color1">23 Dec, 2020</span>
                                <h4><a href="#">Addiction When Gambling Becomes</a></h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
  );
}
