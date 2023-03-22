import React from 'react';
import "./style.scss";
import buis1 from "../../../assets/images/jpg/buis1.jpg";
import buis2 from "../../../assets/images/jpg/buis2.jpg";
import buis3 from "../../../assets/images/jpg/buis3.jpg";
import buis4 from "../../../assets/images/jpg/buis4.jpg";
import buis5 from "../../../assets/images/jpg/buis5.jpg";
import buis6 from "../../../assets/images/jpg/buis6.jpg";
import BusinessLinesCard from "../BusinessLinesCard";
import BusinessCardSmall from "../BusinessCardSmall";
import { useWindowSize } from "../../../hooks/useWindowSize";

const cards = [
  {
    img: buis1,
    title: 'Решения Softline',
    desc: 'ГК Softline предлагает клиентам собственную линейку оборудования (ПК, серверы, торговое оборудование и проч.), разработку программных продуктов, облачных решений, решений в области информационной безопасности.'
  },
  {
    img: buis2,
    title: 'Кибербезопасность',
    desc: 'Softline обладает всеми необходимыми государственными лицензиями для организации проектов по информационной безопасности и аттестации. '
  },
  {
    img: buis3,
    title: 'Импортозамещение',
    desc: 'ГК Softline обладает широчайшим портфелем решений и услуг для импортозамещения, включая ПО и оборудование собственного производства.'
  },
  {
    img: buis4,
    title: 'Облачные решения',
    desc: 'Softline использует современные облачные решения как российских, так и международных вендоров для масштабирования бизнеса своих клиентов. Подписки, услуги, трансформация.'
  },
  {
    img: buis5,
    title: 'Цифровая трансформация\n' +
        'и разработка ПО',
    desc: 'Softline использует современные технологи и новые возможности для увеличения производительности бизнеса заказчика. В штате ГК Softline - 2000+ разработчиков, которые трансформируют ПО под нужды конкретного предприятия.'
  },
  {
    img: buis6,
    title: 'Техническая поддержка Softline',
    desc: '200+ инженеров, 24 часа в сутки, 7 дней в неделю, 12 месяцев в году, сервисное партнерство с 30+ мировыми производителями.'
  },
]

const BusinessLines = () => {
  const windowWidth = useWindowSize(window.innerWidth)
  return (
    <section className="businesses">
      <h2>Направления бизнеса</h2>
      <div className="businesses__cards-grid">
        {
          cards.map(card => {
            if (windowWidth < 600) {
              return (
                  <BusinessCardSmall key={card.title} cardProps={card}/>
              )
            } else {
              return (
                  <BusinessLinesCard key={card.title} cardProps={card}/>
              )
            }
          })
        }
      </div>
    </section>
  );
};

export default BusinessLines;