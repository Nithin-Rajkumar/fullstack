import { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate instead of useHistory
import '../assets/css/login.css'; // Import CSS file
import { Link } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate(); // Initialize useNavigate
  const [email, setemail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleLogin = async () => {
    try {
      if (email.trim() === '' || password.trim() === '') {
        setErrorMessage('Please provide both email and password.');
        return;
      }

      // Simulate login request to backend
      const response = await fetch('http://localhost:8181/api/v1/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      if (!response.ok) {
        throw new Error('Invalid email or password');
      }

      const data = await response.json();
      const token = data.token;

      console.log('Login successful');
      console.log('Token:', token); 
      sessionStorage.setItem('token',token); 
      navigate('/home');

    } catch (error) {
      setErrorMessage(error.message);
    }
  };

  return (
    <div className="login-container">
      <div className="login-form">
        <h2>Login to BritEngCert</h2>
        <input
          type="text"
          placeholder="email"
          value={email}
          onChange={(e) => setemail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {errorMessage && <p className="error-message">{errorMessage}</p>}
        <button onClick={handleLogin}>Login </button>
        <Link to="/signup" className="signup-link">Dont have an account? Sign up here</Link>
      </div>
    </div>
  );
};

export default Login;
