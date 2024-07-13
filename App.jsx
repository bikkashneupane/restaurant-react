import React from "react";
import { Outlet } from "react-router-dom";
import { Header } from "./src/layout/Header";
import { Footer } from "./src/layout/Footer";

const App = () => {
  return (
    <>
      <div className="min-h-[90vh]" style={{ minHeight: "90vh" }}>
        <Header />
        <Outlet />
      </div>
      <Footer />
    </>
  );
};
export default App;
