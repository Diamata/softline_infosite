import React from 'react';
import "./style.scss";
import logo from "../../assets/images/png/logo.png";

const Navbar = () => {
  return (
      <nav className="navigation">
        <a className="navigation__logo-container" href="#">
          <img className="navigation__logo" src={logo} alt="Softline logo"/>
        </a>
        <div className="navigation__links">
          <a className="navigation__link" href="#">Облачные решения</a>
          <a className="navigation__link" href="#">Кибербезопасность</a>
          <a className="navigation__link" href="#">Импортозамещение</a>
          <a className="navigation__link" href="#">Цифровая трансофрмация</a>
        </div>
      </nav>
  );
};

export default Navbar;