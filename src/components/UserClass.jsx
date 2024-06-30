import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo: {},
    };

    console.log("Constructor");
  }

  async componentDidMount() {
    // api call here in component did mount and update state
    const response = await fetch("https://api.github.com/users/bikkashneupane");
    const data = await response.json();

    this.setState({
      userInfo: data,
    });

    console.log("Component did mount");
  }

  componentDidUpdate() {
    console.log("Component did update");
  }

  componentWillUnmount() {
    console.log("Component will unmount");
  }

  render() {
    const { name, location } = this.props;
    const { userInfo } = this.state;

    // console.log(userInfo);
    console.log("Render");

    return (
      <div className="user-card">
        <img src={userInfo?.avatar_url} alt="" className="user-img" />
        <h3>{name}</h3>
        <h4>{location} </h4>
        <h5>Contact: 12345</h5>
      </div>
    );
  }
}

export default UserClass;
