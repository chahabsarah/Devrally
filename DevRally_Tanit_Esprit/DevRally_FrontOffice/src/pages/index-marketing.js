import React,{useState} from "react"
import { Link } from "react-scroll"

import heroImg from "../assets/images/marketing.png"
import warning from "../assets/images/square/square-warning.png"
import success from "../assets/images/square/square-success.png"
import shape from "../assets/images/shape-image.png"
import revenue from "../assets/images/svg/revenue-graph-colour.svg"
import fetures from "../assets/images/feature.png"
import square from "../assets/images/square/square-primary.png"

import MarketingNavbar from "../componants/navbar/marketingNavbar"
import ClientsThree from "../componants/clientsThree"
import GetInTuchThree from "../componants/getInTuchThree"
import FooterFour from "../componants/footer/footerFour"


import ModalVideo from 'react-modal-video';
import "../../node_modules/react-modal-video/scss/modal-video.scss"

import { accordionData } from "../data/data";

import CountUp from 'react-countup';
import {MdArrowForward,FiCodesandbox,FiSend,FiStar,FiBookmark,FiUsers,FiMessageCircle,AiOutlineCheckCircle} from "../assets/icons/vander"
import ScrollTop from "../componants/scrollTop"


export default function IndexMarketing(){
    const [isOpen, setOpen] = useState(false);
    const [activeIndex, setActiveIndex] = useState(0)

    const counterData = [
        {
            title:"Investment Projects",
            end:"5458"
        },
        {
            title:"Years of Experience",
            end:"15"
        },
        {
            title:"Offices in the World",
            end:"54"
        },
        {
            title:"Successful Cases",
            end:"214"
        },
    ]
   
    return(
        <>
         <MarketingNavbar/>
         <section className="bg-half-170 bg-soft-primary d-flex align-items-center" id="home">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-md-6">
                        <div className="title-heading">
                            <h6 className="fw-normal">Fronter Marketing</h6>
                            <h4 className="heading fw-semibold text-dark mb-4">Increase Your Business With Fronter</h4>
                            <p className="text-muted para-desc mb-0">Launch your campaign and benefit from our expertise on designing and managing conversion centered bootstrap html page.</p>
                        
                            <div className="subcribe-form mt-4 mb-3 pt-2">
                                <form className="ms-0">
                                    <input type="email" id="email2" name="email" className="rounded-pill bg-white-50 border" placeholder="Your Email Address :"/>
                                    <button type="submit" className="btn btn-pills btn-primary">Try it for free<MdArrowForward className="ms-1"/></button>
                                </form>
                            </div>
                            <span className="text-muted">Looking for help? <Link to="#" className="text-primary">Get in touch with us</Link></span>
                        </div>
                    </div>

                    <div className="col-md-6 mt-4 pt-2 mt-sm-0 pt-sm-0">
                        <div className="ms-lg-5">
                            <div className="position-relative">
                                <img src={heroImg} className="img-fluid" alt=""/>
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
            </div>
        </section>
        <section className="py-5 bg-primary">
            <div className="container">
                <div className="row">
                    {counterData.map((item,index)=>{
                        return(
                        <div className="col-md-3 col-6" key={index}>
                            <div className="counter-box position-relative text-center">
                                <h2 className="mb-0 display-2 fw-bold text-white title-dark mt-2 opacity-2"><CountUp className="counter-value" start={0} end={item.end}/></h2>
                                <span className="counter-head fw-normal text-white title-dark position-absolute top-50 start-0 end-0">{item.title}</span>
                            </div>
                        </div>
                        )
                    })}
                </div>
            </div>
        </section>
        <section className="section" id="features">
            <div className="container position-relative">
                <div className="row">
                    <div className="col-lg-8">
                        <div className="section-title mb-4 pb-2">
                            <h4 className="title mb-4">Instant Smart Solutions <br/> With Fronter</h4>
                            <p className="text-muted para-desc mb-0">Launch your campaign and benefit from our expertise on designing and managing conversion centered bootstrap html page.</p>
                        </div>

                        <div className="row">
                            <div className="col-md-6 mt-4 pt-2">
                                <div className="card features feature-primary feature-clean feature-transition p-4 py-5 border-0 shadow rounded-lg overflow-hidden">
                                    <FiCodesandbox className="fea icon-lg fea-icon"/>
                                    <div className="content mt-4">
                                        <h5>User Friendly</h5>
                                        <p className="text-muted mt-3">The phrasal sequence of the Lorem Ipsum text is now so that many DTP programmes can generate</p>
        
                                        <Link to="/page-service-detail" className="link">Read more<MdArrowForward/></Link>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="col-md-6 mt-4 pt-2">
                                <div className="card features feature-primary feature-clean feature-transition p-4 py-5 border-0 shadow rounded-lg overflow-hidden">
                                    <FiSend className="fea icon-lg fea-icon"/>
                                    <div className="content mt-4">
                                        <h5>Super Fast</h5>
                                        <p className="text-muted mt-3">The phrasal sequence of the Lorem Ipsum text is now so that many DTP programmes can generate</p>
        
                                        <Link to="/page-service-detail" className="link">Read more <MdArrowForward/></Link>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="col-md-6 mt-4 pt-2">
                                <div className="card features feature-primary feature-clean feature-transition p-4 py-5 border-0 shadow rounded-lg overflow-hidden">
                                    <FiStar className="fea icon-lg fea-icon"/>
                                    <div className="content mt-4">
                                        <h5>Insightful Analytics</h5>
                                        <p className="text-muted mt-3">The phrasal sequence of the Lorem Ipsum text is now so that many DTP programmes can generate</p>
        
                                        <Link to="/page-service-detail" className="link">Read more <MdArrowForward/></Link>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="col-md-6 mt-4 pt-2">
                                <div className="card features feature-primary feature-clean feature-transition p-4 py-5 border-0 shadow rounded-lg overflow-hidden">
                                    <FiBookmark className="fea icon-lg fea-icon"/>
                                    <div className="content mt-4">
                                        <h5>Highly Rated</h5>
                                        <p className="text-muted mt-3">The phrasal sequence of the Lorem Ipsum text is now so that many DTP programmes can generate</p>
        
                                        <Link to="/page-service-detail" className="link">Read more <MdArrowForward/></Link>
                                    </div>
                                </div>
                            </div>
                        </div>                        
                    </div>

                    <div className="col-lg-4">
                        <div className="row">
                            <div className="col-lg-12 col-md-6 mt-4 pt-2">
                                <div className="card features feature-primary feature-clean feature-transition p-4 py-5 border-0 shadow rounded-lg overflow-hidden">
                                    <FiUsers className="fea icon-lg fea-icon"/>
                                    <div className="content mt-4">
                                        <h5>User Forum Forum</h5>
                                        <p className="text-muted mt-3">The phrasal sequence of the Lorem Ipsum text is now so that many DTP programmes can generate</p>
        
                                        <Link to="/page-service-detail" className="link">Read more <MdArrowForward/></Link>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="col-lg-12 col-md-6 mt-4 pt-2">
                                <div className="card features feature-primary feature-clean feature-transition p-4 py-5 border-0 shadow rounded-lg overflow-hidden">
                                   <FiMessageCircle className="fea icon-lg fea-icon"/>
                                    <div className="content mt-4">
                                        <h5>24/7 Support</h5>
                                        <p className="text-muted mt-3">The phrasal sequence of the Lorem Ipsum text is now so that many DTP programmes can generate</p>
        
                                        <Link to="/page-service-detail" className="link">Read more <MdArrowForward/></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <img src={warning} className="img-fluid rounded-pill bg-image-position" alt=""/>
                <img src={success} className="img-fluid rounded-lg avatar avatar-large bg-image-position-2 spin-anything" alt=""/>
            </div>

            <div className="container mt-100 mt-60">
                <div className="row align-items-center">
                    <div className="col-md-6">
                        <div className="me-lg-5">
                            <img src={shape} className="img-fluid" alt=""/>
                        </div>
                    </div>

                    <div className="col-md-6 mt-4 pt-2 mt-sm-0 pt-sm-0">
                        <div className="section-title">
                            <h6 className="fw-normal text-primary">Fast & Effective</h6>
                            <h4 className="title mb-4">Powerful Digitalization <br/> With Fronter</h4>

                            <p className="text-muted mb-0">Get instant helpful resources about anything on the go, easily implement secure money transfer solutions, boost your daily efficiency, connect to other app users and create your own Fronter network, and much more with just a few taps. commodo consequat. Duis aute irure.</p>
                        
                            <div className="mt-4">
                                <Link to="#" className="btn btn-pills btn-soft-primary">Get Started</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container mt-100 mt-60">
                <div className="row align-items-center">
                    <div className="col-md-6 order-1 order-md-2">
                        <div className="text-lg-end">
                            <img src={revenue} className="img-fluid" alt=""/>
                        </div>
                    </div>

                    <div className="col-md-6 mt-4 pt-2 mt-sm-0 pt-sm-0 order-2 order-md-1">
                        <div className="section-title">
                            <h6 className="fw-normal text-primary">Easy To Track</h6>
                            <h4 className="title mb-4">Fronter Marketing <br/> Analytics For All Expenses</h4>

                            <p className="text-muted">Keep a close track of all your regular expenses with insightful analytics by Fronter. Get graphical representations of your daily spendings, view trendy charts for expenses, pending payments and successful transactions from a single place. Fronter is here to help with all your financial needs.</p>
                        
                            <ul className="list-unstyled text-muted">
                                <li className="mb-1"><span className="text-primary h5 me-2"><AiOutlineCheckCircle className="align-middle"/></span>Digital Marketing Solutions for Tomorrow</li>
                                <li className="mb-1"><span className="text-primary h5 me-2"><AiOutlineCheckCircle className="align-middle"/></span>Our Talented & Experienced Marketing Agency</li>
                                <li className="mb-1"><span className="text-primary h5 me-2"><AiOutlineCheckCircle className="align-middle"/></span>Create your own skin to match your brand</li>
                            </ul>

                            <div className="mt-4">
                                <Link to="#" className="btn btn-pills btn-soft-primary">Get Started</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section className="section bg-light overflow-hidden">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-12">
                        <div className="section-title text-center mb-4 pb-2">
                            <h4 className="title mb-4">See What Our Customers Have To Say</h4>
                            <p className="text-muted para-desc mb-0 mx-auto">Launch your campaign and benefit from our expertise on designing and managing conversion centered bootstrap html page.</p>
                        </div>
                    </div>
                </div>

                <ClientsThree/>
            </div>

            <div className="container mt-100 mt-60">
                <div className="row align-items-center">
                    <div className="col-md-6">
                        <div className="me-lg-5 position-relative">
                            <img src={fetures} className="img-fluid position-relative px-5 z-index-1" alt=""/>
                            <div className="position-absolute top-50 start-50 translate-middle">
                                <img src={square} className="rounded-pill" alt=""/>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-6 mt-4 pt-2 mt-sm-0 pt-sm-0">
                        <div className="section-title">
                            <h6 className="text-primary fw-normal">How it work?</h6>
                            <h4 className="title mb-4">Don't wait. <br/> The time will never be just right.</h4>
                            
                            <div className="accordion mt-4" id="buyingquestion">
                                {accordionData.map((item,index)=>{
                                    return(
                                        <div className="accordion-item rounded shadow mt-2" key={index}>
                                            <h2 className="accordion-header" id="headingOne">
                                                <button className={`${activeIndex === item.id ? "active accordion-button fw-normal border-0 bg-light rounded shadow" : "accordion-button fw-normal border-0 bg-light rounded shadow collapsed"} `} onClick={() => setActiveIndex(item.id)}>
                                                    {item.title}
                                                </button>
                                            </h2>
                                            {activeIndex === item.id ? 
                                                <div id="collapseOne" className="accordion-collapse border-0 collapse show" >
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
        <GetInTuchThree/>
        <div className="container-fluid">
            <div className="row">
                <div className="col-12 p-0">
                    <div className="card map border-0">
                        <div className="card-body p-0">
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d39206.002432144705!2d-95.4973981212445!3d29.709510002925988!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8640c16de81f3ca5%3A0xf43e0b60ae539ac9!2sGerald+D.+Hines+Waterwall+Park!5e0!3m2!1sen!2sin!4v1566305861440!5m2!1sen!2sin" style={{border:"0"}} allowFullScreen title="myFram"></iframe>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <FooterFour/>
        <ScrollTop/>
        </>
    )
}