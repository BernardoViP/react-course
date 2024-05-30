import Footer from "./src/pattern/composition/land-footer.jsx";
import Header from "./src/pattern/composition/land-header.jsx";
import Nav from "./src/pattern/composition/land-nav.jsx";
import "./styles.js"

export default function LandComposition() {
  return (
    <div>
      <Header/>
      <Gallery/>
      <Contact/>
    </div>
  );
}