import React from "react";
import { Link } from "react-router-dom";

import background from "../assets/images/bg/job.jpg"

import JobsNavbar from "../componants/navbar/jobsNavbar";
import Mobileapp from "../componants/mobileApp";
import FooterFive from "../componants/footer/footerFive";

import { Parallax } from "react-parallax";

import Select from 'react-select'

import { jobData } from "../data/data";

import {BiBriefcaseAlt2,FiMapPin,AiOutlineDollarCircle,AiOutlineClockCircle} from "../assets/icons/vander"
import ScrollTop from "../componants/scrollTop";

export default function Job(){

    const country = [
        { value: '1', label: 'Afghanistan' },
        { value: '2', label: 'Azerbaijan' },
        { value: '3', label: 'Bahamas' },
        { value: '4', label: 'Bahrain' },
        { value: '5', label: 'Canada' },
        { value: '5', label: 'Denmark' },
        { value: '5', label: 'Djibouti' },
        { value: '5', label: 'Eritrea' },
        { value: '5', label: 'Estonia' },
        { value: '5', label: 'Gambia' },
    ]
    const time = [
        { value: '1', label: 'Part Time' },
        { value: '2', label: 'Freelancer' },
        { value: '3', label: 'Remote Work' },
        { value: '4', label: 'Office Work' },
    ]
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
                                <h5 className="heading fw-semibold mb-0 sub-heading text-white title-dark">Job Listings</h5>
                                <nav aria-label="breadcrumb" className="d-block mt-3">
                                    <ul className="breadcrumb breadcrumb-muted mb-0 p-0">
                                        <li className="breadcrumb-item"><Link to="/">Fronter</Link></li>
                                        <li className="breadcrumb-item active" aria-current="page">Jobs</li>
                                    </ul>
                                </nav>
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
                    <div className="col-12">
                        <div className="features-absolute">
                            <div className="row justify-content-center" id="reserve-form">
                                <div className="col-lg-10 mt-lg-5">
                                    <div className="card feature-top border-0 shadow rounded p-3">
                                        <form action="#">
                                            <div className="registration-form text-dark text-start">
                                                <div className="row g-lg-0">
                                                    <div className="col-lg-3 col-md-6">
                                                        <div className="filter-search-form position-relative filter-border bg-light">
                                                            <BiBriefcaseAlt2 className="icons"/>
                                                            <input name="name" type="text" id="job-keyword" className="form-control filter-input-box bg-light border-0" placeholder="Search your keaywords"/>
                                                        </div>
                                                    </div>

                                                    <div className="col-lg-3 col-md-6 mt-3 mt-md-0">
                                                        <div className="filter-search-form position-relative filter-border bg-light">
                                                            <FiMapPin className="icons"/>
                                                            <Select className="form-input filter-input-box bg-gray-50 dark:bg-slate-800 border-0" options={country} />
                                                        </div>
                                                    </div>
                                                    
                                                    <div className="col-lg-3 col-md-6 mt-3 mt-lg-0">
                                                        <div className="filter-search-form position-relative filter-border bg-light">
                                                            <BiBriefcaseAlt2 className="icons"/>
                                                            <Select className="form-input filter-input-box bg-gray-50 dark:bg-slate-800 border-0" options={time} />
                                                        </div>
                                                    </div>

                                                    <div className="col-lg-3 col-md-6 mt-3 mt-lg-0">
                                                        <input type="submit" id="search" name="search" style={{height:"60px"}} className="btn btn-primary searchbtn submit-btn w-100" value="Search"/>
                                                    </div>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container">
                <div className="row g-4 mt-4 mt-lg-0">
                    {jobData.map((item,index) =>{
                        return(
                            <div className="col-lg-4 col-md-6" key={index}>
                                <div className="card features feature-primary rounded shadow">
                                    <div className="card-body content">
                                        <Link to={`/job-detail/${item.id}`} className="h5 mb-1 d-block title text-dark">{item.title}</Link>
                                        <p className="text-muted"><AiOutlineClockCircle className="me-1"/>{item.posted}</p>
                                        <div className="d-flex align-items-center justify-content-between">
                                            <span className="badge rounded bg-soft">{item.jobTime}</span>
                                            <div>
                                                <AiOutlineDollarCircle className="link me-1"/>
                                                <span className="text-muted">{item.salary}</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="d-flex align-items-center p-4 border-top">
                                        <img src={item.image} className="avatar avatar-md-sm shadow-md rounded-md p-2 bg-white" alt=""/>

                                        <div className="ms-3">
                                            <h6 className="mb-0">{item.name}</h6>
                                            <small className="text-muted">{item.location}</small>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>

            <Mobileapp/>
        </section>
        <FooterFive/>
        <ScrollTop/>
        </>
    )
}