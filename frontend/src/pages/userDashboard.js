import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaUserCircle } from 'react-icons/fa';
import axios from 'axios'; // Import axios for API calls
import '../styles/userDashboard.css';

const UserDashboard = () => {
  const [activeTab, setActiveTab] = useState('search');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [scholarships, setScholarships] = useState([]); // State to store scholarships
  const navigate = useNavigate();

  // Fetch scholarships when the component mounts
  useEffect(() => {
    fetchScholarships();
  }, []);

  const fetchScholarships = async () => {
    try {
      const response = await axios.get('http://127.0.0.1:8000/api/scholarship/');
      console.log(response.data);
      setScholarships(response.data); // Store fetched scholarships
    } catch (error) {
      console.error('Error fetching scholarships:', error);
    }
  };

  const handleTabChange = (tab) => setActiveTab(tab);

  const handleLogout = () => navigate('/');

  return (
    <div className="dashboard-container">
      <header className="dashboard-header">
        <h1 className="dashboard-title">Welcome to Scholarship Finder</h1>
        <div className="profile-icon-container">
          <FaUserCircle
            size={40}
            className="profile-icon"
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
          />
          {isDropdownOpen && (
            <div className="profile-dropdown">
              <button className="dropdown-item" onClick={() => navigate('/profile')}>
                Profile
              </button>
              <button className="dropdown-item logout-button" onClick={handleLogout}>
                Logout
              </button>
            </div>
          )}
        </div>
      </header>

      <div className="dashboard-tabs">
        {['search', 'applied', 'saved', 'documents'].map((tab) => (
          <button
            key={tab}
            className={activeTab === tab ? 'tab active' : 'tab'}
            onClick={() => handleTabChange(tab)}
          >
            {tab.charAt(0).toUpperCase() + tab.slice(1)} Scholarships
          </button>
        ))}
      </div>

      <div className="dashboard-content">
        {activeTab === 'search' && (
          <div className="search-scholarships">
            <input
              type="text"
              className="search-bar"
              placeholder="Search for scholarships..."
            />
            <table className="scholarship-table">
              <thead>
                <tr>
                  <th>Scholarship Name</th>
                  <th>Provider</th>
                  <th>Deadline</th>
                  <th>Amount</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {scholarships.length > 0 ? (
                  scholarships.map((scholarship) => (
                    <tr key={scholarship.id}>
                      <td>{scholarship.scholarship_name}</td>
                      <td>{scholarship.provider}</td>
                      <td>{scholarship.deadline}</td>
                      <td>${scholarship.amount}</td>
                      <td>
                        <button>Apply</button>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="5">No scholarships found. Start searching!</td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        )}

        {activeTab === 'applied' && (
          <div className="applied-scholarships">
            <h2>Your Applied Scholarships</h2>
            <p>No scholarships applied yet.</p>
          </div>
        )}

        {activeTab === 'saved' && (
          <div className="saved-scholarships">
            <h2>Your Saved Scholarships</h2>
            <p>No scholarships saved yet.</p>
          </div>
        )}

        {activeTab === 'documents' && (
          <div className="user-documents">
            <h2>Your Documents</h2>
            <p>No documents uploaded yet.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default UserDashboard;