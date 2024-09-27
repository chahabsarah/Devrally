import React,{useState,useEffect} from "react";
import { Link } from "react-router-dom";

import photographer from "../assets/images/photography/photographer.jpg"
import PhotographyNavbar from "../componants/navbar/photographyNavbar";
import image1 from "../assets/images/photography/p1.jpg"
import image2 from "../assets/images/photography/p2.jpg"
import image3 from "../assets/images/photography/p3.jpg"
import image4 from "../assets/images/photography/p4.jpg"
import image5 from "../assets/images/photography/p5.jpg"
import image6 from "../assets/images/photography/p6.jpg"
import image7 from "../assets/images/photography/p7.jpg"
import image8 from "../assets/images/photography/p8.jpg"
import image9 from "../assets/images/photography/p9.jpg"
import image10 from "../assets/images/photography/p10.jpg"
import image11 from "../assets/images/photography/p11.jpg"
import image12 from "../assets/images/photography/p12.jpg"
import image13 from "../assets/images/photography/p13.jpg"
import image14 from "../assets/images/photography/p14.jpg"
import image15 from "../assets/images/photography/p15.jpg"
import image16 from "../assets/images/photography/p16.jpg"
import image17 from "../assets/images/photography/p17.jpg"
import image18 from "../assets/images/photography/p18.jpg"

import { Parallax } from 'react-parallax';
import Masonry, {ResponsiveMasonry} from "react-responsive-masonry"

import Lightbox from 'react-18-image-lightbox';
import "react-18-image-lightbox/style.css"

import {AiOutlineEye, MdArrowForward} from "../assets/icons/vander"
import PhotographyFooter from "../componants/footer/photographyFooter";
import ScrollTop from "../componants/scrollTop";

export default function PhotographyPortfolio(){

    useEffect(()=>{
        document.body.classList.add('photography-scss');
    })
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [open, setIsOpen] = useState(false);

    const portfolioData = [
       {
        id:0,
        image:image1,
        category:'branding'
       },
       {
        id:1,
        image:image2,
        category:'designing'
       },
       {
        id:2,
        image:image3,
        category:'branding'
       },
       {
        id:3,
        image:image4,
        category:'designing'
       },
       {
        id:4,
        image:image5,
        category:'photography'
       },
       {
        id:5,
        image:image6,
        category:'branding'
       },
       {
        id:6,
        image:image7,
        category:'designing'
       },
       {
        id:7,
        image:image8,
        category:'branding'
       },
       {
        id:8,
        image:image9,
        category:'photography'
       },
       {
        id:9,
        image:image10,
        category:'photography'
       },
       {
        id:10,
        image:image11,
        category:'development'
       },
       {
        id:11,
        image:image12,
        category:'development'
       },
       {
        id:12,
        image:image13,
        category:'branding'
       },
       {
        id:13,
        image:image14,
        category:'designing'
       },
       {
        id:14,
        image:image15,
        category:'photography'
       },
       {
        id:15,
        image:image16,
        category:'photography'
       },
       {
        id:16,
        image:image17,
        category:'branding'
       },
       {
        id:17,
        image:image18,
        category:'photography'
       },
    ]
    const portfolioImage = [image1, image2, image3, image4,image5,image6,image7,image8,image9,image10,image11,image12,image13,image14,image15,image16,image17,image18]

    const handleMovePrev = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex + portfolioImage.length - 1) % portfolioImage.length);
    };

    const handleMoveNext = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % portfolioImage.length);
    };
    const handleImageClick = (index) => {
        console.log(index,'pp');
        setCurrentImageIndex(index);
        setIsOpen(true);
    };
    const currentImage = portfolioImage[currentImageIndex];
    const matchCategory = (category) => {
        setSelectedCategory(category);
    };

    const filteredData = selectedCategory
        ? portfolioData.filter((item) => item.category === selectedCategory)
        : portfolioData;
    return(
        <>
        <PhotographyNavbar/>
        <section className="position-relative">
            <Parallax
                blur={{ min: 0, max: 0}}
                bgImage={photographer}
                bgImageAlt="the dog"
                strength={500}
                bgportfolioImageize="100%"
                bgStyle={{with:"auto", height:"100%" }}
                style={{position:"absolute", width:"100%" , height:"100%"}}
            >
            </Parallax>
            <div className="bg-overlay bg-linear-gradient-2"></div>
            <div className="bg-half-170 ">
                <div className="section-title position-absolute bottom-0 text-center end-0 start-0">
                    <h4 className="title text-white title-dark mb-5">Portfolio</h4>
                </div>
            </div>
        </section>

        <section className="section pt-5">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-12 filters-group-wrap">
                        <div className="filters-group">
                            <ul className="container-filter mb-0 categories-filter list-unstyled filter-options text-center">
                                <li className={selectedCategory === null ? 'active list-inline-item categories h6 position-relative text-dark' : 'list-inline-item categories h6 position-relative text-dark'}  onClick={() => matchCategory(null)} data-group="all">All</li>
                                <li className={selectedCategory === 'branding' ? 'active list-inline-item categories h6 position-relative text-dark' : 'list-inline-item categories h6 position-relative text-dark'}  onClick={() => matchCategory('branding')} >Branding</li>
                                <li className={selectedCategory === 'designing' ? 'active list-inline-item categories h6 position-relative text-dark' : 'list-inline-item categories h6 position-relative text-dark'} onClick={() => matchCategory('designing')} >Designing</li>
                                <li className={selectedCategory === 'photography' ? 'active list-inline-item categories h6 position-relative text-dark' : 'list-inline-item categories h6 position-relative text-dark'} onClick={() => matchCategory('photography')}>Photography</li>
                                <li className={selectedCategory === 'development' ? 'active list-inline-item categories h6 position-relative text-dark' : 'list-inline-item categories h6 position-relative text-dark'} onClick={() => matchCategory('development')}>Development</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div  id="grid">
                    <ResponsiveMasonry columnsCountBreakPoints={{350: 1, 750: 2, 900: 4}} >
                        <Masonry>
                            {filteredData.map((item,index) => {
                                return(
                                    <div className="p-2 picture-item" key={index}>
                                        <div className="card border-0 portfolio photo-showcase position-relative d-block overflow-hidden rounded">
                                            <div className="card-body p-0">
                                                <img src={item.image} className="img-fluid" alt=""/>
                                                <div className="overlay"></div>
                                                <div className="icons text-center">
                                                    <Link to="#" onClick={() => handleImageClick(index)} className="lightbox fs-3"><AiOutlineEye className="text-white"/></Link>
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

                <div className="row">
                    <div className="col mt-4 pt-2">
                        <div className="text-center">
                            <Link to="#" className="btn btn-link primary text-muted">See More <MdArrowForward/></Link>
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