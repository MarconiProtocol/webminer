import React, { Component} from 'react';

const PeopleCard = ({ image, name, title, description, linkedin }) => (
  <div className="team-small-box">
    <figure>
      <img src={image} className="profile-pic" alt="" />
    </figure>
    <h3>{name}
      <span className="blue-text">{title}</span></h3>
    <p>{description}</p>
    <a href={linkedin} target="_blank"> <i className="fab fa-linkedin-in"></i></a>
  </div>
);

export default PeopleCard;
