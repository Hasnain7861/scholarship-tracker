import React, { useState } from 'react';
import USStates from 'react-select-us-states';
import { useNavigate } from 'react-router-dom';
import '../styles/UserDetailsForm.css'; // Make sure this path is correct

const UserDetailsForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    city: '',
    state: '',
    country: 'United States',
    gpa: '',
    major: '',
    graduationYear: ''
  });

  const userId = localStorage.getItem('userId'); // Assuming userId is stored after registration
  const navigate = useNavigate();

  const handleStateChange = (newState) => {
    setFormData({ ...formData, state: newState });
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch(`http://localhost:5000/api/users/updateProfile/${userId}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      if (res.ok) {
        alert('Profile updated successfully!');
        navigate('/userDashboard'); // Redirect to user dashboard after successful submission
      } else {
        alert(data.error);
      }
    } catch (err) {
      alert('An error occurred while updating your profile. Please try again.');
    }
  };

  return (
    <div className="form-container">
      <h2>Complete Your Profile</h2>
      <form onSubmit={handleSubmit}>
        <input 
          type="text" 
          name="firstName" 
          placeholder="First Name" 
          value={formData.firstName} 
          onChange={handleChange} 
          required 
        />
        <input 
          type="text" 
          name="lastName" 
          placeholder="Last Name" 
          value={formData.lastName} 
          onChange={handleChange} 
          required 
        />

        <input 
          type="text" 
          name="city" 
          placeholder="City" 
          value={formData.city} 
          onChange={handleChange} 
          required 
        />

        <label>Select State:</label>
        <USStates onChange={handleStateChange} className="state-dropdown" />

        <label>Country:</label>
        <select 
          name="country" 
          value={formData.country} 
          onChange={handleChange} 
          required
        >
          <option value="United States">United States</option>
        </select>

        <input 
          type="number" 
          name="gpa" 
          placeholder="GPA" 
          value={formData.gpa} 
          onChange={handleChange} 
          required 
        />
        <input 
          type="text" 
          name="major" 
          placeholder="Major" 
          value={formData.major} 
          onChange={handleChange} 
          required 
        />
        <input 
          type="number" 
          name="graduationYear" 
          placeholder="Graduation Year" 
          value={formData.graduationYear} 
          onChange={handleChange} 
          required 
        />
        
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default UserDetailsForm;
