import React from "react";
import { Header } from "./src/components/Header";
import { Body } from "./src/components/Body";
import { Footer } from "./src/components/Footer";

const App = () => {
  return (
    <>
      <div className="main">
        <Header />
        <Body />
      </div>
      <Footer />
    </>
  );
};

export default App;
