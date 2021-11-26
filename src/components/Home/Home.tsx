import React from 'react';
import './Home.css';
import { svg } from '../../images';
import background from "../../assets/images/me.jpeg";

function Home () {
    return (
        <div className="home container">
            <div className="header">
                <div className="photo-me">
                    <div className="image-card" style={{ backgroundImage: `url(${background})`}}></div>
                </div>
                <div className="info_me">
                    <div className="title">
                        <span className="block"></span>
                        <h1><b>¡Hola!</b> Soy Juan Pablo</h1>
                    </div>
                    <h2 className="role">Desarrollador de software | Ingeniero en mecatrónica</h2>
                    <div className="contact-me">
                        <a href="https://www.linkedin.com/in/juanpabloliradev" rel="noreferrer" target="_blank">
                            <img className="social-network" src={svg.linkedin} alt="linkedin icon"/>
                        </a>
                        <a href="mailto:contacto@juanpablolira.com">
                            <img className="social-network" src={svg.email} alt="email icon"/>
                        </a>
                    </div>
                </div>
            </div>
            <div className="footer d-flex justify-content-between">
                <div className="ads">
                    <img src={svg.web} alt="web icon"/>
                    <h6>Desarrollo Web</h6>
                </div>
                <div className="ads">
                    <img src={svg.smartphone} alt="smartphone icon"/>
                    <h6>Desarrollo Apps</h6>
                </div>
                <div className="ads">
                    <img src={svg.chip} alt="chip icon"/>
                    <h6>Software Embebido</h6>
                </div>
            </div>
        </div>
    );
}

export default Home ;