import React,{useState} from "react";
import { Link } from "react-router-dom";

import logo from "../assets/images/logo-icon-32.png"
import digital from "../assets/images/digital/02.jpg"
import digital1 from "../assets/images/digital/01.jpg"
import digital3 from "../assets/images/digital/03.jpg"
import digital4 from "../assets/images/digital/04.jpg"
import square from "../assets/images/square/square-warning.png"
import squareSucess from "../assets/images/square/square-success.png"
import bgImg from "../assets/images/digital/bg01.jpg"
import cta from "../assets/images/digital/cta.jpg"

import pro1 from "../assets/images/portfolio/pro1.jpg"
import pro2 from "../assets/images/portfolio/pro2.jpg"
import pro3 from "../assets/images/portfolio/pro3.jpg"
import pro4 from "../assets/images/portfolio/pro4.jpg"
import pro5 from "../assets/images/portfolio/pro5.jpg"
import pro6 from "../assets/images/portfolio/pro6.jpg"

import DigitalNavbar from "../componants/navbar/digitalAgencyNavbat";
import Clients from "../componants/clients";
import FooterThree from "../componants/footer/footerThree";
import DigitalProject from "../componants/digitalProject";
import ScrollTop from "../componants/scrollTop";

import ModalVideo from 'react-modal-video';
import "../../node_modules/react-modal-video/scss/modal-video.scss"

import { Parallax } from 'react-parallax';
import { TypeAnimation } from 'react-type-animation';

import Modal from 'react-bootstrap/Modal';
import {partnersImg} from "../data/data"

import {FiAirplay, RiPresentationLine, AiOutlineMobile,FiCrop,MdArrowForward,FiVideo,MdKeyboardArrowRight} from "../assets/icons/vander"

export default function IndexDigitalAgency(){
    const [isOpen, setOpen] = useState(false);

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const featuresData = [
        {
            icon:FiAirplay,
            title:'Digital Marketing',
            desc:'The phrasal sequence of the Lorem Ipsum text is now so that many DTP programmes can generate',
            background:'card border-0 text-center features feature-success feature-clean'
        },
        {
            icon:RiPresentationLine,
            title:'Video Production',
            desc:'The phrasal sequence of the Lorem Ipsum text is now so that many DTP programmes can generate',
            background:'card border-0 text-center features feature-danger feature-clean'
        },
        {
            icon:AiOutlineMobile,
            title:'Web & Mobile',
            desc:'The phrasal sequence of the Lorem Ipsum text is now so that many DTP programmes can generate',
            background:'card border-0 text-center features feature-info feature-clean'
        },
        {
            icon:FiCrop,
            title:'UX Design',
            desc:'The phrasal sequence of the Lorem Ipsum text is now so that many DTP programmes can generate',
            background:'card border-0 text-center features feature-warning feature-clean'
        },
    ]
    const productData = [
        {
            image: pro1,
            name:'Fronter Hospital',
            title:'Creative',
            price: '$18',
            background:'portfolio portfolio-primary'
        },
        {
            image: pro4,
            name:'Fronter Construction',
            title:'Real Estate',
             price: '$18',
            background:'portfolio portfolio-warning'
        },
        {
            image: pro2,
            name:'Fronter Business',
            title:'Corporate',
             price: '$18',
            background:'portfolio portfolio-success'
        },
        {
            image: pro5,
            name:'Fronter Software',
            title:'Saas & Software',
             price: '$18',
            background:'portfolio portfolio-danger'
        },
        {
            image: pro3,
            name:'Fronter Corporate',
            title:'Corporate',
             price: '$18',
            background:'portfolio portfolio-info'
        }, {
            image: pro6,
            name:'Fronter Insurance',
            title:'Corporate',
             price: '$18',
            background:'portfolio portfolio-primary'
        },
    ]
    return(
        <>
        <DigitalNavbar/>
        <section className="bg-half-170 d-table w-100" id="home">
            <div className="container">
                <div className="row mt-5 align-items-center">
                    <div className="col-lg-5 col-md-6">
                        <div className="title-heading">
                            <img src={logo} alt=""/>
                            <h6 className="text-primary fw-normal mt-4">We are a very dedicated team</h6>
                            <h4 className="heading mb-4">We are a full-service digital agency</h4>
                            <p className="text-muted para-desc mb-0">We collaborate with people, teams, and businesses to develop design systems, strategies, and processes to do a better creative work everyday.</p>
                        
                            <div className="mt-4">
                                <Link to="#!" onClick={() => setOpen(true)}  className="btn btn-icon btn-pills btn-primary lightbox"><FiVideo className="fea icon-sm"/></Link><span className="fw-normal align-middle ms-2">Watch Now</span>
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

                    <div className="col-lg-6 offset-lg-1 col-md-6 mt-4 mt-sm-0 pt-2 pt-sm-0">
                        <div className="row g-3 align-items-center">
                            <div className="col-lg-5 col-6">
                                <div className="row g-3">
                                    <div className="col-lg-12 col-md-12">
                                        <img src={digital} className="img-fluid rounded-md" alt=""/>
                                    </div>
    
                                    <div className="col-lg-12 col-md-12 text-end">
                                        <img src={square} className="avatar avatar-medium img-fluid rounded-md" alt=""/>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-7 col-6">
                                <img src={digital1}className="img-fluid rounded-md" alt=""/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <div className="container">
            <div className="row">
                <div className="col text-center mb-4">
                    <h6 className="fw-normal text-muted">We are very fortunate to work with these amazing partners</h6>
                </div>
            </div>

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
        <section className="section -fluid  overflow-hidden position-relative">
            <Parallax
                blur={{ min: 0, max: 0}}
                bgImage={bgImg}
                bgImageAlt="the dog"
                strength={500}
                bgportfolioImageize="100%"
                bgStyle={{with:"auto", height:"100%" }}
                style={{position:"absolute", width:"100%" , height:"100%"}}
            >
            </Parallax>
            <div className="container py-5 mt-md-5 mt-0">
                <div className="row">
                    <div className="col-lg-4 col-md-6">
                        <div className="card bg-white rounded-md">
                            <div className="card-body">
                                <h6 className="text-primary fw-normal mb-2">Fronter Digital Agency</h6>
                                <h4 className="fw-semibold mb-4">Leading Digital <br/> Business For 
                                <TypeAnimation
                                    sequence={[
                                        'Agency',
                                        2000,
                                        'Software',
                                        2000,
                                        'Technology',
                                        2000,
                                        'Studio',
                                        2000,
                                        'Webapps',
                                        2000,
                                    ]}
                                    wrapper="span"
                                    speed={10}
                                    className="text-primary typewrite ms-1" 
                                    repeat={Infinity}
                                    cursor={false}
                                />
                                
                                 <br/> Solution.</h4>
                                <p className="text-muted mb-0">Certain internet providers exploit the fact that fill text cannot be recognized by automatic search engines - meaningful information cannot be distinguished from meaningless.</p>
                            
                                <div className="mt-4">
                                    <Link to="#!"onClick={handleShow} className="btn btn-primary">Get a project?</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <Modal
                show={show} onHide={handleClose}
                size="md"
                aria-labelledby="contained-modal-title-vcenter"
                centered
                >
            <Modal.Header closeButton>
                <Modal.Title> 
                    <h5 className="modal-title" id="exampleModalCenterTitle">Contact Us </h5>
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <form >
                    <p id="error-msg" className="mb-0"></p>
                    <div id="simple-msg"></div>
                    <div className="row">
                        <div className="col-md-6">
                            <div className="mb-3">
                                <label className="form-label fw-normal">Your Name <span className="text-danger">*</span></label>
                                <input name="name" id="name" type="text" className="form-control" placeholder="Name :"/>
                            </div>
                        </div>

                        <div className="col-md-6">
                            <div className="mb-3">
                                <label className="form-label fw-normal">Your Email <span className="text-danger">*</span></label>
                                <input name="email" id="email" type="email" className="form-control" placeholder="Email :"/>
                            </div> 
                        </div>

                        <div className="col-12">
                            <div className="mb-3">
                                <label className="form-label fw-normal">Subject</label>
                                <input name="subject" id="subject" className="form-control" placeholder="subject :"/>
                            </div>
                        </div>

                        <div className="col-12">
                            <div className="mb-3">
                                <label className="form-label fw-normal">Comments <span className="text-danger">*</span></label>
                                <textarea name="comments" id="comments" rows="4" className="form-control" placeholder="Message :"></textarea>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <div className="d-grid">
                                <button type="submit" id="submit" name="send" className="btn btn-primary">Send Message</button>
                            </div>
                        </div>
                    </div>
                </form>
            </Modal.Body>
        </Modal>

        <section className="section" id="service">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col">
                        <div className="section-title text-center mb-4 pb-2">
                            <h4 className="title mb-4">Agency Features</h4>
                            <p className="text-muted para-desc mb-0 mx-auto">Start working with Fronter that can provide everything you need to generate awareness, drive traffic, connect.</p>
                        </div>
                    </div>
                </div>

                <div className="row">
                    {featuresData.map((item,index) =>{
                        const Icon = item.icon
                        return(
                            <div className="col-lg-3 col-md-6 mt-4 pt-2" key={index}>
                                <div className={item.background}>
                                    <div className="icons bg-lg rounded-lg text-center mx-auto">
                                        <Icon className="d-block icon h2 mb-0"/>
                                    </div>
                                    <div className="content mt-4 pt-2">
                                        <h5 className="mb-3">{item.title}</h5>
                                        <p className="text-muted mb-0">{item.desc}</p>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
            
            <div className="container mt-100 mt-60">
                <div className="row align-items-center">
                    <div className="col-lg-6 col-md-6">
                        <div className="row g-3 align-items-center">
                            <div className="col-lg-7 col-6">
                                <img src={digital3} className="img-fluid rounded-md" alt=""/>
                            </div>
                            
                            <div className="col-lg-5 col-6">
                                <div className="row g-3">
                                    <div className="col-lg-12 col-md-12">
                                        <img src={digital4} className="img-fluid rounded-md" alt=""/>
                                    </div>
    
                                    <div className="col-lg-12 col-md-12">
                                        <img src={squareSucess} className="avatar avatar-medium img-fluid rounded-md" alt=""/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-5 offset-lg-1 col-md-6 mt-4 mt-sm-0 pt-2 pt-sm-0">
                        <div className="section-title">
                            <h6 className="text-primary fw-normal mb-2">Web and mobile development</h6>
                            <h4 className="title mb-4">Analyze your entire market <br/> pricing & stock availability</h4>
                            <p className="text-muted para-desc mb-0">Start working with Fronter that can provide everything you need to generate awareness, drive traffic, connect.</p>
                        
                            <div className="mt-4">
                                <Link to="#!" onClick={handleShow} className="btn btn-primary">Contact us</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section className="section pt-0">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-10 text-center">
                        <div className="video-solution-cta position-relative z-index-1">
                          
                            <div className="position-relative">
                                <img src={cta} className="img-fluid rounded-md shadow-lg" alt=""/>
                                <div className="play-icon">
                                    <Link to="#!" onClick={() => setOpen(true)}  className="play-btn lightbox">
                                        <i className="mdi mdi-play text-primary rounded-circle bg-white shadow-lg"></i>
                                    </Link>
                                </div>
                            </div>
                            <div className="content mt-md-4 pt-md-2">
                                <div className="row justify-content-center">
                                    <div className="col-lg-12 text-center">
                                        <div className="row align-items-center">
                                            <div className="col-md-6 mt-4 pt-2">
                                                <div className="section-title text-md-start">
                                                    <h6 className="text-white-50 fw-normal">Fronter Agency</h6>
                                                    <h4 className="title text-white title-dark mb-0">We are a full-service <br/> digital company</h4>
                                                </div>
                                            </div>

                                            <div className="col-md-6 col-12 mt-4 pt-md-2">
                                                <div className="section-title text-md-start">
                                                    <p className="text-white-50 para-desc">Start working with Fronter that can provide everything you need to generate awareness, drive traffic, connect.</p>
                                                    <Link to="" className="text-white title-dark">Read More <MdArrowForward  className="align-middle"/></Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="feature-posts-placeholder bg-primary"></div>
            </div>
        </section>

        <section className="section pb-0" id="testimonial">
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
        </section>

        <section className="section" id="products">
            <div className="container">
                <div className="row align-items-end">
                    <div className="col-md-8">
                        <div className="section-title text-center text-md-start">
                            <h6 className="text-primary fw-normal">Agency Products</h6>
                            <h4 className="title mb-4">Our Digital Product</h4>
                            <p className="text-muted mb-0 para-desc">Start working with Fronter that can provide everything you need to generate awareness, drive traffic, connect.</p>
                        </div>
                    </div>

                    <div className="col-md-4 mt-4 mt-sm-0">
                        <div className="text-center text-md-end">
                            <Link to="#" className="text-primary h6">See More <MdKeyboardArrowRight className="align-middle"/></Link>
                        </div>
                    </div>
                </div>

                <div className="row" id="grid">
                    {productData.map((item,index) => {
                        return(
                            <div className="col-lg-4 col-md-6 picture-item mt-5 pt-2" key={index}>
                                <div className={item.background}>
                                    <div className="position-relative">
                                        <div className="shadow rounded pt-4 px-4 img-bg">
                                            <img src={item.image} className="img-fluid rounded-top" alt=""/>
                                        </div>
                                    </div>

                                    <div className="d-flex pt-3 px-3 align-items-center">
                                        <div className="flex-1">
                                            <Link to="#" className="title mb-0 h6 d-block text-dark">{item.name}</Link>
                                            <span className="text-muted">{item.title}</span>
                                        </div>

                                        <span className="fs-5 link fw-semibold">{item.price}</span>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>

            <DigitalProject/>
        </section>
        <FooterThree/>
        <ScrollTop/>
        </>
    )
}