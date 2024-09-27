import React,{useState} from "react";
import { Link } from "react-router-dom";

import logo36 from "../assets/images/logo-icon-36.png"
import squareDanger from "../assets/images/square/square-danger.png"
import squareSuccess from "../assets/images/square/square-success.png"
import squarePrimary from "../assets/images/square/square-primary.png";
import bgImg from "../assets/images/startup/01.png"
import BgImg02 from "../assets/images/digital/bg01.jpg"
import about01 from "../assets/images/business/about01.jpg"
import about02 from "../assets/images/business/about02.jpg"

import StartupNavbar from "../componants/navbar/startupNavbar";
import Clients from "../componants/clients";
import Blog from "../componants/blog";
import GetInTuchFour from "../componants/getInTuchFour";
import SmallFooter from "../componants/footer/smallFooter";

import { Parallax } from 'react-parallax';
import { featuresData, partnersImg,teamData } from "../data/data";

import {FiVideo,BiWater,TfiDropbox,MdOutlineCenterFocusWeak,MdArrowForward, FiPlay,FiFacebook,FiInstagram, FiTwitter} from "../assets/icons/vander"

import ModalVideo from 'react-modal-video';
import "../../node_modules/react-modal-video/scss/modal-video.scss"
import ScrollTop from "../componants/scrollTop";

export default function IndexStartup(){
    const [isOpen, setOpen] = useState(false);

    const aboutData = [
        {
            icon:BiWater,
            title:'24/7 Support',
            desc:'The phrasal sequence of the Lorem Ipsum text is now so that many generate'
        },
        {
            icon:TfiDropbox,
            title:'Take Ownership',
            desc:'The phrasal sequence of the Lorem Ipsum text is now so that many generate'
        },
        {
            icon:MdOutlineCenterFocusWeak,
            title:'Team Work',
            desc:'The phrasal sequence of the Lorem Ipsum text is now so that many generate'
        }
    ]
    return(
        <>
        <StartupNavbar/>
        <section className="bg-home startup-wrapper d-flex align-items-center overflow-hidden" id="home">
            <div className="bg-overlay bg-transparent" id="overlay" style={{backgroundImage:`url(${bgImg})`}}></div>
            <div className="container">
                <div className="row mt-5">
                    <div className="col-12">
                        <div className="title-heading">
                            <img src={logo36} alt=""/>
                            <h4 className="display-5 fw-bold my-4">Build, Grow, And <br/> Manage Your Brand</h4>
                            <p className="text-muted para-desc mb-0">Start working with Fronter that can provide everything you need to generate awareness, drive traffic, connect.</p>

                            <div className="mt-4">
                                <Link to="#" className="btn btn-primary">Learn More</Link>
                                <Link to="#!" onClick={() => setOpen(true)} className="btn btn-icon btn-pills btn-primary lightbox ms-2"><FiVideo className="fea icon-sm"/></Link><span className="fw-normal align-middle ms-2">Watch Now</span>
                            </div>
                            <ModalVideo
                            channel="youtube"
                            youtube={{ mute: 0, autoplay: 0 }}
                            isOpen={isOpen}
                            videoId="yba7hPeTSjk"
                            onClose={() => setOpen(false)} 
                            />
                        </div>
                        
                        <img src={squareDanger} className="img-fluid rounded-pill bg-image-position avatar avatar-md-md mover-2 z-index-0" alt=""/>
                        <img src={squareSuccess} className="img-fluid rounded-md avatar avatar-md-md bg-image-position-2 spin-anything z-index-0" alt=""/>
                    </div>
                </div>
                <img src={squarePrimary} className="img-fluid rounded-pill position-absolute top-0 start-50 translate-middle-x avatar avatar-md-md zoom-in-out z-index-0" alt=""/>
            </div>
        </section>
        <section className="section-two bg-light">
            <div className="container">
                <div className="row">
                    {aboutData.map((item,index) =>{
                        const Icon = item.icon 
                        return(
                        <div className="col-lg-4 col-md-6 mt-4 pt-2" key={index}>
                            <div className="d-flex features feature-primary">
                                <div className="feature-icon text-center rounded">
                                    <Icon className="icon"/>
                                </div>
                                <div className="flex-1 ms-4">
                                    <h5 className="mt-0">{item.title}</h5>
                                    <p className="text-muted mb-0">{item.desc}</p>
                                </div>
                            </div>
                        </div>
                        )
                    })}
                </div>
            </div>
        </section>
        <section className="section" id="about">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-md-6">
                        <div className="about-image position-relative">
                            <img src={about01} className="img-fluid rounded shadow" alt=""/>

                            <div className="about-image-position">
                                <img src={about02} className="img-fluid rounded shadow-lg" alt=""/>
                                <div className="play-icon">
                                    <Link to="#!" onClick={() => setOpen(true)}  className="play-btn lightbox">
                                        <i className="mdi mdi-play text-primary rounded-circle bg-white shadow-lg"></i>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-6 mt-4 pt-2 mt-sm-0 pt-sm-0">
                        <div className="section-title ms-lg-5">
                            <h6 className="text-primary fw-normal">Startup About</h6>
                            <h4 className="title mb-4">We are a Big Team</h4>
                            <p className="text-muted">Launch your campaign and benefit from our expertise on designing and managing conversion centered bootstrap html page.</p>
                            <p className="text-muted mb-0">It seems that only fragments of the original text remain in the Lorem Ipsum texts used today. One may speculate that over the course of time certain letters were added or deleted at various positions within the text. This might also explain why one can now find slightly different versions.</p>
                        
                            <div className="mt-4 pt-2">
                                <Link to="#" className="btn btn-primary">Read More <MdArrowForward/></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section className="section  py-0 mt-5 mt-100" id="cta">
        <Parallax
                blur={{ min: 0, max: 0}}
                bgImage={BgImg02}
                bgImageAlt="the dog"
                strength={500}
                bgportfolioImageize="100%"
                bgStyle={{with:"auto", height:"100%" }}
                style={{position:"absolute", width:"100%" , height:"100%"}}
            >
            </Parallax>
            <div className="bg-overlay"></div>
            <div className="container section">
                <div className="row justify-content-center">
                    <div className="col-12 text-center">
                        <div className="section-title">
                            <h4 className="title title-dark text-white mb-4">Stop leaving money on the table.</h4>
                            <p className="text-light para-dark para-desc mx-auto">Start working with Fronter that can provide everything you need to generate awareness, drive traffic, connect.</p>
                            <Link to="#!" onClick={() => setOpen(true)} className="play-btn border border-light mt-4 lightbox">
                                <FiPlay className="fea icon-ex-md text-white title-dark"/>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section className="section bg-soft-primary" id="features">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-12">
                        <div className="section-title text-center mb-4 pb-2">
                            <h4 className="title text-dark mb-3">Our Services</h4>
                            <p className="text-muted para-dark para-desc mx-auto">Start working with Fronter that can provide everything you need to generate awareness, drive traffic, connect.</p>
                        </div>
                    </div>
                </div>

                <div className="row">
                    {featuresData.map((item,index) => {
                        const Icon = item.icon
                        return(
                            <div className="col-lg-4 col-sm-6 mt-4 pt-2" key={index}>
                                <div className="card features feature-primary feature-clean feature-transition p-4 border-0 shadow rounded overflow-hidden">
                                    <div className="icons text-center rounded">
                                        <Icon className="icon mb-0"/>
                                    </div>
                                    <div className="content mt-4">
                                        <Link to={`/page-service-detail/${item.id}`} className="h5 text-dark title">{item.title}</Link>
                                        <p className="text-muted mt-3">{item.desc}</p>

                                        <Link to={`/page-service-detail/${item.id}`} className="link">Read more <MdArrowForward/></Link>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
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
                    {partnersImg.map((item,index)=>{
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
                    {teamData.map((item,index)=>{
                        return(
                        <div className="col-lg-3 col-md-4 col-12 mt-4 pt-2" key={index}>
                            <div className="card team team-primary text-center">
                                <div className="card-img team-image d-inline-block mx-auto rounded-pill avatar avatar-ex-large overflow-hidden">
                                    <img src={item.image} className="img-fluid" alt=""/>
                                    <div className="card-overlay avatar avatar-ex-large rounded-pill"></div>
    
                                    <ul className="list-unstyled team-social mb-0">
                                        <li className="list-inline-item ms-1"><Link to="#" className="btn btn-sm btn-pills btn-icon"><FiFacebook className="fea icon-sm fea-social"/></Link></li>
                                        <li className="list-inline-item ms-1"><Link to="#" className="btn btn-sm btn-pills btn-icon"><FiInstagram className="fea icon-sm fea-social"/></Link></li>
                                        <li className="list-inline-item ms-1"><Link to="#" className="btn btn-sm btn-pills btn-icon"><FiTwitter className="fea icon-sm fea-social"/></Link></li>
                                    </ul>
                                </div>
    
                                <div className="content mt-3">
                                    <Link to="/page-team-detail" className="text-dark h5 mb-0 title">{item.name}</Link>
                                    <h6 className="text-muted mb-0 fw-normal">{item.title}</h6>
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
        <GetInTuchFour/>
        <SmallFooter/>
        <ScrollTop/>
        </>
    )
}