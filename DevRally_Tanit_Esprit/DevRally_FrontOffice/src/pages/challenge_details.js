import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import Navbar from "../componants/indexJs/navbar";
import FooterFour from "../componants/footer/footerFour";
import ScrollTop from "../componants/scrollTop";

export default function ChallengeDetails() {
    const { id } = useParams();
    const [challenge, setChallenge] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [teams, setTeams] = useState({});
    const [users, setUsers] = useState({});
    const [currentUser, setCurrentUser] = useState(null);
    const [userType, setUserType] = useState("");
    const [userId, setUserId] = useState("");
    const navigate = useNavigate();

    useEffect(() => {
        const fetchChallenge = async () => {
            try {
                const response = await axios.get(`http://localhost:3000/challenge/getChallengeById/${id}`);
                setChallenge(response.data);
                if (response.data.teamParticipants) {
                    await fetchTeams(response.data.teamParticipants);
                }
                if (response.data.soloParticipants) {
                    await fetchUsers(response.data.soloParticipants);
                }
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        const fetchTeams = async (teamIds) => {
            try {
                const responses = await Promise.all(
                    teamIds.map(teamId => axios.get(`http://localhost:3000/team/getTeamById/${teamId}`))
                );
                const teamsData = responses.reduce((acc, response) => {
                    const team = response.data;
                    acc[team._id] = team;
                    return acc;
                }, {});
                setTeams(teamsData);
            } catch (err) {
                setError(err.message);
            }
        };

        const fetchUsers = async (userIds) => {
            try {
                const responses = await Promise.all(
                    userIds.map(userId => axios.get(`http://localhost:3000/user/user/${userId}`))
                );
                const usersData = responses.reduce((acc, response) => {
                    const user = response.data;
                    acc[user._id] = user;
                    return acc;
                }, {});
                setUsers(usersData);
            } catch (err) {
                setError(err.message);
            }
        };

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
            } catch (err) {
                setError(err);
            } finally {
                setLoading(false);
            }
        };

        fetchChallenge();
        fetchCurrentUser();
    }, [id]);

    return (
        <>
            <Navbar navClass="defaultscroll sticky" manuClass="navigation-menu nav-right" logoLight={true} />
            <div className="container mt-5">
                {loading ? (
                    <p>Loading...</p>
                ) : error ? (
                    <p>{error}</p>
                ) : (
                    <div className="row">
                        <div className="col-12 text-center">
                            <h3 style={{ marginTop: "30px" }}>{challenge.name}</h3>
                            <img
                                src={`data:${challenge.picture.contentType};base64,${challenge.picture.data}`}
                                alt={challenge.name}
                                className="img-fluid rounded-circle mb-4"
                                style={{ width: '150px', height: '150px', objectFit: 'cover' }}
                            />
                        </div>

                        <div className="d-flex justify-content-between mb-4">
                            <div className="flex-fill mr-2 p-3 border rounded">
                                <h5>Challenge Details</h5>
                                <p><strong>Start Date:</strong> {new Date(challenge.start_date).toLocaleDateString()}</p>
                                <p><strong>End Date:</strong> {new Date(challenge.end_date).toLocaleDateString()}</p>
                                <p><strong>Prize Amount:</strong> {challenge.prizeAmount} TND</p>
                                <p><strong>Description:</strong> {challenge.description}</p>
                                <p><strong>Status:</strong> {challenge.status}</p>
                                <p><strong>Admin:</strong> {challenge.admin}</p>
                                {challenge.teamSize && <p><strong>Team Size:</strong> {challenge.teamSize}</p>}
                            </div>

                            <div className="flex-fill ml-2 p-3 border rounded">
                                <h5>Participants & Solutions</h5>
                                <div className="mb-4">
                                    <h6>Solo Participants</h6>
                                    <ul className="list-group">
                                        {challenge.soloParticipants && challenge.soloParticipants.length > 0 ? (
                                            challenge.soloParticipants.map(userId => {
                                                const user = users[userId];
                                                return (
                                                    user && (
                                                        <li key={user._id} className="list-group-item">
                                                            {user.fullname}
                                                        </li>
                                                    )
                                                );
                                            })
                                        ) : (
                                            <li className="list-group-item">No solo participants found</li>
                                        )}
                                    </ul>
                                </div>

                                <div className="mb-4">
                                    <h4>Team Participants</h4>
                                    {challenge.teamParticipants && challenge.teamParticipants.length > 0 ? (
                                        <table className="table table-bordered table-responsive">
                                            <thead>
                                                <tr>
                                                    <th>Image</th>
                                                    <th>Name</th>
                                                    <th>ID</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {challenge.teamParticipants.map(teamId => {
                                                    const team = teams[teamId];
                                                    return (
                                                        team && (
                                                            <tr key={team._id}>
                                                                <td>
                                                                    {team.image && (
                                                                        <img
                                                                            src={`data:${team.image.contentType};base64,${team.image.data}`}
                                                                            alt={`${team.name} logo`}
                                                                            className="img-fluid rounded-circle"
                                                                            style={{ width: '50px', height: '50px', objectFit: 'cover' }}
                                                                        />
                                                                    )}
                                                                </td>
                                                                <td>{team.name}</td>
                                                                <td>{team._id}</td>
                                                            </tr>
                                                        )
                                                    );
                                                })}
                                            </tbody>
                                        </table>
                                    ) : (
                                        <p>No team participants found</p>
                                    )}
                                </div>

                                {(userType.includes('company') && currentUser?.fullname === challenge.admin) && (
    <div className="mb-4">
        <h4>Solutions</h4>
        <button 
            className="btn btn-primary"
            onClick={() => navigate(`/solutions/${id}`)}
        >
            View Solutions
        </button>
    </div>
)}

                            </div>
                        </div>
                    </div>
                )}
            </div>
            <FooterFour />
            <ScrollTop />
        </>
    );
}
