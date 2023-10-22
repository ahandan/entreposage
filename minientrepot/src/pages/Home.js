import React from 'react';
import '../styles/Home.css';
import map_logo from '../assets/map-svgrepo-com_1.svg'
import termometer from '../assets/temperature-svgrepo-com.svg'
import camera from "../assets/security-camera-svgrepo-com.svg"
import calendar from '../assets/calendar-svgrepo-com.svg'

const Features = ["Situé à Limoilou",
                  "Tempérée et chauffée",
                  "Sécurisé par caméra",
                  "7 jours sur 7"]
const Descriptions = ['Situé à une minute du Pont Drouin dans le secteur Quartier Limoilou',
                      'Nos espaces de rangement sont maintenus à une température contrôlée', 
                      'Des caméras de surveillance visionnent en permanance les mini entrepôts',
                      "Un service d'entreposage accessible à chaque jour de la semaine"];
const Logo = [map_logo, termometer, camera, calendar]

export default function Home() {
  return (
      <div>
        <div className="header-image">
          <img src={require("../assets/garage.jpeg")} alt="Header" />
        </div>
        <div className="home-page">
          <div className="description-section">
          </div>
          <div className='features'>
            <h1 className='features-title'> Des mini-entrepôts aux avantages multiples! </h1>
            {Descriptions.map((description, index) => (
              <div className={'feature'} key={index}>
                <div className="logo">
                  <img src={Logo[index]} alt="logo" />
                </div>
                <div className="text">
                  <h4 className="title">{Features[index]}</h4>
                  {description}
                </div>
              </div>
            ))}
          </div>
        </div>
      <br/>
      <br/>
    </div>
  );
}
