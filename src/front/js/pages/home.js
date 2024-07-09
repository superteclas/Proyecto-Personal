import React, { useContext, useRef } from "react";
import { Context } from "../store/appContext";
import { ParallaxProvider, Parallax } from 'react-scroll-parallax';
import imagenhome from "../../img/piano1.png";
import "../../styles/home.css";
import LogoCarousel from "../component/carrusel.jsx";
import SubscriptionForm from "../component/suscribe.jsx";
import imageBg from "../../img/piano1.png";
import imageClose from "../../img/piano1.png";
import imageMid from "../../img/piano1.png";
import imageFar from "../../img/piano1.png";

export const Home = () => {
    const { store } = useContext(Context);
    const target = useRef(null);

    return (
        <ParallaxProvider>
           
            
           

            <div ref={target} className="parallax-container">
                <div className="content-section">
                    <Parallax speed={-20} className="parallax-layer">
                        <div style={{ backgroundImage: `url(${imageBg})` }} className="parallax-layer" />
                    </Parallax>
                    <div className="content">
                        <h1>aquí iria presentacion</h1>
                    <div className="alert alert-info">
                    {store.message || "Loading message from the backend (make sure your python backend is running)..."}
                </div>
                    </div>
                </div>

                <div className="content-section">
                    <Parallax speed={-10} className="parallax-layer">
                        <div style={{ backgroundImage: `url(${imageFar})` }} className="parallax-layer" />
                    </Parallax>
                    <div className="content">
                        <h1>aquí iria un texto mas detallado</h1>
                    </div>
                </div>

                <div className="content-section">
                    <Parallax speed={0} className="parallax-layer">
                        <div style={{ backgroundImage: `url(${imageMid})` }} className="parallax-layer" />
                    </Parallax>
                    <div className="content">
                        <h1>aqui iria suscribirse</h1>
                    </div>
                </div>

                <div className="content-section">
                    <Parallax speed={10} className="parallax-layer">
                        <div style={{ backgroundImage: `url(${imageClose})` }} className="parallax-layer" />
                    </Parallax>
                    <div className="content">
                        <h2>Sección 4</h2>
                        <p>Contenido de la sección 4...</p>
                    </div>
                </div>
                <div>
                    <h3>Empresas para las que he trabajado:{" "}</h3>
                    <LogoCarousel />
                </div>
            </div>
        </ParallaxProvider>
    );
};
