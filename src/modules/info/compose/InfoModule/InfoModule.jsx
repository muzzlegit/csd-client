import BusbarsCurrent from "modules/info/components/BusbarsCurrent/BusbarsCurrent";
import copperData from "../../data/copper.json";
import { Container } from "./InfoModule.styled";

const InfoModule = () => {
  return (
    <Container>
      <BusbarsCurrent type="copper" busbarData={copperData} />
    </Container>
  );
};

export default InfoModule;
