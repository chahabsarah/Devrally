import React from "react";
import { Link } from "react-router-dom";

import background from "../assets/images/bg/job.jpg"

import JobsNavbar from "../componants/navbar/jobsNavbar";
import Mobileapp from "../componants/mobileApp";
import FooterFive from "../componants/footer/footerFive";
import ScrollTop from "../componants/scrollTop";

import { Parallax } from "react-parallax";

import {FiMapPin} from "../assets/icons/vander"

export default function JobApply(){
    return(
        <>
        <JobsNavbar/>
        <section className=" d-table w-100  position-relative ">
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
            <div className="bg-half-170">
                <div className="container">
                    <div className="row mt-5 justify-content-center">
                    <div className="col-12">
                        <div className="title-heading text-center">
                            <h4 className="fw-semibold mb-0 text-white title-dark">Senior Web Developer</h4>
                            
                            <ul className="list-unstyled mt-2">
                                <li className="list-inline-item text-muted small me-3"><FiMapPin className="text-white title-dark h6 me-1"/> London, UK - <span className="text-white title-dark">Full Time</span></li>
                            </ul>
                        </div>
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
                    <div className="col-lg-10 col-md-7">
                        <form className="rounded shadow p-4">
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="mb-3">
                                        <label className="form-label">Your Name :<span className="text-danger">*</span></label>
                                        <input name="name" id="name" type="text" className="form-control" placeholder="First Name :"/>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="mb-3">
                                        <label className="form-label">Your Email :<span className="text-danger">*</span></label>
                                        <input name="email" id="email" type="email" className="form-control" placeholder="Your email :"/>
                                    </div> 
                                </div>
                                <div className="col-md-6">
                                    <div className="mb-3">
                                        <label className="form-label">Your Phone no. :<span className="text-danger">*</span></label>
                                        <input name="number" id="number" type="number" className="form-control" placeholder="Your phone no. :"/>
                                    </div> 
                                </div>
                                <div className="col-md-6">
                                    <div className="mb-3">
                                        <label className="form-label">Job Title :</label>
                                        <input name="subject" id="subject" className="form-control" placeholder="Title :"/>
                                    </div>                                                                               
                                </div>
                                <div className="col-md-6">
                                    <div className="mb-3">
                                        <label className="form-label">Types of jobs :</label>
                                        <select className="form-control custom-select" id="Sortbylist-Shop">
                                            <option>All Jobs</option>
                                            <option>Full Time</option>
                                            <option>Half Time</option>
                                            <option>Remote</option>
                                            <option>In Office</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="col-md-12">
                                    <div className="mb-3">
                                        <label className="form-label">Description :</label>
                                        <textarea name="comments" id="comments" rows="4" className="form-control" placeholder="Describe the job :"></textarea>
                                    </div>
                                </div>                                    
                                <div className="col-md-12">
                                    <div className="mb-3">
                                        <label htmlFor="formFile" className="form-label">Upload Your Cv / Resume :</label>
                                        <input className="form-control" type="file" id="formFile"/>
                                    </div>                                                                               
                                </div>
                                <div className="col-md-12">
                                    <div className="mb-3">
                                        <div className="form-check">
                                            <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault2"/>
                                            <label className="form-check-label text-muted" htmlFor="flexCheckDefault2">I Accept <Link to="#" className="text-primary">Terms And Condition</Link></label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-sm-12">
                                    <input type="submit" id="submit" name="send" className="submitBnt btn btn-primary" value="Apply Now"/>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
         <Mobileapp/>
        </section>
        <FooterFive/>
        <ScrollTop/>
        </>
    )
}