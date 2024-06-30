import { useState } from "react";

const User = ({ name, location }) => {
  const [count, setCount] = useState(0);
  return (
    <div className="user-card">
      <h1>Count: {count}</h1>
      <h3>{name}</h3>
      <h4>{location} </h4>
      <h5>Contact: 12345</h5>
    </div>
  );
};

export default User;
