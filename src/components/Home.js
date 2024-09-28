// src/components/Home.js
// src/components/Home.js
import React from 'react';
import Items from './Items'; // Import the Items component

// Inline CSS styles
const styles = {
    container: {
        padding: '20px',
        textAlign: 'center',
    },
};

const Home = () => {
    return (
        <div style={styles.container}>
            <h1>Welcome to the Home Page</h1>
            <Items /> {/* Render the Items component */}
        </div>
    );
};

export default Home;

