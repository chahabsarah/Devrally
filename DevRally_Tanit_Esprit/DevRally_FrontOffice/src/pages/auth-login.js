import React, { useState } from "react";
import { Link, useNavigate } from 'react-router-dom';
import bgImg from "../assets/images/bg1.jpg";
import logo from "../assets/images/devrally.png";

export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        const formData = {
            email,
            password
        };

        try {
            const response = await fetch('http://localhost:3000/user/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.message);
            }

            const data = await response.json();
            localStorage.setItem('accessToken', data.accessToken);
            navigate('/challenges-list');
        } catch (error) {
            setError(error.message);
            console.error('Error logging in:', error);
        }
    };

    return (
        <>
            <section className="bg-home d-flex align-items-center" style={{backgroundImage:`url(${bgImg})`}}>
                <div className="bg-overlay bg-gradient-overlay"></div>
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="form-signin p-4 bg-white rounded shadow-md">
                                <form onSubmit={handleSubmit}>
                                    <Link to="/"><img src={logo} className="mb-4 d-block mx-auto" alt="" style={{width:"200px"}}/></Link>
                                    <h5 className="mb-3">Please sign in</h5>

                                    <div className="form-floating mb-2">
                                        <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" value={email} onChange={(e) => setEmail(e.target.value)} />
                                        <label htmlFor="floatingInput">Email address</label>
                                    </div>
                                    <div className="form-floating mb-3">
                                        <input type="password" className="form-control" id="floatingPassword" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                                        <label htmlFor="floatingPassword">Password</label>
                                    </div>

                                    <button className="btn btn-primary w-100" type="submit">Sign in</button>

                                    {error && <div className="alert alert-danger mt-3" role="alert">{error}</div>}

                                    <div className="col-12 text-center mt-3">
                                        <span><span className="text-muted me-2">Don't have an account ?</span> <Link to="/auth-signup" className="text-dark fw-medium">Sign Up</Link></span>
                                    </div>

                                    <p className="mb-0 text-muted mt-3 text-center">© {new Date().getFullYear()} Fronter.</p>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
