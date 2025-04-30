import { AluminumBusbars, CopperBusBars } from "features/BusbarsCurrent";
import { Col, Container, Row } from "./Home.styled";

export const Home = () => {
  return (
    <Container>
      <Col>
        <Row>
          <CopperBusBars />
          <AluminumBusbars />
        </Row>
      </Col>
    </Container>
  );
};
