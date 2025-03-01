import React, { useState } from "react";
import { useCart } from "../hooks/CartContext";
import { useNavigate } from "react-router-dom";

const CheckoutForm = () => {
  const { cart, clearCart } = useCart(); 
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  // Extraer solo los IDs como strings
  const bookIds = cart.map(book => book.id.toString());

  const totalPrice = cart.reduce(
    (acc, book) => acc + book.price * book.quantity, 0
  );

  const handlePayment = async () => {
    setLoading(true); // Deshabilita el botón mientras se procesa la compra
    try {
      const response = await fetch("http://localhost:8762/ms-books-payments/api/purchases/purchase", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          body: { books: bookIds }, // Formato correcto
          targetMethod: "POST"
        }),
      });

      if (!response.ok) throw new Error("Error al procesar la compra");

      const data = await response.json();
      console.log("Compra confirmada:", data);

      alert("Pedido realizado con éxito.");
      clearCart();
      navigate("/");
    } catch (error) {
      console.error("Error en la compra:", error);
      alert("No se pudo procesar la compra. Intenta nuevamente.");
    } finally {
      setLoading(false); // Reactivar botón
    }
  };

  return (
    <div className="checkout-form">
      <h2 className="checkout-form-title">
        Realizar Pago - Total: ${totalPrice.toFixed(2)}
      </h2>
      <p>Por favor, confirma tu pedido.</p>
      <button 
        className="checkout-form__button" 
        onClick={handlePayment}
        disabled={loading} // Deshabilita el botón si está procesando
      >
        {loading ? "Procesando..." : "Confirmar y Pagar"}
      </button>
    </div>
  );
};

export default CheckoutForm;
