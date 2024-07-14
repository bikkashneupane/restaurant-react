import { createContext } from "react";

//create context
const UserContext = createContext({
  loggedInUser: "Default User",
});

export default UserContext;
