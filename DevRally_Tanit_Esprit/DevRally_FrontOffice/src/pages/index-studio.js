import React,{useState} from "react";
import { Link } from "react-router-dom";

import studio1 from "../assets/images/studio/01.jpg"
import studio2 from "../assets/images/studio/02.jpg"
import studio3 from "../assets/images/studio/03.jpg"
import work1 from "../assets/images/studio/p01.jpg"
import work2 from "../assets/images/studio/p02.jpg"
import work3 from "../assets/images/studio/p03.jpg"
import work4 from "../assets/images/studio/p04.jpg"
import backgroundImg from "../assets/images/digital/cta.jpg"

import portfolio1 from "../assets/images/studio/work1.jpg"
import portfolio2 from "../assets/images/studio/work2.jpg"
import portfolio3 from "../assets/images/studio/work3.jpg"
import portfolio4 from "../assets/images/studio/work4.jpg"
import portfolio5 from "../assets/images/studio/work5.jpg"
import portfolio6 from "../assets/images/studio/work6.jpg"
import portfolio7 from "../assets/images/studio/work7.jpg"

import StudioNavbar from "../componants/navbar/studioNavbar";
import Partners from "../componants/partners";
import Clients from "../componants/clients";
import FooterTwo from "../componants/footer/footerTwo";
import DigitalProjectTwo from "../componants/digitalProjectTwo";

import TinySlider from "tiny-slider-react";
import '../../node_modules/tiny-slider/dist/tiny-slider.css';

import ModalVideo from 'react-modal-video';
import "../../node_modules/react-modal-video/scss/modal-video.scss"

import CountUp from 'react-countup';

import Masonry, {ResponsiveMasonry} from "react-responsive-masonry"

import { featuresData } from "../data/data";

import {MdArrowForward} from "../assets/icons/vander"
import ScrollTop from "../componants/scrollTop";

const settings = {
    container: '.tiny-one-item',
    items: 1,
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
};

export default function IndexStudio(){
    const [isOpen, setOpen] = useState(false);
    const [activeIndex, setActiveIndex] = useState(1);
    const heroImg = [studio1,studio2, studio3]

   const workData = [
    {
        id:1,
        image:work1,
        desc:"This is required when, for example, the final text is not yet available. Dummy text is also known as 'fill text'. It is said that song composers of the past used dummy texts as lyrics."
    },
    {
        id:2,
        image:work2,
        desc:"This is required when, for example, the final text is not yet available. Dummy text is also known as 'fill text'. It is said that song composers of the past used dummy texts as lyrics."
    },
    {
        id:3,
        image:work3,
        desc:"This is required when, for example, the final text is not yet available. Dummy text is also known as 'fill text'. It is said that song composers of the past used dummy texts as lyrics."
    },
    {
        id:4,
        image:work4,
        desc:"This is required when, for example, the final text is not yet available. Dummy text is also known as 'fill text'. It is said that song composers of the past used dummy texts as lyrics."
    },
   ]

   const portfolioData = [
    {
        image:portfolio1,
        name:'Landrick Personal Portfolio',
        title:"Creative",
        link:'https://1.envato.market/landrick',
        proclass:'portfolio portfolio-primary'
    },
    {
        image:portfolio2,
        name:'Fronter Minimal Portfolio',
        title:"Minimal",
        link:'https://1.envato.market/fronter-react',
        proclass:'portfolio portfolio-success'
    },
    {
        image:portfolio3,
        name:'Cryptor NFT Market',
        title:"Crypto",
        link:'https://1.envato.market/cryptor',
        proclass:'portfolio portfolio-danger'
    },
    {
      image:portfolio5,
      name:'Landrick Constuction',
      title:"Corporate",
      link:'https://1.envato.market/landrick',
      proclass:'portfolio portfolio-warning'
  },
    {
        image:portfolio4,
        name:'Landrick Portfolio',
        title:"Portfolio",
        link:'https://1.envato.market/landrick',
        proclass:'portfolio portfolio-info'
    },
  
    {
        image:portfolio6,
        name:'Fronter SEO',
        title:"SEO",
        link:'https://1.envato.market/fronter-react',
        proclass:'portfolio portfolio-primary'
    },
    {
        image:portfolio7,
        name:'Cryptor NFT Market',
        title:"Crypto",
        link:'https://1.envato.market/cryptor',
        proclass:'portfolio portfolio-success'
    },
    {
        image:portfolio3,
        name:'Cryptor NFT Market',
        title:"Crypto",
        link:'https://1.envato.market/cryptor',
        proclass:'portfolio portfolio-danger'
    },
   
   ]
    return(
        <>
        <StudioNavbar/>
        <section className="bg-half-170 bg-soft-primary studio-wrapper d-table w-100 overflow-hidden" id="home">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-7 col-md-7">
                        <div className="title-heading mt-4 me-lg-5">
                            <h1 className="display-5 fw-semibold text-dark mb-3">Bigger, Bolder <br/> <span className="text-primary">& Better</span></h1>
                            <p className="para-desc text-muted">Launch your campaign and benefit from our expertise on designing and managing conversion centered bootstrap html page.</p>
                            <div className="mt-4 pt-2">
                                <Link to="#" className="btn btn-primary rounded-0">Company <MdArrowForward/></Link>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-5 col-md-5 mt-4 pt-2 mt-sm-0 pt-sm-0">
                        <div className="position-relative">
                            <div className="tiny-one-item studio-img">
                                <TinySlider settings={settings}>
                                    {heroImg.map((item,index)=>{
                                            return(
                                                <div className="tiny-slide" key={index}>
                                                    <div className="m-2 mx-3">
                                                        <img src={item} className="img-fluid" alt=""/>
                                                    </div>
                                                </div>
                                            )
                                        })}
                                </TinySlider>
                                
                            </div>

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
            </div>
        </section>

        <section className="section pt-5">
            <div className="container">
               <Partners/>
            </div>
            <div className="container mt-100 mt-60" id="features">
                <div className="row align-items-end">
                    <div className="col-lg-9 col-md-9">
                        <div className="section-title">
                            <h4 className="title">We create world-class <br/> web design, and <br/> branding.</h4>
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-3 mt-4 mt-sm-0">
                        <div className="text-md-end">
                            <Link to="#" className="btn btn-link primary text-muted h6">Read More <span className="h5 mb-0 ms-1"><MdArrowForward/></span></Link>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-3 order-2 order-sm-1 mt-4 pt-2">
                        <div className="row sticky-bar">
                            <div className="col-md-12 col">
                                <div className="counter-box position-relative">
                                    <h1 className="mb-0 fw-bold text-primary"><CountUp start={0} end={11} className="counter-value"/>+</h1>
                                    <span className="counter-head fw-normal h6">Designers & <br/> developers</span>
                                </div>
                            </div>
        
                            <div className="col-md-12 col mt-md-4">
                                <div className="counter-box position-relative">
                                    <h1 className="mb-0 fw-bold text-primary"><CountUp start={0} end={5} className="counter-value"/></h1>
                                    <span className="counter-head fw-normal h6">Years of <br/> Experience</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-9 order-1 order-sm-2">
                        <div className="row">
                            {featuresData.map((item,index)=>{
                                const Icon = item.icon
                                return(
                                    <div className="col-sm-6 mt-4 pt-2" key={index}>
                                        <div className="features feature-primary feature-clean p-4 border-0 shadow overflow-hidden">
                                            <div className="icons text-center">
                                                <Icon className="d-block h4 mb-0 icon"/>
                                            </div>
                                            <div className="content mt-4">
                                                <Link to={`/page-service-detail/${item.id}`} className="h5 text-dark title">{item.title}</Link>
                                                <p className="text-muted mt-3">{item.desc}</p>
                
                                                <Link to={`/page-service-detail/${item.id}`} className="link">Read more<MdArrowForward/></Link>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })}
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
                                <div className="bg-half-260 -bg d-table w-100 rounded "  style={{backgroundImage:`url(${backgroundImg})`, }} >
                               
                                </div>
                                <div className="play-icon">
                                    <Link to="#!" onClick={() => setOpen(true)} className="play-btn lightbox">
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
                                                    <Link to="#" className="text-white title-dark">Read More <MdArrowForward/></Link>
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

        <section className="section bg-light">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-12">
                        <div className="section-title text-center mb-4 pb-2">
                            <h6 className="text-primary fw-normal">How do we work?</h6>
                            <h4 className="title mb-4">It's all about the <br/> people, and process.</h4>
                            <p className="text-muted para-desc mb-0 mx-auto">Launch your campaign and benefit from our expertise on designing and managing conversion centered bootstrap html page.</p>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-4 mt-4 pt-2">
                        <ul className="nav nav-pills nav-justified flex-column bg-white rounded-0 shadow p-3 mb-0 sticky-bar" id="pills-tab" role="tablist">
                            <li className="nav-item">
                                <Link to="#" className={activeIndex === 1 ? 'nav-link rounded-0 active' : 'nav-link rounded-0' } onClick={()=>setActiveIndex(1)} >
                                    <div className="text-center py-1">
                                        <h6 className="fw-normal mb-0">Project Strategy</h6>
                                    </div>
                                </Link>
                            </li>
                            
                            <li className="nav-item mt-2">
                                <Link to="#" className={activeIndex === 2 ? 'nav-link rounded-0 active' : 'nav-link rounded-0' } onClick={()=>setActiveIndex(2)} >
                                    <div className="text-center py-1">
                                        <h6 className="fw-normal mb-0">UX Research and Concept</h6>
                                    </div>
                                </Link>
                            </li>
                            
                            <li className="nav-item mt-2">
                                <Link to="#" className={activeIndex === 3 ? 'nav-link rounded-0 active' : 'nav-link rounded-0' } onClick={()=>setActiveIndex(3)}>
                                    <div className="text-center py-1">
                                        <h6 className="fw-normal mb-0">Creative Front-End</h6>
                                    </div>
                                </Link>
                            </li>
                            
                            <li className="nav-item mt-2">
                                <Link to="#" className={activeIndex === 4 ? 'nav-link rounded-0 active' : 'nav-link rounded-0' } onClick={()=>setActiveIndex(4)}>
                                    <div className="text-center py-1">
                                        <h6 className="fw-normal mb-0">Content Strategy</h6>
                                    </div>
                                </Link>
                            </li>
                        </ul>
                    </div>

                    <div className="col-md-8 col-12 mt-4 pt-2">
                        <div className="tab-content" id="pills-tabContent">
                            {workData.map((item,index)=>{
                                return(
                                    <div key={index}>
                                        {activeIndex === item.id ?
                                            <div className="tab-pane fade bg-white show  active p-4 rounded-0 shadow" key={index}>
                                                <img src={item.image} className="img-fluid rounded-0 shadow" alt=""/>
                                                <div className="mt-4">
                                                    <p className="text-muted">{item.desc}</p>
                                                    <Link to="" className="text-primary">See More <MdArrowForward/></Link>
                                                </div>
                                            </div> :'' }
                                    </div>
                                   
                                )
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section className="section" id="portfolio">
            <div className="container">
                <div className="row">
                    <div className="col picture-item">
                        <div className="section-title mb-4 pb-2">
                            <h6 className="text-primary fw-normal">Portfolio</h6>
                            <h4 className="title mb-4">Read some amazing <br/> case studies.</h4>
                            <p className="text-muted para-desc mb-0">Launch your campaign and benefit from our expertise on designing and managing conversion centered bootstrap html page.</p>
                        </div>
                    </div>
                </div>
                <ResponsiveMasonry
                columnsCountBreakPoints={{350: 1, 750: 2, 900: 3}}
            >
                <Masonry>
                {portfolioData.map((item,index) => {
                        return(
                            <div className="picture-item mt-4 pt-2 mx-3" key={index}>
                                <div className={item.proclass}>
                                    <div className="position-relative">
                                        <div className="shadow p-4 pb-0 img-bg">
                                            <img src={item.image} className="img-fluid" alt=""/>
                                        </div>
                                    </div>

                                    <div className="pt-3 px-2">
                                        <h5 className="mb-1 fw-normal"><Link to={item.link} target="_blank" className="text-dark title">Landrick Personal Portfolio</Link></h5>
                                        <h6 className="text-muted fw-normal tag mb-0">Creative</h6>
                                    </div>                            
                                </div>
                            </div>
                        )
                    })}
                </Masonry>
            </ResponsiveMasonry>

                <div className="row justify-content-center">
                    <div className="co-12 mt-4">
                        <div className="text-md-center">
                            <Link to="#" className="btn btn-link primary h6">Read More <span className="h5 mb-0 ms-1"><MdArrowForward/></span></Link>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container mt-100 mt-60" id="review">
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

            <DigitalProjectTwo/>
        </section>
        <FooterTwo/>
        <ScrollTop/>
        </>
    )
}