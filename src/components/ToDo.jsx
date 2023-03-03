import { useState } from "react";
import PropTypes from "prop-types";

function ToDo({ descricao, concluido }) {
  const [checado, setChecado] = useState(concluido);

  function clicou(event) {
    console.log("clicou", event.target);
    setChecado(!checado);
  }

  // Uma maneira de fazer renderização condicional
  // if (descricao === "Arroz") {
  //   return <div>Não mexa no arroz</div>;
  // }

  return (
    <div>
      <input type="checkbox" onChange={clicou} checked={checado} />
      <span style={{ textDecoration: checado ? "line-through" : "none" }}>
        {descricao}
      </span>
      {/* Renderizações condicionais equivalentes */}
      {/* {checado ? <button>🗑️</button>: null} */}
      {checado && <button>🗑️</button>}
    </div>
  );
}

ToDo.propTypes = {
  descricao: PropTypes.string.isRequired,
  concluido: PropTypes.bool,
};

ToDo.defaultProps = {
  concluido: false,
};

export default ToDo;
