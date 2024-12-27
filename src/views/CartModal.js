import React, { useState } from "react";
import { useCart } from "../context/CartContext";
import { useNavigate } from "react-router-dom";
import Modal from "../components/Modal"; // Importa el componente Modal
import ThankYouModal from "../components/ThankYouModal"; // Importa el componente ThankYouModal
import '../styles/CartModalStyle.css'; // Asegúrate de importar el archivo de estilos

export const CartModal = () => {
  const { cartItems, removeFromCart, clearCart } = useCart();
  const [isOpen, setIsOpen] = useState(false);
  const [showThankYouModal, setShowThankYouModal] = useState(false); // Nuevo estado para el modal de gracias
  const navigate = useNavigate();

  const handlePurchase = () => {
    clearCart();
    setShowThankYouModal(true); // Mostrar el modal de agradecimiento
    setTimeout(() => {
      setShowThankYouModal(false); // Cerrar el modal después de 2 segundos
      navigate("/restaurants"); // Redirigir a la vista de restaurantes
    }, 2000); // Cerrar el modal después de 2 segundos
  };

  return (
    <>
      <button onClick={() => setIsOpen(true)} className="cart-button">🛒 {cartItems.length}</button>
      <Modal isOpen={isOpen} close={() => setIsOpen(false)}>
        <h2>Carrito</h2>
        {cartItems.length === 0 ? (
          <p>Tu carrito está vacío</p>
        ) : (
          <ul>
            {cartItems.map((item) => (
              <li key={item.id}>
                {item.title} - {item.author} - ${item.price.toFixed(2)} {/* Mostrar el precio aquí */}
                <button
                  onClick={() => removeFromCart(item.id)}
                  className="delete-button"
                >
                  Eliminar
                </button>
              </li>
            ))}
          </ul>
        )}
        <button onClick={handlePurchase} className="buy-button">
          Comprar
        </button>
      </Modal>
      <ThankYouModal isOpen={showThankYouModal} />
    </>
  );
};
