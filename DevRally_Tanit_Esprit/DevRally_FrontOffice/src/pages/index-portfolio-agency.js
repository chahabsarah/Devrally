import React,{useState} from "react";
import { Link } from "react-router-dom";

import background from "../assets/images/digital/bg02.jpg"

import PortfolioAgencyNavbar from "../componants/navbar/portfolioAgencyNavbar";
import ClientsTwo from "../componants/clientsTwo";
import DigitalProjectTwo from "../componants/digitalProjectTwo";
import SmallFooter from "../componants/footer/smallFooter";
import ScrollTop from "../componants/scrollTop";

import { TypeAnimation } from 'react-type-animation';
import { Parallax } from 'react-parallax';
import { blogData } from "../data/data";

import ModalVideo from 'react-modal-video';
import "../../node_modules/react-modal-video/scss/modal-video.scss"

import Lightbox from 'react-18-image-lightbox';
import "react-18-image-lightbox/style.css"

import {FiAirplay,LiaClipboardCheckSolid,BsCreditCard2Back,LiaRulerCombinedSolid,FiChrome,MdWebhook,MdGridView,LuAtom,MdKeyboardArrowRight,FiCamera,MdArrowForward} from "../assets/icons/vander"

import { portfolioData,portfolioImage } from "../data/data";

export default function IndexPortfolioAgency(){
    const [isOpen, setOpen] = useState(false);
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [open, setIsOpen] = useState(false);
    
    
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
            icon :FiAirplay,
            title:'Digital Design',
            desc:'The most well-known which is said to have originated'
        },
        {
            icon :LiaClipboardCheckSolid,
            title:'User Interface',
            desc:'The most well-known which is said to have originated'
        },
        {
            icon :BsCreditCard2Back,
            title:'Photography',
            desc:'The most well-known which is said to have originated'
        },
        {
            icon :LiaRulerCombinedSolid,
            title:'Digital Marketing',
            desc:'The most well-known which is said to have originated'
        },
        {
            icon :FiChrome,
            title:'Branding',
            desc:'The most well-known which is said to have originated'
        },
        {
            icon :MdWebhook,
            title:'Web Design',
            desc:'The most well-known which is said to have originated'
        },
        {
            icon :MdGridView,
            title:'Development',
            desc:'The most well-known which is said to have originated'
        },
        {
            icon :LuAtom,
            title:'Social Marketing',
            desc:'The most well-known which is said to have originated'
        },
    ]

  
    return(
        <>
        <PortfolioAgencyNavbar/>
        <section className="bg-half-170 d-table w-100" id="hero">
            <div className="container">
                <div className="row align-items-end mt-5">
                    <div className="col-lg-9 col-md-9">
                        <div className="title-heading">
                            <h4 className="heading fw-bold mb-4">We are a 
                            <TypeAnimation
                                sequence={[
                                    'Minimalist',
                                    1000,
                                    'Modern',
                                    1000,
                                    'Creator',
                                    1000,
                                    'Professional',
                                    1000
                                ]}
                                wrapper="span"
                                speed={10}
                                repeat={Infinity}
                                className="text-primary typewrite ms-1"
                                />
                             </h4>
                            <p className="text-muted para-desc mb-0">Fronter is a Creative Agency & Startup Studio that provides Digital Products and Services turns to focus on client success.</p>
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-3 mt-4 mt-sm-0">
                        <div className="text-md-end">
                            <Link to="#" className="btn btn-pills btn-primary">Read More <span className="h5 mb-0 ms-1"><MdArrowForward className="align-middle"/></span></Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section className=" position-relative">
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
            <div className="bg-overlay"></div>
            <div className="bg-half-260">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="position-relative">
                                <div className="play-icon">
                                    <Link to="#!" onClick={() => setOpen(true)}className="play-btn lightbox">
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
                </div>
            </div>
        </section>
        <section className="section" id="services">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-12">
                        <div className="section-title text-center mb-4 pb-2">
                            <h4 className="title mb-4">What we offer ?</h4>
                            <p className="text-muted mx-auto para-desc mb-0">Fronter is a Creative Agency & Startup Studio that provides Digital Products and Services turns to focus on client success.</p>
                        </div>
                    </div>
                </div>

                <div className="row">
                    {featuresData.map((item,index) => {
                        const Icon = item.icon
                        return(
                        <div className="col-lg-3 col-md-6 col-12 mt-5" key={index}>
                            <div className="card border-0 text-center features feature-primary feature-clean">
                                <div className="icons bg-lg text-center rounded-lg mx-auto">
                                    <Icon className="icon mb-0"/>
                                </div>
    
                                <div className="content mt-4 pt-2">
                                    <h5><Link to="#" className="title text-dark">{item.title}</Link></h5>
                                    <p className="text-muted">{item.desc}</p>
                                    <Link to="#" className="text-primary">Read More <MdKeyboardArrowRight className="align-middle"/></Link>
                                </div>
                            </div>
                        </div>
                        )
                    })}
                </div>
            </div>
        </section>
        <section className="section bg-soft-primary" id="work">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-12">
                        <div className="section-title text-center mb-4 pb-2">
                            <h4 className="title text-dark mb-4">Latest Works</h4>
                            <p className="text-muted mx-auto para-desc mb-0">Fronter is a Creative Agency & Startup Studio that provides Digital Products and Services turns to focus on client success.</p>
                        </div>
                    </div>
                </div>

                <div className="row justify-content-center mt-4 pt-2">
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
                <div id="grid" className="row g-4 row-cols-lg-4 row-cols-md-3 row-cols-sm-2 row-cols-1">
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
                
                <div className="row text-center">
                    <div className="col-12 mt-4 pt-2">
                        <Link to="#" className="btn btn-pills btn-soft-primary">See works</Link>
                    </div>
                </div>
            </div>
        </section>
        <section className="section" id="review">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-12 text-center">
                        <div className="section-title mb-4 pb-2">
                            <h4 className="title mb-4">Client's Review</h4>
                            <p className="text-muted para-desc mb-0 mx-auto">Fronter is a Creative Agency & Startup Studio that provides Digital Products and Services turns to focus on client success.</p>
                        </div>
                    </div>
                </div>
                <ClientsTwo position={false}/>
            </div>

             <div className="container mt-100 mt-60" id="blog">
                <div className="row justify-content-center">
                    <div className="col-12">
                        <div className="section-title text-center mb-4 pb-2">
                            <h4 className="title mb-4">Recent Articles</h4>
                            <p className="text-muted mx-auto para-desc mt-4">Fronter is a Creative Agency & Startup Studio that provides Digital Products and Services turns to focus on client success.</p>
                        </div>
                    </div>
                </div>

                <div className="row">
                    {blogData.slice(0,3).map((item, index) => {
                        return(
                        <div className="col-lg-4 col-md-6 col-12 mt-4 pt-2" key={index}>
                            <div className="card border-0 blog blog-primary shadow rounded">
                                <div className="card-body p-4">
                                    <ul className="list-unstyled d-flex justify-content-between mb-4">
                                        <li><Link to="#" className="link small">{item.tag}</Link></li>
                                        <li className="text-muted small">{item.date}</li>
                                    </ul>
                                    <div className="image position-relative overflow-hidden rounded">
                                        <img src={item.image} className="img-fluid rounded" alt=""/>
                                    </div>
                                    <div className="mt-4">
                                        <h5><Link to="/blog-standard-post" className="h5 title text-dark d-block mb-0">{item.title}</Link></h5>
                                        <p className="text-muted mb-2">{item.desc}</p>
                                        <Link to="/blog-standard-post" className="link">Read more<MdArrowForward className="align-middle ms-1"/></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        )
                    })}
                </div>
            </div> 

           <DigitalProjectTwo/>
        </section>
        <SmallFooter/>
        <ScrollTop/>
        </>
    )
}