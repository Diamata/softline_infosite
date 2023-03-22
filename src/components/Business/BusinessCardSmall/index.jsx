import React, {useState} from 'react';
import "./style.scss";
import { IoIosArrowDown } from "react-icons/io";

const BusinessCardSmall = ({cardProps}) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <div onClick={(e) => setIsActive(!isActive)} className={isActive ? "business-card active" : "business-card"}>

      <div className="business-card__img-wrapper">
        <img src={cardProps.img} alt="cover"/>
      </div>

      <div className="business-card__description">

        <div className="business-card__title-full">
          <div className="business-card__title">{cardProps.title}</div>
          <IoIosArrowDown className={isActive ? "dropdown__arrow_reversed" : ""}/>
        </div>

        <div className="business-card__desc">{cardProps.desc}</div>

      </div>
    </div>
  );
};

export default BusinessCardSmall;