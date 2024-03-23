import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Login from './components/Login';
import SignUp from './components/SignUp';
import HomeContent from './components/HomeContent';
import './App.css'

function App() {
  return (
    <Router>
      <div className="container">
        <Navbar />
        <Routes>
          <Route exact path="/Login" element={<Login />} />
          <Route exact path="/SignUp" element={<SignUp />} />
          <Route exact path="/HomeContent" element={<HomeContent />} /> {/* Add this Route */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
