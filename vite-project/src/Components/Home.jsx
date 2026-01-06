import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <>
      <h1>Home.jsx</h1>
      <Link to="/contact">
        <button>Contact</button>
      </Link>
      <Link to="/services">
        <button>Services</button>
      </Link>
    </>
  );
}

export default Home;
