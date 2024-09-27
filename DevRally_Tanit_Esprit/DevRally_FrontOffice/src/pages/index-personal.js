import React,{useState} from "react";
import { Link } from "react-router-dom";

import Background from "../assets/images/personal/hero-overlay.png"
import aboutImg from "../assets/images/personal/hero.jpg"
import dots from "../assets/images/svg/dots.svg"
import ShreeLogo from "../assets/images/brands/shree-logo.png"
import google from "../assets/images/brands/google-logo.png"
import lenovo from "../assets/images/brands/lenovo-logo.png"
import circle from "../assets/images/brands/circle-logo.png"
import cta from "../assets/images/personal/cta.jpg"

import PersonalNavbar from "../componants/navbar/personalNavbar";
import GetInTuchTwo from "../componants/getInTuchTwo";
import SmallFooter from "../componants/footer/smallFooter";
import ScrollTop from "../componants/scrollTop";

import { TypeAnimation } from 'react-type-animation';

import ModalVideo from 'react-modal-video';
import "../../node_modules/react-modal-video/scss/modal-video.scss"

import { Parallax } from 'react-parallax';
import Lightbox from 'react-18-image-lightbox';
import "react-18-image-lightbox/style.css"

import { partnersImg, portfolioData,portfolioImage } from "../data/data";

import {FiAirplay, FiAperture, FiCamera,FiCompass,FiSettings,FiMessageCircle,MdArrowForward} from "../assets/icons/vander"

export default function IndexPersonal(){
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [open, setIsOpen] = useState(false);
    
    const [isOpen, setOpen] = useState(false);
    
    const handleMovePrev = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex + portfolioImage.length - 1) % portfolioImage.length);
    };

    const handleMoveNext = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % portfolioImage.length);
    };
    const handleImageClick = (index) => {
        setCurrentImageIndex(index);
        setIsOpen(true);
    };
    const currentImage = portfolioImage[currentImageIndex];
    const matchCategory = (category) => {
        setSelectedCategory(category);
    };

    const filteredData = selectedCategory
        ? portfolioData.filter((item) => item.category === selectedCategory)
        : portfolioData;

    const featuresData = [
        {
            icon:FiAirplay,
            title:"UX / UI Design",
            desc:"The phrasal sequence of the Lorem Ipsum text is now so that many DTP programmes can generate"
        },
        {
            icon:FiAperture,
            title:"Ios App Designer",
            desc:"The phrasal sequence of the Lorem Ipsum text is now so that many DTP programmes can generate"
        },
        {
            icon:FiCamera,
            title:"Photography",
            desc:"The phrasal sequence of the Lorem Ipsum text is now so that many DTP programmes can generate"
        },
        {
            icon:FiCompass,
            title:"Graphic Designer",
            desc:"The phrasal sequence of the Lorem Ipsum text is now so that many DTP programmes can generate"
        },
        {
            icon:FiSettings,
            title:"Web Security",
            desc:"The phrasal sequence of the Lorem Ipsum text is now so that many DTP programmes can generate"
        },
        {
            icon:FiMessageCircle,
            title:"24/7 Support",
            desc:"The phrasal sequence of the Lorem Ipsum text is now so that many DTP programmes can generate"
        },
    ]
    return(
        <>
        <PersonalNavbar/>

        <section className="bg-home personal-hero d-flex align-items-center background-effect overflow-hidden z-index-1" id="home">
            <Parallax
                blur={{ min: 0, max: 0}}
                bgImage={Background}
                bgImageAlt="the dog"
                strength={500}
                bgportfolioImageize="100%"
                bgStyle={{with:"auto", height:"100%" }}
                style={{position:"absolute", width:"100%" , height:"100%"}}
            >
            </Parallax>
            <div className="container-fluid position-relative">
                <div className="container position-relative z-index-1">
                    <div className="row mt-5">
                        <div className="col">
                            <div className="title-heading">
                                <div className="row">
                                    <div className="col-lg-4 col-md-6 order-2 order-lg-1 mt-4 mt-sm-0">
                                        <div className="rounded personal-hero-para">
                                            <h5 className="mb-3 sub-title">I'm Professional Web Developer</h5>
                                
                                            <p className="para-desc para mb-0">Obviously I'm a Web Designer. Web Developer with over 3 years of experience.</p>
                                        
                                            <div className="mt-4">
                                                <Link to="#portfolio" className="btn btn-primary">Hire me</Link>
                                            </div>
                                        </div>
                                    </div>
            
                                    <div className="col-lg-4 offset-lg-4 col-md-6 order-1 order-lg-1">
                                        <h4 className="display-3 title fw-bold mb-0">James <br/> 
                                        <TypeAnimation
                                                sequence={[
                                                    // Same substring at the start will only be typed out once, initially
                                                    'Thompson!',
                                                    2000, // wait 1s before replacing "Mice" with "Hamsters"
                                                    'Freelancer',
                                                    2000,
                                                ]}
                                                wrapper="span"
                                                speed={5}
                                                className="typewrite" 
                                                repeat={Infinity}
                                                cursor={false}
                                                />
                                            </h4>                            
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="personal-overlay bg-overlay bg-primary-gradient-overlay"></div>
            <ul className="circles p-0 mb-0"><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li></ul>
        </section>
     

        <div className="position-relative">
            <div className="home-shape-arrow">
                <Link to="#"><i className="mdi mdi-arrow-down arrow-icon text-dark h5 shadow-md"></i></Link>
            </div>
            
            <div className="shape overflow-hidden text-white">
                <svg viewBox="0 0 2880 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 48H1437.5H2880V0H2160C1442.5 52 720 0 720 0H0V48Z" fill="currentColor"></path>
                </svg>
            </div>
        </div>

        <div className="container pt-5">
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

        <section className="section" id="about">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-5 col-md-6">
                        <div className="position-relative">
                            <img src={aboutImg} className="rounded-pill shadow img-fluid" alt=""/>
                            
                            <div className="play-icon">
                                <Link to="#" onClick={() => setOpen(true)} className="play-btn lightbox">
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

                            <div className="position-absolute top-0 start-0 z-index-m-1">
                                <img src={dots} className="avatar avatar-xl-large" alt=""/>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-7 col-md-6 mt-4 mt-sm-0 pt-2 pt-sm-0">
                        <div className="ms-lg-5">
                            <div className="section-title">
                                <span className="badge rounded-pill bg-soft-primary">About Me</span>
                                <h4 className="title mt-2 mb-4">Better Design <br/> Better Experience</h4>
                                <p className="para-desc text-muted pb-0">Obviously I'm a Web Designer. Experienced with all stages of the development cycle for dynamic web projects.</p>
                            </div>

                            <div className="progress-box mt-4">
                                <h6 className="title fw-normal text-muted">WordPress</h6>
                                <div className="progress">
                                    <div className="progress-bar position-relative bg-primary" style={{width:"84%"}}>
                                        <div className="progress-value d-block text-muted h6">84%</div>
                                    </div>
                                </div>
                            </div>
                            <div className="progress-box mt-4">
                                <h6 className="title fw-normal text-muted">Angular / JavaScript</h6>
                                <div className="progress">
                                    <div className="progress-bar position-relative bg-primary" style={{width:"79%"}}>
                                        <div className="progress-value d-block text-muted h6">79%</div>
                                    </div>
                                </div>
                            </div>
                            <div className="progress-box mt-4">
                                <h6 className="title fw-normal text-muted">HTML</h6>
                                <div className="progress">
                                    <div className="progress-bar position-relative bg-primary" style={{width:"95%"}}>
                                        <div className="progress-value d-block text-muted h6">95%</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section className="section bg-light" id="features">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-12">
                        <div className="section-title text-center mb-4 pb-2">
                            <h4 className="title mb-4">What do i offer ?</h4>
                            <p className="para-desc text-muted mx-auto mb-0">Obviously I'm a Web Designer. Experienced with all stages of the development cycle for dynamic web projects.</p>
                        </div>
                    </div>
                </div>

                <div className="row">
                    {featuresData.map((item,index) => {
                        const Icon = item.icon
                        return(
                            <div className="col-lg-4 col-md-6 mt-4 pt-2" key={index}>
                                <div className="card features feature-primary feature-clean feature-transition p-4 py-5 border-0 shadow rounded-md overflow-hidden">
                                    <Icon className="fea icon-lg fea-icon"/>
                                    <div className="content mt-4">
                                        <h5>{item.title}</h5>
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

        <section className="section" id="experience">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-12 text-center">
                        <div className="section-title mb-4 pb-2">
                            <div className="position-relative">
                                <h4 className="title mb-4">Work Experience</h4>
                            </div>
                            <p className="text-muted mx-auto para-desc mb-0">Obviously I'm a Web Designer. Experienced with all stages of the development cycle for dynamic web projects.</p>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-12 mt-4 pt-2">
                        <div className="timeline-page position-relative">
                            <div className="timeline-item">
                                <div className="row">
                                    <div className="col-lg-6 col-md-6 col-sm-6">
                                        <div className="duration date-label-left position-relative text-md-end">
                                            <img src={ShreeLogo} className="rounded-pill avatar avatar-ex-small" alt=""/>
                                            <h5 className="my-2">Self Employed</h5>
                                            <small className="text-muted mb-0">2019-21</small>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-6 col-sm-6 mt-4 mt-sm-0">
                                        <div className="event event-description-right float-left text-start">
                                            <h6 className="title mb-1 text-capitalize">UX / UI Designer</h6>
                                            <p className="timeline-subtitle mt-3 mb-0 text-muted">The generated injected humour, or non-characteristic words etc. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis,</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
            
                            <div className="timeline-item mt-5 pt-4">
                                <div className="row">
                                    <div className="col-lg-6 col-md-6 col-sm-6 order-sm-1 order-2 mt-4 mt-sm-0">
                                        <div className="event event-description-left float-left text-end">
                                            <h6 className="title mb-1 text-capitalize">Sr. UX / UI Designer</h6>
                                            <p className="timeline-subtitle mt-3 mb-0 text-muted">The generated injected humour, or non-characteristic words etc. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis,</p>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-6 col-sm-6 order-sm-2 order-1">
                                        <div className="duration duration-right position-relative">
                                            <img src={google} className="rounded-pill avatar avatar-ex-small" alt=""/>
                                            <h5 className="my-2">Google Tech.</h5>
                                            <small className="text-muted mb-0">2018-19</small>
                                        </div>
                                    </div>
                                </div>
                            </div>
        
                            <div className="timeline-item mt-5 pt-4">
                                <div className="row">
                                    <div className="col-lg-6 col-md-6 col-sm-6 mt-4 mt-sm-0">
                                        <div className="duration date-label-left position-relative text-md-end">
                                            <img src={lenovo} className="rounded-pill avatar avatar-ex-small" alt=""/>
                                            <h5 className="my-2">Lenovo Ltd.</h5>
                                            <small className="text-muted mb-0">2016-18</small>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-6 col-sm-6 mt-4 mt-sm-0">
                                        <div className="event event-description-right float-left text-start">
                                            <h6 className="title mb-1 text-capitalize">Jr. UX / UI Designer</h6>
                                            <p className="timeline-subtitle mt-3 mb-0 text-muted">The generated injected humour, or non-characteristic words etc. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis,</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
            
                            <div className="timeline-item mt-5 pt-4">
                                <div className="row">
                                    <div className="col-lg-6 col-md-6 col-sm-6 order-sm-1 order-2 mt-4 mt-sm-0">
                                        <div className="event event-description-left float-left text-end">
                                            <h6 className="title mb-1 text-capitalize">Front-end Web Designer</h6>
                                            <p className="timeline-subtitle mt-3 mb-0 text-muted">The generated injected humour, or non-characteristic words etc. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis,</p>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-6 col-sm-6 order-sm-2 order-1">
                                        <div className="duration duration-right position-relative">
                                            <img src={circle} className="rounded-pill avatar avatar-ex-small" alt=""/>
                                            <h5 className="my-2">Circle CI</h5>
                                            <small className="text-muted mb-0">2015-16</small>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section className="-bg position-relative overflow-hidden">
            <Parallax
                blur={{ min: 0, max: 0}}
                bgImage={cta}
                bgImageAlt="the dog"
                strength={500}
                bgImageSize="100%"
                bgStyle={{with:"auto", height:"100%" }}
                style={{position:"absolute", width:"100%" , height:"100%"}}
            >
            </Parallax>
            <div className="bg-overlay bg-primary-gradient-overlay"></div>
            <div className="container py-5">
                <div className="row">
                    <div className="col-12 text-center">
                        <div className="section-title">
                            <h4 className="text-light title-dark title mb-2">I Am Available For Freelancer Projects.</h4>
                            <p className="text-light title-dark mx-auto mb-0 para-desc">Obviously I'm a Web Designer. Experienced with all stages of the development cycle for dynamic web projects.</p>
                            <div className="mt-4 pt-2">
                                <Link to="#contact" className="btn btn-warning mouse-down">Hire me <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-chevron-down fea icon-sm"><polyline points="6 9 12 15 18 9"></polyline></svg></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section className="section bg-light" id="project">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-12">
                        <div className="section-title text-center mb-4 pb-2">
                            <h4 className="title mb-4">My Projects</h4>
                            <p className="para-desc text-muted mx-auto mb-0">Obviously I'm a Web Designer. Experienced with all stages of the development cycle for dynamic web projects.</p>
                        </div>
                    </div>
                </div>

                <div className="row justify-content-center">
                    <div className="col-12 my-4 filters-group-wrap text-center">
                        <div className="filters-group">
                            <ul className="container-filter mb-0 categories-filter list-unstyled filter-options h6">
                            
                                <li className={selectedCategory === null ? 'active list-inline-item categories fw-normal position-relative text-dark' : 'list-inline-item categories fw-normal position-relative text-dark'} data-group="all" onClick={() => matchCategory(null)}>All</li>
                                <li className={selectedCategory === 'branding' ? 'active list-inline-item categories fw-normal position-relative text-dark' : 'list-inline-item categories fw-normal position-relative text-dark'} data-group="branding" onClick={() => matchCategory('branding')}>Branding</li>
                                <li className={selectedCategory === 'designing' ? 'active list-inline-item categories fw-normal position-relative text-dark' : 'list-inline-item categories fw-normal position-relative text-dark'} data-group="designing" onClick={() => matchCategory('designing')}>Designing</li>
                                <li className={selectedCategory === 'photography' ? 'active list-inline-item categories fw-normal position-relative text-dark' : 'list-inline-item categories fw-normal position-relative text-dark'} data-group="photography" onClick={() => matchCategory('photography')}>Photography</li>
                                <li className={selectedCategory === 'development' ? 'active list-inline-item categories fw-normal position-relative text-dark' : 'list-inline-item categories fw-normal position-relative text-dark'} data-group="development" onClick={() => matchCategory('development')}>Development</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div id="grid" className="row g-3 row-cols-lg-4 row-cols-md-3 row-cols-sm-2 row-cols-1">
                    {filteredData.map((item,index)=>{
                        return(
                            <div className="col picture-item" data-groups='["branding"]' key={index}>
                                <div className="position-relative portfolio portfolio-primary portfolio-modern rounded-md">
                                    <div className="position-relative port-image">
                                        <div className="rounded-md p-0 overflow-hidden">
                                            <img src={item.image} className="img-fluid shadow" alt=""/>
                                            <div className="icons text-center">
                                                <Link to="#" onClick={() => handleImageClick(item.id)} className="btn btn-icon btn-pills btn-lg lightbox"><FiCamera/></Link>
                                            </div>
                                        </div>
                                    </div>
                                        
                                    <div className="bg rounded-md"></div>
                                </div>
                                <div className="mt-3">
                                    <h6 className="mb-1"><Link to="#" className="text-dark title">{item.name}</Link></h6>
                                    <h6 className="text-muted fw-normal tag mb-0">{item.title}</h6>
                                </div>
                            </div>
                        )
                    })}
                </div>
                {open && (
                    <Lightbox
                        mainSrc={currentImage}
                        prevSrc={portfolioImage[(currentImageIndex + portfolioImage.length - 1) % portfolioImage.length]}
                        nextSrc={portfolioImage[(currentImageIndex + 1) % portfolioImage.length]}

                        onCloseRequest={() => setIsOpen(false)}
                        onMovePrevRequest={handleMovePrev}
                        onMoveNextRequest={handleMoveNext}
                    />
                )}

                <div className="row justify-content-center">
                    <div className="col-12 mt-4 pt-2">
                        <div className="text-center">
                            <Link to="#" className="btn btn-link primary text-muted h6 mb-0">See More <span className="h5 mb-0 ms-1"><MdArrowForward/></span></Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <GetInTuchTwo/>
        <SmallFooter/>
        <ScrollTop/>
        </>
    )
}