'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Header() {
  const [activeSection, setActiveSection] = useState('Главная');
  const [isScrolled, setIsScrolled] = useState(false);
  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const showWarning = (sectionName) => {
    alert(`Раздел "${sectionName}" недоступен!`);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    alert("Функция поиска временно недоступна!");
  };

  return (
    <header className={`fixed-header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="header-top">
        <div className="left-block">
          <div className="logo">📸</div>
          <div className="studio-name">Фотостудия "ФотоАрт"</div>
        </div>

        <form className="header-search" onSubmit={handleSearch}>
          <input type="text" placeholder="Поиск по сайту..." />
          <button type="submit">🔍</button>
        </form>

        <div className="right-block">
          <a href="#" onClick={() => showWarning('Личный кабинет')}>
            Личный кабинет
          </a>
        </div>
      </div>

      <nav className="nav">
        <div className="nav-left">
          <Link href="/">
            <button
              className={activeSection === 'Главная' ? 'active' : ''}
              onClick={() => setActiveSection('Главная')}
            >
              Главная
            </button>
          </Link>
          <Link href="/uslugi">
            <button
              className={activeSection === 'Услуги' ? 'active' : ''}
              onClick={() => setActiveSection('Услуги')}
            >
              Услуги
            </button>
          </Link>
            <button
              onClick={() => showWarning('Магазин')}
            >
              Магазин
            </button>
            <button
              onClick={() => showWarning('О компании')}
            >
              О компании
            </button>
        </div>

        <div className="nav-right">
          <button onClick={() => showWarning('Корзина')}>
            Корзина ({cartCount})
          </button>
        </div>
      </nav>
    </header>
  );
}