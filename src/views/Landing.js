import React from 'react';
import { Link } from 'react-router-dom';
import useCountdownRedirect from '../hooks/useCountdownRedirect';
import '../styles/Landing.css';
import myImagen from '../img/Logo.png';

function Landing() {
  const seconds = useCountdownRedirect('/index', 5); // Redirige a /index después de 5 segundos

  // Función para generar un color RGB aleatorio
  const generateRandomColor = () => {
    const r = Math.floor(Math.random() * 256); // Rojo
    const g = Math.floor(Math.random() * 256); // Verde
    const b = Math.floor(Math.random() * 256); // Azul
    return `rgb(${r}, ${g}, ${b})`;
  };

  // Colores aleatorios para los punteros láser
  const laserColor1 = generateRandomColor();
  const laserColor2 = generateRandomColor();

  return (
    <div className="landing">
      <img src={myImagen} alt="Logo" />
      {/* El Link ahora envuelve el título <h1> */}
      <Link to="/index">
        <h1>Bienvenido a Relatos de Papel</h1>
      </Link>

      {/* Mensaje con la cuenta regresiva */}
      <p>Serás redirigido a la página principal en {seconds} segundos...</p>

      {/* Punteros láser animados con colores aleatorios */}
      <span
        className="laser-pointer"
        style={{ backgroundColor: laserColor1 }} // Aplicamos el color aleatorio al primer puntero
      ></span>
      <span
        className="laser-pointer-reverse"
        style={{ backgroundColor: laserColor2 }} // Aplicamos el color aleatorio al segundo puntero
      ></span>
    </div>
  );
}

export default Landing;