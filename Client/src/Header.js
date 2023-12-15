import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "./userContext";

const Header = () => {
  const { setUserInfo, userInfo } = useContext(UserContext);
  useEffect(() => {
    fetch("http://localhost:4000/profile", {
      credentials: "include",
    }).then((Response) => {
      Response.json().then((userInfo) => {
        setUserInfo(userInfo);
      });
    });
  });

  const logout = () => {
    fetch("http://localhost:4000/logout", {
      credentials: "include",
      method: "POST",
    });
    setUserInfo(null);
  };

  const username = userInfo?.username;
  return (
    <header>
      <Link to="/" className="logo">
        FlexxBlog
      </Link>
      <nav>
        {username && (
          <>
            <span style={{ color: "#ebff9a" }}>Hello, {username}!</span>
            <Link to="/create">Create</Link>
            <Link onClick={logout}>Logout</Link>
          </>
        )}
        {!username && (
          <>
            <Link to="/login">Login</Link>
            <Link to="/register">Register</Link>
          </>
        )}
      </nav>
    </header>
  );
};

export default Header;
