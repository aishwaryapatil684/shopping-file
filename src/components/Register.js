// src/components/Register.js
// src/components/Register.js
// src/components/Register.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Added import for useNavigate

// Inline CSS styles
const styles = {
    container: {
        padding: '20px',
        maxWidth: '400px',
        margin: '0 auto',
        backgroundColor: '#fff',
        borderRadius: '5px',
        boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
    },
    error: {
        color: 'red',
    },
    button: {
        marginTop: '10px',
    },
};

const Register = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate(); // Added useNavigate

    const handleSubmit = (e) => {
        e.preventDefault();

        if (email === '' || password === '' || confirmPassword === '') {
            setError('Please fill in all fields.');
            return;
        }

        if (password !== confirmPassword) {
            setError('Passwords do not match.');
            return;
        }

        alert('Registration successful!');
        navigate('/'); // Navigate to login after registration
    };

    return (
        <div style={styles.container}>
            <h2>Register</h2>
            {error && <p style={styles.error}>{error}</p>}
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Email:</label>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Password:</label>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Confirm Password:</label>
                    <input
                        type="password"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        required
                    />
                </div>
                <button type="submit" style={styles.button}>Register</button>
                <button
                    type="button"
                    style={{ ...styles.button, marginLeft: '10px' }}
                    onClick={() => navigate('/')}
                >
                    Login
                </button>
            </form>
        </div>
    );
};

export default Register;
