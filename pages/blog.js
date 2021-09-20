import React from 'react'
import InstagramFeed from '../components/Layout/components/InstagramFeed/InstagramFeed'

export default function blog() {
    return (
        <>
        <div className="slider-area slider-bg ">
        <div className="single-slider d-flex align-items-center slider-height2 ">
            <div className="container">
                <div className="row">
                    <div className="col-xl-12">
                        <div className="hero-cap text-center pt-50">
                            <h2>Blogs</h2>
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
    </div>
    <InstagramFeed />
   </>
    )
}
