import PropTypes from "prop-types";

export const BusbarsListType = PropTypes.shape({
  width: PropTypes.number.isRequired,
  thickness: PropTypes.number.isRequired,
  current: PropTypes.shape({
    x1: PropTypes.number.isRequired,
    x2: PropTypes.number.isRequired,
    x3: PropTypes.number.isRequired,
  }),
  currentRange: PropTypes.shape({
    x1: PropTypes.string.isRequired,
    x2: PropTypes.string.isRequired,
    x3: PropTypes.string.isRequired,
  }),
});
