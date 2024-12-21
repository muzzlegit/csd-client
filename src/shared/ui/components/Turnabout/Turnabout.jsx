import PropTypes from "prop-types";
import { GrFormNext, GrFormPrevious } from "react-icons/gr";
import Indicators from "./Indicators";
import { Button, Container, Wrap } from "./Turnabout.styled";

const Turnabout = ({ count, index, onNext, onPrev, children }) => {
  return (
    <Container>
      <Wrap>
        <Button onClick={onPrev} isActive={count > 1}>
          <GrFormPrevious size="28" />
        </Button>
        {children}
        <Button onClick={onNext} isActive={count > 1}>
          <GrFormNext size="32" />
        </Button>
      </Wrap>
      <Indicators count={count} activeItemIndex={index} />
    </Container>
  );
};

export default Turnabout;

Turnabout.propTypes = {
  index: PropTypes.number.isRequired,
  count: PropTypes.number.isRequired,
  onNext: PropTypes.func.isRequired,
  onPrev: PropTypes.func.isRequired,
  children: PropTypes.node,
};
