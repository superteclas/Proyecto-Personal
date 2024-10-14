import React, { useContext, useRef } from "react";
import { Context } from "../store/appContext";
import { ParallaxProvider, Parallax } from 'react-scroll-parallax';
import imagenhome from "../../img/piano1.png";
import "../../styles/home.css";
import LogoCarousel from "../component/carrusel.jsx";
import SubscriptionForm from "../component/suscribe.jsx";
import imageBg from "../../img/piano1.png";
import imageClose from "../../img/piano1.png";
import imageMid from "../../img/TECLADOS 3.jpg";
import imageFar from "../../img/piano1.png";

export const Home = () => {
    const { store } = useContext(Context);
    const target = useRef(null);

    return (
        <ParallaxProvider>
           
            
           

            <div ref={target} className="parallax-container">
                <div className="content-section">
                    <Parallax speed={-5} className="parallax-layer">
                        <div style={{ backgroundImage: `url(${imageBg})` }} className="parallax-layer" />
                    </Parallax>
                    <div className="content">
                        <h1>Álvaro Ponce</h1>
                    <div className="alert alert-info">
                    {store.message || "Loading message from the backend (make sure your python backend is running)..."}
                </div>
                    </div>
                </div>

                <div className="content-section">
                    <Parallax speed={-20} className="parallax-layer">
                        <div style={{ backgroundImage: `url(${imageMid})` }} className="parallax-layer" />
                    </Parallax>
                    <div className="content">
                        <h1>Descripción y bienvenida</h1>
                    </div>
                </div>

                <div className="content-section">
                    <Parallax speed={-25} className="parallax-layer">
                        <div style={{ backgroundImage: `url(${imageFar})` }} className="parallax-layer" />
                    </Parallax>
                    <div className="content">
                        <h1>aqui iria suscribirse</h1>
                        <SubscriptionForm />
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
