import React,{useEffect, useState} from "react";
import { Link } from "react-router-dom";

import backgroundImg from "../assets/images/crypto/bg1.jpg"
import backgroundImg2 from "../assets/images/crypto/bg2.jpg"
import aboutImg from "../assets/images/crypto/01.png"
import ctaImg from "../assets/images/crypto/cta.jpg"
import logo80 from "../assets/images/logo-icon-80.png"
import brand1 from "../assets/images/brands/3.png"
import brand2 from "../assets/images/brands/5.png"
import brand3 from "../assets/images/brands/6.png"
import brand4 from "../assets/images/brands/8.png"
import brand5 from "../assets/images/brands/19.png"
import brand6 from "../assets/images/brands/20.png"

import coin1 from "../assets/images/crypto/coin/auroracoin.png"
import coin2 from "../assets/images/crypto/coin/avalanche.png"
import coin3 from "../assets/images/crypto/coin/binance.png"
import coin4 from "../assets/images/crypto/coin/bitcoin-cash.png"
import coin5 from "../assets/images/crypto/coin/bitcoin.png"
import coin6 from "../assets/images/crypto/coin/bittorrent.png"
import coin7 from "../assets/images/crypto/coin/blocknet.png"
import coin8 from "../assets/images/crypto/coin/coinye.png"
import coin9 from "../assets/images/crypto/coin/ethereum.png"
import coin10 from "../assets/images/crypto/coin/kucoin.png"
import coin11 from "../assets/images/crypto/coin/litecoin.png"
import coin12 from "../assets/images/crypto/coin/monero.png"
import coin13 from "../assets/images/crypto/coin/potcoin.png"
import coin14 from "../assets/images/crypto/coin/primecoin.png"
import coin15 from "../assets/images/crypto/coin/zcash.png"
import mobile from "../assets/images/crypto/hand-with-mobile.png"


import CryptoNavbar from "../componants/navbar/cryptoNavbar";
import Clients from "../componants/clients";
import CryptoFooter from "../componants/footer/cryptoFooter";
import ScrollTop from "../componants/scrollTop";

import TinySlider from "tiny-slider-react";
import '../../node_modules/tiny-slider/dist/tiny-slider.css';

import ModalVideo from 'react-modal-video';
import "../../node_modules/react-modal-video/scss/modal-video.scss"

import { Parallax } from 'react-parallax';
import CountUp from 'react-countup';
import Modal from 'react-bootstrap/Modal';
import { TypeAnimation } from 'react-type-animation';

import {AiOutlineCheckCircle, MdKeyboardArrowRight,LiaFileInvoiceDollarSolid,SiSimpleanalytics,AiOutlineDashboard,FaSwatchbook,TbArrowsExchange2,FiLock,BiRightArrowCircle,FiVideo,FiHelpCircle,BsTelephone,MdArrowForward} from "../assets/icons/vander"
const settings = {
    container: '.tiny-home-slide-four',
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
                items: 4
            },

            992: {
                items: 3
            },

            767: {
                items: 2
            },

            320: {
                items: 1
            },
        },
};

export default function IndexCryptoCurrency(){
    const [isOpen, setOpen] = useState(false);
    const [days, setDays] = useState();
    const [hours, setHours] = useState();
    const [minutes, setMinutes] = useState();
    const [seconds, setSeconds] = useState();

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const tokenData = [
        {
            name:'Bitcoin',
            amount:"$ 41245",
            perAmount:"- 3.5%",
            profit: false,
        },
        {
            name:'Litecoin',
            amount:"$ 216",
            perAmount:"+ 3.5%",
            profit: true,
        },
        {
            name:'Ethereum',
            amount:"$ 451",
            perAmount:"+ 3.5%",
            profit: true,
        },
        {
            name:'Blocknet',
            amount:"$ 845",
            perAmount:"+ 3.5%",
            profit: true,
        },
        {
            name:'Monero',
            amount:"$ 654",
            perAmount:"- 3.5%",
            profit: false,
        },
    ]
    const brandImg =[brand1,brand2,brand3,brand4,brand5,brand6]

    const BenefitsData = [
        {
            icon:LiaFileInvoiceDollarSolid,
            title:'Support',
            desc:'Composed in a pseudo-Latin language which more or less corresponds.'
        },
        {
            icon:SiSimpleanalytics,
            title:'Service Level',
            desc:'Composed in a pseudo-Latin language which more or less corresponds.'
        },
        {
            icon:AiOutlineDashboard,
            title:'Take profit / Stoploss',
            desc:'Composed in a pseudo-Latin language which more or less corresponds.'
        },
        {
            icon:FaSwatchbook,
            title:'Trailing Stop',
            desc:'Composed in a pseudo-Latin language which more or less corresponds.'
        },
        {
            icon:TbArrowsExchange2,
            title:'Pending Orders',
            desc:'Composed in a pseudo-Latin language which more or less corresponds.'
        },
        {
            icon:FiLock,
            title:'Platform Fees',
            desc:'Composed in a pseudo-Latin language which more or less corresponds.'
        },
    ]
    const cryptoImg =[coin1,coin2,coin3,coin4,coin5,coin6,coin7,coin8,coin9,coin10,coin11,coin12,coin13,coin14,coin15]

    const counterData = [
        {
            title:"Founded in",
            max:'2021',
            title2:'',
        },
        {
            title:"Team Member",
            max:'1000',
            title2:'+',
        },
        {
            title:"Users",
            max:'10',
            title2:'M',
            
        },
        {
            title:"Insurance Cover",
            max:'410',
             title2:'M',
        },
    ]
  useEffect(()=>{
    var eventCountDown = new Date("December 25, 2024 16:37:52").getTime();
    
    // Run myfunc every second
    var myfunc = setInterval(function () {

      var now = new Date().getTime();
      var timeleft = eventCountDown - now;

      // Calculating the days, hours, minutes and seconds left
       setDays(Math.floor(timeleft / (1000 * 60 * 60 * 24)))
       setHours(Math.floor((timeleft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)))
       setMinutes(Math.floor((timeleft % (1000 * 60 * 60)) / (1000 * 60)))
       setSeconds(Math.floor((timeleft % (1000 * 60)) / 1000))


      // Display the message when countdown is over
      if (timeleft < 0) {
        clearInterval(myfunc);
      }
    }, 1000);
  },[])
   
    return(
        <>
        <CryptoNavbar/>
        <section className="bg-half-260 d-flex align-items-center " id="home">
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
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="title-heading">
                            <h5 className="fw-normal text-white-50 mb-3">Pay with 

                            <TypeAnimation
                                sequence={[
                                    // Same substring at the start will only be typed out once, initially
                                    'Crypto',
                                    1000, // wait 1s before replacing "Mice" with "Hamsters"
                                    'ETH',
                                    1000,
                                    'BNB',
                                    1000,
                                    'SOL',
                                    1000,
                                    'DOT',
                                    1000,
                                    'NEAR',
                                    1000,
                                    'CEL',
                                    1000,
                                ]}
                                wrapper="span"
                                speed={10}
                                className="typewrite text-white title-dark ms-1"
                                repeat={Infinity}
                                />
                            
                            </h5>
                            <h4 className="display-5 fw-bold text-white title-dark mb-4">Building the future <br/> of Crypto Revolution.</h4>
                            <p className="text-white-50 para-desc mb-0">Take full control of your cryptocurrencies and collectibles by storing them on your own device.</p>

                            <div className="subcribe-form mt-4 mb-3 pt-2">
                                <form className="ms-0">
                                    <input type="email" id="email2" name="email" className="rounded-pill bg-white-50 border opacity-7" placeholder="E-mail :"/>
                                    <button type="submit" className="btn btn-pills btn-primary">Register</button>
                                </form>
                            </div>
                            <span className="text-white title-dark">Looking for help? <Link to="#" className="text-warning">Get in touch with us</Link></span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <div className="position-relative">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="shape crypto-bottom overflow-hidden">
                            <div className="p-4 crypto-border">
                                <div className="row align-items-center">
                                    <div className="col-lg-4 col-md-6 col-5">
                                        <h5 className="text-white-50 mb-0">Token Popular</h5>
                                    </div>

                                    <div className="col-lg-8 col-md-6 col-7">
                                        <div className="tiny-home-slide-four">
                                        <TinySlider settings={settings}>
                                            {tokenData.map((item, index) =>{
                                                return(
                                                    <div className="tiny-slide" key={index}>
                                                        <div className="text-center">
                                                            <h6 className="text-white title-dark mb-1">{item.name}</h6>
                                                            <span className="text-white-50 d-block">{item.amount}</span>
                                                            <span className={item.profit === false ? "text-danger" : "text-success"}>{item.perAmount}</span>
                                                        </div>
                                                    </div>
                                                )
                                            })}
                                        </TinySlider> 
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>  
        </div>

        <section className="section">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6 col-md-6 order-1 order-md-2">
                        <div className="ms-lg-5">
                            <img src={aboutImg} className="img-fluid" alt=""/>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-6 order-2 order-md-1 mt-4 mt-sm-0 pt-2 pt-sm-0">
                        <div className="section-title me-lg-5">
                            <h6 className="text-primary">Why choose us?</h6>
                            <h4 className="title mb-4">Buy cryptocurrency <br/> with Fronter</h4>
                            <p className="text-muted">Due to its widespread use as filler text for layouts, non-readability is of great importance: human perception is tuned to recognize certain patterns and repetitions in texts. If the distribution of letters visual impact.</p>
                            <ul className="list-unstyled text-muted">
                                <li className="mb-1"><span className="text-primary h5 me-2"><AiOutlineCheckCircle className="align-middle"/></span>Digital Marketing Solutions for Tomorrow</li>
                                <li className="mb-1"><span className="text-primary h5 me-2"><AiOutlineCheckCircle className="align-middle"/></span>Create your own skin to match your brand</li>
                            </ul>
                            <Link to="#" className="mt-3 h6 text-primary">Find Out More <MdKeyboardArrowRight/></Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container mt-100 mt-60">
                <div className="row">
                    <div className="col text-center mb-4">
                        <h5>We featured on popular partners like</h5>
                    </div>
                </div>

                <div className="row justify-content-center">
                    {brandImg.map((item,index)=>{
                        return(
                            <div className="col-lg-2 col-md-2 col-6 py-2" key={index}>
                                <div className="brand-gray text-center">
                                    <img src={item} className="avatar avatar-md-md w-auto" alt=""/>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
        <section className="section  overflow-hidden py-0" id="service">
            <Parallax
                blur={{ min: 0, max: 0}}
                bgImage={backgroundImg2}
                bgImageAlt="the dog"
                strength={500}
                bgportfolioImageize="100%"
                bgStyle={{with:"auto", height:"100%" }}
                style={{position:"absolute", width:"100%" , height:"100%"}}
            >
            </Parallax>
            <div className="bg-overlay bg-primary opacity-9 "></div>
            <div className="container section">
                <div className="row justify-content-center">
                    <div className="col-12">
                        <div className="section-title text-center mb-4 pb-2">
                            <h4 className="title text-white title-dark mb-3">Our Benefits</h4>
                            <p className="text-white-50 para-desc mx-auto mb-0">Start working with Fronter that can provide everything you need to generate awareness, drive traffic, connect.</p>
                        </div>
                    </div>
                </div>

                <div className="row justify-content-center">
                    {BenefitsData.map((item,index) =>{
                        const Icon = item.icon
                        return(
                        <div className="col-lg-4 col-sm-6 mt-4 pt-2" key={index}>
                            <div className="features feature-border-light p-4 rounded text-center">
                                <div className="text-white title-dark d-block mx-auto rounded">
                                    <Icon className="icon h1 mb-0"/>
                                </div>

                                <div className="card-body p-0 mt-4">
                                    <Link to="#" className="h5 text-white title-dark">Support</Link>
                                    <p className="text-white-50 mt-2">Composed in a pseudo-Latin language which more or less corresponds.</p>
                                    <Link to="#" className="text-white title-dark">Read More <MdArrowForward/></Link>
                                </div>
                            </div>
                        </div>
                        )
                    })}
                </div>
            </div>
        </section>
        <section className="section pb-0" id="token">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-5 col-md-7 col-12 order-2 order-md-1 mt-4 mt-sm-0 pt-2 pt-sm-0">
                        <div className="card border-0 shadow rounded p-4 bg-light overflow-hidden">
                            <img src={logo80} className="d-block mx-auto" alt=""/>
                            <h5 className="text-center mt-3">Fronter Token Sale</h5>
                            <div className="row">
                                <div className="col-md-12 text-center">
                                    <div id="token-sale">
                                        <ul className="count-down list-unstyled m-0">
                                            <li id="days" className="count-number fw-semibold mb-0 list-inline-item px-3">{days}<p className='count-head'>Days</p></li>
                                            <li id="hours" className="count-number fw-semibold mb-0 list-inline-item px-3">{hours}<p className='count-head'>Hours</p></li>
                                            <li id="mins" className="count-number fw-semibold mb-0 list-inline-item px-3">{minutes}<p className='count-head'>Minutes</p></li>
                                            <li id="secs" className="count-number fw-semibold mb-0 list-inline-item px-3">{seconds}<p className='count-head'>Seconds</p></li>
                                            <li id="end" className="h1"></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            
                            <p className="text-muted text-center">Token sale ends <span className="text-dark fw-semibold">August 25th 2022</span></p>

                            <div className="progress-box mt-4">
                                <div className="progress rounded-md" style={{height:'16px'}}>
                                    <div className="progress-bar position-relative bg-gradient-primary rounded-md" style={{width:'60%'}}>
                                        <div className="progress-value d-block text-muted">Funded 60% = $ 600000</div>
                                    </div>
                                </div>
                                <div className="d-flex justify-content-between mt-2">
                                    <h6 className="title text-muted text-start mb-0">$ 1000</h6>
                                    <h6 className="title text-muted text-end mb-0">$ 1000000</h6>
                                </div>
                            </div>

                            <ul className="list-unstyled mb-0 mt-4">
                                <li className="mb-0"><BiRightArrowCircle className=" text-primary align-middle fs-5 me-1"/><span className="text-muted">Soft Cap:</span> &nbsp;10000 USD</li>
                                <li className="mb-0"><BiRightArrowCircle className=" text-primary align-middle fs-5 me-1"/><span className="text-muted">Min. transaction Amount:</span> &nbsp;1000 USD</li>
                                <li className="mb-0"><BiRightArrowCircle className=" text-primary align-middle fs-5 me-1"/><span className="text-muted">Target:</span> &nbsp;900000 USD</li>
                            </ul>

                            <div className="mt-4">
                                <Link to="#" className="btn btn-primary w-100">Join Now</Link>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-6 offset-lg-1 col-md-5 col-12 order-1 order-md-2">
                        <div className="section-title">
                            <span className="badge bg-soft-primary rounded-md">Sale tokens</span>
                            <h4 className="title mt-3 mb-4">The token sale is live!</h4>
                            <p className="text-muted para-desc mx-auto">With Fronter Trade, you can be sure your trading skills are matched with excellent service.</p>
                            <p className="text-muted para-desc mx-auto mb-0">Fronter Institutional Markets is a full-stack crypto services platform that works with crypto-native businesses and institutional clients on lending, trading, and custody solutions tailored to your needs.</p>
                            <div className="mt-4">
                                <Link to="#" className="btn btn-primary">Token sale</Link>
                                <Link to="#!" onClick={() => setOpen(true)} className="btn btn-icon btn-pills btn-primary m-1 lightbox"><FiVideo className="icons"/></Link><small className="fw-semibold align-middle ms-1">Watch Now</small>
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

            <div className="container mt-100 mt-60">
                <div className="row justify-content-center">
                    <div className="col-12">
                        <div className="section-title text-center mb-4 pb-2">
                            <h4 className="title mb-3">All your crypto and NFTs in one place</h4>
                            <p className="text-muted para-desc mx-auto mb-0">With Fronter Trade, you can be sure your trading skills are matched with excellent service.</p>
                        </div>
                    </div>
                </div>

                <div className="row justify-content-center">
                    <div className="col-12">
                        <ul className="list-unstyled text-center">
                            {cryptoImg.map((item,index)=>{
                                return(
                                <li className="list-inline-item m-md-4 my-4 mx-2" key={index}>
                                    <img src={item}className="avatar avatar-small p-lg-3 p-2 rounded-pill shadow-md" alt=""/>
                                </li>
                                )
                            })}
                        </ul>
                    </div>
                </div>
            </div>

            <div className="container mt-100 mt-60">
                <div className="row align-items-lg-center align-items-end">
                    <div className="col-md-6">
                        <div className="section-title mb-4 pb-2">
                            <h4 className="title mb-4">Free your money and <br/> invest with confidence</h4>
                            <p className="text-muted para-desc mb-0">With Fronter Trade, you can be sure your trading skills are matched with excellent service.</p>

                            <ul className="list-unstyled mb-0">
                                <li className="d-flex mt-4">
                                    <AiOutlineCheckCircle className=" h4 text-primary"/>

                                    <div className="flex-1 ms-3">
                                        <h6 className="mb-0">Buy, sell, and trade on the go</h6>
                                        <p className="text-muted mt-2 mb-0">Manage your holdings from your mobile device</p>
                                    </div>
                                </li>

                                <li className="d-flex mt-4">
                                    <AiOutlineCheckCircle className=" h4 text-primary"/>
                                    <div className="flex-1 ms-3">
                                        <h6 className="mb-0">Take control of your wealth</h6>
                                        <p className="text-muted mt-2 mb-0">Rest assured you (and only you) have access to your funds</p>
                                    </div>
                                </li>
                            </ul>

                            <div className="mt-4">
                                <Link to="#" className="btn btn-primary">Download Wallet</Link>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-6">
                        <div className="">
                            <img src={mobile} className="img-fluid" alt=""/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section className=" overflow-hidden position-relative">
            <Parallax
                blur={{ min: 0, max: 0}}
                bgImage={ctaImg}
                bgImageAlt="the dog"
                strength={500}
                bgportfolioImageize="100%"
                bgStyle={{with:"auto", height:"100%" }}
                style={{position:"absolute", width:"100%" , height:"100%"}}
            >
            </Parallax>
            <div className="container section">
                <div className="row justify-content-center">
                    {counterData.map((item,index)=>{
                        return(
                        <div className="col-md-3 col-sm-6 mt-4 mt-sm-0 pt-2 pt-sm-0" key={index}>
                            <div className="text-center">
                                <h6 className="text-white title-dark mb-0">{item.title}</h6>
                                <h2 className="mb-0 display-6 mt-3 fw-bold text-primary"><CountUp start={0} end={item.max}></CountUp>{item.title2}</h2>
                            </div>
                        </div>
                        )
                    })}
                </div>
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

            <div className="container mt-100 mt-60">
                <div className="row">
                    <div className="col-md-6 col-12">
                        <div className="d-flex">
                            <FiHelpCircle className="fea icon-ex-md text-primary me-2 mt-1"/>
                            <div className="flex-1">
                                <h5 className="mt-0 fw-normal">How our <span className="text-primary">Fronter</span> work ?</h5>
                                <p className="answer text-muted mb-0">Due to its widespread use as filler text for layouts, non-readability is of great importance: human perception is tuned to recognize certain patterns and repetitions in texts.</p>
                            </div>
                        </div>
                    </div>
                    
                    <div className="col-md-6 col-12 mt-4 mt-sm-0 pt-2 pt-sm-0">
                        <div className="d-flex">
                            <FiHelpCircle className="fea icon-ex-md text-primary me-2 mt-1"/>
                            <div className="flex-1">
                                <h5 className="mt-0 fw-normal"> What is the main process open account ?</h5>
                                <p className="answer text-muted mb-0">If the distribution of letters and 'words' is random, the reader will not be distracted from making a neutral judgement on the visual impact</p>
                            </div>
                        </div>
                    </div>
                    
                    <div className="col-md-6 col-12 mt-4 pt-2">
                        <div className="d-flex">
                            <FiHelpCircle className="fea icon-ex-md text-primary me-2 mt-1"/>
                            <div className="flex-1">
                                <h5 className="mt-0 fw-normal"> How to make unlimited data entry ?</h5>
                                <p className="answer text-muted mb-0">Furthermore, it is advantageous when the dummy text is relatively realistic so that the layout impression of the final publication is not compromised.</p>
                            </div>
                        </div>
                    </div>
                    
                    <div className="col-md-6 col-12 mt-4 pt-2">
                        <div className="d-flex">
                            <FiHelpCircle className="fea icon-ex-md text-primary me-2 mt-1"/>
                            <div className="flex-1">
                                <h5 className="mt-0 fw-normal"> Is <span className="text-primary">Fronter</span> safer to use with my account ?</h5>
                                <p className="answer text-muted mb-0">The most well-known dummy text is the 'Lorem Ipsum', which is said to have originated in the 16th century. Lorem Ipsum is composed in a pseudo-Latin language which more or less corresponds to 'proper' Latin.</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row mt-md-5 pt-md-3 justify-content-center">
                    <div className="col-12 text-center">
                        <div className="section-title">
                            <h4 className="title mb-4">Have Question ? Get in touch!</h4>
                            <p className="text-muted para-desc mx-auto">Start working with Fronter that can provide everything you need to generate awareness, drive traffic, connect.</p>
                            <Link to="#" onClick={handleShow} className="btn btn-primary mt-4"><BsTelephone className="align-middle"/> Contact us</Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <Modal show={show} onHide={handleClose} centered={true}>
            <Modal.Header closeButton>
            <Modal.Title><h5 className="modal-title" id="exampleModalCenterTitle">Contact Us </h5></Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <form>
                    <p id="error-msg" className="mb-0"></p>
                    <div id="simple-msg"></div>
                    <div className="row">
                        <div className="col-md-6">
                            <div className="mb-3">
                                <label className="form-label fw-normal">Your Name <span className="text-danger">*</span></label>
                                <input name="name" id="name" type="text" className="form-control" placeholder="Name :"/>
                            </div>
                        </div>

                        <div className="col-md-6">
                            <div className="mb-3">
                                <label className="form-label fw-normal">Your Email <span className="text-danger">*</span></label>
                                <input name="email" id="email" type="email" className="form-control" placeholder="Email :"/>
                            </div> 
                        </div>

                        <div className="col-12">
                            <div className="mb-3">
                                <label className="form-label fw-normal">Subject</label>
                                <input name="subject" id="subject" className="form-control" placeholder="subject :"/>
                            </div>
                        </div>

                        <div className="col-12">
                            <div className="mb-3">
                                <label className="form-label fw-normal">Comments <span className="text-danger">*</span></label>
                                <textarea name="comments" id="comments" rows="4" className="form-control" placeholder="Message :"></textarea>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <div className="d-grid">
                                <button type="submit" id="submit" name="send" className="btn btn-primary">Send Message</button>
                            </div>
                        </div>
                    </div>
                </form>
            </Modal.Body>
        </Modal>
        <CryptoFooter/>
        <ScrollTop/>
        </>
    )
}