import React from "react";

export default function FooterCopyright() {
  return (
    <div className="footer-bottom">
                    <div className="row d-flex justify-content-between align-items-center">
                        <div className="col-xl-9 col-lg-9 ">
                            <div className="footer-copy-right">
                                <p>
  Copyright &copy;<script>document.write(new Date().getFullYear());</script> All rights reserved | This template is made with <i className="fa fa-heart" aria-hidden="true"></i> by <a href="https://colorlib.com" target="_blank">Colorlib</a>
</p>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-3">
                          
                            <div className="footer-social f-right">
                                <a href="#"><i className="fab fa-facebook-f"></i></a>
                                <a href="#"><i className="fab fa-twitter"></i></a>
                                <a href="#"><i className="fas fa-globe"></i></a>
                                <a href="#"><i className="fab fa-instagram"></i></a>
                            </div>
                        </div>
                    </div>
               </div>
  );
}
