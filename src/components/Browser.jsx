import './Browser.scss';
import React from 'react';

const Browser = ({ name, img, description }) => {
  return (
    <section className="Browser">
      <h2>{name}</h2>
      <img src={img} alt="browser" />
      <p>{description}</p>
    </section>
  );
};

export default Browser;
