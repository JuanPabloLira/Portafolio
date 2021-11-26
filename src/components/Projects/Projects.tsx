import React from 'react';
import './Projects.css';

import { images, svg } from '../../images';

function Projects() {
    return (
        <div className="projects container">
            <h3><b>Proyectos</b></h3>
            <div className="row">
                {/* Control De Accesos Vehicular */}
                <div className="col-sm-12 col-md-6 col-lg-4">
                    <div className="card-proyect">
                        <div className="card-h">
                            <img src={images.control_accesos} alt="preview"/>
                        </div>
                        <div className="card-b">
                            <div className="area">
                                <span>Sistemas Embebidos</span>
                                <img src={svg.chip}  alt="info icon"/>
                            </div>
                            <h1>Control De Accesos Vehicular</h1>
                            <p className="description">
                                Software para el control de accesos de autobuses en la <b>Central Del Sur en la Ciudad de México y la Central de Cuernavaca Morelos</b>, a partir de la lectura 
                                de Tags UHF y Placa Vehicular. Implementación de placa de control, lectora UHF, sensores, cámara e interfaz de usuario.
                            </p>
                            <div className="technologies">
                                <p>Tecnologías</p>
                                <div className="list">
                                    <img src={svg.c_sharp} alt="info icon"/>
                                    <img src={svg.c} alt="info icon"/>
                                    <img src={svg.sql_server} data-tip="Microsoft SQL Server" alt="info icon"/>
                                    <img src={svg.autodesk} data-tip="Eagle Autodesk" alt="info icon"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Contador De Pasajeros */}
                <div className="col-sm-12 col-md-6 col-lg-4">
                    <div className="card-proyect">
                        <div className="card-h">
                            <img src={images.mic} alt="preview"/>
                        </div>
                        <div className="card-b">
                            <div className="area">
                                <span>Sistemas Embebidos</span>
                                <img src={svg.chip} alt="info icon"/>
                            </div>
                            <h1>Contador De Pasajeros</h1>
                            <p className="description">
                                Desarrollo de placa base, firmware e interfaz de configuración para un sistema de conteo de personas. Enfocado al sector transporte, capaz de detectar subidas
                                y bajadas de personas de un autobús. Basado sobre un microcontrolador 8-bit, sensores infrarrojos y capaz de transmitir la información a través de WIFI o 2G/3G mediante una API.
                                <b> Instalado en más de 250 autobuses en 4 estados de la República Mexicana.</b>
                            </p>
                            <div className="technologies">
                                <p>Tecnologías</p>
                                <div className="list">
                                    <img src={svg.c} alt="info icon"/>
                                    <img src={svg.c_sharp} alt="info icon"/>
                                    <img src={svg.autodesk} data-tip="Eagle Autodesk" alt="info icon"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Plataforma De Administracion Y Analisis Proyecto Control De Accesos */}
                <div className="col-sm-12 col-md-6 col-lg-4">
                    <div className="card-proyect">
                        <div className="card-h">
                            <img src={images.soft_control_accesos} alt="preview"/>
                        </div>
                        <div className="card-b">
                            <div className="area">
                                <span>Desarrollo Web</span>
                                <img src={svg.web} alt="info icon"/>
                            </div>
                            <h1>Plataforma De Administración Y Análisis Proyecto Control De Accesos</h1>
                            <p className="description">
                                Desarrollo y mantenimiento de diversos reportes para el análisis de información generada a partir de un sistema de control de accesos, envío de reportes automatizados e 
                                integración de APIs con terceros.
                            </p>
                            <div className="technologies">
                                <p>Tecnologías</p>
                                <div className="list">
                                    <img src={svg.php} data-tip="PHP" alt="info icon"/>
                                    <img src={svg.html5} data-tip="HTML" alt="info icon"/>
                                    <img src={svg.css3} data-tip="CSS" alt="info icon"/>
                                    <img src={svg.bootstrap} data-tip="Bootstrap" alt="info icon"/>
                                    <img src={svg.javascript} data-tip="Javascript" alt="info icon"/>
                                    <img src={svg.jquery} data-tip="JQuery" alt="info icon"/>
                                    <img src={svg.sql_server} data-tip="Microsoft SQL Server" alt="info icon"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Plataforma De Administracion Y Analisis Proyecto Boletera Abordo */}
                <div className="col-sm-12 col-md-6 col-lg-4">
                    <div className="card-proyect">
                        <div className="card-h">
                            <img src={images.boletera} alt="preview"/>
                        </div>
                        <div className="card-b">
                            <div className="area">
                                <span>Desarrollo Web</span>
                                <img src={svg.web} alt="info icon"/>
                            </div>
                            <h1>Plataforma De Administración Y Análisis Proyecto Boletera Abordo</h1>
                            <p className="description">
                                Desarrollo de reportes para el análisis de información generada a partir de un sistema de boletera abordo, como reportes de recaudación,
                                control, productividad, operativos, estadísticos, liquidación automatizada entre otros. Desarrollo de interfaces de usuario para el seguimiento de autobuses en tiempo real,
                                envío de mensajes, alertas y ocupación del servicio.
                            </p>
                            <div className="technologies">
                                <p>Tecnologías</p>
                                <div className="list">
                                    <img src={svg.php} data-tip="PHP" alt="info icon"/>
                                    <img src={svg.html5} data-tip="HTML" alt="info icon"/>
                                    <img src={svg.css3} data-tip="CSS" alt="info icon"/>
                                    <img src={svg.bootstrap} data-tip="Bootstrap" alt="info icon"/>
                                    <img src={svg.javascript} data-tip="Javascript" alt="info icon"/>
                                    <img src={svg.jquery} data-tip="JQuery" alt="info icon"/>
                                    <img src={svg.oracle} data-tip="Oracle Database" alt="info icon"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Deteccion Placas Vehiculares */}
                <div className="col-sm-12 col-md-6 col-lg-4">
                    <div className="card-proyect">
                        <div className="card-h">
                            <img src={images.deteccion_placas} alt="preview"/>
                        </div>
                        <div className="card-b">
                            <div className="area">
                                <span>Integración</span>
                                <img src={svg.chip}  alt="info icon"/>
                            </div>
                            <h1>Detección Placas Vehiculares</h1>
                            <p className="description">
                                Software para la detección de placas vehiculares en el <b>Estacionamiento de la Central Del Sur en Ciudad de México</b> a través de una 
                                cámara ANPR mediante la integración de un SDK, interfaz de usuario (C# WFA) y Microsoft SQL Server.
                            </p>
                            <div className="technologies">
                                <p>Tecnologías</p>
                                <div className="list">
                                    <img src={svg.c_sharp} alt="info icon"/>
                                    <img src={svg.sql_server} data-tip="Microsoft SQL Server" alt="info icon"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Circuitos Electronicos Proyecto Boletera Abordo */}
                <div className="col-sm-12 col-md-6 col-lg-4">
                    <div className="card-proyect">
                        <div className="card-h">
                            <img src={images.pcb} alt="preview"/>
                        </div>
                        <div className="card-b">
                            <div className="area">
                                <span>Diseño Electrónico</span>
                                <img src={svg.chip} alt="info icon"/>
                            </div>
                            <h1>Circuitos Electrónicos Proyecto Boletera Abordo</h1>
                            <p className="description">
                                Diseño de fuente de alimentación para boletera e internet abordo <b> instalados en más de 200 autobuses en 3 estados de la República Mexicana.</b>
                            </p>
                            <div className="technologies">
                                <p>Tecnologías</p>
                                <div className="list">
                                    <img src={svg.autodesk} data-tip="Eagle Autodesk" alt="info icon"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* GPS Tracker */}
                <div className="col-sm-12 col-md-6 col-lg-4">
                    <div className="card-proyect">
                        <div className="card-h">
                            <img src={images.tracker} alt="preview"/>
                        </div>
                        <div className="card-b">
                            <div className="area">
                                <span>Sistemas Embebidos</span>
                                <img src={svg.chip} alt="info icon"/>
                            </div>
                            <h1>GPS Tracker</h1>
                            <p className="description">
                                Desarrollo de placa base, firmware e interfaz de configuración para prototipo de dispositivo de geolocalización de vehículos con comunicación 2G/3G, envío y recepción de alertas.
                            </p>
                            <div className="technologies">
                                <p>Tecnologías</p>
                                <div className="list">
                                    <img src={svg.c} alt="info icon"/>
                                    <img src={svg.c_sharp} alt="info icon"/>
                                    <img src={svg.autodesk} data-tip="Eagle Autodesk" alt="info icon"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* SmartAlert */}
                <div className="col-sm-12 col-md-6 col-lg-4">
                    <div className="card-proyect">
                        <div className="card-h">
                            <img src={images.smartalert} alt="preview"/>
                        </div>
                        <div className="card-b">
                            <div className="area">
                                <span>Desarrollo Mòvil</span>
                                <img src={svg.smartphone} alt="info icon"/>
                            </div>
                            <h1>SmartAlert</h1>
                            <p className="description">
                                Aplicación iOS y Android para búsqueda de paradas cercanas de servicios de autobuses suburbanos, tiempo de llegada, alertas y envío de mensajes internos, creación de nuevas cuentas y medio de recuperación de inicio de sesión.
                            </p>
                            <div className="technologies">
                                <p>Tecnologías</p>
                                <div className="list">
                                    <img src={svg.react_native} data-tip="React Native" alt="info icon"/>
                                    <img src={svg.jwt} data-tip="JSON Web Token" alt="info icon"/>
                                    <img src={svg.lumen} data-tip="Micro-Framework Lumen" alt="info icon"/>
                                    <img src={svg.expo} data-tip="Framework Expo" alt="info icon"/>
                                    <img src={svg.mysql} data-tip="MySQL" alt="info icon"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Validador Credenciales QR */}
                <div className="col-sm-12 col-md-6 col-lg-4">
                    <div className="card-proyect">
                        <div className="card-h">
                            <img src={images.validador} alt="preview"/>
                        </div>
                        <div className="card-b">
                            <div className="area">
                                <span>Desarrollo Móvil</span>
                                <img src={svg.smartphone} alt="info icon"/>
                            </div>
                            <h1>Validador de credenciales con código QR</h1>
                            <p className="description">
                                Aplicación Android para el escaneo y validación de códigos QR asociados a contratistas de una empresa, utilizando la cámara del dispositivo para el escaneo y una API para obtener los datos asociados a los contratistas.
                            </p>
                            <div className="technologies">
                                <p>Tecnologías</p>
                                <div className="list">
                                    <img src={svg.react_native} data-tip="React Native" alt="info icon"/>
                                    <img src={svg.lumen} data-tip="Micro-Framework Lumen" alt="info icon"/>
                                    <img src={svg.mysql} data-tip="MySQL" alt="info icon"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Software Venta De Boletos */}
                <div className="col-sm-12 col-md-6 col-lg-4">
                    <div className="card-proyect">
                        <div className="card-h">
                            <img src={images.taquilla} alt="preview"/>
                        </div>
                        <div className="card-b">
                            <div className="area">
                                <span>Desarrollo Web</span>
                                <img src={svg.web} alt="info icon"/>
                            </div>
                            <h1>Venta De Boletos De Autobús</h1>
                            <p className="description">
                                Aplicación web para la venta de boletos, venta por caja y usuario, elección de puntos de venta, resumen de caja, operaciones de arqueo, retiro y depósito de efectivo,
                                instalado sobre un servidor local y descarga de catálogos a través de una API en un servidor central.<b> Instalado en 6 puntos de venta en 2 estados de la República Mexicana.</b>
                            </p>
                            <div className="technologies">
                                <p>Tecnologías</p>
                                <div className="list">
                                    <img src={svg.php} data-tip="PHP" alt="info icon"/>
                                    <img src={svg.angular} data-tip="Framework Angular" alt="info icon"/>
                                    <img src={svg.angular_material} data-tip="Angular Material" alt="info icon"/>
                                    <img src={svg.css3} data-tip="CSS" alt="info icon"/>
                                    <img src={svg.lumen} data-tip="Micro-Framework Lumen" alt="info icon"/>
                                    <img src={svg.mysql} data-tip="MySQL" alt="info icon"/>
                                    <img src={svg.centos} data-tip="CentOS" alt="info icon"/>
                                    <img src={svg.apache} data-tip="Apache" alt="info icon"/>
                                    <img src={svg.pwa} data-tip="Progressive Web Apps" alt="info icon"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Mini ERP */}
                <div className="col-sm-12 col-md-6 col-lg-4">
                    <div className="card-proyect">
                        <div className="card-h">
                            <img src={images.erp} alt="preview"/>
                        </div>
                        <div className="card-b">
                            <div className="area">
                                <span>Desarrollo Web</span>
                                <img src={svg.web} alt="info icon"/>
                            </div>
                            <h1>Mini ERP</h1>
                            <p className="description">
                                Aplicación web para la administración de requisiciones de material, órdenes de compra, entrada de material, proveedores, productos y servicios, control de facturas, complementos de pago y envío de alertas vía correo electrónico de cada operación realizada.
                            </p>
                            <div className="technologies">
                                <p>Tecnologías</p>
                                <div className="list">
                                    <img src={svg.php} data-tip="PHP" alt="info icon"/>
                                    <img src={svg.angular} data-tip="Framework Angular" alt="info icon"/>
                                    <img src={svg.angular_material} data-tip="Angular Material" alt="info icon"/>
                                    <img src={svg.css3} data-tip="CSS" alt="info icon"/>
                                    <img src={svg.oracle} data-tip="Oracle Database" alt="info icon"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Mi Portafolio */}
                <div className="col-sm-12 col-md-6 col-lg-4">
                    <div className="card-proyect">
                        <div className="card-h">
                            <img src={images.portafolio} alt="preview"/>
                        </div>
                        <div className="card-b">
                            <div className="area">
                                <span>Desarrollo Web</span>
                                <img src={svg.web} alt="info icon"/>
                            </div>
                            <h1>Mi Portafolio</h1>
                            <p className="description">
                                Sitio web personal donde puedes encontrar información sobre mi perfil profesional, mi experiencia y habilidades, así como los proyectos en los que he trabajado.
                            </p>
                            <div className="technologies">
                                <p>Tecnologías</p>
                                <div className="list">
                                    <img src={svg.react} data-tip="Framework React" alt="info icon"/>
                                    <img src={svg.bootstrap} data-tip="Bootstrap" alt="info icon"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Projects;