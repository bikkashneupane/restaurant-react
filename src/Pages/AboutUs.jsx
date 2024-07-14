import React from "react";
import User from "../components/User";
import UserClass from "../components/UserClass";
import UserContext from "../utils/UserContext";

const AboutUs = () => {
  return (
    <div>
      <h1>About Class Component</h1>

      <div>
        Logged In User
        <UserContext.Consumer>
          {({ loggedInUser }) => <h1>{loggedInUser}</h1>}
        </UserContext.Consumer>
      </div>

      {/* <User name={"Bikash Function"} location={"Syndey, Australia"} /> */}
      <UserClass name={"Bikash Class"} location={"Syndey, Australia"} />
    </div>
  );
};

export default AboutUs;
