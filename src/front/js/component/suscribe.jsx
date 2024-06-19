import React, { useState } from 'react';
import "../../styles/suscribe.css"; 

const Subscribe = () => {
    const [email, setEmail] = useState('');

    const handleSubmit = () => {
        console.log('Email submitted:', email);
        // Aquí puedes agregar la lógica para enviar el email al backend
    };

    return (
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
    );
};

export default Subscribe;
