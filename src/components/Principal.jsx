import tuxJpg from "../assets/tux.jpg";

function Principal() {
  console.log("Este é o Principal");

  return (
    <main>
      <h2>Estou aprendendo React!</h2>

      <img src="/images/tux.jpg" alt="tux-url" />
      <img src={tuxJpg} alt="tux-imported" />

      <p onClick={() => console.log("clicou")}>
        Este é meu primeiro site com React.
      </p>
      <input type="text" placeholder="teste" />
    </main>
  );
}

export default Principal;
