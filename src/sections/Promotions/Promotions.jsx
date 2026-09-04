import { useState } from 'react'

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
  const [sendingPromotion, setSendingPromotion] = useState(null)
  const [sentPromotion, setSentPromotion] = useState(null)
  const [errorPromotion, setErrorPromotion] = useState(null)

  const handlePromotionClick = async (promotion) => {
    if (sendingPromotion) {
      return
    }

    setSendingPromotion(promotion.title)
    setSentPromotion(null)
    setErrorPromotion(null)

    try {
      const response = await fetch(
        'http://127.0.0.1:8000/api/leads',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            source: 'promotion',
            promotion: {
              title: promotion.title,
              value: promotion.value,
              text: promotion.text,
            },
          }),
        },
      )

      if (!response.ok) {
        const errorData = await response.json()

        console.error(
          'Ошибка FastAPI:',
          response.status,
          errorData,
        )

        throw new Error('Не удалось отправить заявку')
      }

      const data = await response.json()

      console.log('Заявка отправлена:', data)

      setSentPromotion(promotion.title)

      setTimeout(() => {
        setSentPromotion(null)
      }, 3000)
    } catch (error) {
      console.error('Ошибка отправки:', error)

      setErrorPromotion(promotion.title)

      setTimeout(() => {
        setErrorPromotion(null)
      }, 3000)
    } finally {
      setSendingPromotion(null)
    }
  }

  return (
    <section className="promotions" id="promotions">
      <div className="container">
        <div className="promotions__inner">
          <div className="promotions__header">
            <h2 className="promotions__title">
              Акции и скидки на натяжные потолки{' '}
              <span className="promotions__title-gradient">
                в Ростове-на-Дону
              </span>
            </h2>

            <p className="promotions__description">
              Выберите подходящее предложение и получите скидку
              на натяжной потолок, бесплатный замер или дополнительные
              условия на освещение и дизайн-проект.
            </p>
          </div>

          <div className="promotions__grid">
            {promotions.map((promotion) => {
              const isSending =
                sendingPromotion === promotion.title

              const isSent =
                sentPromotion === promotion.title

              const hasError =
                errorPromotion === promotion.title

              return (
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

                  <button
                    type="button"
                    className="promotions__card-button"
                    onClick={() =>
                      handlePromotionClick(promotion)
                    }
                    disabled={isSending}
                    aria-busy={isSending}
                  >
                    {isSending
                      ? 'Отправляем...'
                      : isSent
                        ? 'Заявка отправлена ✓'
                        : hasError
                          ? 'Заявка не отправлена'
                          : promotion.button}
                  </button>
                </article>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Promotions