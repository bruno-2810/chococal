import React from "react";
import "./index.scss";

const AmargoCard = () => {
  return (
    <div className="card-container">
      <div className="card">
        <div className="card-img">
          <img
            src="/images/amargo.png" 
            alt="Chocolate amargo"
          />
        </div>
        <div className="card-content">
          <h2>Chocolate Amargo</h2>
          <p>
          Descubra o sabor intenso do nosso chocolate amargo, feito com cacau selecionado de alta qualidade. Com menos açúcar e uma textura rica, é a escolha ideal para os paladares mais sofisticados e para quem busca um equilíbrio perfeito entre intensidade e prazer.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AmargoCard;
