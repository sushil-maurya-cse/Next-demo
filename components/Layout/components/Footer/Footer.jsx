import React from "react";
import InstagramFeed from "../InstagramFeed/InstagramFeed";
import FooterCopyright from "../FooterCopyright/FooterCopyright";

export default function Footer() {
  return (
    <>
      
      <footer>
        <div className="footer-area">
            <div className="container">
               <div className="footer-top footer-padding">
                    <div className="row justify-content-between">
                        <div className="col-xl-3 col-lg-4 col-md-4 col-sm-6">
                            <div className="single-footer-caption mb-50">
                                <div className="single-footer-caption mb-30">
                                   
                                    <div className="footer-logo">
                                        <a href="index.html"><img src="assets/img/logo/logo2_footer.png" alt=""/></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-2 col-lg-2 col-md-4 col-sm-6">
                            <div className="single-footer-caption mb-50">
                                <div className="footer-tittle">
                                    <h4>All packages</h4>
                                    <ul>
                                        <li><a href="#">Package-1</a></li>
                                        <li><a href="#">Package-2</a></li>
                                        <li><a href="#">Package-3</a></li>
                                        <li><a href="#">Custome</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-2 col-lg-3 col-md-4 col-sm-6">
                            <div className="single-footer-caption mb-50">
                                <div className="footer-tittle">
                                    <h4>Quick Link</h4>
                                    <ul>
                                        <li><a href="#">Contact Us</a></li>
                                        <li><a href="#">About Us</a></li>
                                        <li><a href="#">News & Articles</a></li>
                                        <li><a href="#">Privacy Policy</a></li>     
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-3 col-md-4 col-sm-6">
                            <div className="single-footer-caption mb-50">
                                <div className="footer-tittle">
                                    <h4>+1 514 648 256</h4>
                                    <ul>
                                        <li><a href="#">youremail@gmail.com</a></li>
                                    </ul>
                                    <p>123 East 26th Street, Fifth Floor, New York, NY 10011</p>
                                </div>
                            </div>
                        </div>
                    </div>
               </div>
               <FooterCopyright />
            </div>
        </div>
    </footer>
      
    </>
  );
}
