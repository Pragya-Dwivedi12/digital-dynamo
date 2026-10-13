import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';


const AdminDashboard = () => {
  const navigate = useNavigate();

  // Security Check: Agar login nahi hai toh wapas login page par bhej do
  useEffect(() => {
    const isLoggedIn = localStorage.getItem('isAdminLoggedIn');
    if (!isLoggedIn) {
      navigate('/admin-login');
    }
  }, [navigate]);

  // Logout Function
  const handleLogout = () => {
    localStorage.removeItem('isAdminLoggedIn');
    navigate('/admin-login');
  };

  return (
    <div style={{ padding: '2rem', color: '#fff', maxWidth: '1000px', margin: '0 auto' }}>
      {/* Header Section */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem', borderBottom: '1px solid #333', paddingBottom: '1rem' }}>
        <h2>Digital Dynamo - Admin Dashboard</h2>
        <button 
          onClick={handleLogout} 
          style={{ padding: '8px 16px', backgroundColor: '#ef4444', color: '#fff', border: 'none', borderRadius: '4px', cursor: 'pointer' }}
        >
          Logout
        </button>
      </div>

      {/* Quick Stats Cards */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.5rem', marginBottom: '2rem' }}>
        <div style={{ backgroundColor: '#1e293b', padding: '1.5rem', borderRadius: '8px', textAlign: 'center' }}>
          <h3>Total Views</h3>
          <p style={{ fontSize: '1.8rem', color: '#38bdf8', margin: '0.5rem 0' }}>1,240</p>
        </div>
        <div style={{ backgroundColor: '#1e293b', padding: '1.5rem', borderRadius: '8px', textAlign: 'center' }}>
          <h3>New Leads</h3>
          <p style={{ fontSize: '1.8rem', color: '#34d399', margin: '0.5rem 0' }}>18</p>
        </div>
        <div style={{ backgroundColor: '#1e293b', padding: '1.5rem', borderRadius: '8px', textAlign: 'center' }}>
          <h3>Services Active</h3>
          <p style={{ fontSize: '1.8rem', color: '#f87171', margin: '0.5rem 0' }}>6</p>
        </div>
      </div>

      {/* Admin Quick Actions / Controls */}
      <div style={{ backgroundColor: '#1e293b', padding: '1.5rem', borderRadius: '8px' }}>
        <h3>Website Controls</h3>
        <p style={{ color: '#94a3b8', marginBottom: '1rem' }}>Aap yahan se website ka data aur messages manage kar sakte hain.</p>
        
        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
          <button style={{ padding: '10px 15px', backgroundColor: '#38bdf8', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>
            Manage Services
          </button>
          <button style={{ padding: '10px 15px', backgroundColor: '#38bdf8', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>
            View Form Submissions
          </button>
          <button style={{ padding: '10px 15px', backgroundColor: '#38bdf8', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>
            Update Portfolio
          </button>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;