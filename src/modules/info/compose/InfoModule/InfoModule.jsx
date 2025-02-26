import BusbarsCurrent from "features/BusbarsCurrent/BusbarsCurrent";
import { Rpc } from "modules/rpc";
import aluminumData from "../../data/aluminum.json";
import copperData from "../../data/copper.json";
import { Container } from "./InfoModule.styled";

const InfoModule = () => {
  return (
    <Container>
      <BusbarsCurrent busbarsMaterial="copper" busbarData={copperData} />
      <BusbarsCurrent busbarsMaterial="aluminum" busbarData={aluminumData} />
      <Rpc />
    </Container>
  );
};

export default InfoModule;
