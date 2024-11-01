import { useContext, useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import { useOnlineStatus } from "../hooks/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

export const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const onlineStatus = useOnlineStatus();
  const { loggedInUser } = useContext(UserContext);
  const { items } = useSelector((state) => state.cart);

  return (
    <div className="bg-green-50 px-4 flex justify-between items-center shadow-lg mb-2">
      <div className="logo">
        <Link to={"/"}>
          <img src={LOGO_URL} className="w-32 h-32"></img>
        </Link>
      </div>
      <div className="">
        <ul className="flex justify-between gap-4">
          <li></li>
          <li>Online Status: {onlineStatus ? "🟢" : "🔴"}</li>
          <li>
            <Link to={"/"}>Home</Link>
          </li>
          <li>
            <Link to={"/about"}>About Us</Link>
          </li>
          <li>
            <Link to={"/contact"}>Contact Us</Link>
          </li>
          <li>
            <Link to={"/grocery"}>Grocery</Link>
          </li>
          <li>
            <Link to={"/cart"} className="font-semibold">
              Cart ({items?.length} items)
            </Link>
          </li>
          <li>
            <button
              style={{ width: "80px" }}
              onClick={() => {
                setIsLoggedIn(!isLoggedIn);
              }}
            >
              {isLoggedIn ? "Logout" : "Login"}
            </button>
          </li>

          <li>{loggedInUser}</li>
        </ul>
      </div>
    </div>
  );
};
