import React, { Component} from 'react';

const CaseCard = ({ image, width, height, title, description }) => (
  <div className="small-box">
    <figure>
      <img src={image} width={width} height={height} alt="" />
    </figure>
    <h3 className="light-font black-text">{title}</h3>
    <p>{description}</p>
  </div>
);

export default CaseCard;
