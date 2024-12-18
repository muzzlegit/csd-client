import PropTypes from "prop-types";
import { Container, Dot } from "./Indicators.styled";

const Indicators = ({ count, activeItemIndex }) => {
  console.log(count);
  return (
    <Container>
      {Array.from({ length: count }, (v, x) => {
        return <Dot key={x} isActive={activeItemIndex === x} />;
      })}
    </Container>
  );
};

export default Indicators;

Indicators.propTypes = {
  count: PropTypes.number.isRequired,
  activeItemIndex: PropTypes.number.isRequired,
};
