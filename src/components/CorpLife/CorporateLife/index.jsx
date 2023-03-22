import React from 'react';
import "./style.scss";
import SliderComp from "../Slider";

const CorporateLife = () => {
  return (
      <section className="corp-life">
        <div className="corp-life__top">
          <h2>Корпоративная жизнь</h2>
        </div>
        <div className="corp-life__slider">
          <SliderComp/>
        </div>
      </section>
  );
};

export default CorporateLife;