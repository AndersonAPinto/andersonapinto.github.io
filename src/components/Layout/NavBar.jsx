import React, { useState, useEffect } from "react"
import '../Layout/navBarStyle.css';
import '../Layout/navBarStyleMobile.css';
import { MdOutlineKeyboardDoubleArrowDown } from "react-icons/md";
import { AiOutlineAlert } from "react-icons/ai";
import { Link } from "react-router-dom";


function NavBar() {
    const [color, setColor] = useState('#CC8207'); // Estado inicial da cor

    useEffect(() => {
        // Define um intervalo para alternar a cor
        const intervalId = setInterval(() => {
            setColor((prevColor) => (prevColor === '#CC8207' ? '#070600' : '#CC8207'));
        }, 500); // Alterna a cor a cada 500 ms

        // Limpa o intervalo quando o componente é desmontado
        return () => clearInterval(intervalId);
    }, []);

    return (
        
            <div className="container__NavBar">
                <button className="text_alert">
                    <AiOutlineAlert style={{  backgroundColor: color, borderRadius: '50%' }} />
                    <h5>Disponível para Trabalhos</h5>
                </button>
                <div className="container_text">
                    <h1>Anderson</h1>
                    <h5>Desenvolvedor Frontend</h5>
                    <button className="btn_works" >
                        <Link to={'/experience'}><p>MEUS TRABALHOS <MdOutlineKeyboardDoubleArrowDown className="icon_works" /></p></Link>
                    </button>
                </div>
            </div>
        
    )
}
export default NavBar