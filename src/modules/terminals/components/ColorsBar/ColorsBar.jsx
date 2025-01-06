import { COLORS } from "modules/terminals/utils/constants";
import { GrRevert } from "react-icons/gr";
import { Cell, Container, Index, Wrap } from "./ColorsBar.styled";
import { useColorsBar } from "./useColorsBar";

export const ColorsBar = () => {
  const { currentColor, handleColor } = useColorsBar();

  return (
    <Container>
      {Object.entries(COLORS).map(([color, data]) => {
        return (
          <Wrap key={color}>
            <Cell
              title={data.label}
              color={data.color}
              isActive={currentColor === color}
              onClick={() => {
                handleColor(color);
              }}
            >
              {data.index === "g" ? null : (
                <Index shouldRevers={data.index === "5"}>{data.index}</Index>
              )}
            </Cell>
            {currentColor === color ? <GrRevert /> : null}
          </Wrap>
        );
      })}
    </Container>
  );
};
