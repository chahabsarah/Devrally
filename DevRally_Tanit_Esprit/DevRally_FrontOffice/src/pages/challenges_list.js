import React, { useState, useEffect } from "react";
import { Link, useNavigate } from 'react-router-dom';
import Navbar from "../componants/indexJs/navbar";
import FooterFour from "../componants/footer/footerFour";
import ScrollTop from "../componants/scrollTop";
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FiHeart, FaRegComment, AiOutlineCalendar, MdArrowForward, MdOutlineArrowBack } from "../assets/icons/vander";
import winIcon from '../pages/win.png';
export default function ChallengesList() {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [userType, setUserType] = useState('');
    const [userId, setUserId] = useState('');
    const [currentUser, setCurrentUser] = useState(null);
    const [challenges, setChallenges] = useState([]);
    const [participationStatus, setParticipationStatus] = useState({});

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
                setCurrentUser(user);
                setUserType(user.userType || []);
                setUserId(user._id);
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

        const checkParticipationStatus = async (challengeId) => {
            if (!userId) {
                console.error('User ID is not available');
                return;
            }
            try {
                // Check if user is participating
                const userResponse = await axios.get(`http://localhost:3000/challenge/isUserParticipating/${challengeId}/${userId}`, {
                    headers: {
                        Authorization: `${localStorage.getItem('accessToken')}`
                    }
                });
                const isParticipatingSolo = userResponse.data.isUserParticipating;

                // Check if team is participating
                const teamId = currentUser?.teamId;
                if (teamId) {
                    const teamResponse = await axios.get(`http://localhost:3000/challenge/isTeamParticipating/${challengeId}/${teamId}`, {
                        headers: {
                            Authorization: `${localStorage.getItem('accessToken')}`
                        }
                    });
                    const isParticipatingTeam = teamResponse.data.isTeamParticipating;

                    setParticipationStatus(prevStatus => ({
                        ...prevStatus,
                        [challengeId]: { isParticipatingSolo, isParticipatingTeam }
                    }));
                } else {
                    setParticipationStatus(prevStatus => ({
                        ...prevStatus,
                        [challengeId]: { isParticipatingSolo, isParticipatingTeam: false }
                    }));
                }
            } catch (err) {
                console.error('Failed to fetch participation status', err);
            }
        };

        fetchCurrentUser();
        fetchChallenges();

        if (userId && challenges.length > 0) {
            challenges.forEach(challenge => {
                if (challenge._id) {
                    checkParticipationStatus(challenge._id);
                } else {
                    console.warn('Challenge has no _id:', challenge);
                }
            });
        }
    }, [userId, challenges, currentUser]);

    const moveToCreateChallenge = () => {
        navigate('/create-challenge');
    };

    const moveToCreateTeam = () => {
        navigate('/createTeam');
    };

    const moveToJoinTeam = () => {
        navigate('/joinTeam');
    };

    const handleDelete = async (id) => {
        try {
            await axios.delete(`http://localhost:3000/challenge/deleteChallenge/${id}`);
            setChallenges(challenges.filter(challenge => challenge._id !== id));
        } catch (err) {
            console.error('Failed to delete challenge', err);
        }
    };

    const handleEdit = (id) => {
        navigate(`/edit-challenge/${id}`);
    };

    const handleParticipate = async (challengeId, mode) => {
        try {
            if (!currentUser) throw new Error("User is not logged in");
            const userId = currentUser._id;
            let response;

            if (mode === 'solo') {
                response = await axios.post(`http://localhost:3000/challenge/participateSolo/${challengeId}`, { userId }, {
                    headers: {
                        Authorization: `${localStorage.getItem('accessToken')}`
                    }
                });
                toast.success(response.data.message);
                setParticipationStatus(prevStatus => ({
                    ...prevStatus,
                    [challengeId]: { isParticipatingSolo: true }
                }));
            } else if (mode === 'team') {
                const teamId = currentUser.teamId;
                if (!teamId) {
                    toast.error('You are not part of any team');
                    return;
                }
                response = await axios.post(`http://localhost:3000/challenge/participateTeam/${challengeId}`, { teamId }, {
                    headers: {
                        Authorization: `${localStorage.getItem('accessToken')}`
                    }
                });
                toast.success(response.data.message);
                setParticipationStatus(prevStatus => ({
                    ...prevStatus,
                    [challengeId]: { isParticipatingTeam: true }
                }));
            }
        } catch (error) {
            console.error('Failed to participate in challenge', error);
            toast.error(error.response?.data?.message || error.message);
        }
    };

    const handleAddSolution = (challengeId) => {
        navigate(`/add-solution/${challengeId}`);
    };
    
    const handleAddSolutionSolo = (challengeId) => {
        navigate(`/addSolution/${challengeId}`);
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
                        {(userType.includes('company')) && (
                            <li className="list-inline-item ps-1 mb-0">
                                <button className="btn btn-success mb-4" onClick={moveToCreateChallenge}>Create Challenge</button>
                            </li>
                        )}
                        {(userType.includes('challenger')) && (
                            <li className="list-inline-item ps-1 mb-0 d-flex justify-content-between w-100">
                                <button className="btn btn-success mb-4" onClick={moveToCreateTeam}>Create Team</button>
                                <button className="btn btn-danger mb-4" onClick={moveToJoinTeam}>Join Team</button>
                            </li>
                        )}

                        {challenges.map((challenge) => (
                            <div className="col-lg-4 col-md-6 d-flex align-items-stretch mb-4" key={challenge._id}>
                                <div className="card blog blog-primary shadow rounded overflow-hidden border-0 w-100">
                                    <div className="card-img image position-relative overflow-hidden challenge-image" style={{ height: '200px', width: '100%' }}>
                                        <div className="position-relative overflow-hidden">
                                            <img
                                                src={`data:${challenge.picture.contentType};base64,${challenge.picture.data}`}
                                                className="img-fluid w-100 h-100"
                                                alt={challenge.name}
                                                style={{ objectFit: 'cover' }}
                                            />
                                            <div className="card-overlay"></div>
                                            {challenge.hasWinner && (
    <img
        src={winIcon}
        alt="Champion"
        style={{
            position: 'absolute',
            top: '10px',
            right: '10px',
            width: '40px', // Ajuster la taille si nécessaire
            height: 'auto',
            zIndex: 1
        }}
    />
)}

                                        </div>
                                        <div className="blog-tag">
                                            <Link to={`/challenge/${challenge._id}`} className="badge bg-light text-dark">
                                                {challenge.status}
                                            </Link>
                                        </div>
                                        <div className="read-more">
                                            <Link to={`/challenge-details/${challenge._id}`} className="text-white title-dark-50">
                                                Read More <MdArrowForward className="align-middle ms-1" />
                                            </Link>
                                        </div>
                                    </div>
                                    <div className="card-body content p-0 d-flex flex-column">
                                        <div className="p-4 flex-grow-1">
                                            <Link to={`/challenge/${challenge._id}`} className="h5 title text-dark d-block mb-0">
                                                {challenge.name}
                                            </Link>
                                            <p className="text-muted mt-2 mb-0">{challenge.description}</p>
                                            <p className="text-muted mt-2 mb-0">Prize Amount: {challenge.prizeAmount} TND</p>
                                        </div>
                                       
                                        <div className="d-flex justify-content-between p-4">
                                        {(userType.includes('company') && currentUser?.fullname === challenge.admin) && (
                                            <div style={{display:'flex', marginRight:'8px'}}>
                                                <button
                                                    className="btn btn-success me-2"
                                                    onClick={() => handleEdit(challenge._id)}
                                                >
                                                    Edit
                                                </button>
                                                <button
                                                    className="btn btn-danger"
                                                    onClick={() => handleDelete(challenge._id)}
                                                >
                                                    Delete
                                                </button>
                                            </div>
                                        )}
                                          {userType.includes('challenger') && !challenge.status.includes("Expired") &&  challenge.hasWinner !== true &&(
    participationStatus[challenge._id]?.isParticipatingSolo ? (
        <button className="btn btn-info" onClick={() => handleAddSolutionSolo(challenge._id)}>
            Add Solution for Solo
        </button>
    ) : participationStatus[challenge._id]?.isParticipatingTeam ? (
        <button className="btn btn-info" onClick={() => handleAddSolution(challenge._id)}>
            Add Solution for Teams
        </button>
    ) : challenge.solo && !challenge.team ? (
        <button className="btn btn-info" onClick={() => handleParticipate(challenge._id, 'solo')}>
            Join Solo
        </button>
    ) : challenge.team && !challenge.solo ? (
        <button className="btn btn-info" onClick={() => handleParticipate(challenge._id, 'team')}>
            Join as Team
        </button>
    ) : (
        <div className="btn-group">
            <button type="button" className="btn btn-info dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                Join
            </button>
            <ul className="dropdown-menu">
                {challenge.solo && (
                    <li>
                        <button className="dropdown-item" onClick={() => handleParticipate(challenge._id, 'solo')}>
                            Join Solo
                        </button>
                    </li>
                )}
                {challenge.team && (
                    <li>
                        <button className="dropdown-item" onClick={() => handleParticipate(challenge._id, 'team')}>
                            Join as Team
                        </button>
                    </li>
                )}
            </ul>
        </div>
    )
)}

                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="row">
                        <div className="col-12 mt-4 pt-2">
                            <ul className="pagination justify-content-center mb-0">
                                <li className="page-item">
                                    <Link className="page-link" to="#" aria-label="Previous">
                                        <span aria-hidden="true"><MdOutlineArrowBack className="fs-5" /></span>
                                    </Link>
                                </li>
                                <li className="page-item active">
                                    <Link className="page-link" to="#">1</Link>
                                </li>
                                <li className="page-item">
                                    <Link className="page-link" to="#">2</Link>
                                </li>
                                <li className="page-item">
                                    <Link className="page-link" to="#" aria-label="Next">
                                        <span aria-hidden="true"><MdArrowForward className="fs-5" /></span>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
            <ToastContainer />
            <FooterFour />
            <ScrollTop />
        </>
    );
}
