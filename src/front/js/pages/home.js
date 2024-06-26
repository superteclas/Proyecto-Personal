import React, { useContext } from "react";
import { Context } from "../store/appContext";
import imagenhome from "../../img/piano1.png";
import "../../styles/home.css";
import LogoCarousel from "../component/carrusel.jsx"; 
import SubscriptionForm from "../component/suscribe.jsx"; 

export const Home = () => {
	const { store, actions } = useContext(Context);

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
					<SubscriptionForm/> 
				</div>
			</div>
		</>
	);
};
