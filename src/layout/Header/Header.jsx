import Logo from "shared/components/Logo/Logo";
import { Container } from "./Header.styled";

const Header = () => {
  return (
    <Container>
      <Logo height="22" width="100" />
      {/* <Profile /> */}
    </Container>
  );
};

export default Header;
