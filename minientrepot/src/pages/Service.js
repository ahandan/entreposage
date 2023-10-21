import React, { useState } from 'react';

import '../styles/ServicePage.css'


export default function Service() {
  const [selected, setSelected] = useState(null);

  const handleSelect = (dimension, price, floor) => {
    setSelected({ dimension, price, floor });
  };

  return (
    <div className="service-page">
      <h1>Our Services</h1>
      <table>
        <thead>
          <tr>
            <th>Dimensions</th>
            <th>Price</th>
            <th>Floor</th>
            <th>Reserve</th>
          </tr>
        </thead>
        <tbody>
          {['36-62', '69-96', '97-250'].map((dimension, index) => (
            <tr key={index}>
              <td>{dimension}</td>
              <td>{['72$-120$', '124$-164$', '170$-350$'][index]}</td>
              <td>{index + 1}</td>
              <td><button onClick={() => handleSelect(dimension, ['72$-120$', '124$-164$', '170$-350$'][index], index + 1)}>Reserve</button></td>
            </tr>
          ))}
        </tbody>
      </table>

      {selected && (
        <div>
          <h2>Selected Reservation</h2>
          <p>Dimensions: {selected.dimension}</p>
          <p>Price: {selected.price}</p>
          <p>Floor: {selected.floor}</p>
        </div>
      )}
    </div>
  );
}