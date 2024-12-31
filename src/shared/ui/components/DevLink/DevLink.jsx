import styled from "@emotion/styled";
import { GiDualityMask } from "react-icons/gi";
import { Link, useLocation } from "react-router-dom";

export const Item = styled.div(({ theme, isActive }) => ({
  width: "60px",
  height: "60px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  borderRadius: "50%",
  cursor: "pointer",
  color: theme.colors.textIdle[40],
  backgroundColor: theme.colors.white[20],
  ...(isActive
    ? {
        color: theme.colors.acent[100],
      }
    : {}),
}));

export const DevLink = () => {
  const location = useLocation();
  return (
    <div>
      <Link to="/dev">
        <Item title="dev" isActive={location.pathname === "/dev"}>
          <GiDualityMask size="38px" />
        </Item>
      </Link>
    </div>
  );
};
