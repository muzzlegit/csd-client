import { NavLink } from "react-router-dom";

export default function Navigation() {
  const active = {
    color: "#00ffba",
    textDecoration: "none",
  };
  const notActive = {
    color: "#24c1e0",
    textDecoration: "none",
  };

  return (
    <nav>
      <div className="p-1 flex justify-center gap-6">
        {/* <NavLink
          to="/"
          style={({ isActive }) => (isActive ? active : notActive)}
        >
          RPC
        </NavLink> */}
        <NavLink
          to="/"
          style={({ isActive }) => (isActive ? active : notActive)}
        >
          Перемикачі
        </NavLink>
        <NavLink
          to="/copper"
          style={({ isActive }) => (isActive ? active : notActive)}
        >
          Ціна мідь та алюміній
        </NavLink>
      </div>

      <hr className="border-0 h-px bg-hr" />
    </nav>
  );
}
