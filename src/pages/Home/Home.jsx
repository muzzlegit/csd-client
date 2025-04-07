import { AluminumBusbars, CopperBusBars } from "features/BusbarsCurrent";
import { Rpc } from "features/Rpc";
import { SearchItem } from "features/SearchItem";
import { Col, Container, Row } from "./Home.styled";

export const Home = () => {
  return (
    <Container>
      <Col>
        <Row>
          <CopperBusBars />
          <AluminumBusbars />
        </Row>
        <SearchItem />
      </Col>
      <Rpc />
    </Container>
  );
};
