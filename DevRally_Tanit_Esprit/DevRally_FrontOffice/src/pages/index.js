import React from "react";
import { Link } from "react-router-dom";

import react from "../assets/images/live/react.png"
import bootstrap from "../assets/images/live/bootstrap2.png"
import reactbootstrap from "../assets/images/live/react-bootstrap.png"
import scss from "../assets/images/live/scss2.png"
import css from "../assets/images/live/css2.png"
import js from "../assets/images/live/js.png"
import heroImg from "../assets/images/live/hero.png"
import backgroundImg from "../assets/images/live/home-shape.png"

import business from "../assets/images/demos/business.png"
import digital from "../assets/images/demos/digital-agency.png"
import startup from "../assets/images/demos/startup.png"
import saas from "../assets/images/demos/saas.png"
import marketing from "../assets/images/demos/marketing.png"
import crypto from "../assets/images/demos/crypto.png"
import coworking from "../assets/images/demos/cowork.png"
import gym from "../assets/images/demos/gym.png"
import resto from "../assets/images/demos/restaurant.png"
import job from "../assets/images/demos/job.png"
import blog from "../assets/images/demos/blog.png"
import personal from "../assets/images/demos/personal.png"
import portfolio from "../assets/images/demos/portfolio.png"
import portfolioAgency from "../assets/images/demos/portfolio-agency.png"
import studio from "../assets/images/demos/studio.png"
import photography from "../assets/images/demos/photography.png"
import logo80 from "../assets/images/logo-icon-80.png"

import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';

import {FiAirplay,PiBrowsersBold, FiEye, BsBootstrapFill, BiWater,FiMoon, TbIcons,BiCube, BiLogoSass,FiSettings,BsFillFileEarmarkImageFill,FiCamera,FaGooglePlay,FiGitCommit,BsCode,MdUpdate,RiUserHeartFill,BiLogoReact} from "../assets/icons/vander"

import Navbar from "../componants/indexJs/navbar";
import Footer from "../componants/indexJs/footer";
import ScrollTop from "../componants/scrollTop";

import { TypeAnimation } from 'react-type-animation';

export default function Index(){

    const templateData =[
        {
            image:business,
            title:"BUSINESS",
            link:'/index-business'
        },
        {
            image:digital,
            title:"DIGITAL AGENCY",
            link:'/index-digital-agency'
        },
        {
            image:startup,
            title:"STARTUP",
            link:"/index-startup"
        },
        {
            image:saas,
            title:"SAAS",
            link:"/index-saas"
        },
        {
            image:marketing,
            title:"MARKETING",
            link:"/index-marketing"
        },
        {
            image:crypto,
            title:"CRYPTOCURRENCY",
            link:"/index-cryptocurrency"
        },
        {
            image:gym,
            title:"GYM & FITNESS",
            link:"/index-gym"
        },
        {
            image:resto,
            title:"RESTAURANT",
            link:"/index-restaurant"
        },
        {
            image:job,
            title:"JOB & CAREERS",
            link:"/index-job",
            tag1:"Onepage & Multi-use"
        },
        {
            image:personal,
            title:"PERSONAL",
            link:"/index-personal"
        },
        {
            image:portfolio,
            title:"PORTFOLIO",
            link:"/index-portfolio"
        },
        {
            image:portfolioAgency,
            title:"PORTFOLIO AGENCY",
            link:"/index-portfolio-agency"
        },
        {
            image:studio,
            title:"STUDIO",
            link:"/index-studio"
        },
        {
            image:business,
            title:"BUSINESS",
            link:"/index-multi-business",
            tag1:"MULTI-USE"
        },
        {
            image:photography,
            title:"PHOTOGRAPHY",
            link:"/index-photography",
            tag1:"MULTI-USE"
        },
        {
            image:coworking,
            title:"CO-WORKING SPACE",
            link:"/index-co-working",
        },
        {
            image:blog,
            title:"CMINIMAL BLOG",
            link:"/index-blog",
            tag1:"MULTI-USE",
        },
    ]
    const featuresData = [
        {
            icon:BiLogoReact,
            title:'React Js 18.2.0'
        },
        {
            icon:BsBootstrapFill,
            title:'Bootstrap 5.3.2'
        },
        {
            icon:BiLogoSass,
            title:'Built With SCSS'
        },
        {
            icon:FiAirplay,
            title:'Fully Responsive'
        },
        {
            icon:PiBrowsersBold,
            title:'Browser Compatibility'
        },
        {
            icon:FiEye,
            title:'Retina Ready'
        },
        {
            icon:BiWater,
            title:'Parallax Demos'
        },
        {
            icon:FiMoon,
            title:'Dark Supported Theme'
        },
        {
            icon:TbIcons,
            title:'React Icons'
        },
        {
            icon:BiCube,
            title:'Material Design Icon'
        },
        {
            icon:FiSettings,
            title:'Easy to customize'
        },
        {
            icon:BsFillFileEarmarkImageFill,
            title:'Free Illustrator Image'
        },
        {
            icon:FiCamera,
            title:'Free Images'
        },
        {
            icon:FaGooglePlay,
            title:'Free Google Fonts'
        },
        {
            icon:FiGitCommit,
            title:'Well Commented Code'
        },
        {
            icon:BsCode,
            title:'Clean Code'
        },
        {
            icon:MdUpdate,
            title:'Free Updates'
        },
        {
            icon:RiUserHeartFill,
            title:'Developer Friendly'
        },
    ]
    return(
        <>
        <Navbar navClass="defaultscroll sticky" manuClass="navigation-menu nav-right" smallButton={false}/>

        <section className="bg-half-170 pb-0 d-table w-100 bg-soft-primary" style={{backgroundImage:`url(${backgroundImg})`}}  id="home">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-12 text-center">
                        <div className="title-heading">
                            <img src={logo80} alt=""/>
                            <h4 className="display-6 text-dark mt-4 mb-3">Built For 
                            <TypeAnimation
                                sequence={[
                                    'Business',1000,
                                    'Startups',1000,
                                    'Digital Agency', 1000,
                                    'Minimal Blog',1000,
                                    'Gym & Fitness',1000,
                                    'Cryptocurrency',1000,
                                    'Jobs & Careers',1000,
                                    'Personal',1000,
                                    'Portfolio',1000,
                                    'Restaurant',1000,
                                    'Agency',1000,
                                    'Marketing',1000,
                                    'Parallax',1000,
                                    'Onepage uses',1000,
                                    'Multi uses',1000,
                                ]}
                                wrapper="span"
                                speed={10}
                                className="typewrite text-primary ps-2"
                                repeat={Infinity}
                                />
                            
                            </h4>
                            <p className="para-desc text-muted mx-auto mb-0">Start working with Fronter one page and multipurpose parallax template that can provide everything you need.</p>

                            <div className="mt-5 d-md-block d-none position-relative" style={{zIndex: "1"}}>
                                <OverlayTrigger placement="bottom" overlay={<Tooltip>React Js</Tooltip>}>
                                    <Link to="#"><img src={react} className="img-fluid avatar avatar-small my-2 my-sm-0 mx-2 p-2 bg-white rounded-circle shadow" alt=""/></Link>
                                </OverlayTrigger>
                                <OverlayTrigger placement="bottom" overlay={<Tooltip>Bootstrap 5</Tooltip>}>
                                    <Link to="#"><img src={bootstrap} className="img-fluid avatar avatar-small my-2 my-sm-0 mx-2 p-2 bg-white rounded-circle shadow" alt=""/></Link>
                                </OverlayTrigger>
                                <OverlayTrigger placement="bottom" overlay={<Tooltip>React Bootstrap</Tooltip>}>
                                    <Link to="#"><img src={reactbootstrap} className="img-fluid avatar avatar-small my-2 my-sm-0 mx-2 p-2 bg-white rounded-circle shadow" alt=""/></Link>
                                </OverlayTrigger>
                                <OverlayTrigger placement="bottom" overlay={<Tooltip>SASS</Tooltip>}>
                                    <Link to="#"><img src={scss} className="img-fluid avatar avatar-small my-2 my-sm-0 mx-2 p-2 bg-white rounded-circle shadow" alt=""/></Link>
                                </OverlayTrigger>
                                <OverlayTrigger placement="bottom" overlay={<Tooltip>CSS</Tooltip>}>
                                    <Link to="#"><img src={css} className="img-fluid avatar avatar-small my-2 my-sm-0 mx-2 p-2 bg-white rounded-circle shadow" alt=""/></Link>
                                </OverlayTrigger>
                                <OverlayTrigger placement="bottom" overlay={<Tooltip>Javascript</Tooltip>}>
                                    <Link to="#"><img src={js} className="img-fluid avatar avatar-small my-2 my-sm-0 mx-2 p-2 bg-white rounded-circle shadow" alt=""/></Link>
                                </OverlayTrigger>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container-fluid">
                <div className="row">
                    <div className="col-12 px-0">
                        <div className="live-preview mt-4">
                            <img src={heroImg} alt="" className="img-fluid position-relative border-bottom"/>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section className="section" id="landing">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-12">
                        <div className="section-title mb-4 mb-md-5 text-center">
                            <h4>Template Demos</h4>
                        </div>
                    </div>
                </div>

                <div className="row">
                    {templateData.map((item,index)=>{
                        return(
                            <div className="col-md-6 col-12 mt-5" key={index}>
                                <div className="text-center">
                                    <div className="demos-box rounded-md shadow-md text-center border-0 overflow-hidden">
                                        <Link to={item.link} target="_blank">
                                            <img src={item.image} className="img-fluid" alt="demo-img"/>
                                        </Link>
                                    </div>
                                    <h6 className="title text-uppercase mt-4">{item.title} {item?.tag1 ? <span className="badge rounded-lg bg-warning ms-2">{item.tag1}</span> :""} </h6>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>

        <section className="section bg-light" id="features">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-12">
                        <div className="section-title mb-4 text-center">
                            <h4>Template Features</h4>
                        </div>
                    </div>
                </div>

                <div className="row">
                    {featuresData.map((item, index) =>{
                        const Icon = item.icon
                        return(
                            <div className="col-lg-3 col-md-6 mt-4 pt-2" key={index}>
                                <div className="d-flex align-items-center features feature-primary">
                                    <div className="feature-icon text-center rounded">
                                        <Icon className=" h4 icon mb-0"/>
                                    </div>
                                    <div className="flex-1 ms-3">
                                        <h6 className="mt-0">{item.title}</h6>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
        <Footer/>
        <ScrollTop/>
        </>
    )
}