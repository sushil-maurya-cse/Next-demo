import React from "react";
import Link from 'next/link'

export default function TopBar() {
  return (
    <header>

   <div className="header-area header-transparent">
        <div className="main-header">
           <div className="header-bottom  header-sticky">
                <div className="container-fluid">
                    <div className="row align-items-center">
                      
                        <div className="col-xl-2 col-lg-1 col-md-1">
                            <div className="logo">
                              <Link href="/"><img src="assets/img/logo/logo.png" alt=""/></Link>
                            </div>
                        </div>
                        <div className="col-xl-8 col-lg-8 col-md-8">
                           
                            <div className="main-menu f-right d-none d-lg-block">
                                <nav> 
                                    <ul id="navigation">                                                                                                                                     
                                        <li><Link href="/">Home</Link></li>
                                        <li><Link href="/about">About</Link></li>
                                        <li><Link href="/services">Services</Link></li>
                                        <li><Link href="/blog">Blog</Link>
                                            <ul className="submenu">
                                                <li><Link href="/blog">Blog</Link></li>
                                                <li><Link href="/blog_details">Blog Details</Link></li>
                                            </ul>
                                        </li>
                                        <li><Link href="/">Pages</Link>
                                            <ul className="submenu">
                                                <li><Link href="/contact">Sub Pages</Link></li>
                                            </ul>
                                        </li>
                                        <li><Link href="/contact">Contact</Link></li>
                                    </ul>
                                </nav>
                            </div>
                        </div>             
                        <div className="col-xl-2 col-lg-3 col-md-3">
                            <div className="header-right-btn f-right d-none d-lg-block">
                               
                            </div>
                        </div>
                      
                        <div className="col-12">
                            <div className="mobile_menu d-block d-lg-none"></div>
                        </div>
                    </div>
                </div>
           </div>
        </div>
   </div>

</header>
  );
}
