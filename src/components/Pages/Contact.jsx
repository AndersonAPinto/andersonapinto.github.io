import React from "react";
import { HiArrowDownRight } from "react-icons/hi2";
import { FaWhatsapp, FaLinkedinIn, FaFacebook, FaGithub, FaInstagram, FaRegEnvelope } from "react-icons/fa";
import './contact.css';
import './contactmobile.css';

function Contact() {
    return (
        <div className="container__Contact">
            <div className="title_contact">
                <h1> <HiArrowDownRight /> Redes Sociais</h1>
            </div><div className="frame">
                <div className="div_title">
                    <div className="icons_contact">
                        <h2 style={{ fontSize: '2em', marginBottom: '5px', textAlign: 'center' }}>Redes sociais e Envio de mensagens</h2>
                        <h6 style={{ marginBottom: '5px', color: '#C68107', fontSize: '1em', textAlign: 'center' }}>Conecte-se Conosco com Apenas um Clique</h6>
                        <p style={{ color: '#b1b1b1', fontSize: '1.2em' }}>
                            Cada ícone é uma porta para minhas principais plataformas de comunicação e redes sociais, permitindo que você escolha o canal preferencial de contato com facilidade e rapidez.
                            Seja para fazer perguntas, solicitar suporte, ou compartilhar suas impressões, estamos a apenas um clique de distância. Estarei comprometido em fornecer respostas e soluções ágeis e atenciosas.
                            Estou animado para ouvir o que você tem a dizer.</p>
                    </div>
                    <div className="div_icons">
                        <div className="icons"><a href="https://www.linkedin.com/in/andersonapinto/" target="_blank" rel="noopener noreferrer"><FaLinkedinIn /></a></div>
                        <div className="icons"><a href="https://github.com/AndersonAPinto" target="_blank" rel="noopener noreferrer"><FaGithub /></a></div>
                        <div className="icons"><a href="https://www.facebook.com/andersonaspinto/" target="_blank" rel="noopener noreferrer"><FaFacebook /></a></div>
                        <div className="icons"><a href="https://www.instagram.com/andersonaugusto.pinto/" target="_blank" rel="noopener noreferrer"><FaInstagram /></a></div>
                        <div className="icons"><a href="https://wa.me/5551997802755" target="_blank" rel="noopener noreferrer"><FaWhatsapp /></a></div>
                        <div className="icons"><a href="mailto:andersonaugustopinto@gmail.com" target="_blank" rel="noopener noreferrer"><FaRegEnvelope /></a></div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Contact