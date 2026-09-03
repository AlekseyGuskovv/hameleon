import './Portfolio.css'

import project01 from '../../assets/images/project-01.jpg'
import project02 from '../../assets/images/project-02.jpg'
import project03 from '../../assets/images/project-03.jpg'
import project04 from '../../assets/images/project-04.jpg'
import project05 from '../../assets/images/project-05.jpg'
import project06 from '../../assets/images/project-06.jpg'
import project07 from '../../assets/images/project-07.jpg'
import project08 from '../../assets/images/project-08.jpg'
import project09 from '../../assets/images/project-09.jpg'
import project10 from '../../assets/images/project-10.jpg'

const projects = [
  {
    image: project01,
    className: 'portfolio__item--1',
    alt: 'Натяжной потолок со световыми линиями',
  },
  {
    image: project03,
    className: 'portfolio__item--2',
    alt: 'Парящий натяжной потолок с подсветкой',
  },
  {
    image: project02,
    className: 'portfolio__item--3',
    alt: 'Потолок с теневым профилем',
  },
  {
    image: project04,
    className: 'portfolio__item--4',
    alt: 'Натяжной потолок с декоративным освещением',
  },
  {
    image: project05,
    className: 'portfolio__item--5',
    alt: 'Белый потолок со световыми линиями',
  },
  {
    image: project06,
    className: 'portfolio__item--6',
    alt: 'Натяжной потолок с линейным освещением',
  },
  {
    image: project07,
    className: 'portfolio__item--7',
    alt: 'Парящий потолок в жилом помещении',
  },
  {
    image: project08,
    className: 'portfolio__item--8',
    alt: 'Потолок с теневым профилем и подсветкой',
  },
  {
    image: project09,
    className: 'portfolio__item--9',
    alt: 'Современный натяжной потолок',
  },
  {
  image: project10,
  className: 'portfolio__item--10',
  alt: 'Современный натяжной потолок',
},  
]

function Portfolio() {
  return (
    <section className="portfolio" id="portfolio">
      <div className="container">
        <div className="portfolio__inner">

          <h2 className="portfolio__title">
            Реальные решения{' '}
            <span className="portfolio__title-gradient">
              с понятной ценой
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
                />

                <span className="portfolio__item-overlay" />
              </a>
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}

export default Portfolio