import React from "react";

const Card = (props) => {
    const { image, title, description, footer } = props.cards
    return (
        <div className="card-group">
            <div className="card">
                <img src={image} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{description}</p>
                </div>
                <div className="card-footer">
                    <button>{footer}</button>
                </div>
            </div>
        </div>
    );
};

// Exportar el componente
export default Card;