function Botao({ texto }) {
  return <button>{texto}</button>;
}

function App({ meuParametro, blah }) {
  const texto = "Bah... texto embutido!";

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
      <Botao texto="Botao A" />
      <Botao texto="Botao B" />
      <Botao texto="Botao C" />
    </div>
  );
}

export default App;
