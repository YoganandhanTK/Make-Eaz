import React, { useState } from 'react';
import './Login.css';

const Studentlog = () => {
  const [Username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [Roll, setRoll] = useState('');
  const [error, setError] = useState('');
  var eyes = ["m644-428-58-58q9-47-27-88t-93-32l-58-58q17-8 34.5-12t37.5-4q75 0 127.5 52.5T660-500q0 20-4 37.5T644-428Zm128 126-58-56q38-29 67.5-63.5T832-500q-50-101-143.5-160.5T480-720q-29 0-57 4t-55 12l-62-62q41-17 84-25.5t90-8.5q151 0 269 83.5T920-500q-23 59-60.5 109.5T772-302Zm20 246L624-222q-35 11-70.5 16.5T480-200q-151 0-269-83.5T40-500q21-53 53-98.5t73-81.5L56-792l56-56 736 736-56 56ZM222-624q-29 26-53 57t-41 67q50 101 143.5 160.5T480-280q20 0 39-2.5t39-5.5l-36-38q-11 3-21 4.5t-21 1.5q-75 0-127.5-52.5T300-500q0-11 1.5-21t4.5-21l-84-82Zm319 93Zm-151 75Z",
    "M480-320q75 0 127.5-52.5T660-500q0-75-52.5-127.5T480-680q-75 0-127.5 52.5T300-500q0 75 52.5 127.5T480-320Zm0-72q-45 0-76.5-31.5T372-500q0-45 31.5-76.5T480-608q45 0 76.5 31.5T588-500q0 45-31.5 76.5T480-392Zm0 192q-146 0-266-81.5T40-500q54-137 174-218.5T480-800q146 0 266 81.5T920-500q-54 137-174 218.5T480-200Zm0-300Zm0 220q113 0 207.5-59.5T832-500q-50-101-144.5-160.5T480-720q-113 0-207.5 59.5T128-500q50 101 144.5 160.5T480-280Z"
  ]
  const [icon,seticon]=useState(eyes[1])
  var eye=eyes[1]
  function showpass(e){
    e.preventDefault();
    let passfield = document.querySelector('#password')
    let passtype = passfield.type
    if(passtype=='password'){
    passfield.type='text';
    seticon(eyes[0])
  }
  else{
    passfield.type='password';
    seticon(eyes[1])
      
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!Username || !password|| !Roll) {
      setError(' fields are required');
      alert(error)
      return;
    }

    // Add your login logic here
    console.log('Username:', Username);
    console.log('Password:', password);
    console.log('Roll:', Roll);
    setError('');
  };

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleSubmit}>
        <h2>Login</h2>
        {/* {error && <p className="error-message">{error}</p>} */}
        <div className="form-group">
          <label htmlFor="Username">Username:</label>
          <input
            type="Username"
            id="Username"
            value={Username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Enter your Username"
          />
        </div>
        <div className="form-group" id='pass'>
          <label htmlFor="password">Password:</label>
          <div className="pass">
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password"
          />
          <svg xmlns="http://www.w3.org/2000/svg" onClick={showpass}  height="24px" viewBox="0 -960 960 960" width="24px" fill="#0f0a05"><path d={icon} /></svg>
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="role">Select Roll:</label>
          <select name="roll" id="roll" value={Roll} onChange={(e) => setRoll(e.target.value)}>
            <option value="Select">Select</option>
            <option value="Admin">Admin</option>
            <option value="Teacher">Teacher</option>
            <option value="Student">Student</option>
          </select>
        </div>
        <button type="submit" className="login-button">Login</button>
      </form>
    </div>
  );
};

export default Studentlog;
