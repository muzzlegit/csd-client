import { Select } from "shared/ui";
import { RpcStep } from "../RpcStep/RpcStep";
import { Container, Position, Step } from "./RpcStepsList.styled";
import useRpcStepsList from "./useRpcStepsList";

export const RpcStepsList = () => {
  const { options, steps, handleStep } = useRpcStepsList();

  return (
    <Container>
      {steps.map((step, index) => {
        const value = step?.power ?? 0;
        const isWarn =
          step && index > 0 && (steps[index - 1]?.power ?? 200) > value;
        return (
          <Step key={`Step_${index}`} isWarn={isWarn}>
            <Position>{index + 1}.</Position>
            <Select
              id={`Step_${index}`}
              value={value}
              options={options}
              onChange={(e) => {
                const { value } = e.currentTarget.dataset;
                handleStep(index, value);
              }}
              placeholder="0"
              width="50px"
              isShort={true}
            />
            {step ? <RpcStep step={step} /> : null}
          </Step>
        );
      })}
    </Container>
  );
};
