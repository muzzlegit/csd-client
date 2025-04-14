import PropTypes from "prop-types";
import { Container } from "./FeatureLayout.styled";

export const FeatureLayout = ({ children }) => {
  return <Container>{children}</Container>;
};

FeatureLayout.propTypes = {
  children: PropTypes.node,
};
