import { NavBar } from "layouts/NavBar/NavBar";
import { Logo } from "shared/ui";
import { Container, LogoWrap } from "./Header.styled";

export const Header = () => {
  return (
    <Container>
      <LogoWrap>
        <Logo height="22" width="100" />
      </LogoWrap>
      <NavBar />
    </Container>
  );
};
