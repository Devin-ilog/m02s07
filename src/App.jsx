import Botao from "./Botao";

// Definição do componente App
function App({ meuParametro, blah }) {
  const texto = "Bah... texto embutido!";

  // Todo componente deve retornar JSX
  return (
    <div
      id="idddd"
      className="teste"
      style={{
        color: "green",
      }}
    >
      <h1>Olá React!</h1>
      <h2>{texto}</h2>
      <p>
        {meuParametro} {blah}
      </p>
      {/* Utilização de um componente Botao repetidas vezes */}
      <Botao texto="Botao A" />
      <Botao texto="Botao B" />
      <Botao texto="Botao C" />
    </div>
  );
}

export default App;
