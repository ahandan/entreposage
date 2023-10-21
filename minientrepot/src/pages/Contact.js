// src/pages/Contact.js
import React from 'react';
import '../styles/Contact.css'
import MapComponent from '../components/MapComponent';


export default function Contact() {

  const handleSubmit = (e) => {
    e.preventDefault();
    // handle form submission, e.g., send email
  };

  return (
    <div className="contact-page">
      
      <div className="thank-you-message">
        <h1>Mini Entreposage Quebec Location</h1>
        <p>
          Pour toutes questions
          concernant la location d'un mini entrepôt  contactez-nous!
          Nous sommes à votre disposition
          du lundi au vendredi de
          8 h à 18 h.<br/>
          <b>Téléphone :</b> (418) 522-3775<br/>
          <b>Courriel :</b> entreposagelimoilou@gmail.com
        </p>
        <h4> Horaire </h4>
        <p>
          Our opening hours are Mon-Sun, 8am - 8pm. Thank you for contacting us!
        </p>        
      </div>

      <div className="form-container">
        <form onSubmit={handleSubmit}>
          <h4>Formulaire de réservation</h4>
          <input type="text" name="name" placeholder="Name" required />
          <input type="tel" name="phone" placeholder="Phone Number" required />
          <input type="email" name="email" placeholder="Email" required />
          <textarea name="description" placeholder="Description" required></textarea>
          <button type="submit">Envoyer</button>
        </form>

      </div>
      
      <div className="map-container">
        <MapComponent />
      </div>

    </div>
  );
}
