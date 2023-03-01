import { Botao } from "./Botao";
import tuxJpg from "../assets/tux.jpg";

function Principal(prop) {
  console.log("Este é o Principal");
  console.log(prop);
  const tamanho = 60;

  return (
    <main>
      <h2
        style={{
          backgroundColor: "red",
          fontSize: `${tamanho}px`,
          opacity: 0.5,
        }}
      >
        Estou aprendendo React!
      </h2>

      <Botao descricao="Primeiro Botao" sapato="batata" />
      <Botao descricao="Segundo Botao" sapato="cleitinho" />

      <br />

      <img src="/images/tux.jpg" alt="tux-url" />
      <img src={tuxJpg} alt="tux-imported" />

      <p onClick={() => console.log("clicou")}>{prop.exemploProp}</p>

      <input type="text" placeholder="teste" />
    </main>
  );
}

export default Principal;
