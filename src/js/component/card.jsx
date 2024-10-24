import React from "react";

const Card = (props) => {
    const { image, title, description } = props.cards; // Cambiado a 'props.cards' para extraer los valores
    return (
        <div className="card" style={{ width: '300px' }}>
            <img src={image} className="card-img-top" style={{ height: '200px', objectFit: 'cover' }} alt={title} />
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{description}</p>
                <button className="btn btn-primary">
                    Find out More!
                </button>
            </div>
        </div>
    );
};

// Exportar el componente
export default Card;
