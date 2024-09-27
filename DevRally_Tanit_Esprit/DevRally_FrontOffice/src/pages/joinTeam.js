import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Navbar from '../componants/indexJs/navbar';
import { ToastContainer } from 'react-toastify';
import FooterFour from '../componants/footer/footerFour';
import ScrollTop from '../componants/scrollTop';

const JoinTeam = () => {
  const [email, setEmail] = useState('');
  const [code, setCode] = useState('');
  const [userType, setUserType] = useState('');
  const [userId, setUserId] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

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
        setUserId(user._id); // Directly set userId here
        setUserType(user.userType || []);
        setLoading(false);
      } catch (err) {
        setError(err);
        setLoading(false);
      }
    };

    fetchCurrentUser();
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post('http://localhost:3000/team/join', { email, code, userId });
      setMessage(response.data.message);
    } catch (error) {
      setMessage(error.response?.data || 'An error occurred');
    }
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

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
                <h2>Join a Team</h2>
                <form onSubmit={handleSubmit} className="mt-4">
  <div className="form-group mb-3">
    <label htmlFor="email" className="form-label">Email:</label>
    <input
      type="email"
      id="email"
      className="form-control"
      placeholder="Enter your email"
      value={email}
      onChange={(e) => setEmail(e.target.value)}
      required
    />
  </div>
  <div className="form-group mb-3">
    <label htmlFor="code" className="form-label">Invitation Code:</label>
    <input
      type="text"
      id="code"
      className="form-control"
      placeholder="Enter your invitation code"
      value={code}
      onChange={(e) => setCode(e.target.value)}
      required
    />
  </div>
  <button type="submit" className="btn btn-primary w-100">Join Team</button>
</form>

                {message && <p>{message}</p>}
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

export default JoinTeam;
