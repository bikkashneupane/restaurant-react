import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import { Header } from "./src/layout/Header";
import { Footer } from "./src/layout/Footer";
import UserContext from "./src/utils/UserContext";

const App = () => {
  const [loggedInUser, setLoggedInUser] = useState("Bikash");
  return (
    <>
      <UserContext.Provider value={{ loggedInUser, setLoggedInUser }}>
        <div className="min-h-[90vh]" style={{ minHeight: "90vh" }}>
          <Header />
          <Outlet />
        </div>
        <Footer />
      </UserContext.Provider>
    </>
  );
};
export default App;
