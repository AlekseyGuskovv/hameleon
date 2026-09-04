import './Portfolio.css'

import project01 from '../../assets/images/project-01.webp'
import project02 from '../../assets/images/project-02.webp'
import project03 from '../../assets/images/project-03.webp'
import project04 from '../../assets/images/project-04.webp'
import project05 from '../../assets/images/project-05.webp'
import project06 from '../../assets/images/project-06.webp'
import project07 from '../../assets/images/project-07.webp'
import project08 from '../../assets/images/project-08.webp'
import project09 from '../../assets/images/project-09.webp'
import project10 from '../../assets/images/project-10.webp'

const projects = [
  {
    image: project01,
    className: 'portfolio__item--1',
    alt: 'Натяжной потолок со световыми линиями в интерьере',
  },
  {
    image: project03,
    className: 'portfolio__item--2',
    alt: 'Парящий натяжной потолок с контурной подсветкой',
  },
  {
    image: project02,
    className: 'portfolio__item--3',
    alt: 'Натяжной потолок с теневым профилем',
  },
  {
    image: project04,
    className: 'portfolio__item--4',
    alt: 'Натяжной потолок с декоративным освещением',
  },
  {
    image: project05,
    className: 'portfolio__item--5',
    alt: 'Белый натяжной потолок со световыми линиями',
  },
  {
    image: project06,
    className: 'portfolio__item--6',
    alt: 'Натяжной потолок с линейным освещением',
  },
  {
    image: project07,
    className: 'portfolio__item--7',
    alt: 'Парящий натяжной потолок в жилой комнате',
  },
  {
    image: project08,
    className: 'portfolio__item--8',
    alt: 'Натяжной потолок с теневым профилем и подсветкой',
  },
  {
    image: project09,
    className: 'portfolio__item--9',
    alt: 'Современный натяжной потолок в интерьере квартиры',
  },
  {
    image: project10,
    className: 'portfolio__item--10',
    alt: 'Современный натяжной потолок с встроенным освещением',
  },
]

function Portfolio() {
  return (
    <section className="portfolio" id="portfolio">
      <div className="container">
        <div className="portfolio__inner">
          <h2 className="portfolio__title">
            Наши работы — натяжные потолки{' '}
            <span className="portfolio__title-gradient">
              в Ростове-на-Дону
            </span>
          </h2>

          <div className="portfolio__collage">
            {projects.map((project) => (
              <a
                className={`portfolio__item ${project.className}`}
                href={project.image}
                target="_blank"
                rel="noreferrer"
                key={project.className}
              >
                <img
                  src={project.image}
                  alt={project.alt}
                  loading="lazy"
                />

                <span
                  className="portfolio__item-overlay"
                  aria-hidden="true"
                />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Portfolio