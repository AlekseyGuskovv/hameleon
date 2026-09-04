import './Team.css'

import teamImage from '../../assets/images/team/team.webp'

function Team() {
  return (
    <section className="team" id="team">
      <div className="container">
        <div className="team__inner">
          <div className="team__content">
            <span className="team__label">
              Наша команда
            </span>

            <h2 className="team__title">
              Команда специалистов
              <br />
              по натяжным потолкам
              <br />
              <span className="team__title-gradient">
                «Хамелеон»
              </span>
            </h2>

            <p className="team__description">
              Мы проектируем, производим и устанавливаем натяжные потолки
              в Ростове-на-Дону более 10 лет. Бесплатно консультируем,
              внимательно относимся к пожеланиям и подбираем решение
              под интерьер и бюджет.
            </p>

            <p className="team__quote">
              «Хамелеон — пусть ваши потолки станут небом»
            </p>
          </div>

          <div className="team__media">
            <img
              className="team__image"
              src={teamImage}
              alt="Команда компании Хамелеон по установке натяжных потолков"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Team