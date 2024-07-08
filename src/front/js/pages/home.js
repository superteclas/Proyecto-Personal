import React, { useContext, useRef } from "react";
import { Context } from "../store/appContext";
import { useParallax } from "react-scroll-parallax";
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

    const mid = useParallax({
        speed: 50,
        targetElement: target.current,
    });
    const close = useParallax({
        speed: 100,
        targetElement: target.current,
    });

    const midExtend = 50 * 5 * -1;
    const closeExtend = 100 * 5 * -1;

    return (
        <>
            <div
                className="fixed-background"
                style={{ backgroundImage: `url(${imagenhome})` }}
            ></div>
            <div className="content text-center mt-5">
                <div className="alert alert-info">
                    {store.message || "Loading message from the backend (make sure your python backend is running)..."}
                </div>
                <div>
                    <h3>Empresas para las que he trabajado:{" "}</h3>
                    <LogoCarousel />
                </div>
                <div>
                    <SubscriptionForm />
                </div>
                <div ref={target} className="parallax-container">
                    <div style={{ backgroundImage: `url(${imageBg})`, left: 0, right: 0 }} className="parallax-layer" />
                    <div style={{ backgroundImage: `url(${imageFar})`, left: 0, right: 0 }} className="parallax-layer" />
                    <div style={{ backgroundImage: `url(${imageMid})`, left: midExtend, right: midExtend }} className="parallax-layer" ref={mid.ref} />
                    <div style={{ backgroundImage: `url(${imageClose})`, left: closeExtend, right: closeExtend }} className="parallax-layer" ref={close.ref} />
                </div>
            </div>
        </>
    );
};
