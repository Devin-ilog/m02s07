import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

const elementoRaiz = document.getElementById("raiz-do-app");

const reactRoot = ReactDOM.createRoot(elementoRaiz);

reactRoot.render(
  <React.StrictMode>
    <App meuParametro="sou texto parametro" blah="batata" />
  </React.StrictMode>
);
