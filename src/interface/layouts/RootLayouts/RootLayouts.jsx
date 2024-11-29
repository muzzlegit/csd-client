import Footer from "interface/Footer/Footer";
import Navigation from "interface/Navigation/Navigation";
import { Container, ContentBox, NavContainer } from "./RootLayouts.styled";

const RootLayouts = ({ children }) => {
  return (
    <Container>
      <ContentBox>
        {children}
        <Footer />
      </ContentBox>
      <NavContainer>
        <Navigation />
      </NavContainer>
    </Container>
  );
};

export default RootLayouts;
