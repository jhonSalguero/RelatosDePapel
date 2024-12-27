import React from "react";
import "../styles/Modal.css"; // Si tu modal tiene estilos específicos

const Modal = ({ isOpen, close, children }) => {
  if (!isOpen) return null;

  return (
    <div className="modal">
      <div className="modal-content">
        {children}
        <div className="modal-actions">
          <button onClick={close} className="close-button">
            Cerrar
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
