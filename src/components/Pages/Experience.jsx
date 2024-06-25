import React from "react";
import { HiArrowDownRight } from "react-icons/hi2";
import SiteGadj from '../../imgs/Site Gadj.png';
import WebSite_Englistest from '../../imgs/WebSite(Englistest).png';
import WebSiteCOnsEletr from '../../imgs/WebSiteConsumptionEletricCar.png';
import QuatroTemperamentos from '../../imgs/Site temperamentos.png';
import GeradorSenha from '../../imgs/Gerador de Senhas.png'
import App_1 from '../../imgs/App_1.png'

import './experience.css';
import './experiencemobile.css';

function Experience() {
    return (
        <div className="container__Experience">
            <div className="title_experience">
                <h1><HiArrowDownRight />Experiências</h1>
            </div>
            <hr style={{ margin: '25px', width: '70vw' }} />
            <div className="imgs_site" >
                <p style={{ fontSize: '1.3em', marginLeft: '5px' }}>
                    <h6 style={{ color: '#C68107' }}>Controle de Registro Ponto</h6>
                    Aplicativo desenvolvido baseado em um problema real. para controlar a carga horária e não ultrapassa-la, esse app identifica os dias utéis, feriados nacionais e regionais e calcula qual o período necessário para que a carga horária permaneça correta.
                    App em Desenvolvimento de backend, construido com Figma, e desenvolvido com React Native, trará a solução adequada para o problema, futuramente estará presente na Google Play com o mesmo nome do título.
                </p>
                <img src={App_1} style={{ width: '25%', height: '75vh', marginLeft: '10vw', borderRadius: '10px' }} />
            </div>

            <hr style={{ margin: '25px', width: '70vw' }} />

            <div className="imgs_site" >
                <p style={{ fontSize: '1.3em', marginLeft: '1vw' }}>
                    <h6 style={{ color: '#C68107', marginTop: '4px' }}>Teste de Inglês</h6>
                    Site oferece uma ferramenta interativa para avaliar a proficiência em inglês de usuários através de um teste composto por 20 perguntas cuidadosamente elaboradas, baseadas no Quadro Europeu Comum de Referência para Línguas (CEFR). Ao concluir o teste, os participantes recebem uma avaliação precisa de seu nível de inglês, variando de A1 (iniciante) a C2 (Avançado), permitindo-lhes entender claramente suas competências linguísticas atuais.
                    <a href="https://testedeingles.app.br/" target="_blank" rel="noopener noreferrer" style={{ color: '#ff6b08' }}> Confira</a>.
                </p>
                <img src={WebSite_Englistest} style={{ marginLeft: '15px' }} />
            </div>

            <hr style={{ margin: '25px', width: '70vw' }} />

            <div className="imgs_site" >
                <img src={WebSiteCOnsEletr} />
                <p style={{ fontSize: '1.3em', marginRight: '1vw' }}>
                    <h6 style={{ color: '#C68107' }}>Consumo de carros Elétricos</h6>
                    O site oferece uma ferramenta inovadora e essencial para proprietários de veículos elétricos, simplificando o cálculo do custo de uma recarga completa da bateria. Ao acessar a plataforma, os usuários podem facilmente selecionar sua rede de energia local e inserir a potência específica da bateria de seu veículo. Com base nessas informações, o sistema realiza automaticamente o cálculo, fornecendo uma estimativa precisa do custo de recarga.
                </p>
            </div>

            <hr style={{ margin: '25px', width: '70vw' }} />

            <div className="imgs_site" >
                <img src={QuatroTemperamentos} />
                <p style={{ fontSize: '1.3em', marginRight: '1vw' }}>
                    <h6 style={{ color: '#C68107' }}>Os 4 temperamentos</h6>
                    O teste consiste em 20 perguntas simples que você deve responder. Ao final do teste, o resultado com uma das quatro tipos de personalidade será revelada.
                    Sanguíneo: Indivíduos otimistas e entusiastas que gostam de estar com outras pessoas e se divertir.
                    Colérico: Indivíduos líderes e autoconfiantes que gostam de tomar decisões e controlar as coisas.
                    Fleumático: Indivíduos pacíficos e calmos que gostam de evitar conflitos e seguir a rotina.
                    Melancólico: Indivíduos analíticos e introspectivos que gostam de pensar profundamente e analisar as coisas.
                    <a href="https://angular-quiz-web.vercel.app/" target="_blank" rel="noopener noreferrer" style={{ color: '#ff6b08' }}> Confira</a>.
                </p>
            </div>

            <hr style={{ margin: '25px', width: '70vw' }} />

            <div className="imgs_site" >
                <img src={GeradorSenha} style={{ width: '25%', height: '75vh', marginLeft: '10vw', borderRadius: '10px' }} />
                <p style={{ fontSize: '1.3em', marginRight: '1vw' }}>
                    <h6 style={{ color: '#C68107' }}>Gerador de Senhas</h6>
                    Este aplicativo é um Gerador de Senhas desenvolvido como um projeto para aprofundar meus conhecimentos em React Native. O principal objetivo deste projeto é criar um aplicativo prático e útil, enquanto exploro as funcionalidades e capacidades do React Native.
                    O app permite aos usuários gerar senhas escolhendo a quantidade de caracteres que a senha deve conter.
                    <a href="https://github.com/AndersonAPinto/reactNative---GeradorDeSenha" target="_blank" rel="noopener noreferrer" style={{ color: '#ff6b08' }}> Confira no Repositório</a>.
                </p>
            </div>
           
            <hr style={{ margin: '25px', width: '70vw' }} />

        </div>
    )
}
export default Experience