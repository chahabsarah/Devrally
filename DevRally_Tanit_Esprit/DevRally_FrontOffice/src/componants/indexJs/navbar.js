import React,{useState,useEffect} from "react";
import logodark from "../../assets/images/devrally.png"
import logolight from "../../assets/images/devrally.png"
import businessPng from "../../assets/images/demos/business.png"
import digitalagency from "../../assets/images/demos/digital-agency.png"
import startup from "../../assets/images/demos/startup.png"
import saas from "../../assets/images/demos/saas.png"
import marketing from "../../assets/images/demos/marketing.png"
import crypto from "../../assets/images/demos/crypto.png"
import cowork from "../../assets/images/demos/cowork.png"
import gym from "../../assets/images/demos/gym.png"
import restaurant from "../../assets/images/demos/restaurant.png"
import job from "../../assets/images/demos/job.png"
import blog from "../../assets/images/demos/blog.png"
import personal from "../../assets/images/demos/personal.png"
import portfolio from "../../assets/images/demos/portfolio.png"
import portfolioAgency from "../../assets/images/demos/portfolio-agency.png"
import studio from "../../assets/images/demos/studio.png"
import photography from "../../assets/images/demos/photography.png"
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import {AiOutlineArrowUp} from "../../assets/icons/vander"
import './styles.css'
export default function Navbar({navClass, manuClass,logoLight,smallButton}){
    const [scroll, setScroll] = useState(false);
    const [isMenu, setisMenu] = useState(false);
    const navigate = useNavigate();
    const [currentUser, setCurrentUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [showPopup, setShowPopup] = useState(false);
    const [website, setWebsite] = useState('');
    const [domain, setDomain] = useState('');
    const [buttonType, setButtonType] = useState('');
    const [showConfirmationPopup, setShowConfirmationPopup] = useState(false);
    const [confirmationMessage, setConfirmationMessage] = useState('');
    const [userType, setUserType] = useState('');

    useEffect(() => {
        activateMenu()
        window.addEventListener("scroll", () => {
          setScroll(window.scrollY > 50);
        });
        const fetchCurrentUser = async () => {
            try {
              const response = await axios.get('http://localhost:3000/user/current', {
                headers: {
                  Authorization: `${localStorage.getItem('accessToken')}`
                }
              });
              const user = response.data.result;
              setCurrentUser(user);
              setUserType(user?.userType || '');

              determineButtonType(user.userType);
            setLoading(false);
            } catch (err) {
              setError(err);
              setLoading(false);
            }
          };
          fetchCurrentUser();

      }, []);

      var mybutton = document.getElementById("back-to-top");
        window.onscroll = function () {
            scrollFunction();
        };

        function scrollFunction() {
            if(mybutton!=null){
                if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
                    mybutton.style.display = "block";
                } else {
                    mybutton.style.display = "none";
                }
            }
        }

        function topFunction() {
            document.body.scrollTop = 0;
            document.documentElement.scrollTop = 0;
        }
     
        const toggleMenu = () => {
            setisMenu(!isMenu);
            if (document.getElementById("navigation")) {
                const anchorArray = Array.from(document.getElementById("navigation").getElementsByTagName("a"));
                anchorArray.forEach(element => {
                    element.addEventListener('click', (elem) => {
                        const target = elem.target.getAttribute("href")
                        if (target !== "") {
                            if (elem.target.nextElementSibling) {
                                var submenu = elem.target.nextElementSibling.nextElementSibling;
                                submenu.classList.toggle('open');
                            }
                        }
                    })
                });
            }
        };

        function getClosest(elem, selector) {

            if (!Element.prototype.matches) {
                Element.prototype.matches =
                    Element.prototype.matchesSelector ||
                    Element.prototype.mozMatchesSelector ||
                    Element.prototype.msMatchesSelector ||
                    Element.prototype.oMatchesSelector ||
                    Element.prototype.webkitMatchesSelector ||
                    function (s) {
                        var matches = (this.document || this.ownerDocument).querySelectorAll(s),
                            i = matches.length;
                        while (--i >= 0 && matches.item(i) !== this) { }
                        return i > -1;
                    };
            }

            // Get the closest matching element
            for (; elem && elem !== document; elem = elem.parentNode) {
                if (elem.matches(selector)) return elem;
            }
            return null;

        };

        function activateMenu() {
            var menuItems = document.getElementsByClassName("sub-menu-item");
            if (menuItems) {

                var matchingMenuItem = null;
                for (var idx = 0; idx < menuItems.length; idx++) {
                    if (menuItems[idx].href === window.location.href) {
                        matchingMenuItem = menuItems[idx];
                    }
                }

                if (matchingMenuItem) {
                    matchingMenuItem.classList.add('active');
                
                
                    var immediateParent = getClosest(matchingMenuItem, 'li');
            
                    if (immediateParent) {
                        immediateParent.classList.add('active');
                    }
                    
                    var parent = getClosest(immediateParent, '.child-menu-item');
                    if(parent){
                        parent.classList.add('active');
                    }

                    var parent = getClosest(parent || immediateParent , '.parent-menu-item');
                
                    if (parent) {
                        parent.classList.add('active');

                        var parentMenuitem = parent.querySelector('.menu-item');
                        if (parentMenuitem) {
                            parentMenuitem.classList.add('active');
                        }

                        var parentOfParent = getClosest(parent, '.parent-parent-menu-item');
                        if (parentOfParent) {
                            parentOfParent.classList.add('active');
                        }
                    } else {
                        var parentOfParent = getClosest(matchingMenuItem, '.parent-parent-menu-item');
                        if (parentOfParent) {
                            parentOfParent.classList.add('active');
                        }
                    }
                }
            }
        }


        if(document.getElementById("navigation")){
            var elements = document.getElementById("navigation").getElementsByTagName("a");
            for(var i = 0, len = elements.length; i < len; i++) {
                elements[i].onclick = function (elem) {
                    if(elem.target.getAttribute("href") === "#") {
                        var submenu = elem.target.nextElementSibling.nextElementSibling;
                        submenu.classList.toggle('open');
                    }
                }
            }
        }

        const handleLogout = async () => {
            try {
              await axios.post(`http://localhost:3000/user/logout`);
              localStorage.removeItem('accessToken');
              navigate('/auth-login');
            } catch (error) {
              console.error('Error during logout:', error);
            }
          };
          const determineButtonType = (roles) => {
            if (roles.includes('challenger') && roles.includes('company')) {
              setButtonType('company_challenger');
            } else if (roles.includes('challenger')) {
              setButtonType('company');
            } else if (roles.includes('company')) {
              setButtonType('challenger');
            }
          };
        
          const handleAddRole = async (newRole) => {
            if (newRole === 'challenger') {
              setConfirmationMessage('Are you sure you want to become a challenger?');
              setShowConfirmationPopup(true);
              return;
            }
            try {
              const data = { email: currentUser.email, newRole };
              if (newRole === 'company') {
                data.website = website;
                data.domain = domain;
              }
              await axios.post('http://localhost:3000/user/addRole', data, {
                headers: {
                  Authorization: `${localStorage.getItem('accessToken')}`,
                },
              });
              const response = await axios.get('http://localhost:3000/user/current', {
                headers: {
                  Authorization: `${localStorage.getItem('accessToken')}`,
                },
              });
              setCurrentUser(response.data.result);
              determineButtonType(response.data.result.userType);
              setShowPopup(false);
            } catch (err) {
              setError(err);
            }
          };
          
          const confirmAddRole = async () => {
            try {
              const data = { email: currentUser.email, newRole: 'challenger' };
              await axios.post('http://localhost:3000/user/addRole', data, {
                headers: {
                  Authorization: `${localStorage.getItem('accessToken')}`,
                },
              });
              const response = await axios.get('http://localhost:3000/user/current', {
                headers: {
                  Authorization: `${localStorage.getItem('accessToken')}`,
                },
              });
              setCurrentUser(response.data.result);
              determineButtonType(response.data.result.userType);
              setShowConfirmationPopup(false);
            } catch (err) {
              setError(err);
            }
          };
          
          const closeConfirmationPopup = () => {
            setShowConfirmationPopup(false);
          };
          
    return(
        <>
         <header id="topnav" className={`${scroll ? "nav-sticky" :""} ${navClass}`}>
            <div className="container">
                {logoLight === true ? 
                <Link className="logo" to="/">
                    <span className="logo-light-mode">
                        <img src={logodark} className="l-dark" alt="" style={{width:"150px"}}/>
                        <img src={logolight} className="l-light" alt=""  style={{width:"150px"}}/>
                    </span>
                    <img src={logolight} className="logo-dark-mode" alt=""/>
                </Link>:

                <Link className="logo" to="/">
                    <img src={logodark} className="logo-light-mode" alt=""/>
                    <img src={logolight} className="logo-dark-mode" alt=""/>
                </Link>
                }

                <div className="menu-extras">
                    <div className="menu-item">
                        <Link  className={`navbar-toggle ${isMenu ? 'open' : ''}`} id="isToggle" onClick={() => toggleMenu()}>
                            <div className="lines">
                                <span></span>
                                <span></span>
                                <span></span>
                            </div>
                        </Link>
                    </div>
                </div>
                {smallButton === false ? 
                    <ul className="buy-button list-inline mb-0">
                        <li className="list-inline-item ps-1 mb-0">
                         
                        </li>
                    </ul>:

                <ul className="buy-button list-inline mb-0">
                    <li className="list-inline-item ps-1 mb-0">
                        <button target="_blank" onClick={handleLogout} style={{backgroundColor:'transparent',borderStyle:'none'}}>
                            <div className="btn btn-icon btn-pills btn-primary d-sm-none d-inline-flex">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-box-arrow-right" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M10 12.5a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v2a.5.5 0 0 0 1 0v-2A1.5 1.5 0 0 0 9.5 2h-8A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-2a.5.5 0 0 0-1 0z"/>
  <path fill-rule="evenodd" d="M15.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 0 0-.708.708L14.293 7.5H5.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708z"/>
</svg></div>
                            <div className="btn btn-pills btn-primary d-none d-sm-block"> Logout</div>
                        </button>
                    </li>
                </ul>
                }
        
                <div id="navigation" style={{ display: isMenu ? 'block' : 'none' }}>
                    <ul className={manuClass}>
                        <li><Link to="/challenges-list" className="sub-menu-item">Home</Link></li>
                        {buttonType === 'challenger' && (

                        <li><Link to="/winners" className="sub-menu-item">Add winner</Link></li>
                    )}
                        {buttonType === 'challenger' && (

                        <li><Link to="/create-challenge" className="sub-menu-item">Add Challenge</Link></li>
                    )}
{buttonType === 'company' && (
                        <li><Link to="/winners" className="sub-menu-item">Create team</Link></li>
                    )}
    {buttonType === 'company' && (
                    <li><Link to="/joinTeam" className="sub-menu-item">Join team</Link></li>
                    )}
                 
                    {buttonType === 'company_challenger' && (

<li><Link to="/winners" className="sub-menu-item">Add winner</Link></li>
)}
{buttonType === 'company_challenger' && (

<li><Link to="/create-challenge" className="sub-menu-item">Add Challenge</Link></li>
)}
{buttonType === 'company_challenger' && (
<li><Link to="/winners" className="sub-menu-item">Create team</Link></li>
)}
{buttonType === 'company_challenger' && (
<li><Link to="/joinTeam" className="sub-menu-item">Join team</Link></li>
)}
                       <div>
    <ul className="buy-button list-inline mb-0">
      {buttonType === 'company' && (
        <li className="list-inline-item ps-1 mb-0">
          <button className="btn btn-success d-sm-none d-inline-flex" onClick={() => setShowPopup(true)}>company?</button>
          <button className="btn btn-success d-none d-sm-block" onClick={() => setShowPopup(true)}>Become a company</button>
        </li>
      )}
      {buttonType === 'challenger' && (
        <li className="list-inline-item ps-1 mb-0">
          <button className="btn btn-success d-sm-none d-inline-flex" onClick={() => handleAddRole('challenger')}>challenger?</button>
          <button className="btn btn-success d-none d-sm-block" onClick={() => handleAddRole('challenger')}>Become a challenger</button>
        </li>
      )}
      
    </ul>

    {showPopup && (
      <div className="popup">
        <div className="popup-content">
          <h3>Become Company</h3>
          <form onSubmit={(e) => {
            e.preventDefault();
            handleAddRole('company');
          }}>
            <div className="form-group">
              <label>Website</label>
              <input
                type="text"
                className="form-control"
                value={website}
                onChange={(e) => setWebsite(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label>Domain</label>
              <input
                type="text"
                className="form-control"
                value={domain}
                onChange={(e) => setDomain(e.target.value)}
                required
              />
            </div>
            <button type="submit" className="btn btn-success" id="btn1">Submit</button>
            <button type="button" className="btn btn-secondary" id="btn2" onClick={() => setShowPopup(false)}>Cancel</button>
          </form>
        </div>
      </div>
    )}

    {showConfirmationPopup && (
      <div className="popup">
        <div className="popup-content">
          <h3>{confirmationMessage}</h3>
          <button className="btn btn-success" onClick={confirmAddRole}>Yes</button>
          <button className="btn btn-secondary" onClick={closeConfirmationPopup}>No</button>
        </div>
      </div>
    )}

    {confirmationMessage && !showConfirmationPopup && (
      <div className="confirmation-message">
      </div>
    )}
  </div>
                    </ul>
                </div>
            </div>
        </header>
        <Link to="#" onClick={topFunction} id="back-to-top" className="back-to-top rounded-pill fs-5"><AiOutlineArrowUp className="fea icon-sm icons align-middle"/></Link>
        </>
    )
}