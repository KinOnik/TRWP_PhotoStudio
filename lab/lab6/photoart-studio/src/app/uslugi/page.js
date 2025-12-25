'use client';

import { useState } from 'react';

export default function Uslugi() {
  const services = [
    {
      name: 'Аренда студии (1 час)',
      price: '5000 ₽',
      desc: 'Современная студия с профессиональным освещением и фоном.',
      img: 'images/studio.jpg'
    },
    {
      name: 'Фотосессия в студии',
      price: '10000 ₽',
      desc: 'Профессиональная съёмка с фотографом в студии.',
      img: 'images/PhotoSession.jpg'
    },
    {
      name: 'Выездная съёмка',
      price: '15000 ₽',
      desc: 'Съёмка на природе или мероприятии в "золотой час".',
      img: 'images/outdoor.jpg'
    },
    {
      name: 'Аренда оборудования',
      price: '3000 ₽',
      desc: 'Комплект профессионального света и камер.',
      img: 'images/equipment.jpg'
    },
  ];

  const handleOrder = (name) => {
    alert(`Услуга "${name}" добавлена в корзину!`);
  };

  return (
    <section className="content uslugi-page">
      <h2>Наши услуги</h2>
      <p className="subtitle">Выберите услугу и закажите онлайн</p>

      <div className="services-grid">
        {services.map((service, i) => (
          <div key={i} className="service-card">
            <img src={service.img} alt={service.name} />
            <div className="card-info">
              <h3>{service.name}</h3>
              <p className="price">{service.price}</p>
              <p>{service.desc}</p>
              <button onClick={() => handleOrder(service.name)}>Заказать</button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}