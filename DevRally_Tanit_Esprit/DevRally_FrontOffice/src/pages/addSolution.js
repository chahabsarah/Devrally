import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Navbar from "../componants/indexJs/navbar";
import FooterFour from "../componants/footer/footerFour";
import ScrollTop from "../componants/scrollTop";

const AddSolution =  () => {
    const { challengeId } = useParams();
    const [commitMessage, setCommitMessage] = useState('');
    const [teamId, setTeamId] = useState('');
    const [sourceFile, setSourceFile] = useState(null);
    const [loading, setLoading] = useState(false);
    const [userLoading, setUserLoading] = useState(true);
    const [userError, setUserError] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchCurrentUser = async () => {
            try {
                const response = await axios.get('http://localhost:3000/user/current', {
                    headers: {
                        Authorization: ` ${localStorage.getItem('accessToken')}`
                    }
                });
                const user = response.data.result;
                const teamId = user.teamId
                setTeamId(teamId);
                setUserLoading(false);
            } catch (err) {
                setUserError(err);
                setUserLoading(false);
            }
        };

        fetchCurrentUser();
    }, []);

    const handleFileChange = (e) => {
        setSourceFile(e.target.files[0]);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!commitMessage || !sourceFile) {
            toast.error('Commit message and source file are required');
            return;
        }
    
        if (!challengeId) {
            toast.error('Challenge ID is missing');
            return;
        }
    
        const formData = new FormData();
        formData.append('commitMessage', commitMessage);
        formData.append('teamId', teamId);
        formData.append('challengeId', challengeId);
        formData.append('sourceFile', sourceFile);
    
        setLoading(true);
    
        try {
            await axios.post('http://localhost:3000/solutions/add', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                    Authorization: ` ${localStorage.getItem('accessToken')}`
                }
            });
            toast.success('Solution added successfully');
            navigate('/challenges-list');
        } catch (error) {
            toast.error(error.response?.data?.error || 'Failed to add solution');
        } finally {
            setLoading(false);
        }
    };
    
    if (userLoading) {
        return <div>Loading user data...</div>;
    }

    if (userError) {
        return <div>Error loading user data: {userError.message}</div>;
    }

    const formContainerStyle = {
        backgroundColor: '#fff',
        padding: '2rem',
        borderRadius: '8px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    };

    const formGroupStyle = {
        marginBottom: '1.5rem',
    };

    const labelStyle = {
        display: 'block',
        marginBottom: '0.5rem',
        fontWeight: 'bold',
    };

    const inputStyle = {
        width: '100%',
        padding: '0.75rem',
        borderRadius: '4px',
        border: '1px solid #ddd',
    };

    const textareaStyle = {
        ...inputStyle,
        resize: 'vertical',
        minHeight: '100px',
    };

    const fileInputStyle = {
        padding: '0.5rem',
    };

    const buttonStyle = {
        backgroundColor: '#007bff',
        color: '#fff',
        padding: '0.75rem 1.25rem',
        borderRadius: '4px',
        fontSize: '1rem',
        cursor: 'pointer',
        border: 'none',
        marginTop: '1rem',
    };

    const disabledButtonStyle = {
        ...buttonStyle,
        backgroundColor: '#b8b8b8',
        cursor: 'not-allowed',
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
                    <div className="row justify-content-center">
                        <div className="col-lg-8 col-md-10">
                            <h2 className="text-center mb-4">Submit your solution and shine!</h2>
                            <form onSubmit={handleSubmit} style={formContainerStyle}>
                                <div style={formGroupStyle}>
                                    <label htmlFor="commitMessage" style={labelStyle}>Commit Message:</label>
                                    <textarea
                                        id="commitMessage"
                                        name="commitMessage"
                                        style={textareaStyle}
                                        value={commitMessage}
                                        onChange={(e) => setCommitMessage(e.target.value)}
                                        required
                                    />
                                </div>
                                <div style={formGroupStyle}>
                                    <label htmlFor="teamId" style={labelStyle}>Team ID:</label>
                                    <input
                                        type="text"
                                        id="teamId"
                                        name="teamId"
                                        style={inputStyle}
                                        value={teamId}
                                        onChange={(e) => setTeamId(e.target.value)}
                                        readOnly
                                    />
                                </div>
                                <div style={formGroupStyle}>
                                    <label htmlFor="sourceFile" style={labelStyle}>Source File (.zip):</label>
                                    <input
        type="file"
        id="sourceFile"
        name="sourceFile"
        style={fileInputStyle}
        onChange={handleFileChange}
        accept=".zip"
        required
    />
                                </div>
                                <button type="submit" style={loading ? disabledButtonStyle : buttonStyle} disabled={loading}>
                                    {loading ? 'Submitting...' : 'Submit Solution'}
                                </button>
                                <br></br>
                                <p>Once submitted, the solution cannot be edited.</p>

                            </form>
                        </div>
                    </div>
                </div>
            </section>
            <ToastContainer />
            <FooterFour />
            <ScrollTop />
        </>
    );
};

export default AddSolution;
