import React,{useState,useEffect} from "react";
import { Link } from "react-router-dom";

import background from "../assets/images/gym/bg1.jpg"
import scale from "../assets/images/gym/icon/scale.png"
import kettlebell from "../assets/images/gym/icon/kettlebell.png"
import waterBottle from "../assets/images/gym/icon/water-bottle.png"
import fea01 from "../assets/images/gym/fea01.jpg"
import fea02 from "../assets/images/gym/fea02.jpg"
import fea03 from "../assets/images/gym/fea03.jpg"
import about1 from "../assets/images/gym/about01.jpg"
import about2 from "../assets/images/gym/about02.jpg"
import gym1 from "../assets/images/gym/01.jpg"
import gym2 from "../assets/images/gym/02.jpg"
import gym3 from "../assets/images/gym/03.jpg"
import gym4 from "../assets/images/gym/04.jpg"
import gym5 from "../assets/images/gym/05.jpg"
import gym6 from "../assets/images/gym/06.jpg"
import gym7 from "../assets/images/gym/07.jpg"
import gym8 from "../assets/images/gym/08.jpg"
import gym9 from "../assets/images/gym/09.jpg"
import gym10 from "../assets/images/gym/10.jpg"
import benchPress from "../assets/images/gym/icon/bench-press.png"
import chestExpander from "../assets/images/gym/icon/chest-expander.png"
import dumbBell from "../assets/images/gym/icon/dumbbell.png"
import gymnasticRings from "../assets/images/gym/icon/gymnastic-rings.png"
import handGrip from "../assets/images/gym/icon/hand-grip.png"
import skippingRope from "../assets/images/gym/icon/skipping-rope.png"
import kettleBell from "../assets/images/gym/icon/kettlebell.png"
import man from "../assets/images/gym/icon/man.png"
import pool from "../assets/images/gym/icon/pool.png"
import punchingBag2 from "../assets/images/gym/icon/punching-bag-2.png"
import punchingBag from "../assets/images/gym/icon/punching-bag.png"
import team1 from "../assets/images/gym/team1.jpg"
import team2 from "../assets/images/gym/team2.jpg"
import team3 from "../assets/images/gym/team3.jpg"
import team4 from "../assets/images/gym/team4.jpg"
import cta from "../assets/images/gym/cta.jpg"
import blog1 from "../assets/images/gym/blog1.jpg"
import blog2 from "../assets/images/gym/blog2.jpg"
import blog3 from "../assets/images/gym/blog3.jpg"

import GymNavbar from "../componants/navbar/gymNavbar";
import Clients from "../componants/clients"
import FooterTwo from "../componants/footer/footerTwo";

import ModalVideo from 'react-modal-video';
import "../../node_modules/react-modal-video/scss/modal-video.scss"

import Lightbox from 'react-18-image-lightbox';
import "react-18-image-lightbox/style.css"

import {MdArrowForward, FiFacebook,FiInstagram, FiTwitter, FiLinkedin} from "../assets/icons/vander"
import ScrollTop from "../componants/scrollTop";


export default function IndexGym(){
    useEffect(()=>{
        document.body.classList.add('gym-scss');
    })

    const [isOpen, setOpen] = useState(false);
    const [selectedGroup, setSelectedGroup] = useState('all');

    const [lightBox, setLightbox] = useState(false);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const aboutData = [
        {
            image:scale,
            image1:fea01,
            title:"Progression",
            desc:"After you decide to start training we will make sure you get the best fitness program. Our sport experts and latest sports equipment are the winning combination."
        },
        {
            image:kettlebell,
            image1:fea02,
            title:"Workouts",
            desc:"After you decide to start training we will make sure you get the best fitness program. Our sport experts and latest sports equipment are the winning combination."
        },
        {
            image:waterBottle,
            image1:fea03,
            title:"Nutrition",
            desc:"After you decide to start training we will make sure you get the best fitness program. Our sport experts and latest sports equipment are the winning combination."
        },
    ]

    const exersiceData = [
        {
            dataGroup: '["monday", "wednesday", "friday"]',
            image: benchPress,
            name: 'Deadlift',
            time: '06AM - 07AM'
        },
        {
            dataGroup: '["monday", "wednesday", "friday"]',
            image: chestExpander,
            name: 'Back squat',
            time: '07AM - 08AM'
        },
        {
            dataGroup: '["tuesday", "thursday", "saturday"]',
            image: dumbBell,
            name: 'Bench Press',
            time: '08AM - 09AM'
        },
        {
            dataGroup: '["monday", "wednesday", "friday"]',
            image: gymnasticRings,
            name: 'Dumbbell',
            time: '09AM - 10AM'
        },
        {
            dataGroup: '["tuesday", "thursday", "saturday"]',
            image: handGrip,
            name: 'Pushups',
            time: '11AM - 12AM'
        },
        {
            dataGroup: '["monday", "wednesday", "friday"]',
            image: skippingRope,
            name: 'Chest',
            time: '05PM - 06PM'
        },
        {
            dataGroup: '["tuesday", "thursday", "saturday"]',
            image: kettleBell,
            name: 'Kettlebell',
            time: '06PM - 07PM'
        },
        {
            dataGroup: '["monday", "wednesday", "friday"]',
            image: man,
            name: 'Pullup',
            time: '07PM - 08PM'
        },
        {
            dataGroup: '["tuesday", "thursday", "saturday"]',
            image: pool,
            name: 'Biceps',
            time: '08PM - 09PM'
        },
        {
            dataGroup: '["monday", "wednesday", "friday"]',
            image: punchingBag2,
            name: 'Triceps',
            time: '09PM - 10PM'
        },
        {
            dataGroup: '["tuesday", "thursday", "saturday"]',
            image: punchingBag,
            name: 'Legs',
            time: '11PM - 12PM'
        },
    ];

    const teamData = [
        {
            image:team1,
            name:'Calvin Carlo',
            title:'Trainer'
        },
        {
            image:team2,
            name:'Judith Williams',
            title:'Trainer'
        },
        {
            image:team3,
            name:'John Hodge',
            title:'Trainer'
        },
        {
            image:team4,
            name:'Frances Bartley',
            title:'Trainer'
        },
    ]

    const blogData = [
        {
            image:blog1,
            tag:'Gym',
            date:'13th March 2023',
            title:"How to Maximize Time Spent at the Gym",
            desc:"Dummy text is also known as 'fill text'. It is said that song composers"
        },
        {
            image:blog2,
            tag:'Fitness',
            date:'5th May 2023',
            title:"Today is the Best Day to Start Training",
            desc:"Dummy text is also known as 'fill text'. It is said that song composers"
        },
        {
            image:blog3,
            tag:'Gym',
            date:'19th June 2023',
            title:"Simple Condition for all Around Fitness",
            desc:"Dummy text is also known as 'fill text'. It is said that song composers"
        },
    ]

    const gymImage = [gym1,gym2, gym3, gym4, gym5,gym6, gym7, gym8, gym9, gym10]

    const handleMovePrev = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex + gymImage.length - 1) % gymImage.length);
    };

    const handleMoveNext = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % gymImage.length);
    };
    const handleImageClick = (index) => {
        setCurrentImageIndex(index);
        setLightbox(true);
    };
    const currentImage = gymImage[currentImageIndex];

    function filterItems(e,group) {
        const items = document.querySelectorAll('.picture-item');
        setSelectedGroup(group);
        items.forEach(function (item) {
            const groups = JSON.parse(item.getAttribute('data-groups'));

            if (group === 'all' || groups.includes(group)) {
                item.style.display = 'block';
            } else {
                item.style.display = 'none';
            }
        });
    }
    return(
        <>
       
        <GymNavbar/>
 
        <section className="bg-home d-flex align-items-center "  id="home" style={{backgroundImage:`url(${background})`, backgroundAttachment:"fixed"}}>
            <div className="container">
                <div className="row mt-5 justify-content-center">
                    <div className="col-12">
                        <div className="title-heading text-center">
                            <h4 className="heading text-white title-dark mb-4">Build Your Body Strong</h4>
                            <p className="text-white-50 para-desc mx-auto mb-0">Push your fitness further with our mix of facilities and we'll support you with advice on new and better ways to train.</p>
                        
                            <div className="mt-5">
                                <Link to="#" onClick={() => setOpen(true)} className="btn btn-pills btn-primary align-middle lightbox p-2 ps-4">3:07 Min video <span className="btn btn-icon btn-pills btn-success ms-2"><i className="mdi mdi-play"></i></span></Link>
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
                </div>
            </div>
        </section>

        <section className="section pb-0">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-12">
                        <div className="features-absolute">
                            <div className="row">
                                {aboutData.map((item,index) => {
                                    return(
                                        <div className="col-lg-4 col-md-4 col-12" key={index}>
                                            <div className="card features feature-primary feature-image text-center bg-white rounded shadow-md p-md-5 p-4 overflow-hidden">
                                                <img src={item.image} className="avatar avatar-small d-block mx-auto" alt=""/>

                                                <div className="content mt-4">
                                                    <h4>{item.title}</h4>
                                                    <p className="text-muted mt-3 mb-0">{item.desc}</p>
                                                </div>

                                                <div className="overlay card-img">
                                                    <img src={item.image1} className="img-fluid" alt=""/>
                                                    <div className="card-overlay"></div>
                                                </div>

                                                <div className="fea-title position-absolute bottom-0 start-0 end-0 text-center mb-4">
                                                    <Link to="#" className="h4 text-white title-dark title">{item.title}</Link>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section className="section pb-0" id="about">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-md-6">
                        <div className="about-image position-relative">
                            <img src={about1} className="img-fluid rounded shadow" alt=""/>

                            <div className="about-image-position">
                                <img src={about2} className="img-fluid rounded shadow-lg" alt=""/>
                                <div className="position-absolute top-50 start-50 translate-middle">
                                    <Link to="#" onClick={() => setOpen(true)} className="btn btn-pills btn-icon btn-primary lightbox">
                                        <i className="mdi mdi-play"></i>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-6 mt-4 pt-2 mt-sm-0 pt-sm-0">
                        <div className="section-title ms-lg-5">
                            <h5 className="sub-title text-primary fw-normal">Gym & Fitness</h5>
                            <h2 className="title mb-4">Introducing Fronter, <br/> A Fitness Center</h2>
                            <p className="text-muted para-desc">Push your fitness further with our mix of facilities and we'll support you with advice on new and better ways to train.</p>
                            <p className="text-muted mb-0">It seems that only fragments of the original text remain in the Lorem Ipsum texts used today. One may speculate that over the course of time certain letters were added or deleted at various positions within the text. This might also explain why one can now find slightly different versions.</p>
                        
                            <div className="mt-4 pt-2">
                                <Link to="#" className="btn btn-primary">Read More <MdArrowForward/></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container mt-100 mt-60">
                <div className="row justify-content-center">
                    <div className="col">
                        <div className="section-title text-center mb-4 pb-2">
                            <h5 className="sub-title text-primary fw-normal">Gallery</h5>
                            <h2 className="title mb-4">Take a Sneak Peek Inside</h2>
                            <p className="text-muted para-desc mx-auto mb-0">Push your fitness further with our mix of facilities and we'll support you with advice on new and better ways to train.</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container-fluid px-0">
                <div className="row g-0 row-cols-lg-5 row-cols-md-3 row-cols-2 mt-4 pt-2">
                    {gymImage.map((item,index)=>{
                        return(
                            <div className="col" key={index}>
                                <div className="card rounded-0">
                                    <div className="card-body p-0">
                                        <Link to="#" onClick={() => handleImageClick(index)}  className="lightbox" title="">
                                            <img src={item} className="img-fluid" alt=""/>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                    {lightBox && (
                        <Lightbox
                            mainSrc={currentImage}
                            prevSrc={gym1[(currentImageIndex + gym1.length - 1) % gym1.length]}
                            nextSrc={gym1[(currentImageIndex + 1) % gym1.length]}

                            onCloseRequest={() => setLightbox(false)}
                            onMovePrevRequest={handleMovePrev}
                            onMoveNextRequest={handleMoveNext}
                        />
                    )}
                </div>
            </div>
        </section>

        <section className="section pb-0" id="schedule">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col">
                        <div className="section-title text-center mb-4 pb-2">
                            <h5 className="sub-title text-primary fw-normal">Timetable</h5>
                            <h2 className="title mb-4">Gym Schedule</h2>
                            <p className="text-muted para-desc mx-auto mb-0">Push your fitness further with our mix of facilities and we'll support you with advice on new and better ways to train.</p>
                        </div>
                    </div>
                </div>

                <div className="row justify-content-center">
                    <div className="col-12 pt-4 filters-group-wrap text-center">
                        <div className="filters-group">
                            <ul className="container-filter mb-0 categories-filter list-unstyled filter-options">
                                <li className={`list-inline-item categories h5 fw-normal position-relative text-dark ${selectedGroup === 'all' ? 'active' : ''}`} data-group="all" onClick={(e) => filterItems(e,'all')}>All</li>
                                <li className={`list-inline-item categories h5 fw-normal position-relative text-dark ${selectedGroup === 'monday' ? 'active' : ''}`} data-group="monday" onClick={(e) => filterItems(e,'monday')}>Monday</li>
                                <li className={`list-inline-item categories h5 fw-normal position-relative text-dark ${selectedGroup === 'tuesday' ? 'active' : ''}`} data-group="tuesday" onClick={(e) => filterItems(e,'tuesday')}>Tuesday</li>
                                <li className={`list-inline-item categories h5 fw-normal position-relative text-dark ${selectedGroup === 'wednesday' ? 'active' : ''}`} data-group="wednesday" onClick={(e) => filterItems(e,'wednesday')}>Wednesday</li>
                                <li className={`list-inline-item categories h5 fw-normal position-relative text-dark ${selectedGroup === 'thursday' ? 'active' : ''}`} data-group="thursday" onClick={(e) => filterItems(e,'thursday')}>Thursday</li>
                                <li className={`list-inline-item categories h5 fw-normal position-relative text-dark ${selectedGroup === 'friday' ? 'active' : ''}`} data-group="friday" onClick={(e) => filterItems(e,'friday')}>Friday</li>
                                <li className={`list-inline-item categories h5 fw-normal position-relative text-dark ${selectedGroup === 'saturday' ? 'active' : ''}`} data-group="saturday" onClick={(e) => filterItems(e,'saturday')}>Saturday</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div id="grid" className="row row-cols-xl-6 row-cols-lg-5 row-cols-md-3 row-cols-sm-2 row-cols-1 justify-content-center">
                    {exersiceData.map((item,index) => {
                        return(
                        <div className="col picture-item mt-4" data-groups={item.dataGroup} key={index}>
                            <div className="card schedule-time p-4 rounded shadow text-center m-1">
                                <img src={item.image} className="avatar avatar-small d-block mx-auto" alt=""/>
    
                                <div className="content mt-4">
                                    <h5 className="mb-0 ex-name fw-normal">{item.name}</h5>
                                    <small className="text-muted mb-0">{item.time}</small>
                                </div>
                            </div>
                        </div>
                        )
                    })}
                   
                </div>
            </div>
        </section>

        <section className="section"  id="team">
            <div className="container">
                <div className="row">
                    <div className="col">
                        <div className="section-title text-center mb-4 pb-2">
                            <h5 className="sub-title text-primary fw-normal">Team</h5>
                            <h2 className="title mb-4">Gym Trainer</h2>
                            <p className="text-muted para-desc mx-auto mb-0">Push your fitness further with our mix of facilities and we'll support you with advice on new and better ways to train.</p>
                        </div>
                    </div>
                </div>

                <div className="row">
                    {teamData.map((item, index) => {
                        return(
                            <div className="col-lg-3 col-md-6 col-12 mt-4 pt-2" key={index}>
                                <div className="card team team-primary team-two text-center">
                                    <div className="card-img team-image d-inline-block mx-auto rounded overflow-hidden">
                                        <img src={item.image} className="img-fluid" alt=""/>
                                        <div className="card-overlay rounded"></div>

                                        <div className="content">
                                            <h4 className="mb-0 text-white title-dark fw-normal">{item.name}</h4>
                                            <small className="text-white-50 mb-0 fw-normal mt-1 designation">{item.title}</small>

                                            <ul className="list-unstyled team-social mb-0 mt-3">
                                                <li className="list-inline-item me-1"><Link to="#" className="btn btn-sm btn-pills btn-icon"><FiFacebook className="fea icon-sm fea-social"/></Link></li>
                                                <li className="list-inline-item me-1"><Link to="#" className="btn btn-sm btn-pills btn-icon"><FiInstagram className="fea icon-sm fea-social"/></Link></li>
                                                <li className="list-inline-item me-1"><Link to="#" className="btn btn-sm btn-pills btn-icon"><FiTwitter className="fea icon-sm fea-social"/></Link></li>
                                                <li className="list-inline-item me-1"><Link to="#" className="btn btn-sm btn-pills btn-icon"><FiLinkedin className="fea icon-sm fea-social"/></Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>

        <section className="bg-half-170 " style={{backgroundImage:`url(${cta})`, backgroundAttachment:"fixed"}}>
            <div className="bg-overlay"></div>
            <div className="container">
                <div className="row">
                    <div className="col-lg-8 col-md-6 order-2 order-md-1 mt-4 mt-sm-0 pt-2 pt-sm-0">
                        <div className="section-title text-center text-md-start">
                            <h2 className="mb-4 text-white title-dark">Speak Fitness and</h2>
                            <p className="text-white-50 para-desc mb-0">Push your fitness further with our mix of facilities and we'll support you with advice on new and better ways to train.</p>
                        
                            <div className="mt-4 pt-2">
                                <Link to="#" className="btn btn-primary">Purchase Membership</Link>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 order-1 order-md-2">
                        <div className="py-5 py-md-0">
                            <div className="play-icon">
                                <Link to="#" onClick={() => setOpen(true)} className="play-btn lightbox">
                                    <i className="mdi mdi-play text-primary rounded-circle bg-white shadow-lg"></i>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section className="section pb-0" id="testimonial">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col">
                        <div className="section-title text-center mb-4 pb-2">
                            <h5 className="sub-title text-primary fw-normal">Testimonial</h5>
                            <h2 className="title mb-4">Trusted by <br/> Our Customers</h2>
                            <p className="text-muted para-desc mb-0 mx-auto">Push your fitness further with our mix of facilities and we'll support you with advice on new and better ways to train.</p>
                        </div>
                    </div>
                </div>
                <Clients/>
                
            </div>
        </section>

        <section className="section"  id="blog">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col">
                        <div className="section-title text-center mb-4 pb-2">
                            <h2 className="title mb-4">Our Blogs or News</h2>
                            <p className="text-muted para-desc mb-0 mx-auto">Push your fitness further with our mix of facilities and we'll support you with advice on new and better ways to train.</p>
                        </div>
                    </div>
                </div>
                
                <div className="row">
                    {blogData.map((item,index) =>{
                        return(
                        <div className="col-lg-4 col-md-6 mt-4 pt-2" key={index}>
                            <div className="card border-0 blog blog-primary shadow rounded">
                                <div className="card-body p-4">
                                    <ul className="list-unstyled d-flex justify-content-between mb-4">
                                        <li><Link to="" className="link small">{item.tag}</Link></li>
                                        <li className="text-muted small">{item.date}</li>
                                    </ul>
                                    <div className="image position-relative overflow-hidden rounded">
                                        <img src={item.image} className="img-fluid rounded" alt=""/>
                                    </div>
                                    <div className="mt-4">
                                        <Link to="#" className="h4 title text-dark d-block fw-normal mb-0">{item.title}</Link>
                                        <p className="text-muted my-2">{item.desc}</p>
                                        <Link to="#" className="link">Read more <MdArrowForward/></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        )
                    })}
                </div>
            </div>
        </section> 
        <FooterTwo/>
        <ScrollTop/>
        </>
    )
}