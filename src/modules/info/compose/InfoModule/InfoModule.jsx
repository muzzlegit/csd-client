import BusbarsCurrent from "modules/info/components/BusbarsCurrent/BusbarsCurrent";
import aluminumData from "../../data/aluminum.json";
import copperData from "../../data/copper.json";
import { Container } from "./InfoModule.styled";

const InfoModule = () => {
  return (
    <Container>
      <BusbarsCurrent type="copper" busbarData={copperData} />
      <BusbarsCurrent type="aluminum" busbarData={aluminumData} />
    </Container>
  );
};

export default InfoModule;
