import React, { useState, useEffect } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import Navbar from "../componants/indexJs/navbar";
import FooterFour from "../componants/footer/footerFour";
import ScrollTop from "../componants/scrollTop";
import { ToastContainer } from 'react-toastify';

const AddWinner = () => {
    const [teamId, setTeamId] = useState('');
    const [userId, setUserId] = useState('');
    const [challengeId, setChallengeId] = useState('');
    const [challenges, setChallenges] = useState([]);
    const [teams, setTeams] = useState([]);
    const [users, setUsers] = useState([]);
    const [filteredTeams, setFilteredTeams] = useState([]);
    const [filteredUsers, setFilteredUsers] = useState([]);
    const [message, setMessage] = useState('');

    useEffect(() => {
        axios.get('http://localhost:3000/challenge/getChallenges').then(response => {
            setChallenges(response.data);
        });
        axios.get('http://localhost:3000/team/all').then(response => {
            setTeams(response.data);
        });
        axios.get('http://localhost:3000/user/getAllUsers').then(response => {
            const challengers = response.data.filter(user => user.userType.includes('challenger'));
            setUsers(challengers);
        });
    }, []);

    useEffect(() => {
        if (challengeId) {
            const selectedChallenge = challenges.find(challenge => challenge._id === challengeId);
            if (selectedChallenge) {
                const filteredTeams = teams.filter(team => selectedChallenge.teamParticipants.includes(team._id));
                const filteredUsers = users.filter(user => selectedChallenge.soloParticipants.includes(user._id));
                setFilteredTeams(filteredTeams);
                setFilteredUsers(filteredUsers);
            } else {
                setFilteredTeams([]);
                setFilteredUsers([]);
            }
        } else {
            setFilteredTeams([]);
            setFilteredUsers([]);
        }
    }, [challengeId, challenges, teams, users]);

    const handleSubmit = async (e) => {
        e.preventDefault();

        if ((!teamId && !userId) || (teamId && userId)) {
            setMessage('Please provide only one of team ID or user ID as the winner.');
            return;
        }

        try {
            const response = await axios.post('http://localhost:3000/winners/add', {
                winnerteamId: teamId || null,
                winneruserId: userId || null,
                challengeId
            });
            setMessage(response.data.message);
        }  catch (error) {
            if (error.response && error.response.status === 400) {
                setMessage('This challenge already has a winner.' );
            } else if (error.response && error.response.status === 500) {
                setMessage('Failed to add winner');
            } else {
                setMessage('An unexpected error occurred');
            }}
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
                            <div className="container mt-5">
                                <h2 className="mb-4">Add Winner</h2>
                                <form onSubmit={handleSubmit}>
                                    <div className="mb-3">
                                        <label htmlFor="challenge" className="form-label">Challenge:</label>
                                        <select id="challenge" value={challengeId} onChange={(e) => setChallengeId(e.target.value)} className="form-select" required>
                                            <option value="">Select a challenge</option>
                                            {challenges.map(challenge => (
                                                <option key={challenge._id} value={challenge._id}>
                                                    {challenge.name}
                                                </option>
                                            ))}
                                        </select>
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="team" className="form-label">Team (if applicable):</label>
                                        <select id="team" value={teamId} onChange={(e) => setTeamId(e.target.value)} className="form-select" disabled={userId}>
                                            <option value="">Select a team</option>
                                            {filteredTeams.map(team => (
                                                <option key={team._id} value={team._id}>
                                                    {team.name}
                                                </option>
                                            ))}
                                        </select>
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="user" className="form-label">User (if applicable):</label>
                                        <select id="user" value={userId} onChange={(e) => setUserId(e.target.value)} className="form-select" disabled={teamId}>
                                            <option value="">Select a user</option>
                                            {filteredUsers.map(user => (
                                                <option key={user._id} value={user._id}>
                                                    {user.fullname}
                                                </option>
                                            ))}
                                        </select>
                                    </div>
                                    <button type="submit" className="btn btn-primary">Add Winner</button>
                                </form>
                                {message && <div className={`alert ${message.includes('Failed') ? 'alert-danger' : 'alert-success'} mt-4`} role="alert">{message}</div>}
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

export default AddWinner;
