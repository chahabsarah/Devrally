import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';
import Navbar from '../componants/indexJs/navbar';
import FooterFour from '../componants/footer/footerFour';
import ScrollTop from '../componants/scrollTop';

const CreateTeam = () => {
    const [teamName, setTeamName] = useState('');
    const [inviteEmails, setInviteEmails] = useState(['']);
    const [challenges, setChallenges] = useState([]);
    const [selectedChallenge, setSelectedChallenge] = useState('');
    const [creatorId, setCreatorId] = useState('');
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [userType, setUserType] = useState('');
    const [currentUser, setCurrentUser] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchCurrentUser = async () => {
            try {
                const response = await axios.get('http://localhost:3000/user/current', {
                    headers: {
                        Authorization: `${localStorage.getItem('accessToken')}`
                    }
                });
                const user = response.data.result;
                console.log("Current User:", user);
                setCurrentUser(user);
                if (user?.userType) {
                    setUserType(user.userType || []);
                }
                const creatorId = user._id;
                setCreatorId(creatorId);

                setLoading(false);
            } catch (err) {
                setError(err);
                setLoading(false);
            }

        };

        const fetchChallenges = async () => {
            try {
                const response = await axios.get('http://localhost:3000/challenge/getChallenges');
                setChallenges(response.data);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchCurrentUser();
        fetchChallenges();
    }, []);
    const handleAddEmail = () => {
        setInviteEmails([...inviteEmails, '']);
    };

    const handleEmailChange = (index, value) => {
        const newInviteEmails = inviteEmails.slice();
        newInviteEmails[index] = value;
        setInviteEmails(newInviteEmails);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:3000/team/teams', {
                name: teamName,
                creatorId,
                inviteEmails,
                challengeId: selectedChallenge
            });

            toast.success(response.data.message);
        } catch (error) {
            toast.error(error.response?.data || 'Failed to create team');
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
            <section className="section py-5">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-8">
                            <div className="card shadow-lg p-4" style={{marginTop:"50px"}}>
                                <h2 className="mb-4 text-center" style={{ fontWeight: 'bold', color: '#333' }}> Be the leader ,create your Team !</h2>
                                <form onSubmit={handleSubmit}>
                                    <div className="mb-3">
                                        <label htmlFor="teamName" className="form-label" style={{ fontWeight: '500' }}>Team Name:</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="teamName"
                                            value={teamName}
                                            onChange={(e) => setTeamName(e.target.value)}
                                            required
                                            style={{ padding: '10px', fontSize: '16px' }}
                                        />
                                    </div>
                                    <div className="mb-3">
                                        <label className="form-label" style={{ fontWeight: '500' }}>Invite Members (Email):</label>
                                        {inviteEmails.map((email, index) => (
                                            <input
                                                key={index}
                                                type="email"
                                                className="form-control mb-2"
                                                value={email}
                                                onChange={(e) => handleEmailChange(index, e.target.value)}
                                                placeholder="Enter member's email"
                                                required
                                                style={{ padding: '10px', fontSize: '16px' }}
                                            />
                                        ))}
                                        <button
                                            type="button"
                                            className="btn btn-link"
                                            onClick={handleAddEmail}
                                            style={{ textDecoration: 'none', fontSize: '16px', padding: '0', color: '#007bff' }}
                                        >
                                            + Add Another Email
                                        </button>
                                    </div>
                                    <div className="mb-4">
                                        <label htmlFor="challenge" className="form-label" style={{ fontWeight: '500' }}>Choose Challenge:</label>
                                        <select
                                            className="form-select"
                                            id="challenge"
                                            value={selectedChallenge}
                                            onChange={(e) => setSelectedChallenge(e.target.value)}
                                            required
                                            style={{ padding: '10px', fontSize: '16px' }}
                                        >
                                            <option value="">Select a Challenge</option>
                                            {challenges.map((challenge) => (
                                                <option key={challenge._id} value={challenge._id}>
                                                    {challenge.name}
                                                </option>
                                            ))}
                                        </select>
                                    </div>
                                    <button
                                        type="submit"
                                        className="btn btn-primary btn-block"
                                        style={{
                                            padding: '12px',
                                            fontSize: '18px',
                                            fontWeight: 'bold',
                                            backgroundColor: '#007bff',
                                            border: 'none',
                                            borderRadius: '4px',
                                            transition: 'background-color 0.3s'
                                        }}
                                    >
                                        Create Team
                                    </button>
                                </form>
                            </div>
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

export default CreateTeam;