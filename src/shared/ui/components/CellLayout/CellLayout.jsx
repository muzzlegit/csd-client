import PropTypes from "prop-types";
import { Container, Content, Header, Title } from "./CellLayout.styled";

export const CellLayout = ({ title, children }) => {
  return (
    <Container>
      {title ? (
        <Header>
          <Title>{title}</Title>
        </Header>
      ) : null}
      <Content>{children}</Content>
    </Container>
  );
};

CellLayout.propTypes = {
  title: PropTypes.string,
  children: PropTypes.element,
};
