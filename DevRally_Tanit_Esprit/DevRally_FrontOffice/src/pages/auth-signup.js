import React, { useState } from "react";
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import bgImg from "../assets/images/bg2.jpg";
import logo from "../assets/images/devrally.png";

export default function Signup() {
    const [fullname, setFullname] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [retypePassword, setRetypePassword] = useState("");
    const [userType, setUserType] = useState("challenger");
    const [website, setWebsite] = useState("");
    const [domain, setDomain] = useState("");
    const [error, setError] = useState(null);
    const [successMessage, setSuccessMessage] = useState("");
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (password !== retypePassword) {
            setError("Passwords do not match");
            return;
        }

        const formData = {
            fullname,
            email,
            password,
            userType,
            website: userType === 'company' ? website : '',
            domain: userType === 'company' ? domain : ''
        };

        try {
            const response = await axios.post('http://localhost:3000/user/register', formData);
            setSuccessMessage(response.data.message);
            setError(null);
            setTimeout(() => navigate('/verif-email'), 2000);  // Redirect after success
        } catch (err) {
            setError(err.response?.data?.message || 'An error occurred');
            setSuccessMessage('');
        }
    };

    return (
        <section className="bg-home d-flex align-items-center" style={{ backgroundImage: `url(${bgImg})` }}>
            <div className="bg-overlay bg-gradient-overlay"></div>
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="form-signin p-4 bg-white rounded shadow-md">
                            <form onSubmit={handleSubmit}>
                                <Link to="/"><img src={logo} className="mb-4 d-block mx-auto" alt="" style={{ width: "200px" }} /></Link>
                                <h5 className="mb-3">Register your account</h5>

                                <div className="form-floating mb-2">
                                    <input type="text" className="form-control" id="floatingInput" placeholder="Harry" value={fullname} onChange={(e) => setFullname(e.target.value)} />
                                    <label htmlFor="floatingInput">Fullname</label>
                                </div>

                                <div className="form-floating mb-2">
                                    <input type="email" className="form-control" id="floatingEmail" placeholder="name@example.com" value={email} onChange={(e) => setEmail(e.target.value)} />
                                    <label htmlFor="floatingEmail">Email Address</label>
                                </div>

                                <div className="form-floating mb-3">
                                    <input type="password" className="form-control" id="floatingPassword" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                                    <label htmlFor="floatingPassword">Password</label>
                                </div>
                                <div className="form-floating mb-3">
                                    <input type="password" className="form-control" id="floatingPassword2" placeholder="Confirm Password" value={retypePassword} onChange={(e) => setRetypePassword(e.target.value)} />
                                    <label htmlFor="floatingPassword2">Confirm Password</label>
                                </div>

                                <div className="mb-3">
                                    <input type="checkbox" className="form-check-input" id="roleCheckbox" checked={userType === 'company'} onChange={() => setUserType(userType === 'company' ? 'challenger' : 'company')} />
                                    <label className="form-check-label text-muted" htmlFor="roleCheckbox">Register as a Company</label>
                                </div>

                                {userType === 'company' && (
                                    <>
                                        <div className="form-floating mb-2">
                                            <input type="text" className="form-control" id="floatingWebsite" placeholder="Website" value={website} onChange={(e) => setWebsite(e.target.value)} />
                                            <label htmlFor="floatingWebsite">Website</label>
                                        </div>
                                        <div className="form-floating mb-2">
                                            <input type="text" className="form-control" id="floatingDomain" placeholder="Domain" value={domain} onChange={(e) => setDomain(e.target.value)} />
                                            <label htmlFor="floatingDomain">Domain</label>
                                        </div>
                                    </>
                                )}

                                <div className="form-check mb-3">
                                    <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                    <label className="form-check-label text-muted" htmlFor="flexCheckDefault">I Accept <Link to="#" className="text-primary">Terms And Condition</Link></label>
                                </div>

                                {error && <div className="alert alert-danger mb-3" role="alert">{error}</div>}
                                {successMessage && <div className="alert alert-success mb-3" role="alert">{successMessage}</div>}

                                <button className="btn btn-primary w-100" type="submit">Register</button>

                                <div className="col-12 text-center mt-3">
                                    <span><span className="text-muted me-2">Already have an account? </span> <Link to="/auth-login" className="text-dark fw-medium">Sign in</Link></span>
                                </div>

                                <p className="mb-0 text-muted mt-3 text-center">© {new Date().getFullYear()} Fronter.</p>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
