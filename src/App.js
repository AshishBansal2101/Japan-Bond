import "./App.css";
import Navbar from "./components/Navbar.js";
import Footer from "./components/Footer.js";
import Header from "./components/Header.js";
import Feature1 from "./components/Feature1.js";
import Feature2 from "./components/Feature2.js";
import Testimonial from "./components/Testimonial.js";
import Pricing from "./components/Pricing.js";
import Team from "./components/Team.js";
import ImageCar from "./ImageCar.js";
import Fade from "react-awesome-reveal";
import Slide from "react-awesome-reveal";
function App() {
  return (
    <>
      <div>
        <fade cascade>
          <Navbar />
          <Header />
          <Slide triggerOnce>
            <Feature1 />
          </Slide>
          <Slide triggerOnce>
            <Feature2 />
          </Slide>
          <ImageCar />
          <Slide triggerOnce>
            <Testimonial />
          </Slide>
          <Slide triggerOnce>
            <Pricing />
          </Slide>
          <Slide triggerOnce>
            <Team />
          </Slide>
          <Footer />
        </fade>
      </div>
    </>
  );
}

export default App;
