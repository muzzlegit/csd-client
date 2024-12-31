import Header from "interface/Header/Header";
import { NavBar } from "interface/index";
import { Outlet } from "react-router-dom";
import { DevLink } from "shared/ui";
import { Container, Module, TemporaryWrap, Wrap } from "./RootLayout.styled";

const RootLayout = () => {
  return (
    <Container>
      <Header />
      <Wrap>
        <Module>
          <Outlet />
        </Module>
        <TemporaryWrap>
          <NavBar />
          <DevLink />
        </TemporaryWrap>
      </Wrap>
    </Container>
  );
};

export default RootLayout;
