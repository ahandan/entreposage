import React from 'react';
import '../styles/Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-section">
        <b>Contact:</b><br />
        (418) 522-3775 | entreposagelimoilou@gmail.com
      </div>
      <div className="footer-section"><b>Horaire d'ouverture:</b><br /> Lundi au vendredi de 8h à 18h.</div>
      <div className="footer-section"><a href="https://www.facebook.com/YourPage" target="_blank" rel="noopener noreferrer">Facebook</a></div>
    </footer>
  );
}