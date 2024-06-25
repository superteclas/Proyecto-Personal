import React, { useState, useContext } from 'react';
import { Context } from '../store/appContext';
import "../../styles/suscribe.css"; 
import Swal from 'sweetalert2';

const Subscribe = () => {
    const { actions } = useContext(Context);
    const [email, setEmail] = useState('');

    const handleSubmit = async () => {
        if (email) {
            const response = await actions.addUser(email);
            if (response.exists) {
                Swal.fire({
                    icon: 'info',
                    title: 'Oops...',
                    text: 'Ya estás suscrito con este email!',
                });
            } else {
                Swal.fire({
                    icon: 'success',
                    title: 'Éxito!',
                    text: 'Email enviado exitosamente!',
                });
            }
            setEmail('');  
        }
    };

    return (
        <div className="titulo_subs">
            <h1>HOLAAAA</h1>
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
