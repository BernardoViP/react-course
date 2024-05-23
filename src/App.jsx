import "./App.css"
import PriceContent from "./components/Pricing/src/pattern/composition/price-content.composition";
import PriceSection from "./components/Pricing/src/pattern/composition/price-section.composition";



function App() {
  return (
    <body>
      <PriceSection/>
      <PriceContent/>
    </body>
  );
}

export default App;


