import React from "react";
import "./index.scss";

const BrancoCard = () => {
  return (
    <div className="card-container">
      <div className="card">
        <div className="card-img">
          <img
            src="/images/branco.png" 
            alt="Chocolate Branco"
          />
        </div>
        <div className="card-content">
          <h2>Chocolate Branco</h2>
          <p>
          Delicie-se com a suavidade do nosso chocolate branco, feito com os mais finos ingredientes. Sua textura aveludada e o sabor doce e delicado proporcionam uma experiência única, perfeita para momentos especiais ou para compartilhar com quem você ama.
          </p>
        </div>
      </div>
    </div>
  );
};

export default BrancoCard;
