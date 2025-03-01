// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Cart from "./views/Cart";
import Landing from './views/Landing';
import BooksList from './views/BooksList';
import BookDetails from './views/BookDetails';
import Checkout from "./views/Checkout";



const App = () => (
  <Router>
    <div className="app">
      <Navbar />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/books" element={<BooksList />} />
        <Route path="/books/:id" element={<BookDetails />} />
        <Route path="/checkout" element={<Cart />} />
        <Route path="/payment" element={<Checkout />} />
      </Routes>
      
    </div>
    <Footer />
  </Router>
);

export default App;