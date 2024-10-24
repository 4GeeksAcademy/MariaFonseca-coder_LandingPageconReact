import React from "react";

// Componente Jumbotron
const Jumbotron = () => {
    return (
        <div className="p-5 mb-4 bg-light rounded-3">
            <div className="container-fluid py-5">
                <h1 className="display-5 fw-bold">Bienvenido al Jumbotron</h1>
                <p className="col-md-8 fs-4">
                    Este es un ejemplo de un componente jumbotron simple para llamar más
                    atención a contenido destacado o información.
                </p>
                <button className="btn btn-primary btn-lg" type="button">
                    Ver más
                </button>
            </div>
        </div>
    );
};

// Exportar el componente
export default Jumbotron;