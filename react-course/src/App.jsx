import "./App.css";

import Layout from "./components/Layout/index";
import Pikachu from "./assets/images/svg/Pikachu.jpg"

function App() {
  return (
    <body>
      <div className="card">
        <h1>React Course</h1>
        <p>Front-End Javascript</p>
      </div>
      <Layout
        tag="React"
        title="Curso React - Senai"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat."
        buttonLeft="Leia mais"
        buttonRight="Documentação"
        image={Pikachu}
      />
    </body>
  );
}

export default App;
