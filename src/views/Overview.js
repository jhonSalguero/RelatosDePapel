import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Importamos Link para la navegación
import '../styles/styles.css';
import { Book } from "../components/Book";
import { useBooks } from "../hooks/useBooks"; 
import LinearProgressCustom from "../components/LinearProgressCustom"; 
import SearchBar from '../components/SearchBar';

export const Overview = () => {
    const { books, loading, error } = useBooks(); 
    const [searchTerm, setSearchTerm] = useState(''); 

    if (error) {
        return <div>Error al cargar los libros</div>;
    }

    const filteredBooks = books.filter(book => 
        book.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div>
            <h2 className="center-text">Libros Disponibles</h2>
            
            {loading ? (
                <LinearProgressCustom /> 
            ) : (
                <div>
                    <SearchBar 
                        searchTerm={searchTerm}
                        onSearchChange={(e) => setSearchTerm(e.target.value)} 
                    />
                    <div className="book-container">
                        {filteredBooks.length > 0 ? (
                            filteredBooks.map((book, index) => (
                                <div key={index}>
                                    <Link to={`/book/${book.id}`} > {/* Enlace a la vista del libro */}
                                        <Book
                                            id={book.id}
                                            title={book.title}
                                            author={book.author}
                                            genre={book.genre}
                                            rating={book.rating}
                                            price={book.price} // Pasar el precio al componente Book
                                            image={book.image} // Asegúrate de que `book.image` exista
                                        />
                                    </Link>
                                </div>
                            ))
                        ) : (
                            <p>No se encontraron libros disponibles</p>
                        )}
                    </div>
                </div>
            )}
        </div>
    );
};
