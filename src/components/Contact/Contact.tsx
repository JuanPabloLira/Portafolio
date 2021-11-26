import React from 'react';
import './Contact.css'
import { svg } from '../../images';

function Contact() {
    return (
        <div className="contact">
            <img src={svg.logo} alt="code logo"/>
            <p>Trabajemos Juntos | Contáctame</p>
            <div>
                <a href="https://www.linkedin.com/in/juanpabloliradev" rel="noreferrer" target="_blank">
                    <img className="social-network" src={svg.linkedin_w} alt="linkedin icon"/>
                </a>
                <a href="mailto:contacto@juanpablolira.com">
                    <img className="social-network" src={svg.email_w} alt="email icon"/>
                </a>
            </div>
        </div>
    );
}

export default Contact;