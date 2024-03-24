import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Login from './components/Login';
import SignUp from './components/SignUp';
import HomeContent from './components/HomeContent';
// import GeminiChatbot from './components/GeminiChatbot';
// import SocialMediaIcons from './components/SocialMediaIcons';
// import TooltipContainer from './components/TooltipContainer';
import './App.css';


function App() {
  // const [images, setImages] = useState([]);
  // const accessKey = process.env.REACT_APP_ACCESS_KEY;

  // useEffect(() => {
  //   // Fetch images when the component mounts
  //   fetch(`https://api.unsplash.com/photos/random?client_id=${accessKey}&count=10`)
  //     .then(response => response.json())
  //     .then(data => {
  //       setImages(data);
  //     })
  //     .catch(error => {
  //       console.error('Error fetching images:', error);
  //     });
  // }, [accessKey]);

  return (
    <Router>
      <div className="container">
        
        <Navbar />
        <HomeContent />
        <Routes>
          <Route exact path="/Login" element={<Login />} />
          <Route exact path="/SignUp" element={<SignUp />} />
        </Routes>
        {/* <SocialMediaIcons /> */}
        {/* <GeminiChatbot /> */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;
