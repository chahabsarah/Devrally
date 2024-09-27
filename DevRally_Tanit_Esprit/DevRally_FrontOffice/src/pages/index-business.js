import React,{useState} from "react";
import { Link } from "react-router-dom";

import backgroundImg from "../assets/images/business/bg01.jpg"
import about1 from "../assets/images/business/about01.jpg"
import about2 from "../assets/images/business/about02.jpg"
import about3 from "../assets/images/business/about03.jpg"
import bg2 from "../assets/images/digital/bg01.jpg"

import Navbar from "../componants/IndexBusiness/navbar";
import Blog from "../componants/blog";
import Clients from "../componants/clients";
import GetInTuch from "../componants/getInTuch";
import Footer from "../componants/footer/footer";
import ScrollTop from "../componants/scrollTop";


import { featuresData , accordionData,partnersImg, teamData} from "../data/data";

import {MdOutlineArrowForward, FiPlay, FiFacebook, FiInstagram, FiTwitter, FiLinkedin} from "../assets/icons/vander"

import ModalVideo from 'react-modal-video';
import "../../node_modules/react-modal-video/scss/modal-video.scss"

import CountUp from 'react-countup';

export default function IndexBusiness(){
    const [isOpen, setOpen] = useState(false);
    const [activeIndex, setActiveIndex] = useState(0)
    return(
        <>
        <Navbar/>
        <section className="bg-home zoom-image d-flex align-items-center" id="home">
            <div className="bg-overlay image-wrap" id="hero-images" style={{backgroundImage:`url(${backgroundImg})`}}></div>
            <div className="bg-overlay bg-linear-gradient-2"></div>
            <div className="container">
                <div className="row justify-content-center mt-5">
                    <div className="col-12">
                        <div className="title-heading text-center">
                            <h4 className="display-5 text-white title-dark mb-4">Build and grow your business</h4>
                            <p className="para-desc text-white-50 mb-0 mx-auto">Launch your campaign and benefit from our expertise on designing and managing conversion centered bootstrap html page.</p>
                        
                            <div className="mt-4 pt-2">
                                <Link to="" className="btn btn-primary">Work with us</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <div className="position-relative">
            <div className="home-shape-arrow">
                <Link to="#about"><i className="mdi mdi-arrow-down arrow-icon text-dark h5 shadow-md"></i></Link>
            </div>
            
            <div className="shape overflow-hidden text-white">
                <svg viewBox="0 0 2880 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 48H1437.5H2880V0H2160C1442.5 52 720 0 720 0H0V48Z" fill="currentColor"></path>
                </svg>
            </div>
        </div>

        <section className="section" id="features">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-12">
                        <div className="section-title text-center mb-4 pb-2">
                            <h6 className="text-primary fw-normal">Who we are?</h6>
                            <h4 className="title mb-4">Business strategies and top <br/> performance ideas</h4>
                            <p className="text-muted para-desc mb-0 mx-auto">Launch your campaign and benefit from our expertise on designing and managing conversion centered bootstrap html page.</p>
                        </div>
                    </div>
                </div>
                <div className="row">
                    {featuresData.map((item,index)=>{
                        const Icon = item.icon
                        return(
                            <div className="col-lg-4 col-sm-6 mt-4 pt-2" key={index}>
                                <div className="card features feature-primary feature-clean feature-transition p-4 border-0 shadow rounded overflow-hidden">
                                    <div className="icons text-center rounded">
                                        <Icon className="icon d-block rounded h4 mb-0"/>
                                    </div>
                                    <div className="content mt-4">
                                        <Link to={`/page-service-detail/${item.id}`} className="h5 text-dark title">{item.title}</Link>
                                        <p className="text-muted mt-3">{item.desc}</p>

                                        <Link to={`/page-service-detail/${item.id}`} className="link">Read more <MdOutlineArrowForward/></Link>
                                    </div>

                                    <div className="feature-ovelay-one"></div>
                                    <div className="feature-ovelay-two"></div>
                                    <div className="feature-ovelay-three"></div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>

        <section className="section bg-light" id="about">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-md-6">
                        <div className="about-image position-relative">
                            <img src={about1} className="img-fluid rounded shadow" alt=""/>

                            <div className="about-image-position">
                                <img src={about2} className="img-fluid rounded shadow-lg" alt=""/>
                                <div className="play-icon">
                                    <Link to="#!" onClick={() => setOpen(true)} className="play-btn lightbox">
                                        <i className="mdi mdi-play text-primary rounded-circle bg-white shadow-lg"></i>
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
                            <h6 className="text-primary fw-normal">Creative Vision & Mission</h6>
                            <h4 className="title mb-4">We develop & create <br/> digital future.</h4>
                            <p className="text-muted">Launch your campaign and benefit from our expertise on designing and managing conversion centered bootstrap html page.</p>
                            <p className="text-muted mb-0">It seems that only fragments of the original text remain in the Lorem Ipsum texts used today. One may speculate that over the course of time certain letters were added or deleted at various positions within the text. This might also explain why one can now find slightly different versions.</p>
                        
                            <div className="mt-4 pt-2">
                                <Link to="#" className="btn btn-primary">Read More <MdOutlineArrowForward/></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container mt-100 mt-60">
                <div className="row">
                    <div className="col-md-3 col-6">
                        <div className="counter-box position-relative text-center">
                            <h2 className="mb-0 display-2 fw-bold title-dark mt-2 opacity-1"><CountUp start={0} end={5458}/></h2>
                            <span className="counter-head fw-normal title-dark position-absolute top-50 start-0 end-0">Investment Projects</span>
                        </div>
                    </div>

                    <div className="col-md-3 col-6">
                        <div className="counter-box position-relative text-center">
                            <h2 className="mb-0 display-2 fw-bold title-dark mt-2 opacity-1"><CountUp start={0} end={15}/></h2>
                            <span className="counter-head fw-normal title-dark position-absolute top-50 start-0 end-0">Years of Experience</span>
                        </div>
                    </div>

                    <div className="col-md-3 col-6">
                        <div className="counter-box position-relative text-center">
                            <h2 className="mb-0 display-2 fw-bold title-dark mt-2 opacity-1"><CountUp start={0} end={54}/></h2>
                            <span className="counter-head fw-normal title-dark position-absolute top-50 start-0 end-0">Offices in the World</span>
                        </div>
                    </div>

                    <div className="col-md-3 col-6">
                        <div className="counter-box position-relative text-center">
                            <h2 className="mb-0 display-2 fw-bold title-dark mt-2 opacity-1"><CountUp start={0} end={214}/></h2>
                            <span className="counter-head fw-normal title-dark position-absolute top-50 start-0 end-0">Successful Cases</span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container mt-100 mt-60">
                <div className="row align-items-center">
                    <div className="col-md-6 order-1 order-md-2">
                        <div className="ms-lg-5">
                            <img src={about3} className="img-fluid rounded shadow" alt=""/>
                        </div>
                    </div>

                    <div className="col-md-6 order-2 order-md-1 mt-4 pt-2 mt-sm-0 pt-sm-0">
                        <div className="section-title">
                            <h6 className="text-primary fw-normal">How it work?</h6>
                            <h4 className="title mb-4">Don't wait. <br/> The time will never be just right.</h4>
                            
                            
                            <div className="accordion mt-4" id="buyingquestion">
                                {accordionData.map((item,index)=>{
                                    return(
                                        <div className="accordion-item rounded shadow mt-2" key={index}>
                                            <h2 className="accordion-header" >
                                                <button className={`${activeIndex === item.id ? "active accordion-button fw-normal border-0 bg-light rounded shadow" : "accordion-button fw-normal border-0 bg-light rounded shadow collapsed"} `} onClick={() => setActiveIndex(item.id)}>
                                                    {item.title}
                                                </button>
                                            </h2>
                                            {activeIndex === item.id ? 
                                                <div  className=" border-0 " >
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
                </div>
            </div>
        </section>

        <section className="section "  style={{backgroundImage:`url(${bg2})`, backgroundAttachment:"fixed"}} id="cta">
            <div className="bg-overlay"></div>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-12 text-center">
                        <div className="section-title">
                            <h4 className="title title-dark text-white mb-4">Stop leaving money on the table.</h4>
                            <p className="text-light para-dark para-desc mx-auto">Start working with Fronter that can provide everything you need to generate awareness, drive traffic, connect.</p>
                            <Link to="#!" onClick={() => setOpen(true)}className="play-btn border border-light mt-4 lightbox">
                                <FiPlay className="fea icon-ex-md text-white title-dark"/>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section className="section" id="testimonial">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col">
                        <div className="section-title text-center mb-4 pb-2">
                            <h6 className="text-primary fw-normal mb-2">Testimonial</h6>
                            <h4 className="title mb-4">What our customer <br/> say about us</h4>
                            <p className="text-muted para-desc mb-0 mx-auto">Start working with Fronter that can provide everything you need to generate awareness, drive traffic, connect.</p>
                        </div>
                    </div>
                </div>
                <Clients/>
            </div>
         
            <div className="container mt-5">
                <div className="row justify-content-center">
                    {partnersImg.map((item,index) => {
                        return(
                            <div className="col-lg-2 col-md-2 col-6 py-2" key={index}>
                                <div className="text-center">
                                    <img src={item} className="avatar avatar-md-md w-auto" alt=""/>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
           

           <div className="container mt-100 mt-60">
                <div className="row justify-content-center">
                    <div className="col">
                        <div className="section-title text-center mb-4 pb-2">
                            <h6 className="text-primary fw-normal mb-2">Our Minds</h6>
                            <h4 className="title mb-4">Management Team</h4>
                            <p className="text-muted para-desc mb-0 mx-auto">Start working with Fronter that can provide everything you need to generate awareness, drive traffic, connect.</p>
                        </div>
                    </div>
                </div>

                <div className="row">
                    {teamData.map((item,index) => {
                        return(
                            <div className="col-lg-3 col-md-6 col-12 mt-4 pt-2" key={index}>
                                <div className="card team team-primary team-two text-center">
                                    <div className="card-img team-image d-inline-block mx-auto rounded overflow-hidden">
                                        <img src={item.image} className="img-fluid" alt=""/>
                                        <div className="card-overlay rounded"></div>

                                        <div className="content">
                                            <Link to="/page-team-detail" className="text-white title-dark h5 mb-0 title">{item.name}</Link>
                                            <h6 className="text-white-50 mb-0 fw-normal mt-1 designation">{item.title}</h6>

                                            <ul className="list-unstyled team-social mb-0 mt-3">
                                                <li className="list-inline-item ms-1"><Link to="#" className="btn btn-sm btn-pills btn-icon"><FiFacebook className="fea icon-sm fea-social"/></Link></li>
                                                <li className="list-inline-item ms-1"><Link to="#" className="btn btn-sm btn-pills btn-icon"><FiInstagram className="fea icon-sm fea-social"/></Link></li>
                                                <li className="list-inline-item ms-1"><Link to="#" className="btn btn-sm btn-pills btn-icon"><FiTwitter className="fea icon-sm fea-social"/></Link></li>
                                                <li className="list-inline-item ms-1"><Link to="#" className="btn btn-sm btn-pills btn-icon"><FiLinkedin className="fea icon-sm fea-social"/></Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
        
        <section className="section bg-light" id="news">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col">
                        <div className="section-title text-center mb-4 pb-2">
                            <h4 className="title mb-4">Our Blogs or News</h4>
                            <p className="text-muted para-desc mb-0 mx-auto">Start working with Fronter that can provide everything you need to generate awareness, drive traffic, connect.</p>
                        </div>
                    </div>
                </div>
                <Blog/>
            </div>
        </section>
        <GetInTuch/>
        <div className="container-fluid">
            <div className="row">
                <div className="col-12 p-0">
                    <div className="card map border-0">
                        <div className="card-body p-0">
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d39206.002432144705!2d-95.4973981212445!3d29.709510002925988!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8640c16de81f3ca5%3A0xf43e0b60ae539ac9!2sGerald+D.+Hines+Waterwall+Park!5e0!3m2!1sen!2sin!4v1566305861440!5m2!1sen!2sin" title="frame1" style={{border:"0"}} allowFullScreen></iframe>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <Footer/>
        <ScrollTop/>
        </>
    )
}