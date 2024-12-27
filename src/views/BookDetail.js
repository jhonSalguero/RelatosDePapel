import React from 'react';
import { useParams } from 'react-router-dom';
import { useDetailBook } from '../hooks/useDetailBook'; // Asegúrate de que este hook esté bien
import { useCart } from '../context/CartContext';  // Importa el hook del contexto
import '../styles/BookDetail.css';

const BookDetail = () => {
  const { id } = useParams();  // Obtén el id del libro desde la URL
  const { book, loading, error } = useDetailBook(id);  // Usamos el hook para obtener los detalles del libro
  const { addToCart } = useCart();  // Obtén la función addToCart del contexto

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
      <h2>{title}</h2>
      <h3>Autor: {author}</h3>
      <p><strong>Género:</strong> {genre}</p>
      <p><strong>Calificación:</strong> {rating}</p>
      <p><strong>Descripción:</strong> {description}</p>
      <p><strong>Precio:</strong> ${price.toFixed(2)}</p> {/* Muestra el precio con 2 decimales */}
      <button onClick={handleAddToCart}>Añadir al carrito</button>
    </div>
  );
};

export default BookDetail;
