import React,{useState} from "react";
import { Link } from "react-router-dom";

import background from "../assets/images/saas-shape.png"
import lapy from "../assets/images/lapy.png"
import square from "../assets/images/square/square-white.png"
import classic03 from "../assets/images/app/classic03.png"
import faqs from "../assets/images/faqs.png"

import SaasNavbar from "../componants/navbar/saasNavbar";
import Partners from "../componants/partners";
import ClientsTwo from "../componants/clientsTwo";
import Footer from "../componants/footer/footer";
import ScrollTop from "../componants/scrollTop";

import ModalVideo from 'react-modal-video';
import "../../node_modules/react-modal-video/scss/modal-video.scss"

import {BiWater,TfiDropbox,MdFilterCenterFocus,AiOutlineFire,MdSchema,PiFlower,AiOutlineCheckCircle,MdKeyboardArrowRight,FiPlay} from "../assets/icons/vander"

import {accordionData2} from "../data/data"


export default function IndexSaas(){
    const [isOpen, setOpen] = useState(false);
    const [activeIndex, setActiveIndex] = useState(0)

    const featureData = [
        {
          icon: BiWater,
          title:"24/7 Support",
          desc:"The phrasal sequence of the Lorem Ipsum text is now so that many generate"
        },
        {
            icon: TfiDropbox,
            title:"Secure Payments",
            desc:"The phrasal sequence of the Lorem Ipsum text is now so that many generate"
          },
          {
            icon: MdFilterCenterFocus,
            title:"Daily Updates",
            desc:"The phrasal sequence of the Lorem Ipsum text is now so that many generate"
          },
          {
            icon: AiOutlineFire,
            title:"Market Research",
            desc:"The phrasal sequence of the Lorem Ipsum text is now so that many generate"
          },
          {
            icon: MdSchema,
            title:"Unrivaled Quality",
            desc:"The phrasal sequence of the Lorem Ipsum text is now so that many generate"
          },
          {
            icon: PiFlower,
            title:"Clean Design",
            desc:"The phrasal sequence of the Lorem Ipsum text is now so that many generate"
          },
    ]

    const pricingData = [ 
        {
            price:"19",
            title:"PERSONAL",
            subTitle : ["Number of People 1 Person", "Unlimited Projects", "Club Access Unlimited Access", "Class Access Fitness Classes", "Enhanced Security"],
            status: false,
        },
        {
            price:"39",
            title:"BUSINESS",
            subTitle : ["Number of People 5 Person", "Unlimited Projects", "Club Access Unlimited Access", "Class Access Fitness Classes", "Enhanced Security"],
            status: true,
        },
        {
            price:"99",
            title:"ENTERPRISE",
            subTitle : ["Number of People 10 Person", "Unlimited Projects", "Club Access Unlimited Access", "Class Access Fitness Classes", "Enhanced Security"],
            status: false,
        },
    ]
    return(
        <>
        <SaasNavbar/>
        <section className="bg-home bg-primary d-flex align-items-center"  id="home" style={{backgroundImage:`url(${background})`}} >
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-12 text-center mt-0 mt-md-5 pt-0 pt-md-5">
                        <div className="title-heading margin-top-100">
                            <h1 className="heading text-white title-dark mb-3">Build your project with Fronter Saas</h1>
                            <p className="para-desc mx-auto text-white-50">Launch your campaign and benefit from our expertise on designing and managing conversion centered bootstrap html page.</p>
                           

                            <Link to="#!" onClick={() => setOpen(true)} className="play-btn border border-light mt-4 lightbox">
                                <FiPlay className="fea icon-ex-md text-white title-dark"/>
                            </Link>
                        </div>
                        <ModalVideo
                            channel="youtube"
                            youtube={{ mute: 0, autoplay: 0 }}
                            isOpen={isOpen}
                            videoId="yba7hPeTSjk"
                            onClose={() => setOpen(false)} 
                        />

                        <div className="home-dashboard">
                            <img src={lapy} alt="" className="img-fluid"/>
                        </div>

                        <img src={square} className="img-fluid rounded-pill position-absolute top-0 start-50 translate-middle-x avatar avatar-md-md zoom-in-out z-index-0" alt=""/>
                        <img src={square} className="img-fluid rounded-pill bg-image-position avatar avatar-md-md mover-2 z-index-0" alt=""/>
                        <img src={square} className="img-fluid rounded-md avatar avatar-md-md bg-image-position-2 spin-anything z-index-0" alt=""/>
                    </div>
                </div>
            </div>
        </section>

        <section className="section mt-0 mt-md-5 overflow-hidden" id="features">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-12 text-center">
                        <div className="section-title mb-4 pb-2">
                            <h4 className="title mb-4">Our solution for your business</h4>
                            <p className="text-muted para-desc mx-auto mb-0">Start working with Fronter that can provide everything you need to generate awareness, drive traffic, connect.</p>
                        </div>
                    </div>
                </div>

                <div className="row">
                    {featureData.map((item,index)=>{
                        const Icon = item.icon 
                        return(
                            <div className="col-lg-4 col-md-6 mt-4 pt-2" key={index}>
                                <div className="d-flex features feature-primary">
                                    <div className="feature-icon rounded text-center">
                                        <Icon className="icon  h4 mb-0"/>
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

            <div className="container mt-100 mt-60">
                <div className="row align-items-center">
                    <div className="col-lg-6 col-md-5">
                        <div className="app-feature-shape-left position-relative">
                            <div className="text-center text-md-start">
                                <img src={classic03} className="img-fluid" alt=""/>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-6 col-md-7 mt-5 mt-sm-0">
                        <div className="section-title">
                            <h1 className="title mb-3">We Build High Performing <br/> Application</h1>
                            <p className="para-desc text-muted">Launch your campaign and benefit from our expertise on designing and managing conversion centered bootstrap v5 html page.</p>
                            <ul className="list-unstyled text-muted">
                                <li className="mb-1"><span className="text-primary h5 me-2"><AiOutlineCheckCircle className="align-middle"/></span>Digital Marketing Solutions for Tomorrow</li>
                                <li className="mb-1"><span className="text-primary h5 me-2"><AiOutlineCheckCircle className="align-middle"/></span>Our Talented & Experienced Marketing Agency</li>
                                <li className="mb-1"><span className="text-primary h5 me-2"><AiOutlineCheckCircle className="align-middle"/></span>Create your own skin to match your brand</li>
                            </ul>
                            <div className="mt-4">
                                <Link to="#" className="mt-3 h6 text-primary">Find Out More <MdKeyboardArrowRight/></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container mt-100 mt-60">
                <div className="row align-items-center">
                    <div className="col-lg-6 col-md-7 order-2 order-md-1 mt-5 mt-sm-0">
                        <div className="section-title">
                            <h1 className="title mb-3">Easy And Best Solution <br/> For Your App</h1>
                            <p className="para-desc text-muted">Launch your Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eveniet eligendi expedita ducimus fuga sed possimus veritatis eum voluptates. Ab ex odio sed atque. Quam delectus, voluptatibus rem harum nihil minus. campaign and benefit from our expertise on designing and managing conversion centered bootstrap v5 html page.</p>
                            <div className="mt-4">
                                <Link to="#" className="btn btn-primary">Learn More <MdKeyboardArrowRight/></Link>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-6 col-md-5 order-1 order-md-2">
                        <div className="app-feature-shape-right position-relative">
                            <div className="text-center text-md-end">
                                <img src={classic03} className="img-fluid" alt=""/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            <div className="container mt-100 mt-60">
                <div className="row justify-content-center">
                    <div className="col-12 text-center">
                        <div className="section-title mb-4 pb-2">
                            <h4 className="title mb-4">More than 10K+ users are use Fronter</h4>
                            <p className="text-muted para-desc mx-auto mb-0">Start working with Fronter that can provide everything you need to generate awareness, drive traffic, connect.</p>
                        </div>
                    </div>
                </div>
             <Partners/>
            </div>
        </section>

        <section className="section bg-primary" id="testi">
            <div className="container mb-4">
                <div className="row justify-content-center">
                    <div className="col-12">
                        <div className="section-title text-center mb-4 pb-2">
                            <h4 className="title text-white title-dark mb-4">What our users says !</h4>
                            <p className="text-white-50 para-desc mx-auto mb-0">Start working with Fronter that can provide everything you need to generate awareness, drive traffic, connect.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section className="section pb-0">
            <div className="container">
               <ClientsTwo/>
            </div>
        </section>
        <section className="section" id="pricing">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-12">
                        <div className="section-title text-center mb-4 pb-2">
                            <h4 className="title mb-4">Pricing Plans</h4>
                            <p className="text-muted para-desc mx-auto mb-0">Start working with Fronter that can provide everything you need to generate awareness, drive traffic, connect.</p>
                        </div>
                    </div>
                </div>

                <div className="row">
                    {pricingData.map((item,index)=>{
                        return(
                            <div className="col-lg-4 col-md-6 col-12 mt-4 pt-2" key={index}>
                                <div className="card pricing price-two rounded text-center border-0 shadow px-4 py-5 bg-white">
                                    <div className="d-flex justify-content-center mb-5">
                                        <span className="mb-0 mt-2">$</span>
                                        <span className="price h1 mb-0">{item.price}</span>
                                        <span className="align-self-end mb-1">/Per Month</span>
                                    </div>

                                    <div className="p-2 bg-soft-primary h6 mx-5 rounded-lg">
                                        <span className="text-uppercase">{item.title}</span>
                                    </div>

                                    <ul className="list-unstyled mb-0 mt-4">
                                        {item.subTitle.map((el,index)=>{
                                            return(
                                                <li className="text-muted mt-3" key={index}>{el}</li>
                                            )
                                        })}
                                    </ul>

                                    <div className="mt-4 pt-2">
                                        {item.status === false ? <Link to="#" className="btn btn-light">Start Now</Link> :
                                        <Link to="#" className="btn btn-primary">Start Now</Link>
                                         }
                                        
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>

            <div className="container mt-100 mt-60">
                <div className="row justify-content-center">
                    <div className="col-12">
                        <div className="section-title mb-4 pb-2 text-center">
                            <h4 className="title mb-3">Frequently Asked Questions</h4>
                            <p className="text-muted mx-auto para-desc mb-0">Our design projects are fresh and simple and will benefit your business greatly. Learn more about our work!</p>
                        </div>
                    </div>
                </div>

                <div className="row align-items-center">
                    <div className="col-md-6 mt-4 pt-2">
                        <img src={faqs} className="img-fluid" alt=""/>
                    </div>

                    <div className="col-md-6 mt-4 pt-2">
                        <div className="accordion" id="buyingquestion">
                            {accordionData2.map((item,index)=>{
                                return(
                                <div className="accordion-item rounded mt-3" key={index}>
                                    <h2 className="accordion-header" id="headingOne">
                                        <button className={`${activeIndex === item.id ? "active accordion-button fw-normal border-0 bg-light rounded shadow" : "accordion-button fw-normal border-0 bg-light rounded shadow collapsed"} `} onClick={() => setActiveIndex(item.id)}>
                                            {item.title}
                                        </button>
                                    </h2>
                                    {activeIndex === item.id ? 
                                        <div id="collapseOne" className="accordion-collapse border-0 collapse show" >
                                            <div className="accordion-body text-muted bg-white">
                                                There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.
                                            </div>
                                        </div> : ""    
                                }
                                </div>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section className="section">
            <div className="bg-overlay bg-gradient-primary"></div>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-12">
                        <div className="section-title text-center">
                            <h4 className="title text-white title-dark mb-3">Get your free quote today?</h4>
                            <p className="para-desc mx-auto text-white-50">Explore and learn more about everything from machine learning and global payments to  scaling your team.</p>

                            <div className="subcribe-form mt-5">
                                <form>
                                    <div className="mb-3">
                                        <input type="email" id="email" className="bg-white rounded-lg opacity-5" required placeholder="Type your mail id..."/>
                                        <button type="submit" className="btn btn-pills btn-primary">Get Started</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <Footer/>
        <ScrollTop/>
        </>
    )
}