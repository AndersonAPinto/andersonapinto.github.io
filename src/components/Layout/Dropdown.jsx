import React, { useState, useRef, useEffect } from 'react';
import { Link } from "react-router-dom"
import { FiMenu } from "react-icons/fi";
import { MdMenuOpen } from "react-icons/md";
import './dropdown.css';
import './dropdownmobile.css';

function Dropdown() {
    const [isOpen, setIsOpen] = useState(false);
    const toggleContainer = useRef();

    // Função para alternar a visibilidade do dropdown
    const toggleDropdown = () => setIsOpen(!isOpen);

    // Função para fechar o dropdown clicando fora
    const handleClickOutside = (event) => {
        if (toggleContainer.current && !toggleContainer.current.contains(event.target)) {
            setIsOpen(false);
        }
    };

    useEffect(() => {
        // Adiciona o listener quando o componente é montado
        window.addEventListener('click', handleClickOutside, true);
        return () => {
            // Remove o listener quando o componente é desmontado
            window.removeEventListener('click', handleClickOutside, true);
        };
    }, []);

    return (
        <div ref={toggleContainer}>
            <button  className="btn_header" onClick={toggleDropdown}>{isOpen ? <MdMenuOpen /> : <FiMenu />}</button>
            {isOpen && (
                <nav className="header" style={{color:'aliceblue'}}>
                    <ul>
                        <li><Link to={'/'} >Início</Link></li>
                        <li><Link to={'/aboutme'} >Sobre mim</Link></li>
                        <li><Link to={'/contact'}>Contato</Link></li>
                        <li><Link to={'/experience'}>Experiências</Link></li>
                        
                    </ul>
                    
                </nav>
            )}
        </div>
    );
}

export default Dropdown;
