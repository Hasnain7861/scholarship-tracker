import React, { useState } from 'react';
import USStates from 'react-select-us-states';
import { useNavigate } from 'react-router-dom';
import '../styles/UserDetailsForm.css';

const UserDetailsForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    city: '',
    state: '',
    country: 'United States',
    gpa: '',
    major: '',
    graduationYear: '',
  });

  const userId = localStorage.getItem('userId');
  console.log(localStorage.getItem('userId'));

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

  const generateGPAOptions = () => {
    const options = [];
    for (let gpa = 0.0; gpa < 4.1; gpa += 0.1) {
      options.push(gpa.toFixed(1)); // Fixed to one decimal place
    }
    return options;
  };

  const generateYearOptions = () => {
    const currentYear = 2024;
    const years = [];
    for (let year = currentYear; year <= 2030; year++) {
      years.push(year);
    }
    return years;
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

        <USStates onChange={handleStateChange} className="state-dropdown" />

        <select name="country" value={formData.country} onChange={handleChange} required>
          <option value="United States">United States</option>
        </select>

        <select name="gpa" value={formData.gpa} onChange={handleChange} required>
          <option value="" disabled>Select GPA</option>
          {generateGPAOptions().map((gpa) => (
            <option key={gpa} value={gpa}>
              {gpa}
            </option>
          ))}
        </select>

        <input
          type="text"
          name="major"
          placeholder="Major"
          value={formData.major}
          onChange={handleChange}
          required
        />

        <select
          name="graduationYear"
          value={formData.graduationYear}
          onChange={handleChange}
          required
        >
          <option value="" disabled>Select Graduation Year</option>
          {generateYearOptions().map((year) => (
            <option key={year} value={year}>
              {year}
            </option>
          ))}
        </select>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default UserDetailsForm;