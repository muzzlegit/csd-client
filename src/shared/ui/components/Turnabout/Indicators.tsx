import { Container, Dot } from "./Indicators.styled";

type IndicatorsProps = {
  count: number;
  activeItemIndex: number;
};

export const Indicators = ({ count, activeItemIndex }: IndicatorsProps) => {
  return (
    <Container>
      {Array.from({ length: count }, (_, x) => {
        return <Dot key={x} isActive={activeItemIndex === x} />;
      })}
    </Container>
  );
};
