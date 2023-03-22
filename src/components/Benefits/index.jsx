import React from 'react';
import "./style.scss";
import dms from "../../assets/images/png/dms.png";
import bdayoff from "../../assets/images/png/bdayoff.png";
import corpmob from "../../assets/images/png/corpmob.png";
import sport from "../../assets/images/png/sport.png";
import lti from "../../assets/images/png/lti.png";
import officeequip from "../../assets/images/png/officeequip.png";
import mortgage from "../../assets/images/png/mortgage.png";

const Benefits = () => {
  return (
    <section className="benefits">
      <h2>Компенсационный пакет</h2>
      <div className="benefits__block benefits__block_underlined">
        <div className="benefits__unit">
          <div className="benefits__desc">
            <img src={dms} alt="ДМС"/>
          </div>
          <div className="benefits__text">ДМС</div>
        </div>
        <div className="benefits__unit">
          <div className="benefits__desc">
            <img src={bdayoff} alt="Выходной в день рождения"/>
          </div>
          <div className="benefits__text">Выходной <br/> в день рождения</div>
        </div>
        <div className="benefits__unit">
          <div className="benefits__desc">
            <img src={corpmob} alt="Корпоративная мобильная связь"/>
          </div>
          <div className="benefits__text">Корпоративная мобильная связь</div>
        </div>
        <div className="benefits__unit">
          <div className="benefits__desc">
            <img src={sport} alt="Корпоративные скидки на спорт"/>
          </div>
          <div className="benefits__text">Корпоративные скидки на спорт</div>
        </div>
        <div className="benefits__unit">
          <div className="benefits__desc">
            <img src={lti} alt="LTI"/>
          </div>
          <div className="benefits__text">LTI</div>
        </div>
      </div>

      <h3>Программа дополнительной мотивации <br/> <span>доплата 12% от суммы</span></h3>

      <div className="benefits__block">
        <div className="benefits__unit">
          <div className="benefits__desc">
            <img src={officeequip} alt="Оргтехники"/>
          </div>
          <div className="benefits__text">Оргтехники</div>
        </div>
        <div className="benefits__unit">
          <div className="benefits__desc">
            <img src={dms} alt="ДМС"/>
          </div>
          <div className="benefits__text">ДМС</div>
        </div>
        <div className="benefits__unit">
          <div className="benefits__desc">
            <img src={mortgage} alt="ипотека"/>
          </div>
          <div className="benefits__text">Ипотеки</div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;