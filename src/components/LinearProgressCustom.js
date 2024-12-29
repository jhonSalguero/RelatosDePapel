import React, { useEffect, useState } from 'react';
import '../styles/LinearProgressCustom.css';  // Asegúrate de que los estilos sean correctos

const LinearProgressCustom = () => {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        // Simulamos el progreso incrementándose hasta 100
        if (progress < 100) {
            const interval = setInterval(() => {
                setProgress(prev => Math.min(prev + 1, 100)); // Incrementa el progreso
            },10);  // Cada 10ms aumenta un 1% de progreso
            return () => clearInterval(interval); // Limpiar el intervalo cuando el componente se desmonte
        }
    }, [progress]);

    return (
        <div className="linear-progress-container">
            <div className="linear-progress-bar" style={{ width: `${progress}%` }} />
        </div>
    );
};

export default LinearProgressCustom;  // Exporta por defecto
