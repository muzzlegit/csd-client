import PropTypes from "prop-types";
import { Acent, Container, Description, Title } from "./RpcStep.styled";
import useRpcStep from "./useRpcStep";

export const RpcStep = ({ step }) => {
  const { current, contactor, multiplier } = step;
  const { fuse } = useRpcStep(current);
  const { size = "", current: fuseCurrent = 0 } = fuse;

  const formatValue = (value) =>
    multiplier ? `${multiplier}x${value}` : value;

  return (
    <Container>
      <Description>
        <Title> Струм:</Title>
        <Acent>{formatValue(current) + " A"}</Acent>

        <Title> | Запобіжник:</Title>
        <Acent>{formatValue(fuseCurrent) + " A"}</Acent>
        <Title>{`(${size})`}</Title>

        <Title> | Контактор:</Title>
        <Acent>{formatValue(contactor) + " кВАр"}</Acent>
      </Description>
    </Container>
  );
};

RpcStep.propTypes = {
  step: PropTypes.shape({
    power: PropTypes.number,
    current: PropTypes.number.isRequired,
    contactor: PropTypes.number.isRequired,
    multiplier: PropTypes.number,
  }),
};
