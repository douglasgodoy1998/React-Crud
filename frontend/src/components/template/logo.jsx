import "./logo.css";
import Logo from "../../assets/images/logo192.png";
import React from "react";
import { Link } from "react-router-dom";

export default props => (
  <aside className="logo">
    <Link to="/" className="logo">
      <img src={Logo} alt="logo" />
    </Link>
  </aside>
);
