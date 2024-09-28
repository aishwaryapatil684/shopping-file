// src/components/Login.js
// src/components/Login.js
// src/components/Login.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

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

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        if (email === '' || password === '') {
            setError('Please fill in all fields.');
            return;
        }

        // Example login ltest@example.comogic (replace with your actual authentication logic)
        if (email === 'abc@gmail.com' && password === 'password') {
            alert('Login successful!');
            navigate('/home'); // Navigate to Home page
        } else {
            setError('Invalid credentials. Please try again.');
        }
    };

    return (
        <div style={styles.container}>
            <h2>Login</h2>
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
                <button type="submit" style={styles.button}>Login</button>
                <button
                    type="button"
                    style={{ ...styles.button, marginLeft: '10px' }}
                    onClick={() => navigate('/register')}
                >
                    Register
                </button>
            </form>
        </div>
    );
};

export default Login;
