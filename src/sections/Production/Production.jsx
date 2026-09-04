import './Production.css'

import Button from '../../components/Button/Button'
import productionImage from '../../assets/images/production/prod-1.webp'

const productionAdvantages = [
  {
    title: 'Любые конфигурации',
    text: 'Сложные уровни, ниши, световые линии и нестандартная геометрия.',
  },
  {
    title: 'Контроль материалов',
    text: 'Совместимые комплектующие и проверка качества перед монтажом.',
  },
  {
    title: 'Выгодная стоимость',
    text: 'Без лишней наценки посредников.',
  },
]

function Production() {
  return (
    <section className="production" id="production">
      <div className="container">
        <div className="production__inner">
          <div className="production__media">
            <img
              className="production__image"
              src={productionImage}
              alt="Собственное производство натяжных потолков компании Хамелеон"
              loading="lazy"
            />

            <div className="production__image-card">
              <strong className="production__image-title">
                Своё производство
              </strong>

              <span className="production__image-text">
                Без переплаты посредникам
              </span>
            </div>
          </div>

          <div className="production__content">
            <h2 className="production__title">
              Собственное производство
              <br />
              натяжных потолков{' '}
              <span className="production__title-gradient">
                в Ростове-на-Дону
              </span>
            </h2>

            <p className="production__description">
              Собственная производственная база позволяет контролировать
              качество полотен и комплектующих, соблюдать сроки изготовления
              и реализовывать натяжные потолки любой сложности по чертежу
              или дизайн-проекту.
            </p>

            <ul className="production__advantages">
              {productionAdvantages.map((item) => (
                <li
                  className="production__advantage"
                  key={item.title}
                >
                  <span
                    className="production__check"
                    aria-hidden="true"
                  >
                    ✓
                  </span>

                  <div>
                    <h3 className="production__advantage-title">
                      {item.title}
                    </h3>

                    <p className="production__advantage-text">
                      {item.text}
                    </p>
                  </div>
                </li>
              ))}
            </ul>

            <Button
              href="#measurement"
              className="production__button"
            >
              Получить консультацию
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Production