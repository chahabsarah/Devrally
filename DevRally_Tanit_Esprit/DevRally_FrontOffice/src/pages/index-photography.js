import React,{useEffect,useState} from "react";
import { Link } from "react-router-dom";

import bg1 from "../assets/images/photography/first.jpg"
import bg2 from "../assets/images/photography/thomas-lg.png"
import bg3 from "../assets/images/photography/thomas-sm.png"
import bg4 from '../assets/images/photography/last.png'
import image1 from "../assets/images/photography/01.jpg"
import image2 from "../assets/images/photography/02.jpg"
import image3 from "../assets/images/photography/03.jpg"
import image4 from "../assets/images/photography/04.jpg"
import photographer from "../assets/images/photography/photographer.jpg"
import portfolio1 from "../assets/images/photography/p1.jpg" 
import portfolio2 from "../assets/images/photography/p4.jpg" 
import portfolio3 from "../assets/images/photography/p3.jpg" 
import portfolio4 from "../assets/images/photography/p2.jpg" 
import portfolio5 from "../assets/images/photography/p5.jpg" 
import portfolio6 from "../assets/images/photography/p6.jpg" 

import PhotographyNavbar from "../componants/navbar/photographyNavbar";

import { Parallax } from 'react-parallax';

import Lightbox from 'react-18-image-lightbox';
import "react-18-image-lightbox/style.css"

import Masonry, {ResponsiveMasonry} from "react-responsive-masonry"
import {MdArrowOutward, MdArrowForward,AiOutlineEye} from "../assets/icons/vander"
import PhotographyFooter from "../componants/footer/photographyFooter";
import ScrollTop from "../componants/scrollTop";

export default function IndexPhotography(){
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [open, setIsOpen] = useState(false);
    const portfolioImage = [portfolio1,portfolio2,portfolio3,portfolio4,portfolio5,portfolio6]
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

    useEffect(()=>{
        document.body.classList.add('photography-scss');
    })
   
    return(
        <>
        <PhotographyNavbar/>
        <section className="bg-home d-flex align-items-center position-relative">
            <div className="container-fluid">
                <div className="bg-overlay bg-transparent">
                    <Parallax
                        blur={{ min: 0, max: 0}}
                        bgImage={bg1}
                        bgImageAlt="the dog"
                        strength={700}
                        bgportfolioImageize="100%"
                        bgStyle={{with:"auto", height:"100%" }}
                        style={{position:"absolute", width:"100%" , height:"100%"}}
                    >
                    </Parallax>
                </div>
                <div className="bg-overlay bg-transparent d-md-block d-none" >
                    <Parallax
                        blur={{ min: 0, max: 0}}
                        bgImage={bg2}
                        bgImageAlt="the dog"
                        strength={400}
                        bgportfolioImageize="100%"
                        bgStyle={{with:"auto", height:"100%" }}
                        style={{position:"absolute", width:"100%" , height:"100%"}}
                    >
                    </Parallax>
                </div>
                <div className="bg-overlay bg-transparent d-block d-md-none">
                    <Parallax
                        blur={{ min: 0, max: 0}}
                        bgImage={bg3}
                        bgImageAlt="the dog"
                        strength={400}
                        bgportfolioImageize="100%"
                        bgStyle={{with:"auto", height:"100%" }}
                        style={{position:"absolute", width:"100%" , height:"100%"}}
                    >
                    </Parallax>
                </div>
                <div className="bg-overlay bg-transparent">
                    <Parallax
                        blur={{ min: 0, max: 0}}
                        bgImage={bg4}
                        bgImageAlt="the dog"
                        strength={100}
                        bgportfolioImageize="100%"
                        bgStyle={{with:"auto", height:"100%" }}
                        style={{position:"absolute", width:"100%" , height:"100%",}}
                    >
                    </Parallax>
                </div>
            </div>
            <div className="bg-overlay bg-linear-gradient"></div>
        </section>
        <section className="section">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-12">
                        <div className="section-title text-center mb-4 pb-2">
                            <h4 className="title mb-4">Photography</h4>
                            <p className="text-muted para-desc mx-auto mb-0">As a Freelance Designer & Developer, I am here to make you stand out in the digital world and my passion for design and your vision will ensure a great end result.</p>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-lg-3 col-md-6 col-12 mt-4 pt-2">
                        <div className="photo-phase position-relative">
                            <img src={image1} className="rounded img-fluid" alt=""/>
                            <div className="bg-overlay bg-linear-gradient-2 rounded"></div>
                            <Link to="/photography-about" className="fs-5 text-white title-dark link">Jack Jeffrey <MdArrowOutward/></Link>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-12 mt-lg-5 pt-lg-5 mt-4 pt-2">
                        <div className="photo-phase position-relative">
                            <img src={image2} className="rounded img-fluid" alt=""/>
                            <div className="bg-overlay bg-linear-gradient-2 rounded"></div>
                            <Link to="/photography-portfolio" className="fs-5 text-white title-dark link">Portfolio <MdArrowOutward/></Link>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-12 mt-4 pt-2">
                        <div className="photo-phase position-relative">
                            <img src={image3} className="rounded img-fluid" alt=""/>
                            <div className="bg-overlay bg-linear-gradient-2 rounded"></div>
                            <Link to="/photography-contact" className="fs-5 text-white title-dark link">Contact <MdArrowOutward/></Link>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-12 mt-lg-5 pt-lg-5 mt-4 pt-2">
                        <div className="photo-phase position-relative">
                            <img src={image4} className="rounded img-fluid" alt=""/>
                            <div className="bg-overlay bg-linear-gradient-2 rounded"></div>
                            <Link to="#aboutme" className="fs-5 text-white title-dark link">About Me <MdArrowOutward/></Link>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container-fluid mt-100 mt-60 " id="aboutme">
                <div className="row overflow-hidden position-relative">
                    <Parallax
                        blur={{ min: 0, max: 0}}
                        bgImage={photographer}
                        bgImageAlt="the dog"
                        strength={700}
                        bgportfolioImageize="100%"
                        bgStyle={{with:"auto", height:"100%" }}
                        style={{position:"absolute", width:"100%" , height:"100%"}}
                    >
                    </Parallax>
                    <div className="bg-half-260 rounded" >
                        <div className="bg-overlay bg-linear-gradient-2"></div>
                        <div className="section-title position-absolute bottom-0 text-center end-0 start-0">
                            <h4 className="title text-white title-dark mb-4">Jack Jeffrey</h4>
                        </div>
                    </div>
                </div>

                <div className="container">
                    <div className="row justify-content-center mt-4 pt-2">
                        <div className="col-lg-7">
                            <div className="text-center">
                                <p className="text-muted title-dark fw-semibold">The most well-known dummy text is the 'Lorem Ipsum', which is said to have originated in the 16th century. Lorem Ipsum is composed in a pseudo-Latin language which more or less corresponds to 'proper' Latin. It contains a series of real Latin words.</p>
                                <p className="text-muted">This ancient dummy text is also incomprehensible, but it imitates the rhythm of most European languages in Latin script. The advantage of its Latin origin and the relative meaninglessness of Lorum Ipsum is that the text does not attract attention to itself or distract the viewer's attention from the layout.</p>
                                <p className="text-muted">Moreover, in Latin only words at the beginning of sentences are capitalized; this means that Lorem Ipsum cannot accurately represent, for example, German, in which all nouns are capitalized. Thus, Lorem Ipsum has only limited suitability as a visual filler for German texts</p>
                                <p className="text-muted">If the fill text is intended to illustrate the characteristics of different typefaces, it sometimes makes sense to select texts containing the various letters and symbols specific to the output language.</p>
                                <p className="text-muted mb-0">It seems that only fragments of the original text remain in the Lorem Ipsum texts used today. One may speculate that over the course of time certain letters were added or deleted at various positions within the text. This might also explain why one can now find slightly different versions. Due to the age of the Lorem Ipsum text there are no copyright issues to contend with.</p>
                            
                                <div className="mt-4 pt-2">
                                    <Link to="/photography-about" className="btn btn-link primary text-muted">Read More <MdArrowForward/></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container mt-100 mt-60">
                <div className="row justify-content-center">
                    <div className="col-12">
                        <div className="section-title text-center mb-4 pb-2">
                            <h4 className="title mb-4">Portfolio / Photography</h4>
                            <p className="text-muted para-desc mx-auto mb-0">As a Freelance Designer & Developer, I am here to make you stand out in the digital world and my passion for design and your vision will ensure a great end result.</p>
                        </div>
                    </div>
                </div>

                <div className="row justify-content-center">
                    <div className="col-lg-10 mt-4 pt-2">
                        <div className="" id="grid">
                        <ResponsiveMasonry
                            columnsCountBreakPoints={{350: 1, 750: 2, 900: 3}}
                            >
                                <Masonry>
                                    {portfolioImage.map((item, index)=>{
                                        return(
                                            <div className="p-2 picture-item" key={index}>
                                                <div className="card border-0 portfolio photo-showcase position-relative d-block overflow-hidden rounded">
                                                    <div className="card-body p-0">
                                                        <img src={item} className="img-fluid" alt=""/>
                                                        <div className="overlay"></div>
                                                        <div className="icons text-center">
                                                            <Link to="#" className="lightbox fs-3" onClick={() => handleImageClick(index)}><AiOutlineEye className="text-white title-dark"/></Link>
                                                        </div>
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
                                prevSrc={portfolioImage[(currentImageIndex + portfolioImage.length - 1) % portfolioImage.length]}
                                nextSrc={portfolioImage[(currentImageIndex + 1) % portfolioImage.length]}

                                onCloseRequest={() => setIsOpen(false)}
                                onMovePrevRequest={handleMovePrev}
                                onMoveNextRequest={handleMoveNext}
                            />
                        )}
                        <div className="text-center mt-4">
                            <Link to="/photography-portfolio" className="btn btn-link primary text-muted">See More<MdArrowForward className="ms-1"/></Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <PhotographyFooter/>
        <ScrollTop/>
        </>
    )
}