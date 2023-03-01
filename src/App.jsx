import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";

// Definição do componente App
function App() {
  const texto = "Bah... texto embutido!";

  // Todo componente deve retornar JSX
  return (
    <div>
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
