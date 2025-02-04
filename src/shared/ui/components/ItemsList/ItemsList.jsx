import PropTypes from "prop-types";

export const ItemsList = ({
  items,
  children,
  emptyList = null,
  wrapper: Wrapper = "ul",
}) => {
  if (!items || !items.length) return emptyList;

  return <Wrapper>{items.map(children)}</Wrapper>;
};

ItemsList.propTypes = {
  items: PropTypes.array.isRequired,
  children: PropTypes.func.isRequired,
  wrapper: PropTypes.elementType,
  emptyList: PropTypes.node,
};
