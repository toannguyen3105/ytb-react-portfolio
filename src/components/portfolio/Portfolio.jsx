import React from "react";
import "./portfolio.css";
import IMG1 from "../../assets/portfolio1.jpg";
import IMG2 from "../../assets/portfolio2.jpg";
import IMG3 from "../../assets/portfolio3.jpg";
import IMG4 from "../../assets/portfolio4.jpg";
import IMG5 from "../../assets/portfolio5.png";
import IMG6 from "../../assets/portfolio6.jpg";

const items = [
  {
    title: "This is a portfolio item title",
    imgSrc: IMG1,
    github: "https://github.com",
    demo: "https://github.com",
  },
  {
    title: "This is a portfolio item title",
    imgSrc: IMG2,
    github: "https://github.com",
    demo: "https://github.com",
  },
  {
    title: "This is a portfolio item title",
    imgSrc: IMG3,
    github: "https://github.com",
    demo: "https://github.com",
  },
  {
    title: "This is a portfolio item title",
    imgSrc: IMG4,
    github: "https://github.com",
    demo: "https://github.com",
  },
  {
    title: "This is a portfolio item title",
    imgSrc: IMG5,
    github: "https://github.com",
    demo: "https://github.com",
  },
  {
    title: "This is a portfolio item title",
    imgSrc: IMG6,
    github: "https://github.com",
    demo: "https://github.com",
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {items.map(({ imgSrc, title, github, demo }, i) => (
          <article className="portfolio__item" key={i}>
            <div className="portfolio__item-image">
              <img src={imgSrc} alt="IMG1" />
            </div>
            <h3>{title}</h3>
            <div className="portfolio__item-cta">
              <a href={github} className="btn" rel="noreferrer" target="_blank">
                Github
              </a>
              <a
                href={demo}
                className="btn btn-primary"
                rel="noreferrer"
                target="_blank"
              >
                Live Demo
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
