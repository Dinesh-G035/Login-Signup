import React from 'react'
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div>
      <h2>Welcome Home 🎉</h2>
      <p>You are logged in successfully.</p>
      <nav><ul><li><Link to="/login">Login</Link></li></ul></nav>
    </div>
  );
}

export default Home
