import PropTypes from "prop-types";
import { Color, Container, DotBox } from "./Dot.styled";

const Dot = ({ label, selected, handleClick }) => {
  return (
    <Container selected={selected}>
      <div>{label}</div>
      <DotBox
        selected={selected}
        onClick={() => {
          handleClick(label);
        }}
      >
        <Color selected={selected} />
      </DotBox>
    </Container>
  );
};

export default Dot;

Dot.propTypes = {
  selected: PropTypes.bool,
  label: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  handleClick: PropTypes.func,
};
