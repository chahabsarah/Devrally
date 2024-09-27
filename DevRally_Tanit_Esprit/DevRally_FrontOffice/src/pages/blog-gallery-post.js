import React,{useState} from "react";
import { Link } from "react-router-dom";

import background from "../assets/images/bg/01.jpg"
import blog1 from "../assets/images/blog/6.jpg"
import blog2 from "../assets/images/blog/7.jpg"
import client1 from "../assets/images/client/01.jpg"
import client2 from "../assets/images/client/02.jpg"
import client3 from "../assets/images/client/03.jpg"
import client4 from "../assets/images/client/04.jpg"
import portfolio1 from "../assets/images/portfolio/5.jpg"
import portfolio2 from "../assets/images/portfolio/10.jpg"
import portfolio3 from "../assets/images/portfolio/6.jpg"
import portfolio4 from "../assets/images/portfolio/11.jpg"
import portfolio5 from "../assets/images/portfolio/12.jpg"
import portfolio6 from "../assets/images/portfolio/13.jpg"
import portfolio7 from "../assets/images/portfolio/7.jpg"
import portfolio8 from "../assets/images/portfolio/8.jpg"

import { Parallax } from 'react-parallax';

import { blogData } from "../data/data";

import Navbar from "../componants/indexJs/navbar";
import FooterFour from "../componants/footer/footerFour";
import Newsletters from "../componants/newsletters";
import BlogSidebar from "../componants/blogSidebar";
import ScrollTop from "../componants/scrollTop";

import Lightbox from 'react-18-image-lightbox';
import "react-18-image-lightbox/style.css"
import Masonry, {ResponsiveMasonry} from "react-responsive-masonry"

import {FiHeart,FaRegComment,AiOutlineCalendar,MdArrowForward,MdOutlineArrowBack,FiHome,FiCamera} from "../assets/icons/vander"

export default function BlogGalleryPost(){

    const portfolioImg =[portfolio1,portfolio2,portfolio3,portfolio4,portfolio5,portfolio6,portfolio7,portfolio8]

    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [open, setIsOpen] = useState(false);

    const handleMovePrev = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex + portfolioImg.length - 1) % portfolioImg.length);
    };

    const handleMoveNext = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % portfolioImg.length);
    };
    const handleImageClick = (index) => {
        setCurrentImageIndex(index);
        setIsOpen(true);
    };
    const currentImage = portfolioImg[currentImageIndex];
  
    const commentsData = [
        {
            image:client1,
            name:'Lorenzo Peterson',
            date:'13th March, 2023 at 01:00 pm',
            desc:'" There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour "'
        },
        {
            image:client2,
            name:'Tammy Camacho',
            date:'5th May, 2023 at 10:30 am',
            desc:'" There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour "'
        },
        {
            image:client3,
            name:'Tammy Camacho',
            date:'19th June, 2023 at 09:00 am',
            desc:'" There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour "'
        },
        {
            image:client4,
            name:'Lorenzo Peterson',
            date:'20th June, 2023 at 01:30 pm',
            desc:'" There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour "'
        },
    ]
 
    return(
        <>
        <Navbar navClass="defaultscroll sticky" manuClass="navigation-menu nav-right nav-light" logoLight={true}/>

        <section className="position-relative overflow-hidden w-100 " >
            <Parallax
                blur={{ min: 0, max: 0}}
                bgImage={background}
                bgImageAlt="the dog"
                strength={500}
                bgportfolioImgize="100%"
                bgStyle={{with:"auto", height:"100%" }}
                style={{position:"absolute", width:"100%" , height:"100%"}}
            />
            <div className="bg-overlay bg-gradient-overlay-2"></div>
            <div className="bg-half-170 w-100">
                <div className="container">
                    <div className="row mt-5 justify-content-center">
                        <div className="col-12">
                            <div className="title-heading text-center">
                                <span className="badge bg-primary">Photography</span>
                                <h5 className="heading fw-semibold mb-0 sub-heading text-white title-dark mt-4">Get Ready To Up Your<br/> Creative Game With The New DJI Mavic Air 2</h5>
                                
                                <ul className="list-inline text-center mb-0">
                                    <li className="list-inline-item mx-4 mt-4">
                                        <span className="text-white-50 d-block">Author</span>
                                        <Link to="#" className="text-white title-dark">Christina Gonzalez</Link>
                                    </li>

                                    <li className="list-inline-item mx-4 mt-4">
                                        <span className="text-white-50 d-block">Date</span>
                                        <span className="text-white title-dark">29th Dec 2023</span>
                                    </li>

                                    <li className="list-inline-item mx-4 mt-4">
                                        <span className="text-white-50 d-block">Read Time</span>
                                        <span className="text-white title-dark">8 min read</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="position-middle-bottom">
                        <nav aria-label="breadcrumb" className="d-block">
                            <ul className="breadcrumb breadcrumb-muted mb-0 p-0">
                                <li className="breadcrumb-item"><Link to="/">Fronter</Link></li>
                                <li className="breadcrumb-item active" aria-current="page">Blog</li>
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
                <div className="row">
                    <div className="col-lg-8 col-md-7">
                        <div className="card border-0 shadow rounded overflow-hidden">
                        <div className="card-body">
                                <div id="grid" className="">
                                <ResponsiveMasonry columnsCountBreakPoints={{350: 1, 750: 2, 900: 4}}>
                                    <Masonry>
                                        {portfolioImg.map((item,index)=>{
                                        return(
                                            <div className="p-2 picture-item" key={index}>
                                                <div className="card border-0 portfolio portfolio-primary portfolio-grid position-relative d-block overflow-hidden rounded">
                                                    <div className="card-body p-0">
                                                        <img src={item} className="img-fluid" alt=""/>
                                                        <div className="overlay-work"></div>
                                                        
                                                        <div className="icons text-center">
                                                            <Link to="#" onClick={() => handleImageClick(index)} className="btn btn-pills btn-icon btn-primary lightbox"><FiCamera/></Link>
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
                                        prevSrc={portfolioImg[(currentImageIndex + portfolioImg.length - 1) % portfolioImg.length]}
                                        nextSrc={portfolioImg[(currentImageIndex + 1) % portfolioImg.length]}

                                        onCloseRequest={() => setIsOpen(false)}
                                        onMovePrevRequest={handleMovePrev}
                                        onMoveNextRequest={handleMoveNext}
                                    />
                                )}

                                <p className="text-muted mt-4">The most well-known dummy text is the 'Lorem Ipsum', which is said to have originated in the 16th century. Lorem Ipsum is composed in a pseudo-Latin language which more or less corresponds to 'proper' Latin. It contains a series of real Latin words. This ancient dummy text is also incomprehensible, but it imitates the rhythm of most European languages in Latin script. The advantage of its Latin origin and the relative meaninglessness of Lorum Ipsum is that the text does not attract attention to itself or distract the viewer's attention from the layout.</p>
                                <p className="text-muted">Thus, Lorem Ipsum has only limited suitability as a visual filler for German texts. If the fill text is intended to illustrate the characteristics of different typefaces, it sometimes makes sense to select texts containing the various letters and symbols specific to the output language.</p>
                            
                                <blockquote className="text-center mx-auto blockquote"><i className="mdi mdi-format-quote-open mdi-48px text-muted opacity-2 d-block"></i> The man who comes back through the door in the wall will never be quite the same as the man who went out. <small className="d-block text-muted mt-2">- Fronter Template</small></blockquote>
                            
                                <p className="text-muted">There is now an abundance of readable dummy texts. These are usually used when a text is required purely to fill a space. These alternatives to the classic Lorem Ipsum texts are often amusing and tell short, funny or nonsensical stories.</p>
                            
                                <Link to="#" className="badge badge-link bg-primary me-1">Minimal</Link>
                                <Link to="#" className="badge badge-link bg-primary me-1">Interior</Link>
                                <Link to="#" className="badge badge-link bg-primary me-1">Furniture</Link>
                            </div>
                        </div>

                        <div className="card shadow rounded border-0 mt-4">
                            <div className="card-body">
                                <h5 className="card-title mb-0">Comments :</h5>

                                <ul className="media-list list-unstyled mb-0">
                                    {commentsData.map((item,index)=>{
                                        return(
                                        <li className="mt-4" key={index}>
                                            <div className="d-flex justify-content-between" >
                                                <div className="d-flex align-items-center">
                                                    <Link className="pe-3" to="#">
                                                        <img src={item.image} className="img-fluid avatar avatar-md-sm rounded-circle shadow" alt="img"/>
                                                    </Link>
                                                    <div className="commentor-detail">
                                                        <h6 className="mb-0"><Link to="#" className="text-dark media-heading">{item.name}</Link></h6>
                                                        <small className="text-muted">{item.date}</small>
                                                    </div>
                                                </div>
                                                <Link to="#" className="text-muted"><i className="mdi mdi-reply"></i> Reply</Link>
                                            </div>
                                            <div className="mt-3">
                                                <p className="text-muted fst-italic p-3 bg-light rounded">{item.desc}</p>
                                            </div>
                                        </li>
                                        )
                                    })}
                                </ul>
                            </div>
                        </div>

                        <div className="card shadow rounded mt-4">
                            <div className="card-body">
                                <h5 className="card-title mb-0">Leave A Comment :</h5>

                                <form className="mt-4">
                                    <div className="row pt-3">
                                        <div className="col-md-12">
                                            <div className="mb-3">
                                                <label className="form-label">Your Comment</label>
                                                <textarea id="message" placeholder="Your Comment" rows="5" name="message" className="form-control" required=""></textarea>
                                            </div>
                                        </div>
    
                                        <div className="col-lg-6">
                                            <div className="mb-3">
                                                <label className="form-label">Name <span className="text-danger">*</span></label>
                                                <input id="name" name="name" type="text" placeholder="Name" className="form-control" required=""/>
                                            </div>
                                        </div>
    
                                        <div className="col-lg-6">
                                            <div className="mb-3">
                                                <label className="form-label">Your Email <span className="text-danger">*</span></label>
                                                <input id="email" type="email" placeholder="Email" name="email" className="form-control" required=""/>
                                            </div>
                                        </div>
    
                                        <div className="col-md-12">
                                            <div className="send d-grid">
                                                <button type="submit" className="btn btn-primary">Send Message</button>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>

                        <div className="card shadow rounded mt-4">
                            <div className="card-body">
                                <h5 className="card-title mb-0">Related News :</h5>

                                <div className="row mt-2">
                                    {blogData.slice(0,2).map((item,index)=>{
                                        return(
                                            <div className="col-lg-6 mt-4 pt-2" key={index}>
                                                <div className="card blog blog-primary shadow rounded overflow-hidden border-0">
                                                    <div className="card-img image position-relative overflow-hidden">
                                                        <div className="position-relative overflow-hidden">
                                                            <img src={item.image} className="img-fluid" alt=""/>
                                                            <div className="card-overlay"></div>
                                                        </div>
                        
                                                        <div className="blog-tag">
                                                            <Link to={`/blog-standard-post/${item.id}`} className="badge bg-light text-dark">{item.tag}</Link>
                                                        </div>
                        
                                                        <div className="read-more">
                                                            <Link to={`/blog-standard-post/${item.id}`} className="text-white title-dark-50">Read More <MdArrowForward className="align-middle ms-1"/></Link>
                                                        </div>
                                                    </div>
                        
                                                    <div className="card-body content p-0">
                                                        <div className="p-4">
                                                            <Link to={`/blog-standard-post/${item.id}`} className="h5 title text-dark d-block mb-0">Defining Your Business Target Audience</Link>
                                                            <p className="text-muted mt-2 mb-0">The most well-known dummy text is the 'Lorem Ipsum', in the 16th century.</p>
                                                        </div>
                        
                                                        <div className="post-meta d-flex justify-content-between p-4 border-top">
                                                            <ul className="list-unstyled mb-0">
                                                                <li className="list-inline-item me-2 mb-0"><Link to="#" className="text-muted like"><FiHeart className="me-1 align-middle"/>33</Link></li>
                                                                <li className="list-inline-item"><Link to="#" className="text-muted comments"><FaRegComment className="me-1 align-middle"/>08</Link></li>
                                                            </ul>
                                                            <Link to="#" className="text-muted readmore"><AiOutlineCalendar className="me-1 align-middle"/>  20th Dec 2021</Link>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        )
                                    })}

                                    <div className="col-12 mt-5">
                                        <div className="d-flex align-items-center justify-content-between">
                                            <Link to="blog-standard-post" className="text-dark align-items-center">
                                                <span className="pro-icons"><MdOutlineArrowBack className="align-middle me-1"/></span>
                                                <span className="text-muted d-none d-lg-inline-block">Web Development</span>
                                                <img src={blog1} className="avatar avatar-small rounded shadow ms-2" style={{height:"auto"}} alt=""/>
                                            </Link>
        
                                            <Link to="/" className="btn btn-lg btn-pills btn-icon btn-soft-primary"><FiHome className="icon"/></Link>
                                            
                                            <Link to="/blog-standard-post" className="text-dark align-items-center">
                                                <img src={blog2} className="avatar avatar-small rounded shadow me-2" style={{height:"auto"}} alt=""/>
                                                <span className="text-muted d-none d-lg-inline-block">Web Designer</span>
                                                <span className="pro-icons"><MdArrowForward className="align-middle ms-1"/></span>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                <BlogSidebar/>
                </div>
            </div>

            <Newsletters/>
        </section>
        <FooterFour/>
        <ScrollTop/>
        </>
    )
}