import { NavBar } from "interface/index";
import { Outlet } from "react-router-dom";
import { Container, Module } from "./RootLayout.styled";

const RootLayout = () => {
  return (
    <Container>
      <Module>
        <Outlet />
      </Module>
      <NavBar />
    </Container>
  );
};

export default RootLayout;
