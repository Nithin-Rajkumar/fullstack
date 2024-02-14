import { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import '../assets/css/signup.css';

const Signup = () => {
  const navigate = useNavigate(); // Initialize useNavigate
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [role, setRole] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const [country, setCountry] = useState('');
  const [name, setname] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [passwordStrength, setPasswordStrength] = useState('');

  const handleSignup = async () => {
    try {
      if (
        email.trim() === '' ||
        password.trim() === '' ||
        confirmPassword.trim() === '' ||
        role.trim() === '' ||
        mobileNumber.trim() === '' ||
        country.trim() === '' ||
        name.trim() === ''
      ) {
        setErrorMessage('Please fill in all fields.');
        return;
      }
      if (password !== confirmPassword) {
        setErrorMessage('Passwords do not match.');
        return;
      }

      // Prepare data for the signup request
      const userData = {
        name,
        email,
        password
      };

      // Make the POST request to the signup endpoint
      const response = await fetch('http://localhost:8181/api/v1/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(userData)
      });

      if (!response.ok) {
        throw new Error('Failed to sign up');
      }

      console.log('Signup successful');
      navigate('/'); // Redirect to home page upon successful signup

    } catch (error) {
      console.error('Error signing up:', error.message);
      setErrorMessage('Failed to sign up. Please try again later.');
    }
  };

  const handlePasswordChange = (e) => {
    const val = e.target.value;
    setPassword(val);
    if (val.length < 6) {
      setPasswordStrength('Weak');
    } else if (val.length < 10) {
      setPasswordStrength('Medium');
    } else {
      setPasswordStrength('Strong');
    }
  };

  return (
    <div className="signup-container">
      <div className="signup-form">
        <h2>Create an Account</h2>
        <input
          type="text"
          placeholder="name"
          value={name}
          onChange={(e) => setname(e.target.value)}
        />
        <input
          type="email"
          placeholder="Email Address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={handlePasswordChange}
        />
        <span className={`password-strength ${passwordStrength.toLowerCase()}`}>
          {passwordStrength && `Password Strength: ${passwordStrength}`}
        </span>
        <input
          type="password"
          placeholder="Confirm Password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
        <select value={role} onChange={(e) => setRole(e.target.value)}>
          <option value="">Select Role</option>
          <option value="student">Student</option>
          <option value="admin">Admin</option>
        </select>
        <input
          type="tel"
          placeholder="Mobile Number"
          value={mobileNumber}
          onChange={(e) => setMobileNumber(e.target.value)}
        />
        <input
          type="text"
          placeholder="Country"
          value={country}
          onChange={(e) => setCountry(e.target.value)}
        />
        {errorMessage && <p className="error-message">{errorMessage}</p>}
        <button onClick={handleSignup}>Sign Up</button>
      </div>
    </div>
  );
};

export default Signup;
