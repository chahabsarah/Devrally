import React,{useState} from "react";
import { Link, useParams } from "react-router-dom";

import digitalBg from "../assets/images/digital/bg01.jpg"
import servicesImage from "../assets/images/service-single.jpg"

import Navbar from "../componants/indexJs/navbar";

import { Parallax } from 'react-parallax';
import {AiOutlineCheck} from "../assets/icons/vander"
import {accordionData , featuresData} from "../data/data";
import FooterFour from "../componants/footer/footerFour";
import ScrollTop from "../componants/scrollTop";

export default function ServicesDetails(){
    const params = useParams()
    const id = params.id
    const data = featuresData.find((item) => item.id === parseInt(id))
    const [activeIndex, setActiveIndex] = useState(0)
    return(
        <>
        <Navbar navClass="defaultscroll sticky" manuClass="navigation-menu nav-right" />
        <section className="bg-half-170 bg-soft-primary d-table w-100">
            <div className="container">
                <div className="row mt-5 justify-content-center">
                    <div className="col-12">
                        <div className="title-heading text-center">
                            <p className="text-muted para-desc mx-auto mb-0">Service Details</p>
                            <h5 className="heading fw-semibold mb-0 mt-2 sub-heading text-dark">{data?.title? data?.title : "Digital Marketing"}</h5>
                        </div>
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
                <div className="row justify-content-center">
                    <div className="col-lg-10">
                        <div className="features-absolute bg-white rounded shadow position-relative overflow-hidden">
                            <img src={servicesImage} className="img-fluid" alt=""/>
                        </div>
                    </div>
                </div>
            </div>
            
            <div className="container mt-100 mt-60">
                <div className="row">
                    <div className="col-lg-8 col-md-6">
                        <div className="section-title">
                            <h5 className="mb-4">{data?.title? data?.title : "Digital Marketing"}</h5>

                            <p className="text-muted">Take advantage of the experiential-learning opportunities built into many programs. You can work in labs on and off campus or even spend semesters overseas. One Construction employs over 3 000 employees, the majority of whom are based on project sites.</p>
                            <p className="text-muted mb-0">We embrace holistic development and support for employees with the aim of being a first-choice employer within our sectors. Through a unique combination of engineering, construction and design disciplines and expertise.</p>
                        
                            <h5 className="my-4">Plan Benefits</h5>

                            <ul className="list-unstyled">
                                <li className="text-muted mb-3"><AiOutlineCheck className="fs-5 align-middle text-success"/> Global Data Analysis</li>
                                <li className="text-muted mb-3"><AiOutlineCheck className="fs-5 align-middle text-success"/> Immediate settlement</li>
                                <li className="text-muted mb-3"><AiOutlineCheck className="fs-5 align-middle text-success"/> Zero broker commission</li>
                                <li className="text-muted mb-3"><AiOutlineCheck className="fs-5 align-middle text-success"/> Guaranteed by the services</li>
                                <li className="text-muted mb-3"><AiOutlineCheck className="fs-5 align-middle text-success"/> Global Data Analysis</li>
                                <li className="text-muted mb-3"><AiOutlineCheck className="fs-5 align-middle text-success"/> Infrastructure solutions</li>
                            </ul>

                            <h5 className="my-4">Questions? You are covered.</h5>

                            <div className="accordion" id="buyingquestion">
                                {accordionData.map((item,index)=>{
                                    return(
                                        <div className="accordion-item rounded shadow mt-2" key={index}>
                                            <h2 className="accordion-header" id="headingOne">
                                                <button className={`${activeIndex === item.id ? "active accordion-button fw-normal border-0 bg-light rounded shadow" : "accordion-button fw-normal border-0 bg-light rounded shadow collapsed"} `} onClick={() => setActiveIndex(item.id)}>
                                                    {item.title}
                                                </button>
                                            </h2>
                                            {activeIndex === item.id ? 
                                                <div id="collapseOne" className="accordion-collapse border-0 collapse show" >
                                                    <div className="accordion-body text-muted bg-transparent">
                                                    {item.desc}
                                                    </div>
                                                </div>:""
                                            }
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 mt-4 pt-2 mt-sm-0 pt-sm-0">
                        <div className="p-4 rounded bg-light shadow sticky-bar">
                            <h5>Get a Free Quote</h5>

                            <form className="login-form mt-4">
                                <div className="row">
                                    <div className="col-lg-12">
                                        <div className="mb-3">
                                            <label className="form-label">Your Email <span className="text-danger">*</span></label>
                                            <input type="email" className="form-control" placeholder="Email" name="email" required=""/>
                                        </div>
                                    </div>

                                    <div className="col-lg-12">
                                        <div className="mb-3">
                                            <label className="form-label">Password <span className="text-danger">*</span></label>
                                            <input type="password" className="form-control" placeholder="Password" required=""/>
                                        </div>
                                    </div>

                                    <div className="col-lg-12">
                                        <div className="d-flex justify-content-between">
                                            <div className="mb-3">
                                                <div className="form-check">
                                                    <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                                                    <label className="form-check-label" htmlFor="flexCheckDefault">Remember me</label>
                                                </div>
                                            </div>
                                            <p className="forgot-pass mb-0"><Link to="/auth-re-password" className="text-dark">Forgot password ?</Link></p>
                                        </div>
                                    </div>

                                    <div className="col-lg-12 mb-0">
                                        <div className="d-grid">
                                            <button className="btn btn-primary">Sign in</button>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section className="position-relative overflow-hidden">
        <Parallax
                blur={{ min: 0, max: 0}}
                bgImage={digitalBg}
                bgImageAlt="the dog"
                strength={500}
                bgportfolioImageize="100%"
                bgStyle={{with:"auto", height:"100%" }}
                style={{position:"absolute", width:"100%" , height:"100%"}}
            >
            </Parallax>
            <div className="bg-overlay"></div>
            <div className="section">
                <div className="container">
                    <div className="row align-items-end">
                        <div className="col-lg-9 col-md-6 col-12">
                            <div className="section-title text-md-start text-center">
                                <h4 className="title title-dark text-white mb-4">We enjoy building experiences. Come and join us.</h4>
                                <p className="text-light para-dark para-desc mb-0">Start working with Fronter that can provide everything you need to generate awareness, drive traffic, connect.</p>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-6 col-12">
                            <div className="text-md-end text-center">
                                <Link to="/page-contact-one" className="btn btn-primary">Get In Touch!</Link>
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