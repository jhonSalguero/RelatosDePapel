import { useState, useEffect } from 'react';

// Hook personalizado useDetailBook
export const useDetailBook = (bookId) => {
    const [book, setBook] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // Lista de libros
    const books = [
        { id: "1", title: "El Principito", author: "Antoine de Saint-Exupéry", genre: "Ficción", rating: 4.9, description: "Un cuento sobre un niño y su encuentro con adultos extraños.", price: 15.99 },
        { id: "2", title: "1984", author: "George Orwell", genre: "Distopía", rating: 4.8, description: "Una novela distópica que trata sobre el totalitarismo.", price: 18.50 },
        { id: "3", title: "Cien Años de Soledad", author: "Gabriel García Márquez", genre: "Realismo mágico", rating: 4.7, description: "Una saga familiar en el mágico pueblo de Macondo.", price: 20.00 },
        { id: "4", title: "Orgullo y Prejuicio", author: "Jane Austen", genre: "Romántico", rating: 4.6, description: "Una historia de amor entre Elizabeth Bennet y el Sr. Darcy.", price: 14.75 },
        { id: "5", title: "Matar a un ruiseñor", author: "Harper Lee", genre: "Drama", rating: 4.5, description: "La lucha contra la injusticia racial en el sur de Estados Unidos.", price: 17.20 },
        { id: "6", title: "La Sombra del Viento", author: "Carlos Ruiz Zafón", genre: "Suspenso", rating: 4.8, description: "Un joven descubre un libro olvidado y se adentra en un misterio literario.", price: 19.99 },
        { id: "7", title: "Don Quijote de la Mancha", author: "Miguel de Cervantes", genre: "Clásico", rating: 5.0, description: "Las aventuras de un caballero que cree luchar por la justicia.", price: 22.00 },
        { id: "8", title: "El Gran Gatsby", author: "F. Scott Fitzgerald", genre: "Novela histórica", rating: 4.4, description: "Un retrato del sueño americano y la decadencia de la alta sociedad.", price: 16.50 },
        { id: "9", title: "Cumbres Borrascosas", author: "Emily Brontë", genre: "Gótico", rating: 4.6, description: "La trágica historia de amor entre Heathcliff y Catherine.", price: 18.00 },
        { id: "10", title: "Crimen y Castigo", author: "Fiódor Dostoyevski", genre: "Psicológico", rating: 4.8, description: "El dilema moral de un hombre que comete un asesinato.", price: 21.25 }
    ];
    

    useEffect(() => {
        const fetchBook = () => {
            setLoading(true);
            setError(null);

            const foundBook = books.find(b => b.id === bookId);
            if (foundBook) {
                setBook(foundBook);
            } else {
                setError('Libro no encontrado');
            }
            setLoading(false);
        };

        fetchBook();
    }, [bookId]); // Solo se vuelve a ejecutar cuando cambia el bookId

    return { book, loading, error };
};
