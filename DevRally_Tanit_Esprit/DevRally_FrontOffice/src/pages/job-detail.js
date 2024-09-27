import React from "react";
import { Link, useParams } from "react-router-dom";

import background from "../assets/images/bg/job.jpg"

import JobsNavbar from "../componants/navbar/jobsNavbar";
import Mobileapp from "../componants/mobileApp";
import FooterFive from "../componants/footer/footerFive";

import { Parallax } from "react-parallax";

import { jobData } from "../data/data";

import {FiMapPin, MdArrowForward} from "../assets/icons/vander"
import ScrollTop from "../componants/scrollTop";

export default function JobDetails(){
    const params = useParams()
    const id = params.id
    const data = jobData.find((jobs) => jobs.id === parseInt(id))
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
                                <h4 className="fw-semibold mb-0 text-white title-dark">{data?.title ? data?.title : "Senior Web Developer"}</h4>
                                
                                <ul className="list-unstyled mt-2">
                                    <li className="list-inline-item text-muted small me-3"><FiMapPin className="text-white title-dark h6 me-1 mb-0"/> {data?.location ? data?.location : "America"} - <span className="text-white title-dark">{data?.jobTime ? data?.jobTime : "Full Time"}</span></li>
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
                    <div className="col-lg-9">
                        <h5 className="mb-3">Description:</h5>

                        <p className="text-muted">Our vision is to provide the next billion people with access to products that exemplify the ideals of Cryptor. These ideals - which include peer-to-peer transactions, decentralization, censorship resistance, and permissionless-ness - support economic freedom.</p>

                        <p className="text-muted">Our approach is to develop and promote widely accessible products that support economic freedom. For example, our digital wallet - which has 16 million downloads - provides people with an easy-to-use, non-custodial method for buying, selling, storing, sending, receiving, and trading cryptocurrencies.</p>

                        <h5 className="mb-3 mt-5">Duties:</h5>

                        <ul className="list-unstyled mb-0">
                            <li className="text-muted d-flex mt-2"><MdArrowForward className="text-primary h5 mb-0 me-2" style={{width:'25px'}}/><span> Work alongside Product, Engineering, Design and Marketing to build world-class cryptocurrency applications and experiences</span> </li>
                            <li className="text-muted d-flex mt-2"><MdArrowForward className="text-primary h5 mb-0 me-2" style={{width:'25px'}}/><span> Provide producе vision and strategy for the team</span></li>
                            <li className="text-muted d-flex mt-2"><MdArrowForward className="text-primary h5 mb-0 me-2" style={{width:'25px'}}/><span> Design and lead a multi-year roadmap in accordance with company's OKRs, strategy and vision</span></li>
                            <li className="text-muted d-flex mt-2"><MdArrowForward className="text-primary h5 mb-0 me-2" style={{width:'25px'}}/> <span>Build and lead an exceptional engineering team to innovate, invent, implement and deploy complex software solutions in mission-critical environment </span></li>
                            <li className="text-muted d-flex mt-2"><MdArrowForward className="text-primary h5 mb-0 me-2" style={{width:'25px'}}/><span> Understand customer needs and gather product requirements. Identify market opportunities and define product vision and strategy</span></li>
                        </ul>

                        <h5 className="mb-3 mt-5">Requirements</h5>
                        
                        <ul className="list-unstyled mb-0">
                            <li className="text-muted d-flex mt-2"><MdArrowForward className="text-primary h5 mb-0 me-2" style={{width:'25px'}}/><span> 5+ years of Product Management, Product Marketing or Product Growth experience with creating product roadmaps from conception to launch, driving product vision and defining go-to-market strategy</span></li>
                            <li className="text-muted d-flex mt-2"><MdArrowForward className="text-primary h5 mb-0 me-2" style={{width:'25px'}}/> <span>Has experience designing, implementing and/or integrating IAM solutions</span></li>
                            <li className="text-muted d-flex mt-2"><MdArrowForward className="text-primary h5 mb-0 me-2" style={{width:'25px'}}/><span> Has managed engineering teams, designers, and collaborated with other product people </span></li>
                            <li className="text-muted d-flex mt-2"><MdArrowForward className="text-primary h5 mb-0 me-2" style={{width:'25px'}}/><span> Strong project management skills and ability to work across different product teams</span></li>
                            <li className="text-muted d-flex mt-2"><MdArrowForward className="text-primary h5 mb-0 me-2" style={{width:'25px'}}/> <span>Strong leadership skills</span></li>
                            <li className="text-muted d-flex mt-2"><MdArrowForward className="text-primary h5 mb-0 me-2" style={{width:'25px'}}/> <span>Agile mindset to improve iteratively, rather than placing big long term bets </span></li>
                            <li className="text-muted d-flex mt-2"><MdArrowForward className="text-primary h5 mb-0 me-2" style={{width:'25px'}}/><span> Excellent communication skills </span></li>
                            <li className="text-muted d-flex mt-2"><MdArrowForward className="text-primary h5 mb-0 me-2" style={{width:'25px'}}/> <span>Communicates well in both written and verbal English </span></li>
                        </ul>

                        <h5 className="mb-3 mt-5">Nice To Have</h5>
                        
                        <ul className="list-unstyled mb-0">                        
                            <li className="text-muted d-flex mt-2"><MdArrowForward className="text-primary h5 mb-0 me-2" style={{width:'25px'}}/> <span>Strong understanding of blockchain, both technical and practical</span></li>
                            <li className="text-muted d-flex mt-2"><MdArrowForward className="text-primary h5 mb-0 me-2" style={{width:'25px'}}/> <span>Cryptocurrency or financial services product management is a big plus </span></li>
                            <li className="text-muted d-flex mt-2"><MdArrowForward className="text-primary h5 mb-0 me-2" style={{width:'25px'}}/><span> Experience in KYC (know your customer), AML (anti-money laundering) and IAM services</span></li>
                            <li className="text-muted d-flex mt-2"><MdArrowForward className="text-primary h5 mb-0 me-2" style={{width:'25px'}}/><span> Understanding of custodial vs non-custodial aspects of cryptocurrency financial products</span></li>
                            <li className="text-muted d-flex mt-2"><MdArrowForward className="text-primary h5 mb-0 me-2" style={{width:'25px'}}/><span> Financial/payment apps experience</span></li>
                        </ul>

                        <h5 className="mb-3 mt-5">Benefits</h5>
                        <p className="text-muted">Bitcoin.com is paving the way for the next generation of financial technology products and platforms. We're bringing cryptocurrency and the future of money to the masses. We’d love to have you on board.</p>

                        <p className="text-muted">We are serious about what we do, but more importantly, we have a lot of fun doing it. Our work culture is modern, meaning we strive for work experiences based on transparency, productivity, trust, and passion. For all employees, benefits include:</p>


                        <ul className="list-unstyled">
                            <li className="text-muted d-flex mt-2"><MdArrowForward className="text-primary h5 mb-0 me-2" style={{width:'25px'}}/><span>Flexible work hours</span> </li>
                            <li className="text-muted d-flex mt-2"><MdArrowForward className="text-primary h5 mb-0 me-2" style={{width:'25px'}}/> <span>Remote work</span></li>
                            <li className="text-muted d-flex mt-2"><MdArrowForward className="text-primary h5 mb-0 me-2" style={{width:'25px'}}/><span> Health insurance reimbursement</span> </li>
                            <li className="text-muted d-flex mt-2"><MdArrowForward className="text-primary h5 mb-0 me-2" style={{width:'25px'}}/><span>Wellness program (gym, etc.)</span> </li>
                            <li className="text-muted d-flex mt-2"><MdArrowForward className="text-primary h5 mb-0 me-2" style={{width:'25px'}}/><span>Yoga classes</span></li>
                            <li className="text-muted d-flex mt-2"><MdArrowForward className="text-primary h5 mb-0 me-2" style={{width:'25px'}}/><span>Japanese classes</span></li>
                        </ul>

                        <p className="text-muted">For employees residing in Japan, we offer "permanent employment" status (正社員) and the option to be paid in yen.</p>

                        <p className="text-muted">Employees residing outside of Japan are classified as Independent Contractors and are paid in the cryptocurrency of their choice.</p>

                        <div className="mt-4">
                            <Link to="/job-apply" className="btn btn-primary">Apply now</Link>
                        </div>
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