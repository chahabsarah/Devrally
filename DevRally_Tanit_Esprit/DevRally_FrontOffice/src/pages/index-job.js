import React,{useState} from "react";
import { Link } from "react-router-dom";
import Select from 'react-select'

import backgroundImg from "../assets/images/bg/job.jpg"
import curve from "../assets/images/curve-shape.png"
import brand1 from "../assets/images/brands/shree-logo.png"
import brand2 from "../assets/images/brands/skype.png"
import brand3 from "../assets/images/brands/snapchat.png"
import brand4 from "../assets/images/brands/spotify.png"
import brand5 from "../assets/images/brands/telegram.png"
import brand6 from "../assets/images/brands/whatsapp.png"
import brand7 from "../assets/images/brands/android.png"
import brand8 from "../assets/images/brands/facebook-logo-2019.png"
import brand9 from "../assets/images/brands/linkedin.png"
import brand10 from "../assets/images/brands/google-logo.png"
import about1 from "../assets/images/job01.jpg"
import about2 from "../assets/images/job02.jpg"

import JobNavbar from "../componants/navbar/jobNavbar";
import ClientsThree from "../componants/clientsTwo"
import Partners from "../componants/partners";
import FooterFive from "../componants/footer/footerFive";
import Mobileapp from "../componants/mobileApp";
import ScrollTop from "../componants/scrollTop"

import TinySlider from "tiny-slider-react";
import '../../node_modules/tiny-slider/dist/tiny-slider.css';

import { jobData } from "../data/data";

import ModalVideo from 'react-modal-video';
import "../../node_modules/react-modal-video/scss/modal-video.scss"

import CountUp from 'react-countup';

import {BiLogoGitlab, FiBookOpen, AiOutlinePieChart,MdOutlineFeedback,RiPresentationLine,AiOutlineFire,MdArrowForward,AiOutlineDollarCircle,AiOutlineClockCircle,BiBriefcaseAlt2,FiMapPin} from "../assets/icons/vander"

const settings = {
    container: '.tiny-five-item',
        controls: true,
        mouseDrag: true,
        loop: true,
        rewind: true,
        autoplay: true,
        autoplayButtonOutput: false,
        autoplayTimeout: 3000,
        navPosition: "bottom",
        controlsText: ['<i class="mdi mdi-chevron-left "></i>', '<i class="mdi mdi-chevron-right"></i>'],
        nav: false,
        speed: 400,
        gutter: 0,
        responsive: {
            1025: {
                items: 5
            },

            992: {
                items: 4
            },

            767: {
                items: 3
            },

            376: {
                items: 2
            },

            320: {
                items: 1
            },
        },
};

export default function IndexJob(){
    const [isOpen, setOpen] = useState(false);
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
    const brand = [brand1,brand2,brand3,brand4,brand5,brand6,brand7,brand8,brand9,brand10]

    const categoriesData = [
        {
            icon:BiLogoGitlab,
            title1:'Business',
            title2: 'Development',
            jobs: '74 Jobs'
        },
        {
            icon:FiBookOpen,
            title1:'Marketing',
            title2: 'Communication',
            jobs: '20 Jobs'
        },
        {
            icon:AiOutlinePieChart,
            title1:'Project',
            title2: 'Management',
            jobs: '35 Jobs'
        },
        {
            icon:MdOutlineFeedback,
            title1:'Customer',
            title2: 'Service',
            jobs: '46 Jobs'
        },
        {
            icon:RiPresentationLine,
            title1:'Software',
            title2: 'Engineering',
            jobs: '60 Jobs'
        },
        {
            icon:AiOutlineFire,
            title1:'Human',
            title2: 'Resources',
            jobs: '05 Jobs'
        },
        
    ]

    const counterData = [
        {
            title:'Total User',
            max:'200',
            name:'+k'
        },
        {
            title:'Years of Experience',
            max:'15',
            name:'+'
        },
        {
            title:'Offices in the World',
            max:'54',
            name:'+k'
        },
        {
            title:'No. of Job Positions',
            max:'125',
            name:'k'
        },
    ]
    return(
        <>
        <JobNavbar/>
        <section className="bg-half-260 bg-job-hero bg-soft-primary d-table w-100 background-effect overflow-hidden " style={{backgroundImage:`url(${backgroundImg})`}} id="home">
       
            <div className="container-fluid z-index-1 ">
                <div className="h-100 w-100 position-absolute" style={{backgroundImage:`url(${curve})`,top:"0",left:"0",bottom:"0", right:"0"}}></div>
                <div className="container position-relative z-index-1">
                    <div className="row mt-5 justify-content-center">
                        <div className="col-12">
                            <div className="title-heading">
                                <h4 className="heading fw-bold text-dark mb-4">Get your new <br/> dream <span className="text-primary">Job</span> today</h4>
                                <p className="text-muted para-desc mb-0">Find Jobs, Employment & Career Opportunities. Some of the companies we've helped recruit excellent applicants over the years.</p>
                                <div className="row" id="reserve-form">
                                    <div className="col-lg-10 mt-4">
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
                                
                                <div className="mt-4">
                                    <span className="text-muted"><span className="text-dark">Popular Searches :</span> Designer Developer Web IOS PHP Senior Engineer</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="bg-overlay bg-soft-primary"></div>
            <ul className="circles p-0 mb-0">
                {brand.map((item,index)=>{
                    return(
                        <li className="brand-img" key={index}><img src={item} className="avatar avatar-md-sm" alt=""/></li>
                    )
                })}
            </ul>
        </section>
        <div className="position-relative">
            <div className="home-shape-arrow">
                <Link to="#"><i className="mdi mdi-arrow-down arrow-icon text-dark h5 shadow-md"></i></Link>
            </div>
        </div>

        <section className="section bg-light" id="categories">
            <div className="container">
                <div className="row align-items-end mb-4 pb-2">
                    <div className="col-lg-8 col-md-8">
                        <div className="section-title text-center text-md-start">
                            <h4 className="title mb-md-2 mb-3">Search by Categories</h4>
                            <p className="text-muted para-desc mb-0">Search your career opportunity with our categories</p>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-4 d-none d-md-block">
                        <div className="text-md-end">
                            <Link to="#" className="btn btn-link primary text-muted h6 mb-0">All Categories <span className="h5 mb-0 ms-1"><MdArrowForward className="align-middle"/></span></Link>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-12 mt-4">
                        <div className="tiny-five-item">
                        <TinySlider settings={settings}>
                            {categoriesData.map((item, index) =>{
                                const Icon = item.icon
                                return(
                                <div className="tiny-slide" key={index}>
                                    <div className="card features feature-primary feature-clean category py-5 px-2 shadow rounded-md m-2">
                                        <div className="icons bg-md text-center mx-auto d-block rounded-pill">
                                            <Icon className="icon"/>
                                        </div>
                                            <div className="content mt-3 mx-auto text-center">
                                                <Link to="#" className="h6 title text-dark">{item.title1} <br/> {item.title2}</Link>
                                                <h6 className="text-muted fw-normal mt-3 mb-0">{item.jobs}</h6>
                                            </div>
                                    </div>
                                </div>
                                )
                            })}
                        </TinySlider>  
                        </div>
                    </div>

                    <div className="col-12 mt-3 d-md-none d-block">
                        <div className="text-center">
                            <Link to="" className="btn btn-link primary text-muted h6 mb-0">All Categories <span className="h5 mb-0 ms-1"><MdArrowForward className="align-middle"/></span></Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section className="py-4 border-bottom">
            <div className="container">
                <Partners/>
            </div>
        </section>

        <section className="section" id="about">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-md-6">
                        <div className="about-image position-relative">
                            <img src={about1} className="img-fluid rounded shadow" alt=""/>

                            <div className="about-image-position">
                                <img src={about2} className="img-fluid rounded shadow-lg" alt=""/>
                                <div className="position-absolute top-50 start-50 translate-middle">
                                    <Link to="#!" onClick={() => setOpen(true)} className="btn btn-icon btn-pills btn-primary lightbox">
                                        <i className="mdi mdi-play"></i>
                                    </Link>
                                </div>
                                <ModalVideo
                                    channel="youtube"
                                    youtube={{ mute: 0, autoplay: 0 }}
                                    isOpen={isOpen}
                                    videoId="yba7hPeTSjk"
                                    onClose={() => setOpen(false)} 
                                    />
                            </div>
                        </div>
                    </div>

                    <div className="col-md-6 mt-4 pt-2 mt-sm-0 pt-sm-0">
                        <div className="section-title ms-lg-5">
                            <h6 className="text-primary fw-normal">Job Placement Offers</h6>
                            <h4 className="title mb-4">We are Largest Job <br/> Site in The World</h4>
                            <p className="text-muted">Launch your campaign and benefit from our expertise on designing and managing conversion centered bootstrap html page.</p>
                            <p className="text-muted mb-0">It seems that only fragments of the original text remain in the Lorem Ipsum texts used today. One may speculate that over the course of time certain letters were added or deleted at various positions within the text. This might also explain why one can now find slightly different versions.</p>
                        
                            <div className="mt-4 pt-2">
                                <Link to="#" className="btn btn-link primary text-muted h6 mb-0">Read More <span className="h5 mb-0 ms-1"><MdArrowForward/></span></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container mt-100 mt-60">
                <div className="row">
                    {counterData.map((item,index) => {
                        return(
                        <div className="col-md-3 col-6" key={index}>
                            <div className="counter-box position-relative text-center">
                                <h2 className="mb-0 display-3 fw-bold title-dark mt-2 opacity-1"><CountUp start={0} end={item.max}/>{item.name}</h2>
                                <span className="counter-head fw-normal title-dark position-absolute top-50 start-0 end-0 fs-5">{item.title}</span>
                            </div>
                        </div>
                        )
                    })}
                </div>
            </div>
        </section>

        <section className="section bg-light" id="jobs">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-12">
                        <div className="section-title text-center mb-4 pb-2">
                            <h4 className="title mb-4">Popular Jobs</h4>
                            <p className="text-muted mb-0 para-desc mx-auto">Search all the open positions on the web. Get your own personalized salary estimate. Read reviews on over 30000+ companies worldwide.</p>
                        </div>
                    </div>
                </div>

                <div className="row g-4 pt-4">
                    {jobData.slice(0,6).map((item,index)=>{
                        return(
                        <div className="col-lg-4 col-md-6" key={index}>
                            <div className="card features feature-primary rounded shadow">
                                {item?.tag ?  <div className="ribbon ribbon-right ribbon-warning overflow-hidden"><span className="text-center d-block shadow small fs-6">New</span></div> :''}
                               
                                <div className="card-body content">
                                    <Link to={`/job-detail/${item.id}`} className="h5 mb-1 d-block title text-dark">{item.title}</Link>
                                    <p className="text-muted"><AiOutlineClockCircle/> {item.posted}</p>
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
                    

                    <div className="col-12 mt-4">
                        <div className="text-center">
                            <Link to="/jobs" className="btn btn-link primary text-muted h6 mb-0">See More Jobs <span className="h5 mb-0 ms-1"><MdArrowForward className="align-middle"/></span></Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section className="section" id="testi">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-12">
                        <div className="section-title text-center mb-4 pb-2">
                            <h4 className="title mb-4">What Our Users Say</h4>
                            <p className="text-muted para-desc mx-auto mb-0">Search all the open positions on the web. Get your own personalized salary estimate. Read reviews on over 30000+ companies worldwide.</p>
                        </div>
                    </div>
                </div>

                <ClientsThree position={false}/>
            </div>

            <Mobileapp/>
        </section>
        <FooterFive/>
        <ScrollTop/>
        </>
    )
}