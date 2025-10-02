import { Link } from 'react-router-dom';
import './Login.css';
import {auth} from '../firebase.ts';
import {useState} from 'react';
import {signInWithEmailAndPassword} from 'firebase/auth';

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    try{
      await signInWithEmailAndPassword(auth, email, password);
      alert("Login successful");
    }
    catch (err: any){
      setError(err.message);
    }
  };

  return (
    <div className="login-page">
      <div className="login-container">
        <h2>Welcome Back</h2>
        <form className="login-container-form" onSubmit={handleLogin}>
          <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
          <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
          <button type="submit">Login</button>
        </form>
        {error && <p style={{color: "red"}} className="error">{error}</p>}
        <p className="register-text">
          New to <span className="brand">BiteStorage</span>? <Link to="/register">Register</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
