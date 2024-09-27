import React, { useEffect, useState } from 'react'
import {Link} from 'react-router-dom'
import bgImg from "../assets/images/bg/07.jpg"
import logo from "../assets/images/logo-light.png"

export default function Maintenance(){
    const [minutes, setMinutes] = useState(0);
    const [remainingSeconds, setRemainingSeconds] = useState(0);
   
    useEffect(() => {

        let intervalId = setInterval(() => {
            calculateTimeRemaining()
        }, 1000);

        var seconds = 3599;
        function calculateTimeRemaining() {

            const minutes = Math.round((seconds - 30) / 60);
            const remainingSeconds = seconds % 60;

            setMinutes(minutes);
            setRemainingSeconds(remainingSeconds);

            if (seconds === 0) {
                clearInterval(intervalId);
            } else {
                seconds = seconds - 1;
            }
        }

        return () => {
            clearInterval(intervalId);
        };
    }, []);
    return(
        <>
        <section className="bg-home d-flex align-items-center" style={{backgroundImage:`url(${bgImg})`}}>
            <div className="bg-overlay bg-gradient-overlay"></div>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-12 text-center">
                        <Link to='/'>
                            <img src={logo} alt=""/>
                        </Link>
                        <h1 className="text-white title-dark mt-4 mb-4">We are back soon...</h1>
                        <p className="text-white-50 para-desc mx-auto">Explore and learn more about everything from machine learning and global payments to scaling your team.</p>
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-12 text-center">
                        <div className="text-center">
                            <span id="maintenance" className="timer">{ minutes }:{ remainingSeconds }</span><span className="d-block h6 text-uppercase text-white title-dark">Minutes</span>
                        </div>
                    </div>
                </div>

                <div className="row mt-4 pt-2">
                    <div className="col-12 text-center">
                        <div className="subcribe-form">
                            <form action="/">
                                <input name="email" id="email" type="email" className="rounded-pill opacity-5" required="" placeholder="Your email :"/>
                                <button type="submit" className="btn btn-primary rounded-pill">Subscribe</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </>
    )
}