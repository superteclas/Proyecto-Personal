import React, { useState, useContext } from 'react';
import { Context } from '../store/appContext';
import "../../styles/suscribe.css"; 

const Subscribe = () => {
    const { actions } = useContext(Context);
    const [email, setEmail] = useState('');

    const handleSubmit = async () => {
        console.log('Email submitted:', email);
        if (email) {
            await actions.addUser(email);
            setEmail('');  
        }
    };

    return (
        <div className="titulo_subs">
            <h1><HOLAAA></HOLAAA></h1>
        <div className="subscribe">
            <p>SUBSCRIBE</p>
            <input 
                placeholder="Your e-mail" 
                className="subscribe-input" 
                name="email" 
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            <br />
            <div 
                className="submit-btn" 
                onClick={handleSubmit}
                style={{ cursor: 'pointer' }} 
            >
                SUBMIT
            </div>
        </div>
        </div>
    );
};

export default Subscribe;
