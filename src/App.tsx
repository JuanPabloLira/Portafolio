import React from 'react';
import './App.css';

import { svg } from './images';
import { Element, scroller } from 'react-scroll';

import Home from './components/Home/Home';
import About from './components/About/About';
import Projects from './components/Projects/Projects';
import Contact from './components/Contact/Contact';

function App() {

  const onClickElement = (element: string) => {
    scroller.scrollTo(element, { duration: 500, delay: 10, smooth: true, offset: -56});
  }

  return (
    <div>
      <nav className="navbar navbar-expand-sm fixed-top navbar-light bg-dark">
        <div className="container">
          <div className="navbar-brand">
            <img src={svg.logo} alt="code logo"/>
          </div>
          <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
            <ul className="navbar-nav ">
              <li className="nav-item">
                <a className="nav-link active" onClick={() => onClickElement("home")} aria-current="page" href="#">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" onClick={ () => onClickElement("about") } href="#">Acerca de mi</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" onClick={ () => onClickElement("projects") } href="#">Proyectos</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" onClick={ () => onClickElement("contact") } href="#">Contacto</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div className="bottom-nav">
        <div className="button-list">
          <div className="button" onClick={ () => onClickElement("home") }>
            <img src={svg.home} alt="code logo"/>
            <span>Home</span>
          </div>
          <div className="button" onClick={ () => onClickElement("about") }>
            <img src={svg.person} alt="code logo"/>
            <span>Acerca de mi</span>
          </div>
          <div className="button" onClick={ () => onClickElement("projects") }>
            <img src={svg.project} alt="code logo"/>
            <span>Proyectos</span>
          </div>
          <div className="button" onClick={ () => onClickElement("contact") }>
            <img src={svg.email_w} alt="code logo"/>
            <span>Contacto</span>
          </div>
        </div>
      </div>
      <Element name="home">
        <Home></Home>
      </Element>
      <Element name="about">
          <About></About>
      </Element>
      <Element name="projects">
          <Projects></Projects>
      </Element>
      <Element name="contact">
        <Contact></Contact>
      </Element>
      <div className="copyright">© 2021 Juan Pablo Lira</div>
    </div>
  );
}

export default App;
