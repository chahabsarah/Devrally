import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import FooterFour from "../componants/footer/footerFour";
import ScrollTop from "../componants/scrollTop";
import Navbar from "../componants/indexJs/navbar";


export default function ChallengeEdit() {
    const { id } = useParams();
    const navigate = useNavigate();
    const [challenge, setChallenge] = useState({
        name: "",
        start_date: "",
        end_date: "",
        prizeAmount: "",
        description: "",
        picture: null,
        solo: false,
        team: false,
        teamSize: 1,
        admin: ""
    });
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [currentPicture, setCurrentPicture] = useState(null); // Pour stocker l'image actuelle

    useEffect(() => {
        const fetchChallenge = async () => {
            try {
                const response = await axios.get(`http://localhost:3000/challenge/getChallengeById/${id}`);
                setChallenge(response.data);
                setCurrentPicture(response.data.picture); // Stocker l'image actuelle séparément
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };
        fetchChallenge();
    }, [id]);

    const handleInputChange = (e) => {
        const { name, value, type, checked } = e.target;
        setChallenge({
            ...challenge,
            [name]: type === "checkbox" ? checked : value
        });
    };

    const handleFileChange = (e) => {
        setChallenge({
            ...challenge,
            picture: e.target.files[0] // Mettre à jour uniquement si une nouvelle image est sélectionnée
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault(); // Prevent the default form submission
    
        try {
            const formData = new FormData();
    
            // Append the form data fields to the FormData object
            formData.append("name", challenge.name);
            formData.append("start_date", challenge.start_date);
            formData.append("end_date", challenge.end_date);
            formData.append("prizeAmount", challenge.prizeAmount);
            formData.append("description", challenge.description);
            formData.append("teamSize", challenge.teamSize);
            formData.append("admin", challenge.admin);
    
            // Append the image file if a new one was selected
            if (challenge.picture) {
                formData.append("picture", challenge.picture);
            } else {
                // Include the current picture if no new image was selected
                formData.append("currentPicture", JSON.stringify(currentPicture));
            }
    
            // Make the API request to update the challenge
            const response = await axios.put(`http://localhost:3000/challenge/updateChallenge/${id}`, formData, {
                headers: {
                    "Content-Type": "multipart/form-data",
                },
            });
    
            if (response.status === 200) {
                // Redirect or update UI upon successful update
                navigate(`/challenge/${id}`);
            }
        } catch (error) {
            console.error("Error updating challenge:", error);
            setError(error.message);
        }
    };
    


    return (
        <>
            <Navbar navClass="defaultscroll sticky" manuClass="navigation-menu nav-right " logoLight={true}/>
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
                ) : (
                    <div className="container mt-4">
            <div className="row justify-content-center">
                <div className="col-lg-8 col-md-10 col-sm-12">
                    <div className="card shadow-sm p-4">
                          <div className="mb-3">
                                <div className="text-center" style={{display:"flex",flexDirection:"row"}}>
                                    <img
                                        src={`data:${currentPicture.contentType};base64,${currentPicture.data}`}
                                        alt="Current Challenge"
                                        className="img-fluid rounded-circle"
                                        style={{ maxWidth: '10%', height: 'auto', marginRight:"15px" }}
                                    />
                                    <h3 className="mb-4" style={{marginTop:"10px"}}>Edit Challenge</h3>
                                </div>
                            </div>
                        <form onSubmit={handleSubmit}>
                        <div style={{display:"flex",flexDirection:"row",justifyContent:"space-between"}}>

                            <div className="mb-3">
                                <label className="form-label">Challenge Name</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    name="name"
                                    value={challenge.name}
                                    onChange={handleInputChange}
                                    required
                                />
                            </div>
                           
                            <div className="mb-3">
                                <label className="form-label">Admin</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    name="admin"
                                    value={challenge.admin}
                                    onChange={handleInputChange}
                                    required
                                />
                            </div>
                            </div>
                            <div style={{display:"flex",flexDirection:"row",justifyContent:"space-between"}}>

                            <div className="mb-3">
                                <label className="form-label">Start Date</label>
                                <input
                                    type="date"
                                    className="form-control"
                                    name="start_date"
                                    value={new Date(challenge.start_date).toISOString().split('T')[0]}
                                    onChange={handleInputChange}
                                    required
                                />
                            </div>
                            <div className="mb-3">
                                <label className="form-label">End Date</label>
                                <input
                                    type="date"
                                    className="form-control"
                                    name="end_date"
                                    value={new Date(challenge.end_date).toISOString().split('T')[0]}
                                    onChange={handleInputChange}
                                    required
                                />
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Prize Amount</label>
                                <input
                                    type="number"
                                    className="form-control"
                                    name="prizeAmount"
                                    value={challenge.prizeAmount}
                                    onChange={handleInputChange}
                                    required
                                />
                            </div>
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Description</label>
                                <textarea
                                    className="form-control"
                                    name="description"
                                    value={challenge.description}
                                    onChange={handleInputChange}
                                    required
                                ></textarea>
                            </div>
                           
                            {/* <div className="mb-3">
                                <label className="form-label">Change Picture</label>
                                <input
                                    type="file"
                                    className="form-control"
                                    onChange={handleFileChange}
                                />
                            </div> */}
                            <div style={{display:"flex",flexDirection:"row",justifyContent:"space-evenly"}}>
                            <div className="mb-3 form-check">
                                <input
                                    type="checkbox"
                                    className="form-check-input"
                                    id="solo"
                                    name="solo"
                                    checked={challenge.solo}
                                    onChange={handleInputChange}
                                />
                                <label className="form-check-label" htmlFor="solo">Solo</label>
                            </div>
                            <div className="mb-3 form-check">
                                <input
                                    type="checkbox"
                                    className="form-check-input"
                                    id="team"
                                    name="team"
                                    checked={challenge.team}
                                    onChange={handleInputChange}
                                />
                                <label className="form-check-label" htmlFor="team">Team</label>
                            </div>
                            {challenge.team && (
                                <div className="mb-3" style={{display:"flex",flexDirection:"row"}}>
                                    <label className="form-label">Team Size</label>
                                    <input
                                        type="number"
                                        className="form-control"
                                        name="teamSize"
                                        value={challenge.teamSize}
                                        onChange={handleInputChange}
                                        required
                                        style={{width:"50px",marginLeft:"10px",textAlign:"center",height:"25px"}}
                                    />
                                </div>
                            )}
                            </div>
                            
                           
                            <button type="submit" className="btn btn-primary w-100">Save Changes</button>
                        </form>
                    </div>
                </div>
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
