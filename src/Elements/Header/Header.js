import React from "react";
import "./Header.css";
import logo from "../../PL(black)-min.png";
const Header = () => {
  return (
    <header>
      <h1>Project Lily</h1>
      <a
        className="App-link"
        href="https://whatsapp.com/channel/0029Va9s8pH17Emp5rx6Rc15"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src={logo} className="App-logo" alt="logo" />
      </a>
      <p>Never Settle Persue Virtue.</p>
      <h3>Home</h3>
      <h3>Blog</h3>
      <h3>Shop</h3>
    </header>
  );
};

export default Header;
