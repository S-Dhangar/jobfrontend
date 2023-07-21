import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
const Signup= () => {
    const navigate=useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  
    const Signup = ()=>{
        navigate('/login');
    }
  const submit = async(e) =>{
e.preventDefault();
//https://jobbackend-f12u.vercel.app
    const data = await fetch('https://jobbackend-f12u.vercel.app/signup',{
        method:"POST",
        headers: {
          "Content-Type": "application/json"
        },
        body:JSON.stringify({email,password})
      });

    if(data.ok){
        window.alert('Registration Successfull');
        navigate('/admin');
    }
    else{
        window.alert('Registration fail');

    }
  }
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <form method='POST' style={{ width: '300px', padding: '20px', border: '1px solid #ccc' }} >
        <h2 style={{ textAlign: 'center' }}>Signup Page</h2>
        
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={{ width: '100%', padding: '5px' }}
            required
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={{ width: '100%', padding: '5px' }}
            required
          />
        </div>
        <div style={{ textAlign: 'center' }}>
          <button onClick={submit} type="submit" style={{ padding: '10px 20px', margin: '12px', background: 'blue', color: 'white', border: 'none', borderRadius:"4px" }}>
            Signup
          </button>
          <button onClick={Signup} type="submit" style={{ padding: '10px 20px', margin: '12px', background: 'blue', color: 'white', border: 'none', borderRadius:"4px" }}>
            Login
          </button>
        </div>
      </form>
    </div>
  );
};

export default Signup;
