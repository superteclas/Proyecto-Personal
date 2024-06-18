import React, { useContext } from "react";
import { Context } from "../store/appContext";

export const Services = () => {
    const { store, actions } = useContext(Context);

    return (
        <div className="container">
            <h1>Servicios</h1>
            <p>esto son los servicios</p>
        </div>
    );
};