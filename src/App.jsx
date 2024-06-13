import "./App.css";
import { Routes, Route, } from "react-router-dom"
import Navbar from "./hooks/components/navbar";
import TeamComposition from "./components/Team";
import Form from "./styles/tailwind-css/form"

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
        </Routes>
      </body>
  );
}

export default App;