import PropTypes from "prop-types";
import { Container } from "./SelectorInput.styled";

export const SelectorInput = ({ title }) => {
  return <Container>{title}</Container>;
};

SelectorInput.propTypes = {
  title: PropTypes.string,
};
