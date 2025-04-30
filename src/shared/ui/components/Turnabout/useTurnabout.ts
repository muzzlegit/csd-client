import { MediafileType } from "lib/api/createProductDTO";
import { useEffect, useState } from "react";

export const useTurnabout = (imagesList: Array<MediafileType>) => {
  const quantity = imagesList.length || 0;
  const [index, setIndex] = useState(0);
  const [isImage, setIsImage] = useState(!!quantity);

  const handlePrevClick = () => {
    setIndex((prev) => (prev === 0 ? quantity - 1 : prev - 1));
  };
  const handleNextClick = () => {
    setIndex((prev) => (prev === quantity - 1 ? 0 : prev + 1));
  };

  const handleLoadingError = () => {
    setIsImage(false);
  };

  useEffect(() => {
    if (quantity && imagesList[index]?.url) {
      setIsImage(true);
    } else {
      setIsImage(false);
    }
  }, [index, quantity, imagesList]);

  useEffect(() => {
    setIndex(0);
  }, [imagesList]);

  return {
    index,
    quantity,
    isImage,
    handleNextClick,
    handlePrevClick,
    handleLoadingError,
  };
};
