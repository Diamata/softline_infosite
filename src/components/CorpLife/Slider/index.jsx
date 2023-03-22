import React, { useRef } from 'react';
import "./style.scss";
import Slider from "react-slick";
import corp1 from "../../../assets/images/jpg/corp/corp1.jpg";
import corp2 from "../../../assets/images/jpg/corp/corp2.jpg";
import corp3 from "../../../assets/images/jpg/corp/corp3.jpg";
import corp4 from "../../../assets/images/jpg/corp/corp4.jpg";
import corp5 from "../../../assets/images/jpg/corp/corp5.jpg";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { useWindowSize } from "../../../hooks/useWindowSize"

const images = [corp1, corp2, corp3, corp4, corp5];

const SliderComp = () => {

  const settings = {
    dots: true,
    gap: 20,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false
  };

  const windowWidth = useWindowSize(window.innerWidth)

  let settingsExtended = {};
  const verticalSwiping = {verticalSwiping: true};
  const vertical = {vertical: true};

  const settingModifier = (width) => {
    if (width >= 600) {
      return settings
    }

    if (width < 600) {
      return settingsExtended = Object.assign (settings, verticalSwiping, vertical)
    }
  }

  const arrowRef = useRef(null);
  return (
      <div className="slider__container">
        <Slider ref={arrowRef} {...settingModifier(windowWidth)} className="slider">
          {
            images.map((image, index) => {
              return (
                <div key={index} className="slider__slide">
                  <img className="slider__image" src={image} alt="Корпоративная жизнь"/>
                </div>
              )
            })
          }
        </Slider>
        <div className="slider__buttons">
          <button
              onClick={() => arrowRef.current.slickPrev()}
              className="slider__button slider__button_back"><IoIosArrowBack/></button>
          <button
              onClick={() => arrowRef.current.slickNext()}
              className="slider__button"><IoIosArrowForward/></button>
        </div>
      </div>
  );
};

export default SliderComp;