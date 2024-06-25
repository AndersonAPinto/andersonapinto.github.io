import React from "react";
import './home.css';
import NavBar from "../Layout/NavBar";
import Dropdown from "../Layout/Dropdown";

function Home() {
    return (
            <div className="container_video">
                <video autoPlay muted loop playsInline style={{ width: '100vw', height: '100vh', objectFit: 'cover' }} >
                    <source src="/Video.mp4" type="video/mp4" />
                </video>
                <NavBar />
                <Dropdown />
            </div>
    )
}

export default Home