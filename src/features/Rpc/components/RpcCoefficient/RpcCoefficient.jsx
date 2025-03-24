import useRpcStore from "features/Rpc/store";
import {
  Button,
  Coefficient,
  Container,
  Title,
  Wrap,
} from "./RpcCoefficient.styled";

export const RpcCoefficient = () => {
  const capacitorsCoefficient = useRpcStore(
    (state) => state.capacitorsCoefficient
  );
  const mainSwitchCoefficient = useRpcStore(
    (state) => state.mainSwitchCoefficient
  );
  const increaseCapacitorsCoefficient = useRpcStore(
    (state) => state.increaseCapacitorsCoefficient
  );
  const decreaseCapacitorsCoefficient = useRpcStore(
    (state) => state.decreaseCapacitorsCoefficient
  );
  const increaseMainSwitchCoefficient = useRpcStore(
    (state) => state.increaseMainSwitchCoefficient
  );
  const decreaseMainSwitchCoefficient = useRpcStore(
    (state) => state.decreaseMainSwitchCoefficient
  );
  return (
    <Container>
      <Title>Коефіцієнт струму конденсаторів</Title>
      <Wrap>
        <Button onClick={decreaseCapacitorsCoefficient}>-</Button>
        <Coefficient>{capacitorsCoefficient}</Coefficient>
        <Button onClick={increaseCapacitorsCoefficient}>+</Button>
      </Wrap>
      <Title>Коефіцієнт струму головного вимикача</Title>
      <Wrap>
        <Button onClick={decreaseMainSwitchCoefficient}>-</Button>
        <Coefficient>{mainSwitchCoefficient}</Coefficient>
        <Button onClick={increaseMainSwitchCoefficient}>+</Button>
      </Wrap>
    </Container>
  );
};
