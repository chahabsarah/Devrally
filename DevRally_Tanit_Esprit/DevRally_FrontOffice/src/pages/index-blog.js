import React from "react";
import { Link } from "react-router-dom";

import Background from "../assets/images/blog/blog.jpg" 
import bg1 from "../assets/images/blog/bg1.jpg"

import FooterFour from "../componants/footer/footerFour";
import BlogNavbar from "../componants/navbar/blogNavbar";
import Newsletters from "../componants/newsletters"

import { Parallax } from 'react-parallax';
import { blogData } from "../data/data";

import {FiHeart,FaRegComment,AiOutlineCalendar,MdArrowForward,AiOutlineAppstore,AiOutlineLineChart,AiOutlineShoppingCart,BiCube} from "../assets/icons/vander"
import BlogSidebar from "../componants/blogSidebar";
import ScrollTop from "../componants/scrollTop";

export default function IndexBlog(){
   
    return(
        <>
        <BlogNavbar/>
        <section className="d-table w-100 jarallax position-relative overflow-hidden">
            <Parallax
                blur={{ min: 0, max: 0}}
                bgImage={Background}
                bgImageAlt="the dog"
                strength={500}
                bgportfolioImageize="100%"
                bgStyle={{with:"auto", height:"100%" }}
                style={{position:"absolute", width:"100%" , height:"100%"}}
            />
            <div className="bg-overlay bg-gradient-overlay-2"></div>
            <div className="bg-half-170 ">
                <div className="container">
                    <div className="row mt-5 justify-content-center">
                        <div className="col-12">
                            <div className="title-heading text-center">
                                <h2 className="text-white title-dark">A lifestyle you always being <br/> the focal point is innately unhealthy.</h2>
                                <ul className="list-inline text-center mb-0">
                                    <li className="list-inline-item mx-4 mt-4">
                                        <span className="text-white-50 d-block">Author</span>
                                        <Link to="#" className="text-white title-dark">Christina Gonzalez</Link>
                                    </li>

                                    <li className="list-inline-item mx-4 mt-4">
                                        <span className="text-white-50 d-block">Date</span>
                                        <span className="text-white title-dark">19th June 2023</span>
                                    </li>

                                    <li className="list-inline-item mx-4 mt-4">
                                        <span className="text-white-50 d-block">Read Time</span>
                                        <span className="text-white title-dark">8 min read</span>
                                    </li>
                                </ul>
                                <div className="mt-4">
                                    <Link to="#" className="btn btn-primary">Read More </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section className="section">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="features-absolute blog-search">
                            <div className="row justify-content-center">
                                <div className="col-md-9">
                                    <div className="text-center subcribe-form">
                                        <form style={{maxWidth:"800px"}}>
                                            <div className="mb-0">
                                                <input type="text" id="help" name="name" className="border shadow rounded-pill bg-white" required="" placeholder="Search"/>
                                                <button type="submit" className="btn btn-pills btn-primary">Search</button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container">
                <div className="row justify-content-center">
                    <div className="col">
                        <div className="section-title text-center mb-4 pb-2">
                            <h4 className="mb-4">Trending Posts</h4>
                            <p className="text-muted para-desc mb-0 mx-auto">Start working with Fronter that can provide everything you need to generate awareness, drive traffic, connect.</p>
                        </div>
                    </div>
                </div>
                
                <div className="row">
                    {blogData.slice(0,3).map((item,index) => {
                        return(
                        <div className="col-lg-4 col-md-6 mt-4 pt-2" key={index}>
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
                                        <Link to={`/blog-standard-post/${item.id}`} className="text-white title-dark-50">Read More<MdArrowForward className="align-middle ms-1"/></Link>
                                    </div>
                                </div>

                                <div className="card-body content p-0">
                                    <div className="p-4">
                                        <Link to={`/blog-standard-post/${item.id}`} className="h5 title text-dark d-block mb-0">{item.title}</Link>
                                        <p className="text-muted mt-2 mb-0">{item.desc}</p>
                                    </div>

                                    <div className="post-meta d-flex justify-content-between p-4 border-top">
                                        <ul className="list-unstyled mb-0">
                                            <li className="list-inline-item me-2 mb-0"><Link to="#" className="text-muted like"><FiHeart className="me-1 align-middle"/>33</Link></li>
                                            <li className="list-inline-item"><Link to="#" className="text-muted comments"><FaRegComment className="me-1 align-middle"/>08</Link></li>
                                        </ul>
                                        <Link to="#" className="text-muted readmore"><AiOutlineCalendar className="me-1 align-middle"/> {item.date}</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        )
                    })}
                </div>
            </div>

            <div className="container mt-100 mt-60">
                <div className="row">
                    <div className="col-12">
                        <div className="section-title mb-4 pb-2">
                            <h4 className="mb-4">Features</h4>
                            <p className="text-muted para-desc mb-0">Start working with Fronter that can provide everything you need to generate awareness, drive traffic, connect.</p>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-lg-3 col-md-6 col-12 mt-4 pt-2">
                        <div className="card features feature-primary feature-clean align-items-center p-4 rounded shadow bg-white">
                            <div className="icons text-center rounded-md h4 mb-0">
                                <AiOutlineAppstore className="icon"/>
                            </div>
                            <div className="mt-3">
                                <Link to="#!" className="title mb-0 text-dark h6">Trending</Link>
                            </div>
                        </div>
                    </div>
                    
                    <div className="col-lg-3 col-md-6 col-12 mt-4 pt-2">
                        <div className="card features feature-success feature-clean align-items-center p-4 rounded shadow bg-white">
                            <div className="icons text-center rounded-md h4 mb-0">
                                <AiOutlineLineChart className="icon"/>
                            </div>
                            <div className="mt-3">
                                <Link to="#!" className="title mb-0 text-dark h6">Business</Link>
                            </div>
                        </div>
                    </div>
                    
                    <div className="col-lg-3 col-md-6 col-12 mt-4 pt-2">
                        <div className="card features feature-warning feature-clean align-items-center p-4 rounded shadow bg-white">
                            <div className="icons text-center rounded-md h4 mb-0">
                                <AiOutlineShoppingCart className="icon"/>
                            </div>
                            <div className="mt-3">
                                <Link to="#!" className="title mb-0 text-dark h6">eCommerce</Link>
                            </div>
                        </div>
                    </div>
                    
                    <div className="col-lg-3 col-md-6 col-12 mt-4 pt-2">
                        <div className="card features feature-danger feature-clean align-items-center p-4 rounded shadow bg-white">
                            <div className="icons text-center rounded-md h4 mb-0">
                                <BiCube className="icon"/>
                            </div>
                            <div className="mt-3">
                                <Link to="#!" className="title mb-0 text-dark h6">Business</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container mt-100 mt-60">
                <div className="row justify-content-center">
                    <div className="col">
                        <div className="section-title text-center mb-4 pb-2">
                            <h4 className="mb-4">Recent Posts</h4>
                            <p className="text-muted para-desc mb-0 mx-auto">Start working with Fronter that can provide everything you need to generate awareness, drive traffic, connect.</p>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-lg-8 col-md-6">
                        <div className="row"> 
                            {blogData.slice(3,9).map((item,index) => {
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
                                                    <Link to={`/blog-standard-post/${item.id}`} className="h5 title text-dark d-block mb-0">{item.title}</Link>
                                                    <p className="text-muted mt-2 mb-0">{item.desc}</p>
                                                </div>
                
                                                <div className="post-meta d-flex justify-content-between p-4 border-top">
                                                    <ul className="list-unstyled mb-0">
                                                        <li className="list-inline-item me-2 mb-0"><Link to="#" className="text-muted like"><FiHeart className="me-1 align-middle"/>33</Link></li>
                                                        <li className="list-inline-item"><Link to="#" className="text-muted comments"><FaRegComment className="me-1 align-middle"/>08</Link></li>
                                                    </ul>
                                                    <Link to="#" className="text-muted readmore"><AiOutlineCalendar className="me-1 align-middle"/> {item.date}</Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })} 
                        </div>
                    </div>
                    <BlogSidebar/>
                </div>
            </div>

            <div className="container mt-100 mt-60">
                <div className="row">
                    <div className="col-12">
                        <div className=" rounded shadow bg position-relative overflow-hidden jarallax">
                        <Parallax
                            blur={{ min: 0, max: 0}}
                            bgImage={bg1}
                            bgImageAlt="the dog"
                            strength={500}
                            bgportfolioImageize="100%"
                            bgStyle={{with:"auto", height:"100%" }}
                            style={{position:"absolute", width:"100%" , height:"100%"}}
                        />
                            <div className="bg-overlay"></div>

                            <div className="row align-items-center p-4 py-lg-5">
                                <div className="col-lg-8">
                                    <div className="section-title ">
                                        <h4 className="text-white title-dark">Enough Talk, Let's Build Something Together</h4>
                                        <p className="text-white-50 mb-0">Start working with Fronter that can provide everything you need to generate awareness, drive traffic, connect.</p>
                                    </div>
                                </div>

                                <div className="col-lg-4 text-lg-end mt-4 mt-lg-0">
                                    <Link to="#!" className="btn btn-primary">Boots Your Site</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container mt-100 mt-60">
                <div className="row justify-content-center">
                    <div className="col">
                        <div className="section-title text-center mb-4 pb-2">
                            <h4 className="mb-4">Popular Posts</h4>
                            <p className="text-muted para-desc mb-0 mx-auto">Start working with Fronter that can provide everything you need to generate awareness, drive traffic, connect.</p>
                        </div>
                    </div>
                </div>
                
                <div className="row">
                    {blogData.slice(4,7).map((item,index)=>{
                        return(
                            <div className="col-lg-4 col-md-6 mt-4 pt-2" key={index}>
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
                                        <Link to={`/blog-standard-post/${item.id}`} className="h5 title text-dark d-block mb-0">{item.title}</Link>
                                        <p className="text-muted mt-2 mb-0">{item.desc}</p>
                                    </div>
    
                                    <div className="post-meta d-flex justify-content-between p-4 border-top">
                                        <ul className="list-unstyled mb-0">
                                            <li className="list-inline-item me-2 mb-0"><Link to="#" className="text-muted like"><FiHeart className="me-1 align-middle"/>33</Link></li>
                                            <li className="list-inline-item"><Link to="#" className="text-muted comments"><FaRegComment className="me-1 align-middle"/>08</Link></li>
                                        </ul>
                                        <Link to="#" className="text-muted readmore"><AiOutlineCalendar className="me-1 align-middle"/> {item.date}</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        )
                    })}
                </div>
            </div>
            
           <Newsletters/>
        </section>
        <FooterFour/>
        <ScrollTop/>
        </>
    )
}