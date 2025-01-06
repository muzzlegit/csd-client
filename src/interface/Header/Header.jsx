import Logo from "interface/Logo/Logo";
import { Profile } from "modules/profile";
import { Container } from "./Header.styled";

const Header = () => {
  return (
    <Container>
      <Logo height="22" width="100" />
      <Profile />
    </Container>
  );
};

export default Header;
