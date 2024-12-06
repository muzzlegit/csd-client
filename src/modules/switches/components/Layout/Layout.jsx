import PropTypes from "prop-types";
import { Container, Content, Header, Title } from "./Layout.styled";

const Layout = ({ title, children }) => {
  return (
    <Container>
      <Header>
        <Title>{title}</Title>
      </Header>
      <Content>{children}</Content>
    </Container>
  );
};

export default Layout;

Layout.propTypes = {
  title: PropTypes.string,
  children: PropTypes.element,
};
