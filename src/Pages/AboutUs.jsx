import React from "react";
import User from "../components/User";
import UserClass from "../components/UserClass";

const AboutUs = () => {
  return (
    <div>
      <h1>About Us</h1>

      {/* <User name={"Bikash Function"} location={"Syndey, Australia"} /> */}
      <UserClass name={"Bikash Class"} location={"Syndey, Australia"} />
    </div>
  );
};

export default AboutUs;
