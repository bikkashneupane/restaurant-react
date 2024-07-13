import { createContext } from "react";

//create context
const userContext = createContext({
  loggedInUser: "Default User",
});

export default userContext;
