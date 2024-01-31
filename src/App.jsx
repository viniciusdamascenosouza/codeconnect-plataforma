import { useEffect, useState } from "react";
import "./App.css";
import BarraDePesquisa from "./components/BarraDePesquisa";
import Card from "./components/Card";
import Filtro from "./components/Filtro";
import Ordenacao from "./components/Ordenacao";
import Sidebar from "./components/Sidebar";

function App() {
  const [dados, setDados] = useState([]);
  useEffect(() => {
    fetch(
      "https://my-json-server.typicode.com/MonicaHillman/codeconnect-api/publicacoes"
    )
      .then((resposta) => resposta.json())
      .then((dados) => setDados(dados));
  }, []);

  console.log(dados);

  return (
    <div className="container">
      <Sidebar />
      <div>
        <BarraDePesquisa />
        <Filtro />
        <Ordenacao />
        <Card />
      </div>
    </div>
  );
}

export default App;
