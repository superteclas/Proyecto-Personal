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
                    title: 'Genial!',
                    text: 'Email enviado exitosamente!',
                });
            }
            setEmail('');  
        }
    };

    return (
        <div className="titulo_subs">
            
            <div className="subscribe">
                <p>Subscríbete</p>
                <input 
                    placeholder="Introduce email" 
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
