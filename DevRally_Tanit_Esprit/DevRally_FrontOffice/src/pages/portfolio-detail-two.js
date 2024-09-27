import React from "react";
import { Link } from "react-router-dom";

import image1 from "../assets/images/portfolio/16.jpg"
import image2 from "../assets/images/portfolio/17.jpg"
import image3 from "../assets/images/portfolio/18.jpg"

import Navbar from "../componants/indexJs/navbar";
import FooterTwo from "../componants/footer/footerTwo";

import {AiOutlineUser,AiOutlineCalendar,AiOutlineClockCircle,FiFacebook,FiInstagram,FiTwitter,FiLinkedin,FiDribbble} from "../assets/icons/vander"
import ScrollTop from "../componants/scrollTop";
 
export default function PortfolioDetailTwo(){
    return(
        <>
        <Navbar navClass="defaultscroll sticky" manuClass="navigation-menu nav-right"/>
        <section className="bg-half-170 bg-light d-table w-100">
            <div className="container">
                <div className="row mt-5 justify-content-center">
                    <div className="col-12">
                        <div className="title-heading text-center">
                            <ul className="list-inline">
                                <li className="list-inline-item me-3"><AiOutlineUser className="h5 mb-0"/><Link to="#" className="text-primary"> Mr. Donald Ruffy</Link></li>
                                <li className="list-inline-item text-muted me-3"><AiOutlineCalendar className="h5 text-dark mb-0"/> 19th June 2023</li>
                                <li className="list-inline-item text-muted"><AiOutlineClockCircle className="h5 text-dark mb-0"/> 8 min read</li>
                            </ul>

                            <h5 className="heading fw-semibold sub-heading mb-0">Capsule Wardrobe Essentials <br/> The Leopard Print Coat</h5>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section className="section">
            <div className="container">
                <div className="row">
                    <div className="col-md-6 col-lg-8">
                        <img src={image1} className="img-fluid rounded shadow" alt=""/>
                    
                        <img src={image2} className="img-fluid rounded shadow mt-4" alt=""/>
                    
                        <img src={image3} className="img-fluid rounded shadow mt-4" alt=""/>

                        <div className="section-title mt-4 pt-2">
                            <h4 className="mb-4">Project Description</h4>
    
                            <p className="text-muted">The most well-known dummy text is the 'Lorem Ipsum', which is said to have originated in the 16th century. Lorem Ipsum is composed in a pseudo-Latin language which more or less corresponds to 'proper' Latin. It contains a series of real Latin words. This ancient dummy text is also incomprehensible, but it imitates the rhythm of most European languages in Latin script. The advantage of its Latin origin and the relative meaninglessness of Lorum Ipsum is that the text does not attract attention to itself or distract the viewer's attention from the layout.</p>
                            <p className="text-muted mb-0">Thus, Lorem Ipsum has only limited suitability as a visual filler for German texts. If the fill text is intended to illustrate the characteristics of different typefaces, it sometimes makes sense to select texts containing the various letters and symbols specific to the output language.</p>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 mt-4 mt-sm-0 pt-2 pt-sm-0">
                        <div className="sidebar sticky-bar ms-lg-4">
                          
                            <div className="widget">
                                <h6 className="widget-title font-weight-bold pt-2 pb-2 bg-light rounded text-center">Project Details</h6>
        
                                <dl className="row mb-0 mt-4">
                                    <dt className="col-md-4 fw-medium col-5">Client :</dt>
                                    <dd className="col-md-8 col-7 text-muted">Calvin Carlo</dd>
        
                                    <dt className="col-md-4 fw-medium col-5">Category :</dt>
                                    <dd className="col-md-8 col-7 text-muted">Web Design</dd>
        
                                    <dt className="col-md-4 fw-medium col-5">Date :</dt>
                                    <dd className="col-md-8 col-7 text-muted">15th December 2021</dd>
        
                                    <dt className="col-md-4 fw-medium col-5">Website :</dt>
                                    <dd className="col-md-8 col-7 text-muted"><Link to="https://shreethemes.in/" target="_blank" className="text-reset">shreethemes.in</Link></dd>
        
                                    <dt className="col-md-4 fw-medium col-5">Location :</dt>
                                    <dd className="col-md-8 col-7 text-muted">3/2/64 Mongus Street, UK</dd>
                                </dl>
                            </div>
                            <div className="widget mt-4 pt-2">
                                <h6 className="widget-title font-weight-bold pt-2 pb-2 bg-light rounded text-center">Share</h6>
                                
                                <ul className="list-unstyled text-center social-icon social mt-4 mb-0">
                                    <li className="list-inline-item ms-1"><Link to="#" className="rounded"><FiFacebook/></Link></li>
                                    <li className="list-inline-item ms-1"><Link to="#" className="rounded"><FiInstagram/></Link></li>
                                    <li className="list-inline-item ms-1"><Link to="#" className="rounded"><FiTwitter/></Link></li>
                                    <li className="list-inline-item ms-1"><Link to="#" className="rounded"><FiLinkedin/></Link></li>
                                    <li className="list-inline-item ms-1"><Link to="#" className="rounded"><FiDribbble/></Link></li>
                                </ul>
                            </div>

                           
                            <div className="widget mt-4 pt-2 text-center">
                                <h6 className="widget-title font-weight-bold pt-2 pb-2 bg-light rounded">Tags Cloud</h6>
                                <div className="tagcloud text-center mt-4">
                                    <Link to="#" className="rounded">Business</Link>
                                    <Link to="#" className="rounded">Finance</Link>
                                    <Link to="#" className="rounded">Marketing</Link>
                                    <Link to="#" className="rounded">Fashion</Link>
                                    <Link to="#" className="rounded">Bride</Link>
                                    <Link to="#" className="rounded">Lifestyle</Link>
                                    <Link to="#" className="rounded">Travel</Link>
                                    <Link to="#" className="rounded">Beauty</Link>
                                    <Link to="#" className="rounded">Video</Link>
                                    <Link to="#" className="rounded">Audio</Link>
                                </div>
                            </div>
                           
                        </div>
                    </div>
                </div>
            </div>

            <div className="container mt-100 mt-60">
                <div className="row justify-content-center">
                    <div className="col-12">
                        <div className="section-title text-center">
                            <h6 className="text-primary fw-normal mb-3">Available for freelance projects</h6>
                            <h1 className="title mb-4">Do you have digital project? <br/> Let's talk.</h1>
                            <div className="mt-4">
                                <Link to="/page-contact-one" className="btn btn-primary">Contact us</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <FooterTwo/>
        <ScrollTop/>
        </>
    )
}