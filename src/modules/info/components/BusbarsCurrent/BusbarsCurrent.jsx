import { BusbarsListType } from "modules/info/utils/types/propTypes";
import PropTypes from "prop-types";
import { CopyButton } from "shared/ui";
import Dot from "../Dot/Dot";
import {
  Container,
  Current,
  CurrentBox,
  DotBox,
  Title,
  Wrap,
} from "./BusbarsCurrent.styled";
import { configObj } from "./config";
import useBusbarsCurrent from "./useBusbarsCurrent";

const BusbarsCurrent = ({ type, busbarData }) => {
  const {
    thicknessList,
    widthList,
    current,
    handleThickness,
    handleWidth,
    selectedThickness,
    selectedWidth,
  } = useBusbarsCurrent(busbarData);

  return (
    <Container type={type}>
      <Title>{configObj.title[type]}</Title>
      <DotBox>
        {thicknessList.map((thickness) => {
          return (
            <Dot
              key={thickness + "thick"}
              label={thickness}
              selected={thickness === selectedThickness}
              handleClick={handleThickness}
            />
          );
        })}
      </DotBox>
      <DotBox>
        {widthList.map((width) => {
          return (
            <Dot
              key={width + "width"}
              label={width}
              selected={width === selectedWidth}
              handleClick={handleWidth}
            />
          );
        })}
      </DotBox>
      <CurrentBox>
        {current ? (
          <>
            <Wrap>
              x1 <Current>{current.x1} A</Current>
              <CopyButton size="14" value={current.x1} />
            </Wrap>
            <Wrap>
              x2 <Current>{current.x2} A</Current>
              <CopyButton size="14" value={current.x2} />
            </Wrap>
            <Wrap>
              x3 <Current>{current.x3} A</Current>
              <CopyButton size="14" value={current.x3} />
            </Wrap>
          </>
        ) : (
          <p>Не знайдено!</p>
        )}
      </CurrentBox>
    </Container>
  );
};

export default BusbarsCurrent;

BusbarsCurrent.propTypes = {
  type: PropTypes.oneOf(["copper", "aluminum"]),
  busbarData: PropTypes.arrayOf(BusbarsListType).isRequired,
};
