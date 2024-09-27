import React from "react";
import { Link } from "react-router-dom";

import bgImg from "../assets/images/bg/02.jpg"

import Navbar from "../componants/indexJs/navbar";
import ClassicPortfolio from "../componants/classicPortfolio";
import FooterTwo from "../componants/footer/footerTwo";
import ScrollTop from "../componants/scrollTop";

import { Parallax } from 'react-parallax';

export default function ClassicFive(){
    return(
        <>
        <Navbar navClass="defaultscroll sticky" manuClass="navigation-menu nav-right nav-light" logoLight={true}/>
        <section className=" d-table w-100 position-relative">
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
            <div className="bg-overlay bg-gradient-overlay-2"></div>
            <div className="bg-half-170">
                <div className="container">
                    <div className="row mt-5 justify-content-center">
                        <div className="col-12">
                            <div className="title-heading text-center">
                                <h5 className="heading fw-semibold mb-0 sub-heading text-white title-dark">Portfolio & Works</h5>
                                <p className="text-white-50 para-desc mx-auto mb-0">Showcase of Our Awesome Works in Five Columns</p>
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
        <ClassicPortfolio gridClass="row g-3 row-cols-lg-5 row-cols-md-3 row-cols-sm-2 row-cols-1" col="col-lg-12" containerClass={true}/>
        <FooterTwo/>
        <ScrollTop/>
        </>
    )
}