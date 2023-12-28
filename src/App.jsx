import React from "react";
import "./App.css";
import "./App.scss";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Home from "./components/home/Home";

const App = () => {
  return (
    <div className="container">
      <Header />

      <Home />

      <Footer />
    </div>
  );
};

export default App;
