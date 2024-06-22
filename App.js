import React from "react";
import ReactDOM from "react-dom/client";
import { Header } from "./src/components/Header";
import { Body } from "./src/components/Body";
import { Footer } from "./src/components/Footer";

const App = () => {
  return (
    <div>
      <div className="main">
        <Header />
        <Body />
      </div>
      <Footer />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
