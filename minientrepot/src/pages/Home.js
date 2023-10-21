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
    <div className="home-page">
      {/* <div className="header-image"> */}
        {/* <img src={require("../assets/Imageofaheatedstorageunit.png")} alt="Header" /> */}
      {/* </div> */}
      <div className="description-section">
        <h1>Location d'entreposage à Quebec</h1>
        <p>
          Bienvenue chez Mini Entreposage Quebec!
          Mini Entreposage Quebec est un service de location d'entreposage à Québec.
          Nos clients sont des propriétaires de logement en copropriété qui se retrouve avec des espaces de rangement trop petit, des gens d'affaires qui ont besoin de mini-entrepôts pour entreposer leurs documents, des voyageurs de commerce qui remisent leurs marchandises destinées au marché local, des gens qui déménagent et se retrouvent avec des meubles à entreposer.
          Mini Entreposage Quebec offre des entrepôts à louer chauffés et sécurisés.
          Nos mini-entrepôts sont conçus pour répondre à toutes vos attentes en ce qui a trait aux tarifs, localisation centrale et service.
          C'est avec plaisir qu'on répond à toutes vos questions lorsque vous prenez contact avec nous.
          Contactez-nous pour choisir l'entrepôt de votre choix!
        </p>
      </div>
      <div className='features'>
        {Descriptions.map((description, index) => (
          <div className={'feature'} key={index}>
            <div className="logo">
              <img src={Logo[index]} alt="logo" />
            </div>
            <div className="text">
              <h4>{Features[index]}</h4>
              {description}
            </div>
          </div>
        ))}
      </div>
      <br/>
      <br/>
    </div>
  );
}
