import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <div className="header-main">
      <h2 className="title-text">
        <Link to="/" className="title-link">
          Property Portal
        </Link>
      </h2>
    </div>
  );
}

export default Header;
