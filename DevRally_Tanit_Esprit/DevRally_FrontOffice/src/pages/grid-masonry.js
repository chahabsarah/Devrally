import React,{useState} from "react";
import { Link } from "react-router-dom";

import bgImg from "../assets/images/bg/02.jpg"

import Navbar from "../componants/indexJs/navbar";
import FooterTwo from "../componants/footer/footerTwo";

import { masonaryPortfolio, masonaryImage } from "../data/data";

import { Parallax } from 'react-parallax';

import Lightbox from 'react-18-image-lightbox';
import "react-18-image-lightbox/style.css"

import Masonry, {ResponsiveMasonry} from "react-responsive-masonry"

import {MdArrowForward} from "../assets/icons/vander"
import ScrollTop from "../componants/scrollTop";

export default function GridMasonry(){
    
    const [selectedCategory, setSelectedCategory] = useState(null);
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
    const matchCategory = (category) => {
        setSelectedCategory(category);
    };

    const filteredData = selectedCategory
        ? masonaryPortfolio.filter((item) => item.category === selectedCategory)
        : masonaryPortfolio;
    return(
        <>
        <Navbar navClass="defaultscroll sticky" manuClass="navigation-menu nav-right nav-light" logoLight={true}/>
        <section className=" d-table w-100 position-relative">
            <Parallax
                    blur={{ min: 0, max: 0}}
                    bgImage={bgImg}
                    bgImageAlt="the dog"
                    strength={500}
                    bgmasonaryImageize="100%"
                    bgStyle={{with:"auto", height:"100%" }}
                    style={{position:"absolute", width:"100%" , height:"100%"}}
                >
                </Parallax>
            <div className="bg-overlay bg-gradient-overlay-2"></div>
            <div className="bg-half-170">
                <div className="container">
                    <div className="row mt-5 justify-content-center">
                        <div className="col-12">
                            <div className="title-heading text-center">
                                <h5 className="heading fw-semibold mb-0 sub-heading text-white title-dark">Portfolio & Works</h5>
                                <p className="text-white-50 para-desc mx-auto mb-0">Showcase of Our Awesome Works in Masonry Style</p>
                            </div>
                        </div>
                    </div>

                    <div className="position-middle-bottom">
                        <nav aria-label="breadcrumb" className="d-block">
                            <ul className="breadcrumb breadcrumb-muted mb-0 p-0">
                                <li className="breadcrumb-item"><Link to="/">Fronter</Link></li>
                                <li className="breadcrumb-item active" aria-current="page">Portfolio</li>
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
                <div className="row justify-content-center">
                    <div className="col-12 mb-4 filters-group-wrap text-center">
                        <div className="filters-group">
                            <ul className="container-filter mb-0 categories-filter list-unstyled filter-options">
                                <li className={selectedCategory === null ? 'active list-inline-item categories h6 position-relative text-dark' : 'list-inline-item categories h6 position-relative text-dark'} data-group="all" onClick={() => matchCategory(null)}>All</li>
                                <li className={selectedCategory === 'branding' ? 'active list-inline-item categories h6 position-relative text-dark' : 'list-inline-item categories h6 position-relative text-dark'} data-group="branding" onClick={() => matchCategory('branding')}>Branding</li>
                                <li className={selectedCategory === 'designing' ? 'active list-inline-item categories h6 position-relative text-dark' : 'list-inline-item categories h6 position-relative text-dark'} data-group="designing" onClick={() => matchCategory('designing')}>Designing</li>
                                <li className={selectedCategory === 'photography' ? 'active list-inline-item categories h6 position-relative text-dark' : 'list-inline-item categories h6 position-relative text-dark'} data-group="photography" onClick={() => matchCategory('photography')}>Photography</li>
                                <li className={selectedCategory === 'development' ? 'active list-inline-item categories h6 position-relative text-dark' : 'list-inline-item categories h6 position-relative text-dark'} data-group="development" onClick={() => matchCategory('development')}>Development</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div id="grid" className="">
                    <ResponsiveMasonry
                        columnsCountBreakPoints={{350: 1, 750: 2, 900: 4}}
                        >
                        <Masonry>
                            {filteredData.map((item,index) => {
                                return(
                                    <div className="p-2 picture-item" key={index}>
                                        <div className="card border-0 portfolio portfolio-primary portfolio-grid position-relative d-block overflow-hidden rounded">
                                            <div className="card-body p-0">
                                                <Link to="" onClick={() => handleImageClick(item.id)} className="lightbox" title="">
                                                    <img src={item.image} className="img-fluid" alt=""/>
                                                </Link>
                                                <div className="grid-content bg-white p-3 rounded shadow">
                                                    <h6 className="mb-1"><Link to="#" className="text-dark title">{item.name}</Link></h6>
                                                    <h6 className="text-muted fw-normal tag mb-0">{item.title}</h6>
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
                        prevSrc={masonaryImage[(currentImageIndex + masonaryImage.length - 1) % masonaryImage.length]}
                        nextSrc={masonaryImage[(currentImageIndex + 1) % masonaryImage.length]}

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