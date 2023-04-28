import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer.js";
import Features from "./components/Features.js";
import Features2 from "./components/Features2.js";
import Testimonial from "./components/Testimonial.js";
import Contact from "./components/Contact.js";
import About from "./components/About.js";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Slider from "./components/Slider.js";
import { DepthOfFieldSnowfall } from "react-snowflakes";

const App = () => {
  return (
    <div>
      <Router>
        <Navbar />
        <a
          href="https://wa.me/2348100000000"
          class="whatsapp_float"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i class="fa fa-whatsapp whatsapp-icon"></i>
        </a>
      </Router>
      <div>
        <Slider />{" "}
        <DepthOfFieldSnowfall
          count={5}
          style={{
            position: "relative",
            width: "100vw",
            height: "20vh",
          }}
        />
      </div>
      <div>
        <Features />
        <DepthOfFieldSnowfall
          count={5}
          style={{
            // Position must be relative or absolute,
            // because snowflakes are positioned absolutely.
            position: "relative",
            width: "100vw",
            height: "20vh",
          }}
        />
      </div>
      <div>
        <About />
        <DepthOfFieldSnowfall
          count={5}
          style={{
            // Position must be relative or absolute,
            // because snowflakes are positioned absolutely.
            position: "relative",
            width: "100vw",
            height: "20vh",
          }}
        />
      </div>
      <hr />
      <div>
        <Features2 />
        <DepthOfFieldSnowfall
          count={5}
          style={{
            // Position must be relative or absolute,
            // because snowflakes are positioned absolutely.
            position: "relative",
            width: "100vw",
            height: "12vh",
          }}
        />
      </div>
      <div>
        <Contact />
        <DepthOfFieldSnowfall
          count={5}
          style={{
            // Position must be relative or absolute,
            // because snowflakes are positioned absolutely.
            position: "relative",
            width: "100vw",
            height: "20vh",
          }}
        />
      </div>
      <div>
        <Testimonial />
        <DepthOfFieldSnowfall
          count={5}
          style={{
            // Position must be relative or absolute,
            // because snowflakes are positioned absolutely.
            position: "relative",
            width: "100vw",
            height: "20vh",
          }}
        />
      </div>

      <Footer />
    </div>
  );
};

export default App;
