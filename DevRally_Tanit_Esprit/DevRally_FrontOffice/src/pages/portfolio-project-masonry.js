import React from "react";
import { Link } from "react-router-dom";

import bgImg from "../assets/images/bg/02.jpg"
import work1 from "../assets/images/studio/work1.jpg"
import work2 from "../assets/images/studio/work2.jpg"
import work3 from "../assets/images/studio/work3.jpg"
import work4 from "../assets/images/studio/work4.jpg"
import work5 from "../assets/images/studio/work5.jpg"
import work6 from "../assets/images/studio/work6.jpg"
import work7 from "../assets/images/studio/work7.jpg"
import work8 from "../assets/images/portfolio/pro1.jpg"
import work9 from "../assets/images/portfolio/pro4.jpg"
import work10 from "../assets/images/portfolio/pro2.jpg"
import work11 from "../assets/images/portfolio/pro5.jpg"
import work12 from "../assets/images/portfolio/pro3.jpg"
import work13 from "../assets/images/portfolio/pro6.jpg"

import Navbar from "../componants/indexJs/navbar";
import FooterTwo from "../componants/footer/footerTwo";

import { Parallax } from 'react-parallax';


import Masonry, {ResponsiveMasonry} from "react-responsive-masonry"

import {MdArrowForward} from "../assets/icons/vander"
import ScrollTop from "../componants/scrollTop";


export default function ProjectMasonry(){

    const data = [
        {
            image: work1,
            bgclass: 'portfolio portfolio-primary',
            name:'Landrick Personal Portfolio',
            title:'Creative',
        },
        {
            image: work2,
            bgclass: 'portfolio portfolio-success',
            name:'Fronter Minimal Portfolio',
            title:'Minimal',
        },
        {
            image: work3,
            bgclass: 'portfolio portfolio-danger',
            name:'Cryptor NFT Market',
            title:'Crypto',
        },
        {
            image: work4,
            bgclass: 'portfolio portfolio-info',
            name:'Landrick Portfolio',
            title:'Portfolio',
        },
        {
            image: work5,
            bgclass: 'portfolio portfolio-warning',
            name:'Landrick Constuction',
            title:'Corporate',
        },
        {
            image: work6,
            bgclass: 'portfolio portfolio-primary',
            name:'Fronter SEO',
            title:'SEO',
        },
        {
            image: work7,
            bgclass: 'portfolio portfolio-success',
            name:'Cryptor NFT Market',
            title:'Crypto',
        },
        {
            image: work8,
            bgclass: 'portfolio portfolio-primary',
            name:'Fronter Hospital',
            title:'Creative',
        },
        {
            image: work9,
            bgclass: 'portfolio portfolio-warning',
            name:'Fronter Construction',
            title:'Real Estate',
        },
        {
            image: work10,
            bgclass: 'portfolio portfolio-success',
            name:'Fronter Business',
            title:'Corporate',
        },
        {
            image: work11,
            bgclass: 'portfolio portfolio-danger',
            name:'Fronter Software',
            title:'Saas & Software',
        },
        {
            image: work12,
            bgclass: 'portfolio portfolio-info',
            name:'Fronter Corporate',
            title:'Corporate',
        },
        {
            image: work13,
            bgclass: 'portfolio portfolio-primary',
            name:'Fronter Insurance',
            title:'Corporate',
        },
    ]
    
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
                <div id="grid">
                    <ResponsiveMasonry
                        columnsCountBreakPoints={{350: 1, 750: 2, 900: 3}}
                        >
                        <Masonry>
                            {data.map((item,index) => {
                                return(
                                    <div className="p-2 picture-item" key={index}>
                                        <div className={item.bgclass}>
                                            <div className="position-relative">
                                                <div className="shadow rounded pt-4 px-4 img-bg">
                                                    <img src={item.image} className="img-fluid rounded-top" alt=""/>
                                                </div>
                                            </div>
                
                                            <div className="pt-3 px-2">
                                                <h5 className="mb-1 fw-normal"><Link to="#" className="text-dark title">{item.name}</Link></h5>
                                                <h6 className="text-muted fw-normal tag mb-0">{item.title}</h6>
                                            </div>                            
                                        </div>
                                    </div>
                                )
                            })}
                        </Masonry>
                    </ResponsiveMasonry>
                   
                   
                </div>
                
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