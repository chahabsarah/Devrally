import React, { useEffect, useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from '../componants/indexJs/navbar';

const Users = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get('http://localhost:3000/user/getAllUsers');
        setUsers(response.data);
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    };

    fetchUsers();
  }, []);

  // Filter users by type
  const companies = users.filter(user => user.userType.includes('company'));
  const challengers = users.filter(user => user.userType.includes('challenger'));

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
        <div className="container mt-5">

          <div className="d-flex flex-column">
            <div className="mb-4">
              <h2 className="mb-3">Companies</h2>
              <table className="table table-striped">
                <thead>
                  <tr>
                    <th scope="col">User ID</th>
                    <th scope="col">Full Name</th>
                    <th scope="col">Email</th>
                    <th scope="col">Website</th>
                    <th scope="col">Domain</th>
                    <th scope="col">Verified</th>
                  </tr>
                </thead>
                <tbody>
                  {companies.map(user => (
                    <tr key={user._id}>
                      <td>{user._id}</td>
                      <td>{user.fullname}</td>
                      <td>{user.email}</td>
                      <td>{user.website || 'N/A'}</td>
                      <td>{user.domain || 'N/A'}</td>
                      <td>{user.verified ? 'Yes' : 'No'}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div>
              <h2 className="mb-3">Challengers</h2>
              <table className="table table-striped">
                <thead>
                  <tr>
                    <th scope="col">User ID</th>
                    <th scope="col">Full Name</th>
                    <th scope="col">Email</th>
                    <th scope="col">Verified</th>
                  </tr>
                </thead>
                <tbody>
                  {challengers.map(user => (
                    <tr key={user._id}>
                      <td>{user._id}</td>
                      <td>{user.fullname}</td>
                      <td>{user.email}</td>
                      <td>{user.verified ? 'Yes' : 'No'}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Users;
