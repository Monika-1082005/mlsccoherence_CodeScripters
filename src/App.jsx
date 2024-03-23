import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Login from './components/Login';
import SignUp from './components/SignUp';
// import Card from './components/Card';
// import Hashtag from './components/Hashtag';
import './App.css'
// import { AppSidebarNav } from './components/AppSidebarNavbar';

function App() {


  return (
    <Router>
    <div className="container">
      <Navbar />
      {/* <Card /> */}
      {/* <AppSidebarNavbar /> */}
      <Routes>
        <Route exact path="/Login" element={<Login />} />
        <Route exact path="/SignUp" element={<SignUp />} />
      </Routes>
      {/* <Hashtag /> */}
    </div>
  </Router>
  )
}

export default App
