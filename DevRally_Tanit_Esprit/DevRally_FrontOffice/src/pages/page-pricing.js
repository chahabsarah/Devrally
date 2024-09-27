import React,{useState} from "react";
import { Link } from "react-router-dom";

import Navbar from "../componants/indexJs/navbar";
import FooterFour from "../componants/footer/footerFour";
import ScrollTop from "../componants/scrollTop";

import background from "../assets/images/bg/02.jpg"

import { Parallax } from 'react-parallax';

import {MdArrowForward, HiOutlinePresentationChartLine,LiaFileInvoiceDollarSolid,MdRedeem,RiPresentationLine,AiOutlineDollar,LiaFileInvoiceSolid,FiArrowRightCircle} from "../assets/icons/vander"
export default function Pricing(){
    const [pricing, setPricing] = useState(false)

    function handleChange(e) {
        setPricing(e.target.checked);
     }
    
    const featureData = [
        {
            icon:HiOutlinePresentationChartLine,
            title:"Digital Marketing",
            desc:'The phrasal sequence of the Lorem Ipsum text is now so that many DTP programmes can generate'
        },
        {
            icon:LiaFileInvoiceDollarSolid,
            title:"Investing",
            desc:'The phrasal sequence of the Lorem Ipsum text is now so that many DTP programmes can generate'
        },
        {
            icon:MdRedeem,
            title:"Mortgage Advisor",
            desc:'The phrasal sequence of the Lorem Ipsum text is now so that many DTP programmes can generate'
        },
        {
            icon:RiPresentationLine,
            title:"Real Estate",
            desc:'The phrasal sequence of the Lorem Ipsum text is now so that many DTP programmes can generate'
        },
        {
            icon:AiOutlineDollar,
            title:"Payroll & Accounting",
            desc:'The phrasal sequence of the Lorem Ipsum text is now so that many DTP programmes can generate'
        },
        {
            icon:LiaFileInvoiceSolid,
            title:"Branch Registration",
            desc:'The phrasal sequence of the Lorem Ipsum text is now so that many DTP programmes can generate'
        },
    ]
    return(
        <>
        <Navbar navClass="defaultscroll sticky" manuClass="navigation-menu nav-right nav-light" logoLight={true}/>
        <section className="position-relative overflow-hidden">
            <Parallax
                blur={{ min: 0, max: 0}}
                bgImage={background}
                bgImageAlt="the dog"
                strength={500}
                bgportfolioImageize="100%"
                bgStyle={{with:"auto", height:"100%" }}
                style={{position:"absolute", width:"100%" , height:"100%"}}
            >
            </Parallax>
            <div className="bg-overlay bg-gradient-overlay-2"></div>
            <div className="bg-half-170 d-table w-100">
                <div className="container">
                    <div className="row mt-5 justify-content-center">
                        <div className="col-12">
                            <div className="title-heading text-center">
                                <p className="text-white-50 para-desc mx-auto mb-0">Our Comfortable Rates</p>
                                <h5 className="heading fw-semibold mb-0 sub-heading text-white title-dark">Pricing / Plans</h5>
                            </div>
                        </div>
                    </div>

                    <div className="position-middle-bottom">
                        <nav aria-label="breadcrumb" className="d-block">
                            <ul className="breadcrumb breadcrumb-muted mb-0 p-0">
                                <li className="breadcrumb-item"><Link to="/">Fronter</Link></li>
                                <li className="breadcrumb-item active" aria-current="page">Pricing</li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
        </section>
        <div className="position-relative">
            <div className="shape overflow-hidden text-white">
                <svg viewBox="0 0 2880 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 48H1437.5H2880V0H2160C1442.5 52 720 0 720 0H0V48Z" fill="currentColor"></path>
                </svg>
            </div>
        </div>
        <section className="section">
            <div className="container">
                <div className="row mb-4 pb-2 align-items-end">
                    <div className="col-lg-9 col-md-9">
                        <div className="section-title">
                            <h4 className="title">We create world-class <br/> web design, and <br/> branding.</h4>
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-3 mt-4 mt-sm-0">
                        <div className="text-md-end">
                            <Link to="/page-services" className="btn btn-link primary text-muted h6">See More <span className="h5 mb-0 ms-1"><MdArrowForward/></span></Link>
                        </div>
                    </div>
                </div>

                <div className="row">
                    {featureData.map((item,index) => {
                        const Icon = item.icon
                        return(
                        <div className="col-md-4 col-sm-6 mt-4 pt-2" key={index}>
                            <div className="features feature-primary feature-clean overflow-hidden">
                                <div className="icons text-center rounded">
                                    <Icon className="d-block h4 mb-0 icon"/>
                                </div>
                                <div className="content mt-4">
                                    <Link to="/page-service-detail" className="h5 text-dark title">{item.title}</Link>
                                    <p className="text-muted mt-3">{item.desc}</p>

                                    <Link to="/page-service-detail" className="link">Read more <MdArrowForward/></Link>
                                </div>
                            </div>
                        </div>
                        )
                    })}
                </div>
            </div>

            <div className="container mt-100 mt-60">
                <div className="row justify-content-center">
                    <div className="col-12 text-center">
                        <div className="section-title mb-4 pb-2">
                            <h4 className="title mb-4">Pricing Rates</h4>
                            <p className="text-muted para-desc mx-auto mb-0">Start working with Fronter that can provide everything you need to generate awareness, drive traffic, connect.</p>
                        </div>

                        <div className="switcher-pricing d-flex justify-content-center align-items-center mb-4 pb-2">
                            <label className={pricing === false ? "toggler h6 mb-0 text-muted toggler--is-active"  :  "toggler h6 mb-0 text-muted"} id="filt-monthly">Monthly</label>
                            <div className="form-check form-switch mx-3">
                                <input className="form-check-input" type="checkbox"  id="switcher" onChange={handleChange}/>
                            </div>
                            <label className={pricing === true ? "toggler h6 mb-0 text-muted toggler--is-active"  :  "toggler h6 mb-0 text-muted"} id="filt-yearly">Yearly</label>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-12">
                        
                        {pricing === false ? 
                            <div id="yearly" className="wrapper-full ">
                                <div className="row align-items-center">
                                    <div className="col-lg-3 col-md-6 col-12 mt-4 pt-2">
                                        <div className="pricing text-center rounded position-relative shadow">
                                            <div className="price-header rounded-top bg-dark bg-white-dark pt-5 pb-5">
                                                <h5 className="price-title text-white title-dark">Starter</h5>
                                                <p className="mb-0 text-white-50">Suitable for Starter</p>
                                            </div>
                                            <div className="d-flex justify-content-center bg-light border-bottom py-4">
                                                <span className="h6 mb-0">$</span>
                                                <span className="price h4 mb-0 ms-1">0.00</span>
                                                <span className="h6 align-self-end mb-1">/year</span>
                                            </div>
                                            <div className="pricing-features text-start">
                                                <ul className="feature list-unstyled py-4 p-3 mb-0">
                                                    <li className="feature-list text-muted"><FiArrowRightCircle className="fea icon-sm text-dark me-2" />Full Access</li>
                                                    <li className="feature-list text-muted mt-2"><FiArrowRightCircle className="fea icon-sm text-dark me-2" />Enhanced Security</li>
                                                    <li className="feature-list text-muted mt-2"><FiArrowRightCircle className="fea icon-sm text-dark me-2" />Source Files</li>
                                                    <li className="feature-list text-muted mt-2"><FiArrowRightCircle className="fea icon-sm text-dark me-2" />1 Domain Free</li>
                                                    <li className="feature-list text-muted mt-2"><FiArrowRightCircle className="fea icon-sm text-dark me-2" />Free Appointments</li>
                                                    <li className="feature-list text-muted mt-2"><FiArrowRightCircle className="fea icon-sm text-dark me-2" />Free Installment</li>
                                                </ul>
                                                <div className="border-top text-center py-4">
                                                    <Link href="#" className="btn btn-dark">Free Signup</Link>                                        
                                                </div>
                                            </div>    
                                        </div>
                                    </div>
                                    
                                    <div className="col-lg-3 col-md-6 col-12 mt-4 pt-2">
                                        <div className="pricing text-center rounded position-relative shadow">
                                            <div className="ribbon ribbon-right ribbon-warning overflow-hidden"><span className="text-center d-block shadow small h6">Best</span></div>
                                            <div className="price-header rounded-top bg-dark bg-white-dark pt-5 pb-5">
                                                <h5 className="price-title text-white title-dark">Professional</h5>
                                                <p className="mb-0 text-white-50">Suitable for Regular</p>
                                            </div>
                                            <div className="d-flex justify-content-center bg-light border-bottom py-4">
                                                <span className="h6 mb-0">$</span>
                                                <span className="price h4 mb-0 ms-1">4.99</span>
                                                <span className="h6 align-self-end mb-1">/year</span>
                                            </div>
                                            <div className="pricing-features text-start">
                                                <ul className="feature list-unstyled py-4 p-3 mb-0">
                                                    <li className="feature-list text-muted"><FiArrowRightCircle className="fea icon-sm text-dark me-2"/>Full Access</li>
                                                    <li className="feature-list text-muted mt-2"><FiArrowRightCircle className="fea icon-sm text-dark me-2"/>Enhanced Security</li>
                                                    <li className="feature-list text-muted mt-2"><FiArrowRightCircle className="fea icon-sm text-dark me-2"/>Source Files</li>
                                                    <li className="feature-list text-muted mt-2"><FiArrowRightCircle className="fea icon-sm text-dark me-2"/>1 Domain Free</li>
                                                    <li className="feature-list text-muted mt-2"><FiArrowRightCircle className="fea icon-sm text-dark me-2"/>Free Appointments</li>
                                                    <li className="feature-list text-muted mt-2"><FiArrowRightCircle className="fea icon-sm text-dark me-2"/>Free Installment</li>
                                                </ul>
                                                <div className="border-top text-center py-4">
                                                    <Link to="#" className="btn btn-dark">Subscribe Now</Link>                                        
                                                </div>
                                            </div>    
                                        </div>
                                    </div>
                                    
                                    <div className="col-lg-3 col-md-6 col-12 mt-4 pt-2">
                                        <div className="pricing text-center rounded overflow-hidden shadow-lg bg-light">
                                            <div className="price-header rounded-top bg-primary pt-5 pb-5">
                                                <h5 className="price-title text-white title-dark">Standerd</h5>
                                                <p className="mb-0 text-white-50">Suitable for Business</p>
                                            </div>
                                            <div className="d-flex justify-content-center bg-light border-bottom py-5">
                                                <span className="h6 mb-0">$</span>
                                                <span className="price h4 mb-0 ms-1">9.99</span>
                                                <span className="h6 align-self-end mb-1">/year</span>
                                            </div>
                                            <div className="pricing-features text-start">
                                                <ul className="feature list-unstyled py-4 p-3 mb-0">
                                                    <li className="feature-list text-muted"><FiArrowRightCircle className="fea icon-sm text-primary me-2"/>Full Access</li>
                                                    <li className="feature-list text-muted mt-2"><FiArrowRightCircle className="fea icon-sm text-primary me-2"/>Enhanced Security</li>
                                                    <li className="feature-list text-muted mt-2"><FiArrowRightCircle className="fea icon-sm text-primary me-2"/>Source Files</li>
                                                    <li className="feature-list text-muted mt-2"><FiArrowRightCircle className="fea icon-sm text-primary me-2"/>1 Domain Free</li>
                                                    <li className="feature-list text-muted mt-2"><FiArrowRightCircle className="fea icon-sm text-primary me-2"/>Free Appointments</li>
                                                    <li className="feature-list text-muted mt-2"><FiArrowRightCircle className="fea icon-sm text-primary me-2"/>Free Installment</li>
                                                </ul>
                                                <div className="border-top text-center py-5">
                                                    <Link to="#" className="btn btn-primary">Buy Now</Link>                                        
                                                </div>
                                            </div>    
                                        </div>
                                    </div>
                                    
                                    <div className="col-lg-3 col-md-6 col-12 mt-4 pt-2">
                                        <div className="pricing text-center rounded position-relative shadow">
                                            <div className="price-header rounded-top bg-dark bg-white-dark pt-5 pb-5">
                                                <h5 className="price-title text-white title-dark">Premium</h5>
                                                <p className="mb-0 text-white-50">Suitable for Premium</p>
                                            </div>
                                            <div className="d-flex justify-content-center bg-light border-bottom py-4">
                                                <span className="h6 mb-0">$</span>
                                                <span className="price h4 mb-0 ms-1">19.99</span>
                                                <span className="h6 align-self-end mb-1">/year</span>
                                            </div>
                                            <div className="pricing-features text-start">
                                                <ul className="feature list-unstyled py-4 p-3 mb-0">
                                                    <li className="feature-list text-muted"><FiArrowRightCircle className="fea icon-sm text-dark me-2"/>Full Access</li>
                                                    <li className="feature-list text-muted mt-2"><FiArrowRightCircle className="fea icon-sm text-dark me-2"/>Enhanced Security</li>
                                                    <li className="feature-list text-muted mt-2"><FiArrowRightCircle className="fea icon-sm text-dark me-2"/>Source Files</li>
                                                    <li className="feature-list text-muted mt-2"><FiArrowRightCircle className="fea icon-sm text-dark me-2"/>1 Domain Free</li>
                                                    <li className="feature-list text-muted mt-2"><FiArrowRightCircle className="fea icon-sm text-dark me-2"/>Free Appointments</li>
                                                    <li className="feature-list text-muted mt-2"><FiArrowRightCircle className="fea icon-sm text-dark me-2"/>Free Installment</li>
                                                </ul>
                                                <div className="border-top text-center py-4">
                                                    <Link to="#" className="btn btn-dark">Buy Premium</Link>                                        
                                                </div>
                                            </div>    
                                        </div>
                                    </div>
                                </div>
                            </div> :
                            <div id="monthly" className="wrapper-full">
                            <div className="row align-items-lg-center">
                                <div className="col-lg-3 col-md-6 col-12 mt-4 pt-2">
                                    <div className="pricing text-center rounded position-relative shadow">
                                        <div className="price-header rounded-top bg-dark bg-white-dark pt-5 pb-5">
                                            <h5 className="price-title text-white title-dark">Starter</h5>
                                            <p className="mb-0 text-white-50">Suitable for Starter</p>
                                        </div>
                                        <div className="d-flex justify-content-center bg-light border-bottom py-4">
                                            <span className="h6 mb-0">$</span>
                                            <span className="price h4 mb-0 ms-1">0.00</span>
                                            <span className="h6 align-self-end mb-1">/mo</span>
                                        </div>
                                        <div className="pricing-features text-start">
                                            <ul className="feature list-unstyled py-4 p-3 mb-0">
                                                <li className="feature-list text-muted"><FiArrowRightCircle className="fea icon-sm text-dark me-2"/>Full Access</li>
                                                <li className="feature-list text-muted mt-2"><FiArrowRightCircle className="fea icon-sm text-dark me-2"/>Enhanced Security</li>
                                                <li className="feature-list text-muted mt-2"><FiArrowRightCircle className="fea icon-sm text-dark me-2"/>Source Files</li>
                                                <li className="feature-list text-muted mt-2"><FiArrowRightCircle className="fea icon-sm text-dark me-2"/>1 Domain Free</li>
                                                <li className="feature-list text-muted mt-2"><FiArrowRightCircle className="fea icon-sm text-dark me-2"/>Free Appointments</li>
                                                <li className="feature-list text-muted mt-2"><FiArrowRightCircle className="fea icon-sm text-dark me-2"/>Free Installment</li>
                                            </ul>
                                            <div className="border-top text-center py-4">
                                                <Link to="#" className="btn btn-dark">Free Signup</Link>                                        
                                            </div>
                                        </div>    
                                    </div>
                                </div>
                                
                                <div className="col-lg-3 col-md-6 col-12 mt-4 pt-2">
                                    <div className="pricing text-center rounded position-relative shadow">
                                        <div className="ribbon ribbon-right ribbon-warning overflow-hidden"><span className="text-center d-block shadow small h6">Best</span></div>
                                        <div className="price-header rounded-top bg-dark bg-white-dark pt-5 pb-5">
                                            <h5 className="price-title text-white title-dark">Professional</h5>
                                            <p className="mb-0 text-white-50">Suitable for Regular</p>
                                        </div>
                                        <div className="d-flex justify-content-center bg-light border-bottom py-4">
                                            <span className="h6 mb-0">$</span>
                                            <span className="price h4 mb-0 ms-1">9.99</span>
                                            <span className="h6 align-self-end mb-1">/mo</span>
                                        </div>
                                        <div className="pricing-features text-start">
                                            <ul className="feature list-unstyled py-4 p-3 mb-0">
                                                <li className="feature-list text-muted"><FiArrowRightCircle className="fea icon-sm text-dark me-2"/>Full Access</li>
                                                <li className="feature-list text-muted mt-2"><FiArrowRightCircle className="fea icon-sm text-dark me-2"/>Enhanced Security</li>
                                                <li className="feature-list text-muted mt-2"><FiArrowRightCircle className="fea icon-sm text-dark me-2"/>Source Files</li>
                                                <li className="feature-list text-muted mt-2"><FiArrowRightCircle className="fea icon-sm text-dark me-2"/>1 Domain Free</li>
                                                <li className="feature-list text-muted mt-2"><FiArrowRightCircle className="fea icon-sm text-dark me-2"/>Free Appointments</li>
                                                <li className="feature-list text-muted mt-2"><FiArrowRightCircle className="fea icon-sm text-dark me-2"/>Free Installment</li>
                                            </ul>
                                            <div className="border-top text-center py-4">
                                                <Link to="#" className="btn btn-dark">Subscribe Now</Link>                                        
                                            </div>
                                        </div>    
                                    </div>
                                </div>
                                
                                <div className="col-lg-3 col-md-6 col-12 mt-4 pt-2">
                                    <div className="pricing text-center rounded position-relative shadow-lg bg-light">
                                        <div className="price-header rounded-top bg-primary pt-5 pb-5">
                                            <h5 className="price-title text-white title-dark">Standerd</h5>
                                            <p className="mb-0 text-white-50">Suitable for Business</p>
                                        </div>
                                        <div className="d-flex justify-content-center bg-light border-bottom py-5">
                                            <span className="h6 mb-0">$</span>
                                            <span className="price h4 mb-0 ms-1">19.99</span>
                                            <span className="h6 align-self-end mb-1">/mo</span>
                                        </div>
                                        <div className="pricing-features text-start">
                                            <ul className="feature list-unstyled py-4 p-3 mb-0">
                                                <li className="feature-list text-muted"><FiArrowRightCircle className="fea icon-sm text-primary me-2"/>Full Access</li>
                                                <li className="feature-list text-muted mt-2"><FiArrowRightCircle className="fea icon-sm text-primary me-2"/>Enhanced Security</li>
                                                <li className="feature-list text-muted mt-2"><FiArrowRightCircle className="fea icon-sm text-primary me-2"/>Source Files</li>
                                                <li className="feature-list text-muted mt-2"><FiArrowRightCircle className="fea icon-sm text-primary me-2"/>1 Domain Free</li>
                                                <li className="feature-list text-muted mt-2"><FiArrowRightCircle className="fea icon-sm text-primary me-2"/>Free Appointments</li>
                                                <li className="feature-list text-muted mt-2"><FiArrowRightCircle className="fea icon-sm text-primary me-2"/>Free Installment</li>
                                            </ul>
                                            <div className="border-top text-center py-5">
                                                <Link to="#" className="btn btn-primary">Buy Now</Link>                                        
                                            </div>
                                        </div>    
                                    </div>
                                </div>
                                
                                <div className="col-lg-3 col-md-6 col-12 mt-4 pt-2">
                                    <div className="pricing text-center rounded position-relative shadow">
                                        <div className="price-header rounded-top bg-dark bg-white-dark pt-5 pb-5">
                                            <h5 className="price-title text-white title-dark">Premium</h5>
                                            <p className="mb-0 text-white-50">Suitable for Premium</p>
                                        </div>
                                        <div className="d-flex justify-content-center bg-light border-bottom py-4">
                                            <span className="h6 mb-0">$</span>
                                            <span className="price h4 mb-0 ms-1">29.99</span>
                                            <span className="h6 align-self-end mb-1">/mo</span>
                                        </div>
                                        <div className="pricing-features text-start">
                                            <ul className="feature list-unstyled py-4 p-3 mb-0">
                                                <li className="feature-list text-muted"><FiArrowRightCircle className="fea icon-sm text-dark me-2"/>Full Access</li>
                                                <li className="feature-list text-muted mt-2"><FiArrowRightCircle className="fea icon-sm text-dark me-2"/>Enhanced Security</li>
                                                <li className="feature-list text-muted mt-2"><FiArrowRightCircle className="fea icon-sm text-dark me-2"/>Source Files</li>
                                                <li className="feature-list text-muted mt-2"><FiArrowRightCircle className="fea icon-sm text-dark me-2"/>1 Domain Free</li>
                                                <li className="feature-list text-muted mt-2"><FiArrowRightCircle className="fea icon-sm text-dark me-2"/>Free Appointments</li>
                                                <li className="feature-list text-muted mt-2"><FiArrowRightCircle className="fea icon-sm text-dark me-2"/>Free Installment</li>
                                            </ul>
                                            <div className="border-top text-center py-4">
                                                <Link to="#" className="btn btn-dark">Buy Premium</Link>                                        
                                            </div>
                                        </div>    
                                    </div>
                                </div>
                            </div>
                        </div>    
                    }
                        
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
        <FooterFour/>
        <ScrollTop/>
        </>
    )
}