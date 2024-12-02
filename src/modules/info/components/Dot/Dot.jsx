import PropTypes from "prop-types";
import { Color, Container, DotBox } from "./Dot.styled";

const Dot = ({ selected }) => {
  return (
    <Container>
      <DotBox selected={selected}>
        <Color selected={selected} />
      </DotBox>
    </Container>
  );
};

export default Dot;

Dot.propTypes = {
  selected: PropTypes.bool,
};
