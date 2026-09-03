import './Partners.css'

import bonusClubQr from '../../assets/logos/partners/bonus-club-qr.png'
import partnersLogos from '../../assets/logos/partners/partners-logos.png'

function Partners() {
  return (
    <section className="partners" id="partners">
      <div className="container">
        <div className="partners__card">

          <div className="partners__top">

            <div className="partners__bonus">
              <img
                className="partners__bonus-image"
                src={bonusClubQr}
                alt="Бонус-клуб и QR-код"
              />
            </div>

            <div className="partners__content">
              <h2 className="partners__title">
                Наши партнёры
              </h2>

              <div className="partners__title-line" />

              <div className="partners__text">
                <p>
                  Компания Хамелеон является одним из участников Бонус-клуба.
                </p>

                <p>
                  Бонус-клуб — это ваша возможность облегчить себе выбор
                  качественных строительных и отделочных материалов и при этом
                  <strong>
                    {' '}сэкономить на ремонте более 100 000 рублей.
                  </strong>
                </p>

                <h3>
                  Условия участия
                </h3>

                <p>
                  При заказе натяжного потолка в нашей компании вы получаете
                  сертификаты на покупку определённых товаров в салонах наших
                  партнёров
                  <strong>
                    {' '}со скидкой от 7% до 12%.
                  </strong>
                </p>

                <p>
                  В свою очередь, совершив покупку на определённую сумму
                  в компаниях-партнёрах, вы также получаете
                  <strong>
                    {' '}сертификат на скидку 10%
                  </strong>{' '}
                  на весь ассортимент натяжных потолков и все виды услуг
                  компании Хамелеон.
                </p>
              </div>
            </div>

          </div>

          <div className="partners__logos">
            <img
              className="partners__logos-image"
              src={partnersLogos}
              alt="Партнёры компании Хамелеон"
            />
          </div>

        </div>
      </div>
    </section>
  )
}

export default Partners