import React, { useContext } from "react";
import { Context } from "../store/appContext";

export const Contact = () => {
    const { store, actions } = useContext(Context);

    return (
        <div className="container">
            <h1>Contact</h1>
            <p>contacto</p>
        </div>
    );
};