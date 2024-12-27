// src/hooks/useCountdownRedirect.js
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function useCountdownRedirect(path, countdown) {
  const [seconds, setSeconds] = useState(countdown);
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setInterval(() => {
      setSeconds((prevSeconds) => {
        if (prevSeconds === 1) {
          clearInterval(timer);
          navigate(path); // Redirige cuando los segundos lleguen a 0
        }
        return prevSeconds - 1;
      });
    }, 1000);

    // Limpiar el temporizador cuando el componente se desmonte
    return () => clearInterval(timer);
  }, [navigate, path]);

  return seconds; // Retornamos el valor actual de los segundos
}

export default useCountdownRedirect;
