import React, { useState, useEffect } from "react";
import Header from "../components/Title"; 
import SearchBar from "../components/SearchBar";
import BookCard from "../components/BookCard";
import ConfirmationModal from "../components/ConfirmationModal";
import SuccessModal from "../components/SuccessModal";
import "../styles.css/BookList.css";
import { useCart } from "../hooks/CartContext";

const BooksList = () => {
  const [books, setBooks] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showConfirmModal, setShowConfirmModal] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [selectedBook, setSelectedBook] = useState(null);
  const { addToCart } = useCart();

  // URL de la API Gateway
  const API_URL = "https://a5fa-186-154-211-109.ngrok-free.app/ms-books-catalogue/api/books";

  // Cargar los libros desde la API con filtro visible=true
  useEffect(() => {
    const fetchBooks = async () => {
      setLoading(true);
      setError(null);

      const filter = {
        targetMethod: "GET",
        queryParams: {
          visible: [true]
        }
      };

      try {
        const response = await fetch(API_URL, {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(filter)
        });

        if (!response.ok) {
          throw new Error("Error al obtener los libros");
        }

        const data = await response.json();

        // Asegurar que todos los libros tengan los atributos necesarios
        const formattedBooks = data.map(book => ({
          id: book.id || 0,
          title: book.title || "Título desconocido",
          author: book.author || "Autor desconocido",
          isbn: book.isbn || "ISBN no disponible",
          category: book.category || "Sin categoría",
          rating: book.rating || 0,
          stock: book.stock ?? 0,
          price: book.price || 0,
          visible: book.visible !== undefined ? book.visible : true,
          publicationDate: book.publicationDate || "Fecha desconocida"
        }));

        setBooks(formattedBooks);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchBooks();
  }, []);

  // Filtrar libros por el término de búsqueda
  const filteredBooks = books.filter(book =>
    book.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Manejo del proceso de agregar al carrito
  const handleAddToCartClick = (book) => {
    setSelectedBook(book);
    setShowConfirmModal(true);
  };

  const handleConfirmAddToCart = () => {
    if (selectedBook) {
      addToCart(selectedBook);
      setShowConfirmModal(false);
      setShowSuccessModal(true);
    }
  };

  const handleCancelAddToCart = () => {
    setShowConfirmModal(false);
  };

  const handleCloseSuccessModal = () => {
    setShowSuccessModal(false);
  };

  return (
    <div className="books-list">
      <Header />
      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />

      {loading ? (
        <p>Cargando libros...</p>
      ) : error ? (
        <p className="error-message">Error: {error}</p>
      ) : (
        <table className="books-list__table">
          <thead>
            <tr>
              <th>Catálogo de Libros</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <div className="books-list__cards">
                  {filteredBooks.map((book) => (
                    <BookCard
                      key={book.id}
                      book={book}
                      addToCart={() => handleAddToCartClick(book)}
                    />
                  ))}
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      )}

      <ConfirmationModal
        show={showConfirmModal}
        onConfirm={handleConfirmAddToCart}
        onCancel={handleCancelAddToCart}
        bookTitle={selectedBook?.title}
      />
      <SuccessModal show={showSuccessModal} onClose={handleCloseSuccessModal} />
    </div>
  );
};

export default BooksList;
