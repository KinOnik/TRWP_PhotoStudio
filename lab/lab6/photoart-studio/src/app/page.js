'use client';

export default function Home() {
  return (
    <>
      <section className="hero-section">
        <div className="hero-overlay">
          <h1 className="hero-title">Фотостудия "ФотоАрт"</h1>
          <p className="hero-subtitle">
            Профессиональные фотосъёмки, аренда студии и оборудования<br />
            Сохраняем ваши яркие моменты навсегда
          </p>
        </div>
      </section>

      <section className="content home-page">
        <h2>Добро пожаловать!</h2>
        <p className="welcome-text">
          Мы предлагаем профессиональные услуги фотосъёмки, аренду фотостудии, выездные съёмки и прокат фотооборудования.
          Наша команда опытных фотографов поможет вам сохранить самые яркие моменты жизни.
        </p>

        <h3>Наши услуги</h3>
        <div className="services-gallery">
          <div className="service-card">
            <img src="/images/studio.jpg" alt="Аренда студии" />
            <h4>Аренда современных студий</h4>
          </div>
          <div className="service-card">
            <img src="/images/PhotoSession.jpg" alt="Фотосессии" />
            <h4>Профессиональные фотосессии</h4>
          </div>
          <div className="service-card">
            <img src="/images/outdoor.jpg" alt="Выездная съёмка" />
            <h4>Выездная съёмка</h4>
          </div>
          <div className="service-card">
            <img src="/images/equipment.jpg" alt="Прокат оборудования" />
            <h4>Аренда оборудования</h4>
          </div>
        </div>

        <p className="final-text">
          Запишитесь онлайн, выберите услугу, удобную дату и время – и получите профессиональный результат!
        </p>
      </section>
    </>
  );
}