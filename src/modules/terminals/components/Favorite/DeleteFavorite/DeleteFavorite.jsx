import { useIsFavoriteTerminal } from "modules/terminals/hooks/useIsFavoriteTerminal";
import PropTypes from "prop-types";
import { MdDeleteForever } from "react-icons/md";
import { Container } from "./DeleteFavorite.styled";

export const DeleteFavorite = ({ article }) => {
  const { handleDeleteFromFavorite } = useIsFavoriteTerminal(article);
  return (
    <Container onClick={handleDeleteFromFavorite}>
      <MdDeleteForever size="20" />
    </Container>
  );
};

DeleteFavorite.propTypes = {
  article: PropTypes.string,
};
