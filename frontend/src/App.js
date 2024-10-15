import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import FeaturesPage from './pages/FeaturesPage';
import LoginRegisterPage from './pages/LoginRegisterPage';
import UserDashboard from './pages/userDashboard';
import UserDetailsForm from './pages/UserDetailsForm'; 

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/features" element={<FeaturesPage />} />
          <Route path="/login" element={<LoginRegisterPage />} />
          <Route path="/userDashboard" element={<UserDashboard />} />
          <Route path="/userDetails" element={<UserDetailsForm />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
