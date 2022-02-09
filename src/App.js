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
function App() {
  return (
    <>
      <div>
        <Navbar />
        <Header />
        <Feature1 />
        <Feature2 />
        <ImageCar />
        <Testimonial />
        <Pricing />
        <Team />
        <Footer />
      </div>
    </>
  );
}

export default App;
