import React from 'react';
import { Link } from 'react-router-dom'; // Importamos Link para la navegación

export const Book = ({ id, title, author, genre, rating, price }) => {
    return (
        <div className="book-item">
            <h3>{title}</h3>
            <p>Autor: {author}</p>
            <p>Género: {genre}</p>
            <p>Calificación: {rating}</p>
            <p><strong>Precio:</strong> ${price.toFixed(2)}</p> {/* Muestra el precio con 2 decimales */}
            <Link to={`/book/${id}`}>Ver detalles</Link>
        </div>
    );
};
