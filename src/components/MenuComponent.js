import React from 'react';
import { useNavigate } from 'react-router-dom'; // Importamos useNavigate para la navegación
import '../styles/MenuComponent.css';  // Importamos el archivo de estilos

const MenuComponent = () => {
    const navigate = useNavigate();  // Inicializamos useNavigate

    const handleHomeClick = () => {
        navigate('/restaurants');  // Redirige a la página de inicio
    };

    return (
        <div className="menu">
            <button className="menu-item" onClick={handleHomeClick}>
                <span style={{ fontSize: '24px' }}>🏠</span> {/* Emoji de la casita */}
                <span className="menu-text">Inicio</span> {/* Se añadió la clase para cambiar el color */}
            </button>
        </div>
    );
};

export default MenuComponent;
