
import "./App.css"

import Banner from "./components/Banner"

import emu from "./assets/images/svg/emu-svgrepo-com.svg"
import hotel from "./assets/images/svg/hotel-svgrepo-com.svg"
import map from "./assets/images/svg/map-svgrepo-com.svg"
import polaroid from "./assets/images/svg/polaroid-svgrepo-com.svg"
import suv from "./assets/images/svg/suv-svgrepo-com.svg"
import bath from "./assets/images/svg/take-a-bath-svgrepo-com.svg"

function App() {
  return (
  <body>
     <div className="card">
     <h1>React Course</h1>
     <p>Front-End Javascript</p>
    </div>

    <Banner titule="Transporte" description="use nosso transporte" image={emu} />
    <Banner titule="Hotel" description="Se hospede no nosso hotel" image={hotel} />
    <Banner titule="Mapa" description="Pegue o guia turistico" image={map} />
    <Banner titule="Fotos" description="Fotografre em polaroid" image={polaroid} />
    <Banner titule="Mobilidade" description="Use nosso carro" image={suv} />
    <Banner titule="Banho" description="Use nossas incriveis banheiras" image={bath} />
    
  </body>
  );
}

export default App;
