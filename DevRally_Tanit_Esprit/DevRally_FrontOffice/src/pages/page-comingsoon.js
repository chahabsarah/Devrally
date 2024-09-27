import React, { useEffect, useState } from 'react'
import {Link} from 'react-router-dom'
import bgImg from "../assets/images/bg/07.jpg"
import logo from "../assets/images/logo-icon-48.png"

export default function Comingsoon(){
    let [days,setDays] = useState();
    let [hours,setHours] = useState();
    let [minutes,setMinutes] = useState();
    let [seconds,setSeconds] = useState();
    useEffect(() => {
        
        // The data/time we want to countdown to
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
    }, []);
    return(
        <>
        <section className="bg-home d-flex align-items-center" style={{backgroundImage:`url(${bgImg})`}}>
            <div className="bg-overlay bg-gradient-overlay"></div>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-12 p-0">
                    <div className="d-flex flex-column min-vh-100 justify-content-center px-md-5 py-5 px-4">
                            <div className="text-center">
                                <Link to="/"><img src={logo}height="48" alt=""/></Link>
                            </div>
                            <div className="title-heading text-center my-auto">
                                <h1 className="title-dark text-white mt-2 mb-4 coming-soon">We are coming soon...</h1>
                                <p className="text-white-50 para-desc para-dark mx-auto">Start working with Fronter that can provide everything you need to generate awareness, drive traffic, connect.</p>
                            
                                <div id="countdown">
                                    <ul className="count-down list-unstyled">
                                        <li id="days" className="count-number list-inline-item m-2">{days}<p className='count-head'>Days</p></li>
                                        <li id="hours" className="count-number list-inline-item m-2">{hours}<p className='count-head'>Hours</p></li>
                                        <li id="mins" className="count-number list-inline-item m-2">{minutes}<p className='count-head'>Mins</p></li>
                                        <li id="secs" className="count-number list-inline-item m-2">{seconds}<p className='count-head'>Secs</p></li>
                                        <li id="end" className="h1"></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="text-center">
                                <p className="mb-0 text-muted">© {new Date().getFullYear()} Fronter. Design & Develop with <i className="mdi mdi-heart text-danger"></i> by <Link to="https://shreethemes.in/" target="_blank" className="text-reset">Shreethemes</Link>.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </>
    )
}