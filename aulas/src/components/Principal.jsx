//import Botao from "./Botao";
//import tuxJpg from "../assets/tux.jpg";

import React from "react";
import ToDo from "./ToDo";

function Principal(prop) {
  // console.log("Este é o Principal");
  // console.log(prop);
  const tamanho = 60;

  const itensTodo = [
    { id: 123, descricao: "Batata", concluido: true },
    { id: 543, descricao: "Arroz", concluido: true },
    { id: 564, descricao: "Sapato", concluido: false },
    { id: 266, descricao: "Gato", concluido: false },
  ];

  return (
    <main>
      {/* <ToDo descricao="Batata" concluido />
      <ToDo descricao="Arroz" concluido={true} />
      <ToDo descricao="Sapato" /> */}

      {itensTodo.map((item) => {
        return (
          <ToDo
            key={item.id}
            descricao={item.descricao}
            concluido={item.concluido}
          />
        );
      })}

      {/* Exemplo de fragment que não acrescenta elementos extras */}
      {true && (
        <>
          <span>Span</span>
          <strong>Strong</strong>
        </>
      )}

      <h2
        style={{
          backgroundColor: "red",
          fontSize: `${tamanho}px`,
          opacity: 0.5,
          display: "none",
        }}
      >
        Estou aprendendo React!
      </h2>

      {/* <img src="/images/tux.jpg" alt="tux-url" /> */}
      {/* <img src={tuxJpg} alt="tux-imported" /> */}
    </main>
  );
}

export default Principal;
