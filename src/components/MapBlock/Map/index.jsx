import React, {useRef, useState} from 'react';
import "./style.scss";
import {MdOutlineKeyboardArrowDown} from "react-icons/md";
import MapRegionsTemplate from "../MapRegionsTemplate";
import {useClose} from "../../../hooks/useClose";
import mapAll from "../../../assets/images/jpg/map.jpg";

const Map = () => {

  const [active, setActive] = useState("Все");
  const [isActive, setIsActive] = useState(false);

  const closeRef = useRef();

  useClose(closeRef, () => setIsActive(false))

  const regions = [
    {name: 'Все'},
    {name: 'Москва'},
    {name: 'Центр'},
    {name: 'Северо-Запад'},
    {name: 'Юг'},
    {name: 'Волга'},
    {name: 'Урал'},
    {name: 'Сибирь'},
    {name: 'Дальний восток'},
  ]

  return (
    <section className="map">

      <div className={isActive ? "blurred fade-in" : "blurred fade-out"}/>

      <div ref={closeRef} className="dropdown">

        <div className="dropdown__buttons" onClick={() => setIsActive(!isActive)}>
          <div className="dropdown__button">Офисы Softline</div>
          <MdOutlineKeyboardArrowDown className={isActive ? "dropdown__arrow_reversed" : ""}/>
        </div>

        <div className={isActive ? "drop-menu active" : "drop-menu"}>

          <MapRegionsTemplate
              key="region1"
              name={"Москва"}
          />

          <MapRegionsTemplate
              key="region2"
              name={"Центр"}>
            <>
              <li>Воронеж</li>
              <li>Ярославль</li>
              <li>Белгород</li>
            </>
          </MapRegionsTemplate>

          <MapRegionsTemplate
              key="region3"
              name={"Северо-Запад"}>
            <>
              <li>Санкт-Петербург</li>
              <li>Калининград</li>
            </>
          </MapRegionsTemplate>

          <MapRegionsTemplate
              key="region4"
              name={"Юг"}>
            <>
              <li>Ростов-на-Дону</li>
              <li>Краснодар</li>
              <li>Волгоград</li>
            </>
          </MapRegionsTemplate>

          <MapRegionsTemplate
              key="region5"
              name={"Волга"}>
            <>
              <li>Казань</li>
              <li>Самара</li>
              <li>Уфа</li>
              <li>Оренбург</li>
              <li>Нижний Новгород</li>
            </>
          </MapRegionsTemplate>

          <MapRegionsTemplate
              key="region6"
              name={"Урал"}>
            <>
              <li>Екатеринбург</li>
              <li>Челябинск</li>
              <li>Пермь</li>
              <li>Сургут</li>
              <li>Тюмень</li>
              <li>Ижевск</li>
            </>
          </MapRegionsTemplate>

          <MapRegionsTemplate
              key="region7"
              name={"Сибирь"}>
            <>
              <li>Новосибирск</li>
              <li>Омск</li>
              <li>Томск</li>
              <li>Красноярск</li>
              <li>Иркутск</li>
            </>
          </MapRegionsTemplate>

          <MapRegionsTemplate
              key="region8"
              name={"Дальний Восток"}>
            <>
              <li>Хабаровск</li>
              <li>Владивосток</li>
            </>
          </MapRegionsTemplate>
        </div>
      </div>

      <div className="map__nav">
        <div className="map__areas-outer">
          <div className="map__areas">
            {
              regions.map((item) => {
                return (
                  <button key={item.name} className={active === item.name ? "map__area map__area_active" : "map__area"} onClick={() => setActive(item.name)}>{item.name}</button>
                )
              })
            }
          </div>
        </div>
      </div>

      <div className="map-card">
        <img src={mapAll}  alt="map"/>

        <div className="region__container">

          <div className={active === "Все" || active === "Москва" ? "region active" : "region"}>
            <div className="region__point" id="moscow-point"/>
            <p className="region__city" id="moscow-city">Москва</p>
          </div>

          <div className={active === "Все" || active === "Центр" ? "region active" : "region"}>
            <div className="region__point" id="yaroslavl-point"/>
            <p className="region__city" id="yaroslavl-city">Ярославль</p>

            <div className="region__point" id="voronezh-point"/>
            <p className="region__city" id="voronezh-city">Воронеж</p>

            <div className="region__point" id="belgorod-point"/>
            <p className="region__city" id="belgorod-city">Белгород</p>
          </div>

          <div className={active === "Все" || active === "Северо-Запад" ? "region active" : "region"}>
            <div className="region__point" id="petersbug-point"/>
            <p className="region__city" id="petersbug-city">Санкт-Петербург</p>

            <div className="region__point" id="kaliningrad-point"/>
            <p className="region__city" id="kaliningrad-city">Калининград</p>
          </div>

          <div className={active === "Все" || active === "Юг" ? "region active" : "region"}>
            <div className="region__point" id="rostov-na-donu-point"/>
            <p className="region__city" id="rostov-na-donu-city">Ростов-на-Дону</p>

            <div className="region__point" id="volgograd-point"/>
            <p className="region__city" id="volgograd-city">Волгоград</p>

            <div className="region__point" id="krasnodar-point"/>
            <p className="region__city" id="krasnodar-city">Краснодар</p>
          </div>

          <div className={active === "Все" || active === "Волга" ? "region active" : "region"}>
            <div className="region__point" id="n-novgorod-point"/>
            <p className="region__city" id="n-novgorod-city">Н. Новгород</p>

            <div className="region__point" id="kazan-point"/>
            <p className="region__city" id="kazan-city">Казань</p>

            <div className="region__point" id="samara-point"/>
            <p className="region__city" id="samara-city">Самара</p>

            <div className="region__point" id="ufa-point"/>
            <p className="region__city" id="ufa-city">Уфа</p>

            <div className="region__point" id="orenburg-point"/>
            <p className="region__city" id="orenburg-city">Оренбург</p>
          </div>

          <div className={active === "Все" || active === "Урал" ? "region active" : "region"}>
            <div className="region__point" id="izhevsk-point"/>
            <p className="region__city" id="izhevsk-city">Ижевск</p>

            <div className="region__point" id="perm-point"/>
            <p className="region__city" id="perm-city">Пермь</p>

            <div className="region__point" id="surgut-point"/>
            <p className="region__city" id="surgut-city">Сургут</p>

            <div className="region__point" id="tyumen-point"/>
            <p className="region__city" id="tyumen-city">Тюмень</p>

            <div className="region__point" id="ekaterinburg-point"/>
            <p className="region__city" id="ekaterinburg-city">Екатеринбург</p>

            <div className="region__point" id="chelyabinsk-point"/>
            <p className="region__city" id="chelyabinsk-city">Челябинск</p>
          </div>

          <div className={active === "Все" || active === "Сибирь" ? "region active" : "region"}>
            <div className="region__point" id="omsk-point"/>
            <p className="region__city" id="omsk-city">Омск</p>

            <div className="region__point" id="novosibirsk-point"/>
            <p className="region__city" id="novosibirsk-city">Новосибирск</p>

            <div className="region__point" id="tomsk-point"/>
            <p className="region__city" id="tomsk-city">Томск</p>

            <div className="region__point" id="krasnoyarsk-point"/>
            <p className="region__city" id="krasnoyarsk-city">Красноярск</p>

            <div className="region__point" id="irkutsk-point"/>
            <p className="region__city" id="irkutsk-city">Иркутск</p>
          </div>

          <div className={active === "Все" || active === "Дальний восток" ? "region active" : "region"}>
            <div className="region__point" id="habarovsk-point"/>
            <p className="region__city" id="habarovsk-city">Хабаровск</p>

            <div className="region__point" id="vladivistok-point"/>
            <p className="region__city" id="vladivistok-city">Владивосток</p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Map;