import React,{useState} from "react";
import { Link } from "react-router-dom";

import Background  from "../assets/images/cowork/bg.jpg";
import about from "../assets/images/cowork/about.jpg"
import map from "../assets/images/svg/map.svg"
import cowork1 from "../assets/images/cowork/6.jpg"
import cowork2 from "../assets/images/cowork/1.jpg"
import cowork3 from "../assets/images/cowork/7.jpg"
import cowork4 from "../assets/images/cowork/2.jpg"
import cowork5 from "../assets/images/cowork/3.jpg"
import cowork6 from "../assets/images/cowork/4.jpg"
import cowork7 from "../assets/images/cowork/5.jpg"
import cowork8 from "../assets/images/cowork/8.jpg"
import cowork9 from "../assets/images/cowork/9.jpg"
import cowork10 from "../assets/images/cowork/10.jpg"
import cowork11 from "../assets/images/cowork/11.jpg"
import cowork12 from "../assets/images/cowork/12.jpg"
import cta from "../assets/images/cowork/cta.jpg"

import CoWorkingNavbar from "../componants/navbar/coworkingNavbar";
import Clients from "../componants/clients"
import Blog from "../componants/blog"
import FooterFour from "../componants/footer/footerFour"
import GetInTuchFour from "../componants/getInTuchFour";
import Partners from "../componants/partners";
import ScrollTop from "../componants/scrollTop";

import Select from 'react-select'
import { Parallax } from 'react-parallax';
import Masonry, {ResponsiveMasonry} from "react-responsive-masonry"

import ModalVideo from 'react-modal-video';
import "../../node_modules/react-modal-video/scss/modal-video.scss"

import Lightbox from 'react-18-image-lightbox';
import "react-18-image-lightbox/style.css"

import {BiBriefcaseAlt2,FiMapPin,AiOutlineCalendar, MdArrowForward,FiWifi,FiUsers,FiCrop,MdOutlineLocalDrink,LuParkingCircle,LuRefreshCw, LuSearch,MdKeyboardArrowRight} from "../assets/icons/vander"

export default function IndexCoWorking(){
    const [activeIndex, setActiveIndex] = useState(0)
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [open, setIsOpen] = useState(false);

    const [isOpen, setOpen] = useState(false);
    const office =[
        { value: '1', label: 'Private office' },
        { value: '2', label: 'Dedicated Space' },
        { value: '3', label: 'Small office' },
        { value: '4', label: 'Floating Seat' },
        { value: '5', label: 'Startups Desk' },
        { value: '7', label: 'Retail Space' },
        { value: '7', label: 'Meeting Room' },
    ]
    const country = [
        { value : "AF", label : 'Afghanistan'},
        { value : "AX", label : 'land Islands'},
        { value : "AL", label : 'Albania'},
        { value : "DZ", label : 'Algeria'},
        { value : "AS", label : 'American Samoa'},
        { value : "AD", label : 'Andorra'},
        { value : "AO", label : 'Angola'},
        { value : "AI", label : 'Anguilla'},
        { value : "AQ", label : 'Antarctica'},
        { value : "AG", label : 'Antigua and Barbuda'},
        { value : "AR", label : 'Argentina'},
        { value : "AM", label : 'Armenia'},
        { value : "AW", label : 'Aruba'},
        { value : "AU", label : 'Australia'},
        { value : "AT", label : 'Austria'},
    ]
    const services = [
        {
            icon:FiWifi,
            title:'Free Internet',
            desc:"If the distribution of letters and 'words' is random, the reader will not be distracted from making."
        },
        {
            icon:FiUsers,
            title:'Group Events',
            desc:"If the distribution of letters and 'words' is random, the reader will not be distracted from making."
        },
        {
            icon:FiCrop,
            title:'Meeting Room',
            desc:"If the distribution of letters and 'words' is random, the reader will not be distracted from making."
        },
        {
            icon:MdOutlineLocalDrink,
            title:'Coffee & Tea',
            desc:"If the distribution of letters and 'words' is random, the reader will not be distracted from making."
        },
        {
            icon:LuParkingCircle,
            title:'Free Parking',
            desc:"If the distribution of letters and 'words' is random, the reader will not be distracted from making."
        },

        {
            icon:LuRefreshCw,
            title:'Relax Room',
            desc:"If the distribution of letters and 'words' is random, the reader will not be distracted from making."
        },
    ]
    const topCities = [
        {
            id:0,
            image:cowork1,
            title: 'Old Quebec',
            name: 'Co-space',
            category:'usa'
        },
        {
            id:1,
            image:cowork2,
            title: 'Beijing',
            name: 'Co-space',
            category:'canada'
        },
        {
            id:2,
            image:cowork3,
            title: 'Nguyen Hue',
            name: 'Co-space',
            category:'australia'
        },
        {
            id:3,
            image:cowork4,
            title: 'Hanoi',
            name: 'Co-space',
            category:'vietnam'
        },
        {
            id:4,
            image:cowork5,
            title: 'Atlanta, GA',
            name: 'Co-space',
            category:'china'
        },
        {
            id:5,
            image:cowork6,
            title: 'New York',
            name: 'Co-space',
            category:'vietnam'
        },
        {
            id:6,
            image:cowork7,
            title: 'Sydney',
            name: 'Co-space',
            category:'australia'
        },
        {
            id:7,
            image:cowork8,
            title: 'Ontario',
            name: 'Co-space',
            category:'canada'
        },
    ]
    const tabData = [
        {
            image:cowork9,
            desc:"This is required when, for example, the final text is not yet available. Dummy text is also known as 'fill text'. It is said that song composers of the past used dummy texts as lyrics.",
        },
        {
            image:cowork10,
            desc:"This is required when, for example, the final text is not yet available. Dummy text is also known as 'fill text'. It is said that song composers of the past used dummy texts as lyrics.",
        },
        {
            image:cowork11,
            desc:"This is required when, for example, the final text is not yet available. Dummy text is also known as 'fill text'. It is said that song composers of the past used dummy texts as lyrics.",
        },
        {
            image:cowork12,
            desc:"This is required when, for example, the final text is not yet available. Dummy text is also known as 'fill text'. It is said that song composers of the past used dummy texts as lyrics.",
        },
    ]
    const cityImage = [cowork1,cowork2,cowork3,cowork4,cowork5,cowork6,cowork7,cowork8]
    const handleMovePrev = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex + cityImage.length - 1) % cityImage.length);
    };

    const handleMoveNext = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % cityImage.length);
    };
    const handleImageClick = (index) => {
        setCurrentImageIndex(index);
        setIsOpen(true);
    };
    const currentImage = cityImage[currentImageIndex];
    const matchCategory = (category) => {
        setSelectedCategory(category);
    };

    const filteredData = selectedCategory
        ? topCities.filter((item) => item.category === selectedCategory)
        : topCities;
    return(
        <>
        <CoWorkingNavbar/>
        <section className="bg-cowork" id="home">
            <div className="container-fluid px-md-3 px-0 ">
                <div className="d-table w-100 rounded-md shadow-md overflow-hidden jarallax position-relative">
                    <Parallax
                        blur={{ min: 0, max: 0}}
                        bgImage={Background}
                        bgImageAlt="the dog"
                        strength={500}
                        bgcityImageize="100%"
                        bgStyle={{with:"auto", height:"100%" }}
                        style={{position:"absolute", width:"100%" , height:"100%"}}
                    >
                    </Parallax>
                    <div className="bg-half-170" >
                        <div className="bg-overlay opacity-2" style={{backgroundImage:`url(${map})`}}></div>
                        <div className="bg-overlay bg-linear-gradient-2"></div>
                        <div className="container">
                            <div className="row mt-5 justify-content-center">
                                <div className="col-12">
                                    <div className="title-heading text-center">
                                        <h4 className="heading text-white title-dark mb-4">More Productive <br/> With Co-Working Spaces</h4>
                                        <p className="text-white-50 para-desc mx-auto mb-0">Launch your campaign and benefit from our expertise on designing and managing conversion centered bootstrap html page.</p>
                                    
                                        <div className="mt-4">
                                            <Link to="" className="btn btn-lg btn-pills btn-primary">Pick your desk</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section className="section bg-white" id="about">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-12 mt-5">
                        <div className="card features-absolute border-0 shadow rounded p-4">
                            <form action="#">
                                <div className="registration-form text-dark text-start">
                                    <div className="row g-0">
                                        <div className="col-lg-3">
                                            <div className="filter-search-form position-relative filter-border bg-light">
                                                <BiBriefcaseAlt2 className="icons"/>
                                                <Select className="form-input filter-input-box bg-gray-50 dark:bg-slate-800 border-0" options={office} />
                                            </div>
                                        </div>
                                        <div className="col-lg-3 mt-3 mt-lg-0">
                                            <div className="filter-search-form position-relative filter-border bg-light">
                                                <FiMapPin className="icons"/>
                                                <Select className="form-input filter-input-box bg-gray-50 dark:bg-slate-800 border-0" options={country} />
                                            </div>
                                        </div>
                                        <div className="col-lg-3 mt-3 mt-lg-0">
                                            <div className="filter-search-form position-relative filter-border bg-light">
                                                <AiOutlineCalendar className="icons"/>
                                                <input name="date" type="text" className="form-control border-0 filter-input-box bg-light start rounded-0" placeholder="Select date"/>
                                            </div>
                                        </div>
                                        <div className="col-lg-3">
                                            <div className="mt-3 mt-lg-0">
                                                <input type="submit" id="search" name="search" style={{height:"60px"}} className="btn btn-primary searchbtn submit-btn w-100" value="Search"/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container mt-60">
                <div className="row align-items-center">
                    <div className="col-md-5 col-12">
                        <div className="positon-relative">
                            <img src={about} className="img-fluid rounded-md shadow-md" alt=""/>
                            <div className="play-icon">
                                <Link to="#" onClick={() => setOpen(true)} className="play-btn lightbox">
                                    <i className="mdi mdi-play text-primary rounded-circle bg-white shadow"></i>
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

                    <div className="col-md-7 col-12 mt-4 mt-sm-0 pt-2 pt-sm-0">
                        <div className="section-title ms-lg-5">
                            <h4 className="title mb-4">Solutions designed for <br/> you and your team</h4>
                            <p className="text-muted mb-0">This is required when, for example, the final text is not yet available. Dummy text is also known as 'fill text'. It is said that song composers of the past used dummy texts as lyrics when writing melodies in order to have a 'ready-made' text to sing with the melody.</p>
                            <div className="mt-4">
                                <Link to="" className="btn btn-primary">Learn More <MdArrowForward/></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container mt-4 pt-2">
                <Partners/>
            </div>
        </section>
        <section className="section bg-light" id="features">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-12">
                        <div className="section-title text-center mb-4 pb-2">
                            <h4 className="title mb-4">Our Services</h4>
                            <p className="text-muted mb-0 para-desc mx-auto">Start working with Fronter that can provide everything you need to generate awareness, drive traffic, connect..</p>
                        </div>
                    </div>
                </div>

                <div className="row">
                    {services.map((item,index)=>{
                        let Icon = item.icon
                        return(
                            <div className="col-lg-4 col-md-6 col-12 mt-4 pt-2" key={index}>
                                <div className="p-4 text-center">
                                    <span className="text-primary h2"><Icon/></span>
                                    <h5 className="mt-2">{item.title}</h5>
                                    <p className="text-muted mb-0">{item.desc}</p>
                                </div>
                            </div>
                        )
                    })}

                    <div className="col-12 mt-4 pt-2 text-center">
                        <Link to="#" className="btn btn-primary">See More<MdArrowForward className="ms-1"/></Link>
                    </div>
                </div>
            </div>

            <div className="container mt-100 mt-60">
                <div className="row justify-content-center">
                    <div className="col-12">
                        <div className="section-title mb-4 pb-2 text-center">
                            <h4 className="title mb-4">Top Coworking Cities</h4>
                            <p className="text-muted para-desc mx-auto mb-0">Start working with Fronter that can provide everything you need to generate awareness, drive traffic, connect..</p>
                        </div>
                    </div>

                    <div className="col-12 mt-4 pt-2">
                        <div className="filters-group-wrap text-center">
                            <div className="filters-group">
                                <ul className="container-filter filter-box mb-0 categories-filter list-unstyled filter-options">
                                    <li className={selectedCategory === null ? "list-inline-item categories position-relative rounded border active" :'list-inline-item categories position-relative rounded border'}  onClick={() => matchCategory(null)}>All</li>
                                    <li className={selectedCategory === 'usa' ? "list-inline-item categories position-relative rounded border active" :'list-inline-item categories position-relative rounded border'} onClick={() => matchCategory('usa')}>USA</li>
                                    <li className={selectedCategory === 'canada' ? "list-inline-item categories position-relative rounded border active" :'list-inline-item categories position-relative rounded border'} onClick={() => matchCategory('canada')}>Canada</li>
                                    <li className={selectedCategory === 'australia' ? "list-inline-item categories position-relative rounded border active" :'list-inline-item categories position-relative rounded border'} onClick={() => matchCategory('australia')}>Australia</li>
                                    <li className={selectedCategory === 'china' ? "list-inline-item categories position-relative rounded border active" :'list-inline-item categories position-relative rounded border'} onClick={() => matchCategory('china')}>China</li>
                                    <li className={selectedCategory === 'vietnam' ? "list-inline-item categories position-relative rounded border active" :'list-inline-item categories position-relative rounded border'} onClick={() => matchCategory('vietnam')}>Vietnam</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                <div id="grid" className=" mt-4">
                <ResponsiveMasonry columnsCountBreakPoints={{350: 1, 750: 2, 900: 4}} >
                    <Masonry>
                        {filteredData.map((item,index) => {
                            return(
                            <div className="picture-item p-2" key={index}>
                                <div className="card border-0 portfolio portfolio-primary portfolio-grid position-relative d-block overflow-hidden rounded">
                                    <div className="card-body p-0">
                                        <img src={item.image} className="img-fluid rounded" alt=""/>
                                        <div className="overlay-work bg-dark"></div>
                                        <div className="grid-content bg-white p-3 rounded shadow">
                                            <Link to="#" className="text-dark title h6">{item.title}</Link>
                                            <h6 className="text-muted fw-normal tag mb-0 small">{item.name}</h6>
                                        </div>
                                        <div className="icons text-center">
                                            <Link to="#" onClick={() => handleImageClick(item.id)} className="btn btn-pills btn-icon btn-primary lightbox"><LuSearch/></Link>
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
                        prevSrc={cityImage[(currentImageIndex + cityImage.length - 1) % cityImage.length]}
                        nextSrc={cityImage[(currentImageIndex + 1) % cityImage.length]}

                        onCloseRequest={() => setIsOpen(false)}
                        onMovePrevRequest={handleMovePrev}
                        onMoveNextRequest={handleMoveNext}
                    />
                )}
                <div className="row justify-content-center">
                    <div className="col-12 text-center mt-4 pt-2">
                        <Link to="#" className="btn btn-primary">See More <MdArrowForward className="ms-1"/></Link>
                    </div>
                </div>
            </div>
        </section>
        <section className="section">
            <div className="container">
                <div className="row align-items-end mb-4 pb-4">
                    <div className="col-md-8">
                        <div className="section-title text-center text-md-start">
                            <h4 className="title mb-4">We provide solutions for all your needs</h4>
                            <p className="text-muted mb-0 para-desc">Start working with Fronter that can provide everything you need to generate awareness, drive traffic, connect..</p>
                        </div>
                    </div>

                    <div className="col-md-4 mt-4 mt-sm-0">
                        <div className="text-center text-md-end">
                            <Link to="#" className="text-primary">View more suggesions <MdArrowForward className="ms-1"/></Link>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-4 mt-4 pt-2">
                        <ul className="nav nav-pills nav-justified flex-column bg-white rounded shadow p-3 mb-0 sticky-bar" id="pills-tab" role="tablist">
                            <li className="nav-item">
                                <Link to="#" onClick={() => setActiveIndex(0)} className={activeIndex === 0 ? "nav-link rounded active" : "nav-link rounded"}>
                                    <div className="text-center pt-1 pb-1">
                                        <h6 className="title fw-normal mb-0">Private Office</h6>
                                    </div>
                                </Link>
                            </li>
                            
                            <li className="nav-item mt-2">
                                <Link to="#" onClick={() => setActiveIndex(1)} className={activeIndex === 1 ? "nav-link rounded active" : "nav-link rounded"}>
                                    <div className="text-center pt-1 pb-1">
                                        <h6 className="title fw-normal mb-0">Dedicated Office</h6>
                                    </div>
                                </Link>
                            </li>
                            
                            <li className="nav-item mt-2">
                                <Link to="#" onClick={() => setActiveIndex(2)} className={activeIndex === 2 ? "nav-link rounded active" : "nav-link rounded"}>
                                    <div className="text-center pt-1 pb-1">
                                        <h6 className="title fw-normal mb-0">Kitchen Space</h6>
                                    </div>
                                </Link>
                            </li>
                            
                            <li className="nav-item mt-2">
                                <Link to="#" onClick={() => setActiveIndex(3)} className={activeIndex === 3 ? "nav-link rounded active" : "nav-link rounded"}>
                                    <div className="text-center pt-1 pb-1">
                                        <h6 className="title fw-normal mb-0">Meeting Rooms</h6>
                                    </div>
                                </Link>
                            </li>
                        </ul>
                    </div>

                    <div className="col-md-8 col-12 mt-4 pt-2">
                        <div className="tab-content" id="pills-tabContent">
                            {tabData.map((item,index) =>{
                                return(
                                    <div key={index}>
                                        {activeIndex === index ? 
                                            <div className="tab-pane fade bg-white show p-4 rounded shadow" id="pills-private" role="tabpanel" aria-labelledby="private-office">
                                                <img src={item.image} className="img-fluid rounded shadow" alt=""/>
                                                <div className="mt-4">
                                                    <p className="text-muted">This is required when, for example, the final text is not yet available. Dummy text is also known as 'fill text'. It is said that song composers of the past used dummy texts as lyrics.</p>
                                                    <Link to="#" className="text-primary">See More <MdArrowForward className="ms-1"/></Link>
                                                </div>
                                            </div> :""}
                                    </div>
                                    
                                )
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section className="section pt-0">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-10 text-center">
                        <div className="video-solution-cta position-relative z-index-1">
                            <div className="position-relative">
                                <img src={cta} className="img-fluid rounded-md shadow-lg" alt=""/>
                                <div className="play-icon">
                                    <Link to="#!" onClick={() => setOpen(true)} className="play-btn lightbox">
                                        <i className="mdi mdi-play text-primary rounded-circle bg-white shadow-lg"></i>
                                    </Link>
                                </div>
                            </div>
                            <div className="content mt-md-4 pt-md-2">
                                <div className="row justify-content-center">
                                    <div className="col-lg-12 text-center">
                                        <div className="row align-items-center">
                                            <div className="col-md-6 mt-4 pt-2">
                                                <div className="section-title text-md-start">
                                                    <h6 className="text-white-50 fw-normal">Customers needs</h6>
                                                    <h4 className="title text-white title-dark mb-0">Spaces for every size <br/> and type of need.</h4>
                                                </div>
                                            </div>

                                            <div className="col-md-6 col-12 mt-4 pt-md-2">
                                                <div className="section-title text-md-start">
                                                    <p className="text-white-50 para-desc">Start working with Fronter that can provide everything you need to generate awareness, drive traffic, connect.</p>
                                                    <Link to="#" className="text-white title-dark">Read More <MdKeyboardArrowRight className="align-middle"/></Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="feature-posts-placeholder bg-primary"></div>
            </div>
        </section>
        <section className="section" id="testimonial">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col">
                        <div className="section-title text-center mb-4 pb-2">
                            <h6 className="text-primary fw-normal mb-2">Testimonial</h6>
                            <h4 className="title mb-4">What our customer <br/> say about us</h4>
                            <p className="text-muted para-desc mb-0 mx-auto">Start working with Fronter that can provide everything you need to generate awareness, drive traffic, connect.</p>
                        </div>
                    </div>
                </div>

               <Clients/>
            </div>
        </section>
        <section className="section bg-light" id="news">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col">
                        <div className="section-title text-center mb-4 pb-2">
                            <h4 className="title mb-4">Our Blogs or News</h4>
                            <p className="text-muted para-desc mb-0 mx-auto">Start working with Fronter that can provide everything you need to generate awareness, drive traffic, connect.</p>
                        </div>
                    </div>
                </div>

                <Blog/>
            </div>
        </section>
        <GetInTuchFour/>
        <FooterFour/>
        <ScrollTop/>
        </>
    )
}