import './Hero.css'
import Button from '../../components/Button/Button'
import heroBg from '../../assets/images/hero-bg.jpg'

function Hero() {
  return (
    <section
      className="hero"
      style={{
        backgroundImage: `url(${heroBg})`,
      }}
    >
      <div className="hero__overlay"></div>

      <div className="container hero__inner">
        <div className="hero__content">

          <div className="hero__eyebrow">
            <span className="hero__eyebrow-line"></span>
            Натяжные потолки в Ростове-на-Дону
          </div>

          <h1 className="hero__title">
            Потолки,
            <br />
            которые
            <br />

            <span className="hero__title-gradient">
              меняют
              <br />
              пространство
            </span>
          </h1>

          <p className="hero__description">
            Проектируем, производим и устанавливаем современные
            натяжные потолки — от лаконичных матовых решений до
            световых линий и сложных конструкций.
          </p>

          <div className="hero__actions">
            <Button href="#calculator">
              Рассчитать стоимость
            </Button>

            <a
              className="hero__secondary-button"
              href="#portfolio"
            >
              Смотреть проекты
            </a>
          </div>

          <div className="hero__advantages">
            <div className="hero__advantage">
              Бесплатный
              <br />
              замер
            </div>

            <div className="hero__advantage">
              Монтаж за 24
              <br />
              часа
            </div>

            <div className="hero__advantage">
              Гарантия 10 лет
            </div>

            <div className="hero__advantage">
              Рассрочка 0%
            </div>
          </div>
        </div>

        <div className="hero__form-card">
          <div className="hero__discount">
            20%
          </div>

          <h2 className="hero__form-title">
            Месяц мега-скидок
          </h2>

          <p className="hero__form-text">
            Оставьте заявку на бесплатный замер.
            Инженер свяжется с вами, рассчитает
            стоимость и расскажет, как получить
            максимальную скидку.
          </p>

          <div className="hero__form-line"></div>

          <form className="hero__form">
            <input
              type="text"
              placeholder="Ваше имя"
            />

            <input
              type="tel"
              placeholder="+7 (___) ___-__-__"
            />

            <Button
              type="submit"
              className="hero__submit"
            >
              Забрать скидку
            </Button>
          </form>

          <p className="hero__policy">
            Нажимая кнопку, вы соглашаетесь с политикой
            обработки персональных данных.
          </p>
        </div>
      </div>
    </section>
  )
}

export default Hero