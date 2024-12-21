import Logo from "interface/Logo/Logo";
import { Container } from "./Header.styled";

const Header = () => {
  return (
    <Container>
      <Logo height="22" width="100" />
    </Container>
  );
};

export default Header;
