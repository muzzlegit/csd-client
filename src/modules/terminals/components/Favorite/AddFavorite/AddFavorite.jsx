import PropTypes from "prop-types";
import { MdFavorite, MdFavoriteBorder } from "react-icons/md";
import { Container } from "./AddFavorite.styled";

export const AddFavorite = ({ isFavorite, onFavoriteClick }) => {
  return (
    <Container isActive={isFavorite} onClick={onFavoriteClick}>
      {isFavorite ? <MdFavorite size="20" /> : <MdFavoriteBorder size="20" />}
    </Container>
  );
};

AddFavorite.propTypes = {
  isFavorite: PropTypes.bool,
  onFavoriteClick: PropTypes.func,
};
