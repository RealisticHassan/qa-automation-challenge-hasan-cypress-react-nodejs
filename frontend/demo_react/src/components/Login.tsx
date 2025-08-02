import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import './Login.css';


const Login: React.FC = () => {
  const [Email, setEmail] = useState<string>("");
  const [Password, setPassword] = useState<string>("");
  const [error, setError] = useState<string>("");
  const [loading,setLoading] =useState<boolean>(false);
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(""); 
    setLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 3000));
   

   console.log('Email:', Email);  
  console.log('Password:', Password);  
    
   
    try {
      const response = await axios.post(`http://localhost:5000/api/login`, {
        Email,
        Password,
      });
        console.log("API Response: "+response.data);
      // Check if the response is successful and handle accordingly
      if (response.status === 200) {
        toast.success("Logged in Successfully !");
        localStorage.setItem("UserSession",JSON.stringify(Email))
        navigate("/city");
        console.log("Logged in successfully:", response.data);
        // Redirect to another page or show success message
      }
      else{
        toast.error("User name or password are invalid !");
      }
    } catch (error) {
        toast.error("Logged in Failed !");
        console.error("Login failed:", error);
        setError("Invalid email or password.");
    }
    finally{
      setLoading(false);
    }
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <form onSubmit={handleSubmit} className="login-form">
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            value={Email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={Password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password"
            required
          />
        </div>
        {error && <div className="error-message">{error}</div>}
        {/* Show the loader when the API call is in progress */}
        {loading ? (
          <div className="loader">Loading...</div> 
        ) : (
          <button type="submit" className="login-btn">Login</button>
        )}
        
      </form>
    </div>
  );
};

export default Login;