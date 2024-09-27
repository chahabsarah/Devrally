import React, { useEffect, useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from '../componants/indexJs/navbar';

const Teams = () => {
  const [teams, setTeams] = useState([]);

  useEffect(() => {
    const fetchTeams = async () => {
      try {
        const response = await axios.get('http://localhost:3000/team/all');
        setTeams(response.data);
      } catch (error) {
        console.error('Error fetching teams:', error);
      }
    };

    fetchTeams();
  }, []);

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
    <div className="container mt-5">
      <h1 className="mb-4">Teams List</h1>
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">Team ID</th>
            <th scope="col">Image</th>
            <th scope="col">Name</th>
          </tr>
        </thead>
        <tbody>
          {teams.map(team => (
            <tr key={team._id}>
              <td>{team._id}</td>
              <td>
                {team.image && team.image.data ? (
                  <img
                    src={`data:${team.image.contentType};base64,${team.image.data}`}
                    alt={team.name}
                    style={{ width: '100px', height: 'auto' }}
                  />
                ) : (
                  <span>No Image</span>
                )}
              </td>
              <td>{team.name}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </div>
    </section>
    </>
  );
};

export default Teams;
