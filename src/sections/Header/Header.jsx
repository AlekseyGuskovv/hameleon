import './Header.css'

import logo from '../../assets/logos/logo.svg'
import Button from '../../components/Button/Button'

function Header() {
  return (
    <header className="header">
      <div className="container header__inner">

        {}
        <a
          className="header__logo"
          href="#"
          aria-label="Хамелеон — на главную"
        >
          <img
            className="header__logo-icon"
            src={logo}
            alt="Хамелеон"
          />

          <div className="header__logo-text">
            <span className="header__logo-title">
              ХАМЕЛЕОН
            </span>

            <span className="header__logo-subtitle">
              НАТЯЖНЫЕ ПОТОЛКИ
            </span>
          </div>
        </a>

        {}
        <nav className="header__nav">
          <a href="#calculator">
            Калькулятор
          </a>

          <a href="#promotions">
            Акции
          </a>

          <a href="#portfolio">
            Проекты
          </a>

          <a href="#production">
            Производство
          </a>

          <a href="#contacts">
            Контакты
          </a>
        </nav>

        {}
        <div className="header__right">

          <div className="header__contacts">
            <a
              className="header__phone"
              href="tel:+79282706862"
            >
              +7 (928) 270-68-62
            </a>

            <span className="header__schedule">
              Ростов-на-Дону · 9:00–21:00
            </span>
          </div>

          <Button
            href="#measurement"
            className="header__button"
          >
            Вызвать замерщика
          </Button>

        </div>

      </div>
    </header>
  )
}

export default Header