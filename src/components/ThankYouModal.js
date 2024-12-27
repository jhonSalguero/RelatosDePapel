import React from 'react';
import '../styles/Modal.css';  // Si tu modal tiene estilos específicos

const ThankYouModal = ({ isOpen }) => {
  if (!isOpen) return null;

  return (
    <div className="thank-you-modal">
      <div className="thank-you-modal-content">
        <h2>¡Compra realizada con éxito!</h2>
      </div>
    </div>
  );
};

export default ThankYouModal;
