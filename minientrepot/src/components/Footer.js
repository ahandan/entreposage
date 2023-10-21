import React from 'react';
import '../styles/Footer.css';

export default function Footer() {
  return (
    // <footer className="footer">
    //   <div className="contact-info">
    //     Contact: (418) 522-3775 | info@example.com
    //   </div>
    //   <div className="schedule">
    //     Open Hours: Mon-Sun, 8am - 8pm
    //   </div>
    //   <div className="social-links">
    //     <a href="https://www.facebook.com/minientreposagequebec" target="_blank" rel="noopener noreferrer">Facebook</a>
    //   </div>
    // </footer>


    <footer className="footer">
        <div className="footer-section"><b>Contact:</b><br/> (418) 522-3775 | entreposagelimoilou@gmail.com</div>
        <div className="footer-section"><b>Horaire d'ouverture:</b><br/> Ouvert 7/7 de 8h à 20h</div>
        <div className="footer-section"><a href="https://www.facebook.com/YourPage" target="_blank" rel="noopener noreferrer">Facebook</a></div>
    </footer>
  );
}