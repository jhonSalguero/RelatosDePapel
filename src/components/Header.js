// src/components/Header.js

import React from "react";
import { CartModal } from "../views/CartModal";
import MenuComponent from '../components/MenuComponent';  // Importamos el MenuComponent
import '../styles/Header.css';  // Asegúrate de importar el archivo de estilos

export const Header = () => {
    return (
        <header>
            <h1 className="header-footer-text">Bienvenidos a Relatos de Papel</h1>
            <div className="header-footer">
                <MenuComponent /> {/* Agregamos el botón del menú */}
                <CartModal /> {/* Agregamos el botón del carrito */}
            </div>
        </header>
    );
};
