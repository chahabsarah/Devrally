import React,{useEffect,useState} from "react";
import { Link } from "react-router-dom";

import backgroundImg from "../assets/images/food/bg01.jpg"
import about from "../assets/images/food/about.jpg"
import sign from "../assets/images/sign.png"
import manu from "../assets/images/food/menu.jpg"
import foodManu from "../assets/images/food/food-menu.png"
import cta from "../assets/images/food/cta.jpg"

import RestaurantNavbar from "../componants/navbar/RestaurantNavbar";
import ClientsTwo from "../componants/clientsTwo";
import RestaurantFooter from "../componants/footer/restaurantFooter";
import ScrollTop from "../componants/scrollTop"

import { Parallax } from 'react-parallax';

import TinySlider from "tiny-slider-react";
import '../../node_modules/tiny-slider/dist/tiny-slider.css';

import Lightbox from 'react-18-image-lightbox';
import "react-18-image-lightbox/style.css"

import { foodData, foodImg} from "../data/data";

import {LuPizza,SiSwiggy} from "../assets/icons/vander"
import {IoRestaurantOutline} from "react-icons/io5"


const settings = {
    container: '.tiny-twelve-item',
    controls: true,
    mouseDrag: true,
    loop: true,
    rewind: true,
    autoplay: true,
    autoplayButtonOutput: false,
    autoplayTimeout: 3000,
    navPosition: "bottom",
    controlsText: ['<i class="mdi mdi-chevron-left "></i>', '<i class="mdi mdi-chevron-right"></i>'],
    nav: false,
    speed: 400,
    gutter: 0,
    responsive: {
        1025: {
            items: 10
        },

        992: {
            items: 8
        },

        767: {
            items: 6
        },

        320: {
            items: 2
        },
    },
};

export default function IndexRestaurant(){
    const [selectedCategory, setSelectedCategory] = useState(null);

    const [lightBox, setLightbox] = useState(false);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const handleMovePrev = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex + foodImg.length - 1) % foodImg.length);
    };

    const handleMoveNext = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % foodImg.length);
    };
    const handleImageClick = (index) => {
        setCurrentImageIndex(index+1);
        setLightbox(true);
    };
    const currentImage = foodImg[currentImageIndex];

    const matchCategory = (category) => {
        setSelectedCategory(category);
    };

    const filteredData = selectedCategory
    ? foodData.filter((item) => item.category === selectedCategory)
    : foodData;
    useEffect(()=>{
        document.body.classList.add('restaurant-scss');
    })

    const aboutData = [
        {
            icon:LuPizza,
            title:'Food Meets Style',
            desc:'The phrasal sequence of the Lorem Ipsum text is now so that many DTP programmes can generate'
        },
        {
            icon:IoRestaurantOutline,
            title:'Food Meets Style',
            desc:'The phrasal sequence of the Lorem Ipsum text is now so that many DTP programmes can generate'
        },
        {
            icon:SiSwiggy,
            title:'Food Meets Style',
            desc:'The phrasal sequence of the Lorem Ipsum text is now so that many DTP programmes can generate'
        },
    ]
    return(
        <>
        <RestaurantNavbar/>
        <section className="bg-home d-flex align-items-center -fluid"  id="home">
            <Parallax
                blur={{ min: 0, max: 0}}
                bgImage={backgroundImg}
                bgImageAlt="the dog"
                strength={500}
                bgportfolioImageize="100%"
                bgStyle={{with:"auto", height:"100%" }}
                style={{position:"absolute", width:"100%" , height:"100%"}}
            >
            </Parallax>
            <div className="bg-overlay"></div>
            <div className="container">
                <div className="row mt-5 justify-content-center">
                    <div className="col-12">
                        <div className="title-heading text-center">
                            <h4 className="text-white title-dark display-4 fw-bold mb-3">Amazing Food and Fresh <br/> Products & Wine </h4>
                            <p className="text-light title-dark para-desc mx-auto mb-0">Beatae cum eius, animi itaque aliquid ducimus facere dicta, vitae ipsam maiores nam sit blanditiis, quisquam expedita?</p>
                        
                            <div className="mt-4 pt-2">
                                <Link to="#" className="btn btn-primary rounded-0 text-uppercase">Book a Table</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section className="section" id="about">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-5 col-md-6 col-12">
                        <img src={about} className="img-fluid" alt=""/>
                    </div>

                    <div className="col-lg-6 col-md-6 col-12 mt-4 mt-sm-0 pt-2 pt-sm-0">
                        <div className="section-title ms-lg-5">
                            <p className="text-muted fs-5 mb-0">The phrasal sequence of the Lorem Ipsum text is now so widespread and commonplace that many DTP programmes can generate dummy text using the starting sequence "Lorem ipsum".</p>
                        
                            <h4 className="title my-3">Food is our common ground, <br/> a universal experience.</h4>

                            <p className="text-muted">Fortunately, the phrase 'Lorem Ipsum' is now recognized by electronic pre-press systems and, when found, an alarm can be raised. This avoids a publication going to print with overlooked dummy text.</p>
                        
                            <div className="mt-4">
                                <img src={sign} height="32" alt=""/>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row justify-content-center">
                    {aboutData.map((item, index)=>{
                        const Icon = item.icon
                        return(
                        <div className="col-lg-4 col-md-6 mt-5" key={index}>
                            <div className="card border-0 text-center features feature-primary feature-clean px-md-4">
                                <div className="icons bg-md text-primary text-center mx-auto">
                                    <Icon className="icon d-block rounded-0 fs-3 mb-0"/>
                                </div>
                                <div className="content mt-4 pt-2">
                                    <h5 className="mb-3">{item.title}</h5>
                                    <p className="text-muted mb-0">{item.desc}</p>
                                </div>
                            </div>
                        </div>
                        )
                    })}
                </div>
            </div>
        </section>

        <section className="bg-half-170 overflow-hidden position-relative" style={{backgroundImage:`url(${manu})`}}   id="menu">
            <div className="bg-overlay bg-linear-gradient-2"></div>
            <div className="section-title position-absolute bottom-0 text-center end-0 start-0">
                <h5 className="text-muted title-dark-50">Our Menu</h5>
                <h4 className="title text-white title-dark mb-4">Choose your mixture & order now!</h4>
            </div>
        </section>

        <section className="section " style={{backgroundImage:`url(${foodManu})`, backgroundRepeat:"no-repeat", backgroundPosition:"bottom"}} >
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-12 filters-group-wrap text-center">
                        <div className="filters-group">
                            <ul className="container-filter mb-0 categories-filter list-unstyled filter-options">
                                <li className={selectedCategory === null ? "list-inline-item categories text-uppercase position-relative active" : "list-inline-item categories text-uppercase position-relative" } data-group="all" onClick={() => matchCategory(null)}>All</li>
                                <li className={selectedCategory === 'break' ? "list-inline-item categories text-uppercase position-relative active" : "list-inline-item categories text-uppercase position-relative" } data-group="break" onClick={() => matchCategory('break')}>Breakfast</li>
                                <li className={selectedCategory === 'lunch' ? "list-inline-item categories text-uppercase position-relative active" : "list-inline-item categories text-uppercase position-relative" } data-group="lunch" onClick={() => matchCategory('lunch')}>Lunch</li>
                                <li className={selectedCategory === 'dinner' ? "list-inline-item categories text-uppercase position-relative active" : "list-inline-item categories text-uppercase position-relative" } data-group="dinner" onClick={() => matchCategory('dinner')}>Dinner</li>
                                <li className={selectedCategory === 'tea' ? "list-inline-item categories text-uppercase position-relative active" : "list-inline-item categories text-uppercase position-relative" } data-group="tea" onClick={() => matchCategory('tea')}>Tea & Coffee</li>
                                <li className="list-inline-item categories text-uppercase position-relative" data-group="tea"></li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="row justify-content-center row-cols-lg-5 row-cols-md-3 row-cols-1" id="grid">
                    {filteredData.map((item,index)=>{
                        return(
                        <div className="col mt-5 picture-item"  key={index}>
                            <div className="portfolio portfolio-primary menu-food">
                                <img src={item.image} className="avatar avatar-large rounded-circle shadow-lg d-block mx-auto img-thumbnail" alt=""/>

                                <div className="mt-4 text-center">
                                    <Link to="#" className="title h5 d-block text-dark">{item.title}</Link>
                                    <span className="text-muted">{item.desc}</span>

                                    <h5 className="link mt-2">{item.price}</h5>
                                </div>
                            </div>
                        </div>
                        )
                    })}
                </div>
            </div>
        </section>

        <section className="section -fluid overflow-hidden position-relative pt-0" id="table " >
        <Parallax
                blur={{ min: 0, max: 0}}
                bgImage={cta}
                bgImageAlt="the dog"
                strength={500}
                bgportfolioImageize="100%"
                bgStyle={{with:"auto", height:"100%" }}
                style={{position:"absolute", width:"100%" , height:"100%"}}
            />
            <div className="container pt-5 mt-5">
                <div className="row justify-content-end">
                    <div className="col-lg-6 col-md-8">
                        <div className="bg-white shadow p-lg-5 p-4 ms-lg-5">
                            <div className="section-title mb-4">
                                <span className="badge rounded-pill bg-soft-primary py-2 px-3 fw-semibold">Reservation</span>
                                <h4 className="title fw-bold text-uppercase my-3">Book A Table</h4>
                                <p className="text-muted mx-auto para-desc mb-0">We make it a priority to offer flexible services to accomodate your needs</p>
                            </div>

                            <form>
                                <div className="row gx-2">
                                    <div className="col-md-6">
                                        <div className="mb-4">
                                            <label className="form-label fw-semibold text-uppercase">Your Name</label>
                                            <input name="name" id="name" type="text" className="form-control rounded-0" placeholder="First Name :"/>
                                        </div>
                                    </div>

                                    <div className="col-md-6">
                                        <div className="mb-4">
                                            <label className="form-label fw-semibold text-uppercase">Your Email</label>
                                            <input name="email" id="email" type="email" className="form-control rounded-0" placeholder="Your email :"/>
                                        </div> 
                                    </div>

                                    <div className="col-md-6">
                                        <div className="mb-4">
                                            <label className="form-label fw-semibold text-uppercase">Phone no.</label>
                                            <input name="number" type="number" id="phone-number" className="form-control rounded-0" placeholder="Phone no. :"/>
                                        </div> 
                                    </div>

                                    <div className="col-md-6">
                                        <div className="mb-4">
                                            <label className="form-label fw-semibold text-uppercase">Person</label>
                                            <input type="number" min="0" autoComplete="off" id="adult" className="form-control rounded-0" required="" placeholder="Person :"/>
                                        </div> 
                                    </div>

                                    <div className="col-md-6">
                                        <div className="mb-4">
                                            <label className="form-label fw-semibold text-uppercase">Date</label>
                                            <input name="date" type="text" className="form-control start rounded-0" placeholder="(ex: mm/ dd/ yy)"/>
                                        </div> 
                                    </div>

                                    <div className="col-md-6">
                                        <div className="mb-4">
                                            <label className="form-label fw-semibold text-uppercase">Time</label>
                                            <input name="time" type="text" id="input-time" className="form-control timepicker rounded-0" placeholder="(ex: 8:00 p.m)"/>
                                        </div> 
                                    </div>
                                </div>

                                <div className="row mt-2">
                                    <div className="col-sm-12">
                                        <input type="submit" id="submit" name="send" className="btn btn-primary rounded-0 text-uppercase w-100" value="Book a table"/>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section className="section bg-soft-success" id="testi">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-12">
                        <div className="section-title text-center mb-4 pb-2">
                            <h4 className="title text-dark mb-4">Happy Client's</h4>
                            <p className="text-muted para-desc mx-auto mb-0">Splash your dream color Bring your home to lively Colors. We make it a priority to offer flexible services to accomodate your needs</p>
                        </div>
                    </div>
                </div>
                <ClientsTwo position={false}/>
            </div>
        </section>

        <div className="container-fluid">
            <div className="row">
                <div className="col-12 px-0">
                    <div className="tiny-twelve-item">
                    <TinySlider settings={settings}>
                        {foodData.map((item, index) => {
                            return(
                            <div className="tiny-slide" key={index}>
                                <div className="card border-0 rounded-0">
                                    <div className="card-body p-0">
                                        <Link to="#" onClick={() => handleImageClick(item.id)} className="lightbox d-inline-block" title="">
                                            <img src={item.image} className="img-fluid" alt="Insta Post"/>
                                            <div className="overlay bg-dark"></div>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            )
                        })}
                    </TinySlider> 
                    {lightBox && (
                        <Lightbox
                            mainSrc={currentImage}
                            prevSrc={foodImg[(currentImageIndex + foodImg.length - 1) % foodImg.length]}
                            nextSrc={foodImg[(currentImageIndex + 1) % foodImg.length]}

                            onCloseRequest={() => setLightbox(false)}
                            onMovePrevRequest={handleMovePrev}
                            onMoveNextRequest={handleMoveNext}
                        />
                    )}   
                    </div>

                    <div className="position-absolute top-50 start-50 translate-middle d-md-block d-none">
                        <Link to="https://www.instagram.com/shreethemes/" target="_blank" className="btn btn-sm btn-primary rounded-0 text-uppercase">Follow Now</Link>
                    </div>
                </div>
            </div>
        </div>
        <RestaurantFooter/>
        <ScrollTop/>
        </>
    )
}