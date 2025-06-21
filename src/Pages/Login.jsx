import React, { useState } from 'react';
import './Login.css';

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    setFormData({
      email: '',
      password: ''
    });
  };

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <div className="container">
      <form className="form" onSubmit={handleSubmit}>
        <label>Email:</label><br />
        <input
          type="email"
          value={formData.email}
          name="email"
          onChange={handleChange}
        /><br />
        <label>Password:</label><br />
        <input
          type="password"
          value={formData.password}
          name="password"
          onChange={handleChange}
        /><br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Login;
