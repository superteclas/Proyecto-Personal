import React, { useContext } from "react";
import { Context } from "../store/appContext";

export const Bio = () => {
    const { store, actions } = useContext(Context);

    return (
        <div className="container">
            <h1>Bio</h1>
            <p>esto es la bio</p>
        </div>
    );
};