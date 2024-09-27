import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Navbar from "../componants/indexJs/navbar";
import FooterFour from "../componants/footer/footerFour";
import ScrollTop from "../componants/scrollTop";

export default function Solutions() {
    const { id } = useParams();
    const [solutions, setSolutions] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchSolutions = async () => {
            try {
                const response = await axios.get(`http://localhost:3000/solutions/byChallenge/${id}`, {
                    headers: {
                        Authorization: `${localStorage.getItem('accessToken')}`
                    }
                });
                if (response.data.length === 0) {
                    setError('No solutions found for this challenge');
                } else {
                    setSolutions(response.data);
                }
            } catch (err) {
                setError('Error fetching solutions');
                console.error(err);
            } finally {
                setLoading(false);
            }
        };

        fetchSolutions();
    }, [id]);

    const handleDownload = async (solutionId, fileName) => {
        try {
            const response = await axios.get(`http://localhost:3000/solutions/downloadSolutionFile/${solutionId}`, {
                responseType: 'blob', // Important: ensures that the response is treated as a binary file
                headers: {
                    Authorization: `${localStorage.getItem('accessToken')}`
                }
            });

            const url = window.URL.createObjectURL(new Blob([response.data]));
            const link = document.createElement('a');
            link.href = url;
            link.setAttribute('download', fileName || 'sourceFile'); // Default to 'sourceFile' if fileName is not provided
            document.body.appendChild(link);
            link.click();
            link.remove();
        } catch (err) {
            console.error('Error downloading file:', err);
            alert('Failed to download file. Please try again.');
        }
    };

    return (
        <>
            <Navbar navClass="defaultscroll sticky" manuClass="navigation-menu nav-right" logoLight={true} />
            <div className="position-relative">
                <div className="shape overflow-hidden text-white">
                    <svg viewBox="0 0 2880 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 48H1437.5H2880V0H2160C1442.5 52 720 0 720 0H0V48Z" fill="currentColor"></path>
                    </svg>
                </div>
            </div>
            <section className="section">
                <div className="container">
                    <div className="row">
                        <div className="container mt-5">
                            {loading ? (
                                <p>Loading...</p>
                            ) : error ? (
                                <p>{error}</p>
                            ) : (
                                <div className="row">
                                    <div className="col-12">
                                        <h3>Solutions for Challenge with the ID: "{id}"</h3>
                                        <ul className="list-group">
                                            {solutions.map(solution => (
                                                <li key={solution._id} className="list-group-item">
                                                    <p><strong>Commit message:</strong> {solution.commitMessage}</p>
                                                    {solution.userId ? (
                                                        <p><strong>User ID:</strong> {solution.userId}</p>
                                                    ) : (
                                                        <p><strong>Team ID:</strong> {solution.teamId}</p>
                                                    )}
                                                    <button
                                                        onClick={() => handleDownload(solution._id, solution.sourceFile.originalname)}
                                                        className="btn btn-primary"
                                                    >
                                                        Download Source File
                                                    </button>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </section>
            <FooterFour />
            <ScrollTop />
        </>
    );
}
