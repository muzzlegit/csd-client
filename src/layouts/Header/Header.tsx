import { NavBar } from "layouts/NavBar/NavBar";
import { Logo } from "shared/ui";
import { ThemeSwitch } from "shared/ui/components/ThemeSwitch/ThemeSwitch";
import { Container, LogoWrap } from "./Header.styled";

export const Header = () => {
  return (
    <Container>
      <LogoWrap></LogoWrap>
      <Logo height="22" width="100" />
      <NavBar />
      <ThemeSwitch />
    </Container>
  );
};
