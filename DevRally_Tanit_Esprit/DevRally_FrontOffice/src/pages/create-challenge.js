import React,{useState,useEffect} from "react";
import Navbar from "../componants/indexJs/navbar";
import FooterFour from "../componants/footer/footerFour";
import ScrollTop from "../componants/scrollTop";
import axios from 'axios';
import Stepper from 'react-stepper-horizontal';
import { useNavigate } from "react-router-dom";

export default function CreateChallenge() {
    const [step, setStep] = useState(0);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [userName, setUserName] = useState('');
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
            setCurrentUser(user);
            setUserName(user?.fullname || '');
            setFormData(prevState => ({
                ...prevState,
                admin: user?.fullname || ''
            }));
    
            setLoading(false);
            } catch (err) {
              setError(err);
              setLoading(false);
            }
          };
          fetchCurrentUser();
    
      }, []);
      const [formData, setFormData] = useState({
        name: '',
        start_date: '',
        end_date: '',
        prizeAmount: '',
        description: '',
        picture: null,
        solo: false,
        team: false,
        teamSize: '',
        admin: userName,
    });
    const handleChange = (e) => {
        const { name, value, type, checked, files } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: type === 'checkbox' ? checked : type === 'file' ? files[0] : value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const form = new FormData();
        for (const key in formData) {
            form.append(key, formData[key]);
        }
        try {
            const response = await axios.post('http://localhost:3000/challenge/addChallenge', form, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });
            navigate(`/fund?prizeAmount=${formData.prizeAmount}`);

            // navigate(`/challenges-list`);
            console.log(response.data);
            alert('Challenge created successfully');
        } catch (error) {
            console.error('Error creating challenge:', error);
            alert('Error creating challenge');
        }
    };

    return (
        <>
            <Navbar navClass="defaultscroll sticky" manuClass="navigation-menu nav-right" logoLight={true} />
            <section className="section pb-8">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-8">
                            <div className="p-4 rounded shadow">
                                <Stepper
                                    steps={[
                                        { title: 'Step 1' },
                                        { title: 'Step 2' },
                                        { title: 'Step 3' }
                                    ]}
                                    activeStep={step}
                                    onSelect={setStep}
                                />
                                <form onSubmit={handleSubmit}>
                                    {step === 0 && (
                                        <div>
                                            <div className="mb-3">
                                                <label className="form-label">Name <span className="text-danger">*</span></label>
                                                <input name="name" type="text" className="form-control" placeholder="Name :" onChange={handleChange} />
                                            </div>
                                            <div className="mb-3">
                                                <label className="form-label">Start Date <span className="text-danger">*</span></label>
                                                <input name="start_date" type="date" className="form-control" onChange={handleChange} />
                                            </div>
                                            <div className="mb-3">
                                                <label className="form-label">End Date <span className="text-danger">*</span></label>
                                                <input name="end_date" type="date" className="form-control" onChange={handleChange} />
                                            </div>
                                            <button type="button" className="btn btn-primary" onClick={() => setStep(1)}>Next</button>
                                        </div>
                                    )}
                                    {step === 1 && (
                                        <div>
                                            <div className="mb-3">
                                                <label className="form-label">Prize Amount <span className="text-danger">*</span></label>
                                                <input name="prizeAmount" type="number" className="form-control" placeholder="Prize Amount :" onChange={handleChange} />
                                            </div>
                                            <div className="mb-3">
                                                <label className="form-label">Description <span className="text-danger">*</span></label>
                                                <textarea name="description" className="form-control" placeholder="Description :" onChange={handleChange}></textarea>
                                            </div>
                                            <button type="button" className="btn btn-secondary" style={{margin:"10px"}} onClick={() => setStep(0)}>Back</button>
                                            <button type="button" className="btn btn-primary" style={{margin:"10px"}} onClick={() => setStep(2)}>Next</button>
                                        </div>
                                    )}
                                    {step === 2 && (
                                        <div>
                                            <div className="mb-3">
                                                <label className="form-label">Picture</label>
                                                <input name="picture" type="file" className="form-control" onChange={handleChange} />
                                            </div>
                                            <div className="mb-3">
                                                <label className="form-label">Solo</label>
                                                <input name="solo" type="checkbox" onChange={handleChange} />
                                            </div>
                                            <div className="mb-3">
                                                <label className="form-label">Team</label>
                                                <input name="team" type="checkbox" onChange={handleChange} />
                                            </div>
                                            {formData.team && (
                                                <div className="mb-3">
                                                    <label className="form-label">Team Size</label>
                                                    <input name="teamSize" type="number" className="form-control" onChange={handleChange} />
                                                </div>
                                            )}
                                            <div className="mb-3">
                                                <label className="form-label">Admin <span className="text-danger">*</span></label>
                                                <input name="admin" type="text" className="form-control" value={formData.admin} readOnly />
                                                </div>
                                            <button type="button" className="btn btn-secondary" style={{margin:"10px"}} onClick={() => setStep(1)}>Back</button>
                                            <button type="submit" className="btn btn-primary" style={{margin:"10px"}}>Create Challenge</button>
                                        </div>
                                    )}
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <FooterFour />
            <ScrollTop />
            
        </>
    );
}
