import PropTypes from "prop-types";
import { CopyButton } from "shared/ui";
import Dot from "../../../../shared/components/Dot/Dot";
import { BusbarsListType } from "../../types";
import useBusbarsCurrent from "../../useBusbarsCurrent";
import {
  Container,
  Current,
  CurrentBox,
  DotBox,
  Wrap,
} from "./BusbarsOptionsList.styled";

const BusbarsOptionsList = ({ busbarsData }) => {
  const {
    thicknessList,
    widthList,
    current,
    handleThickness,
    handleWidth,
    selectedThickness,
    selectedWidth,
  } = useBusbarsCurrent(busbarsData);

  return (
    <Container>
      <DotBox>
        <div>Товщина</div>
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
        <div>Ширина</div>
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
              1 шина на фазу: <Current>{current.x1} A</Current>
              <CopyButton size="14" value={current.x1} />
            </Wrap>
            <Wrap>
              2 шини на фазу: <Current>{current.x2} A</Current>
              <CopyButton size="14" value={current.x2} />
            </Wrap>
            <Wrap>
              3 шини на фазу: <Current>{current.x3} A</Current>
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

export default BusbarsOptionsList;

BusbarsOptionsList.propTypes = {
  busbarsData: PropTypes.arrayOf(BusbarsListType).isRequired,
};
