import React,{useState} from "react";
import { Link } from "react-router-dom";

import Navbar from "../componants/indexJs/navbar";
import FooterTwo from "../componants/footer/footerTwo";

import {masonaryImage} from "../data/data"

import Lightbox from 'react-18-image-lightbox';
import "react-18-image-lightbox/style.css"

import Masonry, {ResponsiveMasonry} from "react-responsive-masonry"

import {AiOutlineUser, AiOutlineClockCircle, AiOutlineCalendar} from "../assets/icons/vander"
import ScrollTop from "../componants/scrollTop";

export default function PortfolioDetailOne(){
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [open, setIsOpen] = useState(false);

    const handleMovePrev = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex + masonaryImage.length - 1) % masonaryImage.length);
    };

    const handleMoveNext = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % masonaryImage.length);
    };
    const handleImageClick = (index) => {
        setCurrentImageIndex(index);
        setIsOpen(true);
    };
    const currentImage = masonaryImage[currentImageIndex];
    return(
        <>
        <Navbar navClass="defaultscroll sticky" manuClass="navigation-menu nav-right"/>
        <section className="bg-half-170 bg-light d-table w-100">
            <div className="container">
                <div className="row mt-5 justify-content-center">
                    <div className="col-12">
                        <div className="title-heading text-center">
                            <ul className="list-inline">
                                <li className="list-inline-item me-3"><AiOutlineUser className="h5 mb-0"/><Link to="#" className="text-primary"> Mr. Donald Ruffy</Link></li>
                                <li className="list-inline-item text-muted me-3"><AiOutlineCalendar className="h5 text-dark mb-0"/> 19th June 2023</li>
                                <li className="list-inline-item text-muted"><AiOutlineClockCircle className="h5 text-dark mb-0"/> 8 min read</li>
                            </ul>

                            <h5 className="heading fw-semibold sub-heading mb-0">Capsule Wardrobe Essentials <br/> The Leopard Print Coat</h5>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section className="section">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-12">
                        <div className="features-absolute">
                            <div id="grid" className="">
                                <ResponsiveMasonry
                                    columnsCountBreakPoints={{350: 1, 750: 2, 900: 4}}
                                    >
                                    <Masonry>
                                        {masonaryImage.map((item,index) => {
                                            return(
                                                <div className=" picture-item p-2" data-groups='["branding"]' key={index}>
                                                    <div className="card border-0 portfolio portfolio-primary portfolio-grid position-relative d-block overflow-hidden rounded">
                                                        <div className="card-body p-0">
                                                            <Link to="#"  onClick={() => handleImageClick(index)} className="lightbox" title="">
                                                                <img src={item} className="img-fluid" alt=""/>
                                                            </Link>
                                                        </div>
                                                    </div>
                                                </div>
                                            )
                                        })}
                                    </Masonry>
                                </ResponsiveMasonry>
                                
                            </div>
                            {open && (
                                <Lightbox
                                    mainSrc={currentImage}
                                    prevSrc={masonaryImage[(currentImageIndex + masonaryImage.length - 1) % masonaryImage.length]}
                                    nextSrc={masonaryImage[(currentImageIndex + 1) % masonaryImage.length]}

                                    onCloseRequest={() => setIsOpen(false)}
                                    onMovePrevRequest={handleMovePrev}
                                    onMoveNextRequest={handleMoveNext}
                                />
                            )}      
                        </div>
                    </div>
                </div>
                
                <div className="row justify-content-center">
                    <div className="col-lg-8 mt-5 pt-2">
                        <div className="section-title text-center">
                            <h4 className="mb-4">Project Description</h4>
    
                            <p className="text-muted">The most well-known dummy text is the 'Lorem Ipsum', which is said to have originated in the 16th century. Lorem Ipsum is composed in a pseudo-Latin language which more or less corresponds to 'proper' Latin. It contains a series of real Latin words. This ancient dummy text is also incomprehensible, but it imitates the rhythm of most European languages in Latin script. The advantage of its Latin origin and the relative meaninglessness of Lorum Ipsum is that the text does not attract attention to itself or distract the viewer's attention from the layout.</p>
                            <p className="text-muted mb-0">Thus, Lorem Ipsum has only limited suitability as a visual filler for German texts. If the fill text is intended to illustrate the characteristics of different typefaces, it sometimes makes sense to select texts containing the various letters and symbols specific to the output language.</p>
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
                                <Link to="/page-contact-one" className="btn btn-primary">Contact us</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <FooterTwo/>
        <ScrollTop/>
        </>
    )
}