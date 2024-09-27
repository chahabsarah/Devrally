import React,{useEffect,useState} from "react";
import { Link } from "react-router-dom";

import {FiHome, FiMail} from '../assets/icons/vander'

import Modal from 'react-bootstrap/Modal';
import ScrollTop from "../componants/scrollTop";

export default function PhotographyContact(){
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const  handleShow = () => setShow(true);
    useEffect(()=>{
        document.body.classList.add('photography-scss');
    })
    return(
        <>
         <div className="back-to-home rounded d-none d-sm-block">
            <Link to="/index-photography" className="btn btn-icon btn-primary"><FiHome className="icons"/></Link>
        </div>
        <section className="d-flex align-items-center">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-12 px-0">
                        <div className="map map-gray map-100vh position-relative">
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d39206.002432144705!2d-95.4973981212445!3d29.709510002925988!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8640c16de81f3ca5%3A0xf43e0b60ae539ac9!2sGerald+D.+Hines+Waterwall+Park!5e0!3m2!1sen!2sin!4v1566305861440!5m2!1sen!2sin" style={{border:"0"}} title="myFram" allowFullScreen></iframe>
                        </div>
                        <button className="contact-show-btn position-absolute top-50 start-50 translate-middle text-white title-dark rounded-pill border-0" onClick={handleShow}>
                            <FiMail className="btn-icon" style={{width:"24px", height:"24px"}}/>
                        </button>
                    </div>
                </div>
            </div>
        </section>
        <Modal
                    show={show} onHide={handleClose}
                    size="md"
                    aria-labelledby="contained-modal-title-vcenter"
                    centered
                    >
                <Modal.Header closeButton>
                    <Modal.Title> 
                        <h5 className="modal-title" id="exampleModalCenterTitle">Contact Us </h5>
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form >
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
            <ScrollTop/>
        </>
    )
}