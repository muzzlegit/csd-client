import PropTypes from "prop-types";
import { MdOutlineLocationSearching } from "react-icons/md";
import { Button } from "./SearchButton.styled";

export const SearchButton = ({ handleClick }) => {
  return (
    <Button onClick={handleClick}>
      <MdOutlineLocationSearching />
      знайти
    </Button>
  );
};

SearchButton.propTypes = {
  handleClick: PropTypes.func,
};
