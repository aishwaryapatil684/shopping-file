// src/App.js
// src/App.js
// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register';
import Home from './components/Home'; // Import Home component

const App = () => {
    return (
        <Router>
            <div style={{ padding: '20px', backgroundColor: '#f0f0f0', height: '100vh' }}>
                <Routes>
                    <Route path="/" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/home" element={<Home />} /> {/* Add Home route */}
                </Routes>
            </div>
        </Router>
    );
};

export default App;
