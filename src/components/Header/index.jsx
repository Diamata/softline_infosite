import React from 'react';
import "./style.scss";

const Header = () => {
  return (
      <section className="head">
        <div className="head__bg">
          <h1>Поставщик услуг цифровой трансформации <br/> и кибербезопасности</h1>
          <a href="https://softline.ru" target="_blank">На сайт</a>
        </div>
        <div className="head__description"><span>Softline</span> – ведущий поставщик IT-решений <br className="narrow"/> и сервисов.* <br className="wide"/> Мы предлагаем комплексные <br className="narrow"/> IT-решения, облака, программное <br className="wide"/> и аппаратное обеспечение, решения <br className="narrow"/> по цифровой трансформации <br className="narrow"/> <br className="wide"/> и кибербезопасности, а также широкий <br className="narrow"/> спектр IT-услуг.</div>
        <div className="head__numbers">
          <div className="head__number-container">
            <div className="head__number">> 30 лет</div>
            <p>на IT-рынке</p>
          </div>
          <div className="head__number-container">
            <div className="head__number">4600</div>
            <p>сотрудников в Росии</p>
          </div>
          <div className="head__number-container">
            <div className="head__number">25</div>
            <p>городов России</p>
          </div>
          <div className="head__number-container">
            <div className="head__number">2000+</div>
            <p>разработчиков</p>
          </div>
          <div className="head__number-container">
            <div className="head__number">3000+</div>
            <p>сотрудников ежегодно <br/> проходят оценку и обучение
            </p>
          </div>
        </div>
      </section>
  );
};

export default Header;