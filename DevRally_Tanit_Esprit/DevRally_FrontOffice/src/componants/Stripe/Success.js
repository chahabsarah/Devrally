import React from "react";
import Navbar from "../indexJs/navbar";
import 'bootstrap/dist/css/bootstrap.min.css'; // Ensure Bootstrap is imported

const Success = () => {

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
          <div className="row align-items-center justify-content-center text-center">
            <div className="col-md-8 col-lg-6">
              <div className="bg-light p-4 rounded-3 shadow-sm">
                <h2 className="display-4 mb-4">Thank You for Your Payment!</h2>
                <p className="lead mb-4">
                  Your payment has been successfully processed. We appreciate your promptness and thank you for your support. If you have any questions, feel free to reach out to us.
                </p>

                <a href="/challenges-list" className="btn btn-primary btn-lg">Go Back to Home</a>
              </div>
            </div>
          </div>
          
        </div>
      </section>
    </>
  );
};

export default Success;
