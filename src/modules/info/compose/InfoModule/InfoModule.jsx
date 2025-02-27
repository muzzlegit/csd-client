import { AluminumBusbars, CopperBusBars } from "features/BusbarsCurrent";
import { Rpc } from "features/Rpc";
import { Container } from "./InfoModule.styled";

const InfoModule = () => {
  return (
    <Container>
      <CopperBusBars />
      <AluminumBusbars />
      <Rpc />
    </Container>
  );
};

export default InfoModule;
