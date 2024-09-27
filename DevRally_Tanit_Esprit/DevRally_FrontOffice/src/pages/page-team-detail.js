import React from "react";
import { Link,useParams } from "react-router-dom";

import Navbar from "../componants/indexJs/navbar";
import background from "../assets/images/bg/06.jpg"
import clientImg from "../assets/images/client/10.jpg"

import {FiFacebook, FiInstagram,FiTwitter,FiLinkedin,AiOutlineShoppingCart,AiOutlineDribbble,AiOutlineBehance,AiFillLinkedin,BiLogoFacebook,AiOutlineTwitter,FiMail,AiOutlineFile} from "../assets/icons/vander"

import { teamTwoData } from "../data/data";

import { Parallax } from 'react-parallax';
import FooterFour from "../componants/footer/footerFour";
import ScrollTop from "../componants/scrollTop";

export default function TeamDetail(){
    const params = useParams()
    const id = params.id
    const data = teamTwoData.find((item)=>item.id=== parseInt(id))
    return(
        <>
        <Navbar navClass="defaultscroll sticky" manuClass="navigation-menu nav-right nav-light" logoLight={true}/>
        <section className="position-relative overflow-hidden">
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
            <div className="bg-overlay bg-gradient-overlay-2"></div>
            <div className="bg-half-170 d-table w-100">
                <div className="container">
                    <div className="row mt-5 justify-content-center">
                        <div className="col-12">
                            <div className="title-heading text-center">
                                <p className="text-white-50 para-desc mx-auto mb-0">Team Detail</p>
                                <h5 className="heading fw-semibold mb-0 sub-heading text-white title-dark">{data?.name ? data?.name :"Aliana Rosy"}</h5>
                            </div>
                        </div>
                    </div>

                    <div className="position-middle-bottom">
                        <nav aria-label="breadcrumb" className="d-block">
                            <ul className="breadcrumb breadcrumb-muted mb-0 p-0">
                                <li className="breadcrumb-item"><Link to="/">Fronter</Link></li>
                                <li className="breadcrumb-item active" aria-current="page">Team Detail</li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
        </section>
        <div className="position-relative">
            <div className="shape overflow-hidden text-white">
                <svg viewBox="0 0 2880 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 48H1437.5H2880V0H2160C1442.5 52 720 0 720 0H0V48Z" fill="currentColor"></path>
                </svg>
            </div>
        </div>
        <section className="section">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-5 col-md-6 col-12">
                        <div className="card team team-primary team-two text-center">
                            <div className="card-img team-image d-inline-block mx-auto rounded overflow-hidden">
                                <img src={data?.image ? data?.image : clientImg} className="img-fluid" alt=""/>
                                <div className="card-overlay rounded"></div>

                                <div className="content">
                                    <h5 className="text-white title-dark mb-0">{data?.name ? data?.name :"Aliana Rosy"}</h5>
                                    <h6 className="text-white-50 mb-0 fw-normal mt-1 designation">Designer</h6>

                                    <ul className="list-unstyled team-social mb-0 mt-3">
                                        <li className="list-inline-item ms-1"><Link to="" className="btn btn-sm btn-pills btn-icon"><FiFacebook className="fea icon-sm fea-social"/></Link></li>
                                        <li className="list-inline-item ms-1"><Link to="" className="btn btn-sm btn-pills btn-icon"><FiInstagram className="fea icon-sm fea-social"/></Link></li>
                                        <li className="list-inline-item ms-1"><Link to="" className="btn btn-sm btn-pills btn-icon"><FiTwitter className="fea icon-sm fea-social"/></Link></li>
                                        <li className="list-inline-item ms-1"><Link to="" className="btn btn-sm btn-pills btn-icon"><FiLinkedin className="fea icon-sm fea-social"/></Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-7 col-md-6 col-12 mt-4 pt-2 mt-sm-0 pt-sm-0">
                        <div className="section-title ms-lg-5">
                            <h4 className="title">{data?.name ? data?.name :"Aliana Rosy"}</h4>
                            <h6 className="text-primary fw-normal">Web Designer</h6>
                            <p className="text-muted mt-4">Launch your campaign and benefit from our expertise on designing and managing conversion centered bootstrap html page.</p>
                            <p className="text-muted mb-0">It seems that only fragments of the original text remain in the Lorem Ipsum texts used today. One may speculate that over the course of time certain letters were added or deleted at various positions within the text. This might also explain why one can now find slightly different versions.</p>
                        
                            <ul className="list-unstyled social-icon social mb-0 mt-4">
                                <li className="list-inline-item me-1"><Link to="https://1.envato.market/fronter-react" target="_blank" className="rounded"><AiOutlineShoppingCart className="align-middle"/></Link></li>
                                <li className="list-inline-item me-1"><Link to="https://dribbble.com/shreethemes" target="_blank" className="rounded"><AiOutlineDribbble className="align-middle"/></Link></li>
                                <li className="list-inline-item me-1"><Link to="https://www.behance.net/shreethemes" target="_blank" className="rounded"><AiOutlineBehance className="align-middle"/></Link></li>
                                <li className="list-inline-item me-1"><Link to="http://linkedin.com/company/shreethemes" target="_blank" className="rounded"><AiFillLinkedin className="align-middle"/></Link></li>
                                <li className="list-inline-item me-1"><Link to="https://www.facebook.com/shreethemes" target="_blank" className="rounded"><BiLogoFacebook className="align-middle"/></Link></li>
                                <li className="list-inline-item me-1"><Link to="https://www.instagram.com/shreethemes/" target="_blank" className="rounded"><FiInstagram className="align-middle"/></Link></li>
                                <li className="list-inline-item me-1"><Link to="https://twitter.com/shreethemes" target="_blank" className="rounded"><AiOutlineTwitter className="align-middle"/></Link></li>
                                <li className="list-inline-item me-1"><Link to="mailto:support@shreethemes.in" className="rounded"><FiMail className="align-middle"/></Link></li>
                                <li className="list-inline-item me-1"><Link to="https://forms.gle/QkTueCikDGqJnbky9" target="_blank" className="rounded"><AiOutlineFile className="align-middle"/></Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container mt-100 mt-60">
                <div className="row justify-content-center">
                    <div className="col-12">
                        <div className="section-title text-center">
                            <h6 className="text-primary fw-normal mb-3">Available for freelance projects</h6>
                            <h1 className="title mb-4">Do you have digital project? <br/> Let's talk.</h1>
                            <div className="mt-4">
                                <Link to="/page-contact-two" className="btn btn-primary">Contact us</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <FooterFour/>
        <ScrollTop/>
        </>
    )
}