import React, { useContext } from "react";
import { Context } from "../store/appContext";

export const Agenda = () => {
    const { store, actions } = useContext(Context);

    return (
        <div className="container">
            <h1>Agenda</h1>
            <p>esto sería la agenda</p>
        </div>
    );
};