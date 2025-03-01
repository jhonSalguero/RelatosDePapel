import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "../styles.css/BookDetail.css";
import { useCart } from "../hooks/CartContext";

const BookDetails = () => {
  const { id } = useParams();
  const { addToCart } = useCart();
  const [book, setBook] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBookDetails = async () => {
      try {
        const response = await fetch("https://ed7a-191-107-208-118.ngrok-free.app/ms-books-catalogue/api/books", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            targetMethod: "GET",
            queryParams: { visible: [true] },
          }),
        });

        if (!response.ok) {
          throw new Error("Error al obtener los detalles del libro");
        }

        const data = await response.json();
        const foundBook = data.find((b) => b.id === parseInt(id));

        if (!foundBook) {
          throw new Error("Libro no encontrado o no disponible");
        }

        setBook(foundBook);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchBookDetails();
  }, [id]);

  if (loading) return <p>Cargando detalles del libro...</p>;
  if (error) return <p className="error-message">Error: {error}</p>;
  if (!book) return <p>Libro no encontrado.</p>;

  return (
    <div className="book-details">
      <h1 className="book-details__title">{book.title}</h1>
      <p className="book-details__author">Autor: {book.author}</p>
      <p className="book-details__description">
        Descripción: {book.description ? book.description : "Descripción no disponible"}
      </p>
      <p className="book-details__price">Precio: ${book.price}</p>
      <button className="book-details__button" onClick={() => addToCart(book)}>
        Añadir al carrito
      </button>
    </div>
  );
};

export default BookDetails;
