import React, { useState } from 'react';

const SignUp = ({ onSignUpSuccess }) => {
    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [location, setLocation] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');

        // Replace with your API endpoint for sign-up
        const apiEndpoint = 'https://example.com/api/signup';

        try {
            const response = await fetch(apiEndpoint, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ fullName, email, phoneNumber, location }),
            });

            const data = await response.json();

            if (response.ok) {
                // Handle successful sign-up
                console.log('Sign-up successful:', data);
                onSignUpSuccess(); // Redirect to login page or perform other actions
            } else {
                setError(data.message || 'Sign-up failed');
            }
        } catch (err) {
            setError('An error occurred. Please try again.');
        }
    };

    return (
        <div className="signup-container">
            <h1>Sign Up</h1>
            {error && <p className="error-message">{error}</p>}
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <input
                        type="text"
                        placeholder="Full Name"
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                    />
                </div>
                <div className="form-group">
                    <input
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div className="form-group">
                    <input
                        type="tel"
                        placeholder="Phone Number"
                        value={phoneNumber}
                        onChange={(e) => setPhoneNumber(e.target.value)}
                    />
                </div>
                <div className="form-group">
                    <input
                        type="text"
                        placeholder="Location"
                        value={location}
                        onChange={(e) => setLocation(e.target.value)}
                    />
                </div>
                <button type="submit" className="signup-button">Sign Up</button>
            </form>
        </div>
    );
};

export default SignUp;
