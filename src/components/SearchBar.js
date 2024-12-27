// src/components/SearchBar.js
import React from 'react';
import '../styles/SearchBar.css'; 


const SearchBar = ({ searchTerm, onSearchChange }) => {
    return (
        <div className="search-bar">
            <input 
                type="text" 
                value={searchTerm} 
                onChange={onSearchChange} 
                placeholder="Buscar por título..." 
                className="search-input"
            />
        </div>
    );
};

export default SearchBar;
