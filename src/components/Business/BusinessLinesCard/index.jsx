import React from 'react';
import "./style.scss";

const BusinessLinesCard = ({cardProps}) => {
  return (
      <div className="businesses-card">
        <div className="businesses-card__img-wrapper">
          <img className="businesses-card__img" src={cardProps.img} alt=""/>
        </div>
        <div className="businesses-card__description">
          <div className="businesses-card__title">{cardProps.title}</div>
          <div className="businesses-card__desc">{cardProps.desc}</div>
        </div>
      </div>
  );
};

export default BusinessLinesCard;