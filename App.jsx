import React from "react";
import { Outlet } from "react-router-dom";
import { Header } from "./src/layout/Header";
import { Footer } from "./src/layout/Footer";

const App = () => {
  return (
    <>
      <div className="main">
        <Header />
        <Outlet />
      </div>
      <Footer />
    </>
  );
};
export default App;
