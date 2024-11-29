import { NavLink } from "react-router-dom";

import { NavLinkItem, NavLinkText, NavSection } from "./Navigation.styled";

export default function Navigation() {
  const active = {
    color: "#3C4BF0",
    textDecoration: "none",
  };
  const notActive = {
    color: "#414546",
    textDecoration: "none",
  };

  return (
    <NavSection>
      <NavLinkItem>
        <NavLink
          to="/"
          style={({ isActive }) => (isActive ? active : notActive)}
        >
          <NavLinkText>RPC</NavLinkText>
        </NavLink>
      </NavLinkItem>
      <NavLinkItem>
        <NavLink
          to="/copper"
          style={({ isActive }) => (isActive ? active : notActive)}
        >
          <NavLinkText>Copper Price</NavLinkText>
        </NavLink>
      </NavLinkItem>
      <NavLinkItem>
        <NavLink
          to="/switches"
          style={({ isActive }) => (isActive ? active : notActive)}
        >
          <NavLinkText>Телергон</NavLinkText>
        </NavLink>
      </NavLinkItem>
      <NavLinkItem>
        <NavLink
          to="/busbars"
          style={({ isActive }) => (isActive ? active : notActive)}
        >
          <NavLinkText>Шини</NavLinkText>
        </NavLink>
      </NavLinkItem>
    </NavSection>
  );
}
