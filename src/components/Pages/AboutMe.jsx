import React from "react";
import Photo from '../../imgs/photo.png'
import { HiArrowDownRight } from "react-icons/hi2";
import './aboutme.css';
import './aboutmemobile.css';

function AboutMe() {
    return (
        <div className="container__AboutMe">
            <div className="title">
                <h1><HiArrowDownRight/> Sobre mim </h1>
            </div>

            <div className="container_texts">
                <div className="picture_div">
                    <img src={Photo} style={{ borderRadius: '40%', marginTop: '41px' }} />
                </div>
                <div className="text_div">
                    <h4 style={{ marginBottom: '5px', color: '#C68107' }}>Anderson Pinto</h4>
                    <h2 style={{ marginBottom: '5px', }}>Desenvolvedor Frontend</h2>
                    <p style={{ color: '#b1b1b1', marginBottom: '10px', fontSize: '18px' }}>
                    Sou Anderson, um profissional em transição de carreira para a área de tecnologia. 
Atualmente, estudo Análise e Desenvolvimento de Sistemas e Data Science, e estou determinado a me tornar um desenvolvedor Full Stack.

Nos últimos anos, tenho me dedicado ao aprendizado e aplicação de tecnologias como Python, React e React-Native. Meu foco está em expandir minhas competências em Desenvolvimento Frontend e Backend, com o objetivo de contribuir para projetos inovadores.

Minha jornada profissional é marcada por uma transição significativa de uma carreira de dez anos como técnico automotivo para a área de tecnologia. Isso destaca minha capacidade de adaptação, aprendizado contínuo e um desejo incansável de evoluir.

No último ano, dediquei-me intensamente ao aprimoramento das minhas habilidades em programação Frontend. Isso resultou na criação de projetos práticos, incluindo plataformas de e-commerce e um aplicativo de controle de combustível com React-Native.

Estou buscando oportunidades desafiadoras onde eu possa aplicar e expandir minhas habilidades como desenvolvedor Full Stack. Estou aberto a colaborações, projetos de estágio e oportunidades de emprego que me permitam continuar minha jornada de aprendizado e crescimento na área de tecnologia.
                    </p>
                    
                </div>
            </div>
        </div>


    )
}
export default AboutMe