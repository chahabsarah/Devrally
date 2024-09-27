import React,{useState} from "react";
import { Link } from "react-router-dom";

import bgImg from "../assets/images/digital/bg01.jpg"

import PortfolioNavbar from "../componants/navbar/portfolioNavbar";
import SmallFooter from "../componants/footer/smallFooter";
import DigitalProject from "../componants/digitalProject";
import ScrollTop from "../componants/scrollTop";

import { masonaryPortfolio, masonaryImage } from "../data/data";
import Masonry, {ResponsiveMasonry} from "react-responsive-masonry"

import Lightbox from 'react-18-image-lightbox';
import "react-18-image-lightbox/style.css"


export default function IndexPortfolio(){
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
        <PortfolioNavbar/>
        <section className="bg-half-170 d-table w-100" style={{backgroundImage:`url(${bgImg})`}} id="hero">
            <div className="bg-overlay bg-primary-gradient-overlay"></div>
            <div className="container">
                <div className="row mt-5 justify-content-center">
                    <div className="col-12">
                        <div className="title-heading text-center">
                            <h4 className="heading text-white title-dark mb-4">Building <br/> digital products, brands, <br/> and experience.</h4>
                            <h5 className="para-desc mx-auto fw-normal text-white-50">A <span className="text-white title-dark">Product Designer</span> and <span className="text-white title-dark">Visual Developer</span> in NY. We specialize in UI/UX Design, Responsive Web Design, and Visual Development.</h5>
                        
                            <div className="mt-4 pt-2">
                                <Link to="#contact" className="btn btn-pills btn-light">Contact Us</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section className="section" id="portfolio">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-12 mb-4 filters-group-wrap text-center">
                        <div className="filters-group">
                            <ul className="container-filter mb-0 categories-filter list-unstyled filter-options">
                                <li className={selectedCategory === null ? "list-inline-item categories h6 position-relative text-dark active" : "list-inline-item categories h6 position-relative text-dark"} data-group="all" onClick={() => matchCategory(null)}>All</li>
                                <li className={selectedCategory === 'branding' ? "list-inline-item categories h6 position-relative text-dark active" : "list-inline-item categories h6 position-relative text-dark"} data-group="branding" onClick={() => matchCategory("branding")}>Branding</li>
                                <li className={selectedCategory === 'designing' ? "list-inline-item categories h6 position-relative text-dark active" : "list-inline-item categories h6 position-relative text-dark"} data-group="designing" onClick={() => matchCategory('designing')}>Designing</li>
                                <li className={selectedCategory === 'photography' ? "list-inline-item categories h6 position-relative text-dark active" : "list-inline-item categories h6 position-relative text-dark"} data-group="photography" onClick={() => matchCategory('photography')}>Photography</li>
                                <li className={selectedCategory === 'development' ? "list-inline-item categories h6 position-relative text-dark active" : "list-inline-item categories h6 position-relative text-dark"} data-group="development" onClick={() => matchCategory('development')}>Development</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container-fluid">
                <div id="grid" className="">
                <ResponsiveMasonry
                columnsCountBreakPoints={{350: 1, 750: 2, 900: 5}}
                >
                <Masonry>
                    {filteredData.map((item,index) =>{
                        return(
                            <div className="picture-item p-2" data-groups='["branding"]' key={index}>
                                <div className="card border-0 portfolio portfolio-primary portfolio-grid position-relative d-block overflow-hidden rounded">
                                    <div className="card-body p-0">
                                        <Link to="#" onClick={() => handleImageClick(item.id)} className="lightbox" title="">
                                            <img src={item.image} className="img-fluid" alt=""/>
                                        </Link>
                                        <div className="grid-content bg-white p-3 rounded shadow">
                                            <h6 className="mb-1"><Link to="#" className="text-dark title">{item.title}</Link></h6>
                                            <h6 className="text-muted fw-normal tag mb-0">{item.name}</h6>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </Masonry>
                </ResponsiveMasonry>
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
                
                <div className="row text-center">
                    <div className="col-12 mt-4 pt-2">
                        <Link to="#" className="btn btn-pills btn-soft-primary">See works</Link>
                    </div>
                </div>
            </div>

           <DigitalProject/>
        </section>
        <SmallFooter/>
        <ScrollTop/>
        </>
    )
}