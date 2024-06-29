import "./App.css";
import { Routes, Route, } from "react-router-dom"
import Navbar from "./hooks/components/navbar";
import TeamComposition from "./components/Team";
import Form from "./styles/tailwind-css/form"
import GetPokemon from "./components/api/api-pokemon";

function Home() {
  return(
    <Navbar />
  )
}

function App() {
    return (
      <body>
        <Routes>
          <Route path="/" Component={Home} />
          <Route path="/teams" Component={TeamComposition} />
          <Route path="/form" Component={Form} />
          <Route path="/pokemon" Component={GetPokemon} />
        </Routes>
      </body>
  );
}

export default App;