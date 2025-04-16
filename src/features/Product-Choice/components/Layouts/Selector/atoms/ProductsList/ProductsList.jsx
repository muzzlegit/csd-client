import PropTypes from "prop-types";
import { Item, List } from "./ProductsList.styled";

export const ProductsList = ({ list, onItemClick }) => {
  return (
    <List>
      {list.map(({ code, description }) => (
        <Item
          key={code}
          onClick={() => {
            onItemClick(code);
          }}
        >{`${code} ${description}`}</Item>
      ))}
    </List>
  );
};

ProductsList.propTypes = {
  list: PropTypes.object.isRequired,
  onItemClick: PropTypes.func.isRequired,
};
