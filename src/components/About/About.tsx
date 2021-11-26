import React from 'react';
import './About.css';
import ReactTooltip from 'react-tooltip';
import { svg } from '../../images';

function About () {
    return (
        <div className="about">
            <div className="container">
                <div className="row">
                    <div className="col-sm-12 col-md-7 description">
                        <h3><b>Acerca de mi</b></h3>
                        <p>
                            Soy desarrollador con más de 4 años de experiencia en diseño, instalación, pruebas, mantenimiento de software (back-end y front-end) 
                            y también de hardware para el sector productivo, responsable de grandes proyectos instalados en varios estados de 
                            la república mexicana, tengo conocimiento de varias plataformas, lenguajes y sistemas integrados, capaz de autogestión 
                            eficaz en proyectos independientes y buenas habilidades de colaboración dentro de un equipo productivo. Apasionado por 
                            la programación y en constante aprendizaje de nuevas tecnologías.
                        </p>
                    </div>
                    <div className="col-sm-12 col-md-5">
                        <h6><b>Skills</b></h6>
                        <div className="list-skills">
                            <img src={svg.html5} data-tip="HTML" alt="html5 icon"/>
                            <img src={svg.css3} data-tip="CSS" alt="css3 icon"/>
                            <img src={svg.javascript} data-tip="Javascript" alt="javascript icon"/>
                            <img src={svg.angular} data-tip="Framework Angular" alt="angular icon" />
                            <img src={svg.react} data-tip="Framework React" alt="react icon"/>
                            <img src={svg.bootstrap} data-tip="Bootstrap" alt="bootstrap icon"/>
                            <img src={svg.angular_material} data-tip="Angular Material" alt="angular material icon"/>
                            <img src={svg.jquery} data-tip="JQuery" alt="jquery icon"/>
                            <img src={svg.php} data-tip="PHP" alt="php db icon"/>
                            <img src={svg.laravel} data-tip="Laravel" alt="laravel icon"/>
                            <img src={svg.lumen} data-tip="Micro-Framework Lumen" alt="lumen icon"/>
                            <img src={svg.postman} data-tip="Postman" alt="postman db icon"/>
                            <img src={svg.git} data-tip="Git" alt="git icon"/>
                            <img src={svg.github} data-tip="GitHub" alt="github icon"/>
                            <img src={svg.typescript} data-tip="Typescript" alt="typescript icon"/>
                            <img src={svg.react_native} data-tip="React Native" alt="react native icon"/>
                            <img src={svg.expo} data-tip="Framework Expo" alt="expo icon"/>
                            <img src={svg.mysql} data-tip="MySQL" alt="mysql icon"/>
                            <img src={svg.oracle} data-tip="Oracle Database" alt="oracle db icon"/>
                            <img src={svg.sql_server} data-tip="Microsoft SQL Server" alt="sql server icon"/>
                            <img src={svg.c_sharp} alt="c sharp icon"/>
                            <img src={svg.c} alt="c icon"/>
                            <img src={svg.arduino} data-tip="Arduino" alt="arduino icon"/>
                            <img src={svg.raspberry_pi} data-tip="Raspberry Pi" alt="raspberry pi icon"/>
                            <img src={svg.autodesk} data-tip="Eagle Autodesk" alt="autodesk icon"/>
                        </div>
                    </div>
                </div>
            </div>
            <ReactTooltip />
        </div>
    );
}

export default About