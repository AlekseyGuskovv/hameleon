import './Promotions.css'

const promotions = [
  {
    value: '10%',
    title: 'Скидка участникам СВО и семьям',
    text: 'Скидка 10% на услуги компании при заказе от 9 500 ₽. Условия уточняйте у специалиста.',
    button: 'Получить скидку',
  },
  {
    value: '25%',
    title: 'Суммируем скидки',
    text: 'Комбинация акционных условий 10 + 10 + 5. Подробности расскажет инженер по замеру.',
    button: 'Узнать условия',
  },
  {
    value: '12%',
    title: '«Успешный день»',
    text: 'При заключении договора в день замера действует скидка 12% на работы «под ключ».',
    button: 'Записаться на замер',
  },
  {
    value: '3D',
    title: 'Дизайн-проект бесплатно',
    text: 'Для нестандартных конструкций подготовим визуализацию будущего потолка.',
    button: 'Хочу проект',
  },
  {
    value: '20%',
    title: 'Светильники со скидкой',
    text: 'При покупке натяжного потолка специальные LED-светильники доступны со скидкой 20%.',
    button: 'Подобрать освещение',
  },
  {
    value: '500 ₽',
    title: 'Дополнительная скидка за замер',
    text: 'Запишитесь на бесплатный замер и получите ещё одну персональную выгоду.',
    button: 'Вызвать замерщика',
  },
]

function Promotions() {
  return (
    <section className="promotions" id="promotions">
      <div className="container">
        <div className="promotions__inner">
          <div className="promotions__header">
            <h2 className="promotions__title">
              Выгодные условия{' '}
              <span className="promotions__title-gradient">
                в одном месте
              </span>
            </h2>

            <p className="promotions__description">
              Сохранили все предложения старого сайта, но собрали их
              в понятный и современный блок.
            </p>
          </div>

          <div className="promotions__grid">
            {promotions.map((promotion) => (
              <article
                className="promotions__card"
                key={promotion.title}
              >
                <div className="promotions__card-content">
                  <div className="promotions__value">
                    {promotion.value}
                  </div>

                  <h3 className="promotions__card-title">
                    {promotion.title}
                  </h3>

                  <p className="promotions__card-text">
                    {promotion.text}
                  </p>
                </div>

                <a
                  href="#measurement"
                  className="promotions__card-button"
                >
                  {promotion.button}
                </a>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Promotions