import React from "react";
import { Link } from "react-router-dom";

export const Another = ({ id, name, cuisine, rating }) => {
    return (
        <div className="card">
            <h3>{name}</h3>
            <p>Cocina: {cuisine}</p>
            <p>Calificación: {rating} / 5</p>
            <Link to={`/index/${id}`}>
                <button>Ver detalles</button>
            </Link>
        </div>
    );
}