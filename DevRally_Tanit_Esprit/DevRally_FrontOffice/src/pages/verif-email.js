import React, { useState } from "react";
import { Link } from 'react-router-dom';
import bgImg from "../assets/images/bg1.jpg";
import logo from "../assets/images/devrally.png";

export default function VerifEmail() {
    const [email, setEmail] = useState("");
    const [code, setVerificationCode] = useState("");
    const [error, setError] = useState(null);
    const [successMessage, setSuccessMessage] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();

        const formData = {
            email,
            code
        };

        try {
            const response = await fetch('http://localhost:3000/user/verifyEmail', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.message || 'An unknown error occurred');
            }

            const data = await response.json();
            setSuccessMessage(data.message);
            setError(null); // Clear any previous errors
        } catch (error) {
            setError(error.message);
            setSuccessMessage(""); // Clear any previous success messages
            console.error('Error verifying email:', error);
        }
    };

    return (
        <>
            <section className="bg-home d-flex align-items-center" style={{ backgroundImage: `url(${bgImg})` }}>
                <div className="bg-overlay bg-gradient-overlay"></div>
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="form-signin p-4 bg-white rounded shadow-md">
                                <form onSubmit={handleSubmit}>
                                    <Link to="/"><img src={logo} className="mb-4 d-block mx-auto" alt="Logo" style={{ width: "200px" }} /></Link>
                                    <h5 className="mb-3">Verify Your Email</h5>

                                    <div className="form-floating mb-3">
                                        <input
                                            type="email"
                                            className="form-control"
                                            id="inputEmail"
                                            placeholder="name@example.com"
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                            required
                                        />
                                        <label htmlFor="inputEmail">Email Address</label>
                                    </div>

                                    <div className="form-floating mb-3">
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="verificationCode"
                                            placeholder="Verification Code"
                                            value={code}
                                            onChange={(e) => setVerificationCode(e.target.value)}
                                            required
                                        />
                                        <label htmlFor="verificationCode">Enter Verification Code</label>
                                    </div>

                                    {error && <div className="alert alert-danger mb-3" role="alert">{error}</div>}
                                    {successMessage && <div className="alert alert-success mb-3" role="alert">{successMessage}</div>}

                                    <button className="btn btn-primary w-100" type="submit">Verify</button>

                                    

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
