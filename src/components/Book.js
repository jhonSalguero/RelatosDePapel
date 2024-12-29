import React from 'react';
import { Link } from 'react-router-dom';
import useImg from '../hooks/useImg'; // Importa el hook personalizado

export const Book = ({ id, title, author, genre, rating, price }) => {
    const image = useImg(id); // Usa el hook para obtener la imagen correspondiente al ID

    return (
        <div className="book-item">
            {image && <img src={image} alt={`Portada de ${title}`} className="book-image" />} {/* Renderiza la imagen */}
            <h3>{title}</h3>
            <p>Autor: {author}</p>
            <p>Género: {genre}</p>
            <p>Calificación: {rating}</p>
            <p><strong>Precio:</strong> ${price.toFixed(2)}</p>
            <Link to={`/book/${id}`}>Ver detalles</Link>
        </div>
    );
};
