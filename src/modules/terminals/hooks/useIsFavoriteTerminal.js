import { useTerminalsStore } from "../store/useTerminalsStore";

export const useIsFavoriteTerminal = (article) => {
  const favoriteArray = useTerminalsStore((state) => state.favorite);
  const toggleFavorite = useTerminalsStore((state) => state.toggleFavorite);
  const deleteFromFavorite = useTerminalsStore(
    (state) => state.deleteFromFavorite
  );

  const checkForFavorite = (article) => {
    return article ? favoriteArray?.includes(article) : false;
  };

  const isFavorite = favoriteArray?.includes(article);

  const handleFavorite = () => {
    if (!article) return;
    toggleFavorite(article);
  };

  const handleDeleteFromFavorite = () => {
    console.log(article);
    if (!article) return;
    deleteFromFavorite(article);
  };

  return {
    isFavorite,
    handleDeleteFromFavorite,
    checkForFavorite,
    handleFavorite,
  };
};
