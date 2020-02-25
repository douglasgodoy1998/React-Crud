import React from "react";
import NavItem from "./navItem";

export default props => (
  <aside className="menu-area">
    <nav className="menu">
      <NavItem href="/" icon="home" desc="Início" />
      <NavItem href="/users" icon="users" desc="Usuários" />
    </nav>
  </aside>
);
