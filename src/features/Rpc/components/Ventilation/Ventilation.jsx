import { useState } from "react";
import { TextInput } from "shared/ui";
import useRpcTotalInfo from "../RpcTotalInfo/useRpcTotalInfo";
import {
  Container,
  InputStyles,
  Title,
  Value,
  Wrap,
} from "./Ventilation.styled";

export const Ventilation = () => {
  const { totalPower } = useRpcTotalInfo();
  const [manualVentilation, setManualVentilation] = useState(0);
  const [manualPower, setManualPower] = useState(0);

  const calculateVentilation = (power) =>
    Math.ceil((3.1 * (0.3 * power)) / 0.6);

  const ventilation = calculateVentilation(totalPower);

  const handleManualVentilation = (e) => {
    const value = Number(e.currentTarget.value);

    if (isNaN(value) || !value) {
      setManualPower(0);
      setManualVentilation(0);
      return;
    }

    setManualPower(value);
    setManualVentilation(calculateVentilation(value));
  };

  return (
    <Container>
      <Title>Вентиляція</Title>
      <Value>{ventilation} м3</Value>
      <Wrap>
        <TextInput
          value={manualPower}
          handleInputValue={handleManualVentilation}
          placeholder="0"
          styles={InputStyles}
        />
        <Value>{manualVentilation} м3</Value>
      </Wrap>
    </Container>
  );
};
