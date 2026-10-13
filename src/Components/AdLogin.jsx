import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AdminLogin = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  // 👇 YAHAN ADD KARNA HAI IS FUNCTION KO
  const handleLogin = (e) => {
    e.preventDefault();
    
    // Client ki actual login details
    if (username === 'digitaldynamo' && password === 'digimo@26') {
      localStorage.setItem('isAdminLoggedIn', 'true');
      navigate('/admin-dashboard');
    } else {
      alert('Galat Admin ID ya Password!');
    }
  };

  return (
    <div style={{ textAlign: 'center', padding: '2rem', color: '#fff' }}>
      <h2>Admin Login</h2>
      <form onSubmit={handleLogin} style={{ display: 'flex', flexDirection: 'column', gap: '1rem', maxWidth: '300px', margin: '0 auto' }}>
        <input 
          type="text" 
          placeholder="Admin ID" 
          value={username} 
          onChange={(e) => setUsername(e.target.value)} 
          required 
          style={{ padding: '8px', borderRadius: '4px' }}
        />
        <input 
          type="password" 
          placeholder="Password" 
          value={password} 
          onChange={(e) => setPassword(e.target.value)} 
          required 
          style={{ padding: '8px', borderRadius: '4px' }}
        />
        <button type="submit" style={{ padding: '8px', backgroundColor: '#38bdf8', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>
          Login
        </button>
      </form>
    </div>
  );
};

export default AdminLogin;