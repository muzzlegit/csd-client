import Header from "layout/Header/Header";
import NavBar from "layout/NavBar/NavBar";
import { Outlet } from "react-router-dom";
import { Container, Module, Wrap } from "./RootLayout.styled";

const RootLayout = () => {
  return (
    <Container>
      <Header />
      <Wrap>
        <Module>
          <Outlet />
        </Module>
        <NavBar />
      </Wrap>
    </Container>
  );
};

export default RootLayout;
