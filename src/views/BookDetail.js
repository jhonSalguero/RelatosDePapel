// BookDetail.js
import React from 'react';
import { useParams } from 'react-router-dom';
import { useDetailBook } from '../hooks/useDetailBook'; // Asegúrate de que este hook esté bien
import { useCart } from '../context/CartContext';  // Importa el hook del contexto
import useImg from '../hooks/useImg';  // Importa el hook useImg
import '../styles/BookDetail.css';

const BookDetail = () => {
  const { id } = useParams();  // Obtén el id del libro desde la URL
  const { book, loading, error } = useDetailBook(id);  // Usamos el hook para obtener los detalles del libro
  const { addToCart } = useCart();  // Obtén la función addToCart del contexto

  // Usamos el hook useImg para obtener la URL de la imagen según el id
  const imageUrl = useImg(id);

  if (loading) {
    return <div>Cargando...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  const { title, author, genre, rating, description, price } = book;

  const handleAddToCart = () => {
    addToCart(book);  // Llama a addToCart para añadir el libro al carrito
  };

  return (
    <div className="book-detail-container">
      <div className="book-info">
        <h2>{title}</h2>
        <h3>Autor: {author}</h3>
        <p><strong>Género:</strong> {genre}</p>
        <p><strong>Calificación:</strong> {rating}</p>
        <p><strong>Descripción:</strong> {description}</p>
        <p><strong>Precio:</strong> ${price.toFixed(2)}</p> {/* Muestra el precio con 2 decimales */}
      </div>
      
      {/* Segundo div con la imagen y el botón alineados a la derecha */}
      <div className="book-image-container">
        {imageUrl && <img src={imageUrl} alt={`Imagen de ${title}`} className="book-image" />}
        <button onClick={handleAddToCart}>Añadir al carrito</button>
      </div>
    </div>
  );
};

export default BookDetail;
