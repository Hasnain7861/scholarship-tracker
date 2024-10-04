import React, { useState } from 'react';
import { FaUserCircle } from 'react-icons/fa'; // Import the user icon
import { useNavigate } from 'react-router-dom';
import '../styles/userDashboard.css'; // Add your styles here

const UserDashboard = () => {
  const [activeTab, setActiveTab] = useState('search');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false); // Toggle dropdown
  const navigate = useNavigate();

  // Handle tab switching
  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  // Handle logout (redirect to home)
  const handleLogout = () => {
    // Add any necessary logout logic (like clearing session data, etc.)
    navigate('/');
  };

  // Toggle dropdown visibility
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className="dashboard-container">
      <header className="dashboard-header">
        <h1 className="dashboard-title">Welcome to Scholarship Finder</h1>
        <div className="user-icon-container">
          <FaUserCircle 
            className="user-icon" 
            size={40} // You can adjust the size here
            onClick={toggleDropdown}
          />
          {isDropdownOpen && (
            <div className="dropdown-menu">
              <button onClick={() => navigate('/profile')}>Profile</button>
              <button onClick={handleLogout}>Logout</button>
            </div>
          )}
        </div>
      </header>

      <div className="dashboard-tabs">
        <button 
          className={activeTab === 'search' ? 'tab active' : 'tab'} 
          onClick={() => handleTabChange('search')}
        >
          Search Scholarships
        </button>
        <button 
          className={activeTab === 'applied' ? 'tab active' : 'tab'} 
          onClick={() => handleTabChange('applied')}
        >
          Scholarships Applied
        </button>
        <button 
          className={activeTab === 'saved' ? 'tab active' : 'tab'} 
          onClick={() => handleTabChange('saved')}
        >
          Saved Scholarships
        </button>
        <button 
          className={activeTab === 'documents' ? 'tab active' : 'tab'} 
          onClick={() => handleTabChange('documents')}
        >
          Your Documents
        </button>
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
                <tr>
                  <td colSpan="5">No scholarships found. Start searching!</td>
                </tr>
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
