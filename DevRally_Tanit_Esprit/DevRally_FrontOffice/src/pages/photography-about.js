import React,{useEffect} from "react";
import { Link } from "react-router-dom";

import brand1 from "../assets/images/brands/amazon-prime-video-logo.svg"
import brand2 from "../assets/images/brands/angular-3.svg"
import brand3 from "../assets/images/brands/huawei-2.svg"
import brand4 from "../assets/images/brands/bosch.svg"
import brand5 from "../assets/images/brands/coinbase.svg"
import brand6 from "../assets/images/brands/husd-3.svg"
import brand7 from "../assets/images/brands/intercom-1.svg"
import brand8 from "../assets/images/brands/linkedin-logo-2013-1.svg"
import brand9 from "../assets/images/brands/yamaha-2-1.svg"
import brand10 from "../assets/images/brands/logo-donington-park.svg"
import brand11 from "../assets/images/brands/microsoft-office-2013.svg"
import brand12 from "../assets/images/brands/netflix-3.svg"
import brand13 from "../assets/images/brands/python-3.svg"
import brand14 from "../assets/images/brands/redbull-1.svg"
import brand15 from "../assets/images/brands/zoom-communications-logo.svg"
import brand16 from "../assets/images/brands/suntech-power-logo.svg"
import brand17 from "../assets/images/brands/v-power-1.svg"
import about from "../assets/images/photography/about.jpg"
import photographer from "../assets/images/photography/photographer.jpg"

import PhotographyNavbar from "../componants/navbar/photographyNavbar";
import PhotographyFooter from "../componants/footer/photographyFooter";

import { Parallax } from 'react-parallax';
import CountUp from 'react-countup';

import {MdArrowForward} from "../assets/icons/vander"
import ScrollTop from "../componants/scrollTop";

export default function PhotographyAbout(){
    useEffect(()=>{
        document.body.classList.add('photography-scss');
    })
   
    const brandImg = [brand1,brand2, brand3, brand4, brand5, brand6, brand7, brand8, brand9, brand10, brand11, brand12, brand13, brand14, brand15, brand16, brand17]
    return(
     <>
        <PhotographyNavbar/>
        <section className="position-relative">
            <Parallax
                blur={{ min: 0, max: 0}}
                bgImage={photographer}
                bgImageAlt="the dog"
                strength={500}
                bgportfolioImageize="100%"
                bgStyle={{with:"auto", height:"100%" }}
                style={{position:"absolute", width:"100%" , height:"100%"}}
            >
            </Parallax>
            <div className="bg-overlay bg-linear-gradient-2"></div>
            <div className="bg-half-170 ">
                <div className="section-title position-absolute bottom-0 text-center end-0 start-0">
                    <h6 className="text-muted title-dark-50 mb-0">I'm Jack Jeffrey</h6>
                    <h4 className="title text-white title-dark mb-5">About Me</h4>
                </div>
            </div>
        </section>
        <section className="section">
            <div className="container">
                <div className="card rounded shadow border-0 overflow-hidden">
                    <div className="row g-0 align-items-center">
                        <div className="col-lg-5">
                            <img src={about} className="img-fluid" alt=""/>
                        </div>

                        <div className="col-lg-7">
                            <div className="card-body section-title p-md-5">
                                <div className="row">
                                    <div className="col-md-6">
                                        <h3 className="fw-semibold mb-0"><CountUp className="counter-value" start={0} end={9}/>+</h3>
                                        <h6 className="fw-normal text-muted mb-0">Years of Experience</h6>
                                    </div>

                                    <div className="col-md-6">
                                        <h3 className="fw-semibold mb-0"><CountUp className="counter-value" start={0} end={1542}/>+</h3>
                                        <h6 className="fw-normal text-muted mb-0">Total Photo Click </h6>
                                    </div>
                                </div>

                                <p className="my-4">The most well-known dummy text is the 'Lorem Ipsum', which is said to have originated in the 16th century. Lorem Ipsum is composed in a pseudo-Latin language which more or less corresponds to 'proper' Latin. It contains a series of real Latin words. This ancient dummy text is also incomprehensible, but it imitates the rhythm of most European languages in Latin script.</p>

                                <Link to="/photography-contact" className="btn btn-link primary text-muted">Get in touch<MdArrowForward className="ms-1"/></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container mt-100 mt-60">
                <div className="row justify-content-center">
                    <div className="col">
                        <div className="text-center mb-4">
                            <h4 className="mb-0">Brands</h4>
                        </div>
                    </div>
                </div>

                <div className="row justify-content-center">
                    {brandImg.map((item, index) => {
                        return(
                            <div className="col-lg-3 col-md-4 col-6" key={index}>
                                <div className="brand-gray text-center">
                                    <img src={item} className="avatar avatar-medium" alt=""/>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>

            <div className="container mt-100 mt-60">
                <div className="row justify-content-center">
                    <div className="col-12">
                        <div className="section-title text-center">
                            <h6 className="text-muted font-weight-normal">Do you like my work?</h6>
                            <h3 className="fw-semibold my-4">Let’s work together!</h3>
                            <div className="mt-4 pt-2">
                                <Link to="/photography-contact" className="btn btn-primary"> Contact me</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <PhotographyFooter/>
        <ScrollTop/>
     </>
    )
}