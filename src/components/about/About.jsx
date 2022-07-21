import React from "react";
import "./about.css";
import ME from "../../assets/david-about.jpg";
import { FaAward } from "react-icons/fa";
import { FiUserCheck } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";

const About = () => {
  return (
    <section id="about">
      <h5>conozca</h5>
      <h2>sobre mi</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About_Image" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experiencia</h5>
              <small>3+ años de desarrolador</small>
            </article>
            <article className="about__card">
              <VscFolderLibrary className="about__icon" />
              <h5>proyectos</h5>
              <small>10+</small>
            </article>
            <article className="about__card">
              <FiUserCheck className="about__icon" />
              <h5>clientes</h5>
              <small>20+</small>
            </article>
          </div>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Numquam,
            nihil molestiae itaque quam asperiores perspiciatis incidunt id
            dicta, ullam quas quidem officia harum distinctio vitae facilis!
            Eaque corporis nobis sunt.
          </p>
          <a href="#contact" className="btn btn-primary">
            Contactame
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
