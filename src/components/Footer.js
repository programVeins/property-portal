import React from 'react';

function Footer() {
  return (
    <div className="container-fluid footer text-center">
      <p className="footer-text-bottom">
        &copy;{new Date().getFullYear()} Property Portal
      </p>
    </div>
  );
}

export default Footer;
