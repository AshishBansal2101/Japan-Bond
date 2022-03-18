import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer.js";
import Features from "./components/Features.js";
import Features2 from "./components/Features2.js";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Slider from "./components/Slider.js";
import { DepthOfFieldSnowfall } from "react-snowflakes";

const App = () => {
  return (
    <div>
      <Router>
        <Navbar />
        <div>
          <Slider />{" "}
          <DepthOfFieldSnowfall
            count={5}
            style={{
              // Position must be relative or absolute,
              // because snowflakes are positioned absolutely.
              position: "relative",
              width: "100vw",
              height: "150px",
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
              height: "150px",
            }}
          />
        </div>
        <div>
          <Features2 />
          <DepthOfFieldSnowfall
            count={5}
            style={{
              // Position must be relative or absolute,
              // because snowflakes are positioned absolutely.
              position: "relative",
              width: "100vw",
              height: "150px",
            }}
          />
        </div>
        <Footer />
      </Router>
    </div>
  );
};

export default App;
