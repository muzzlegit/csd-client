import { useState } from "react";

const useTurnabout = (quantity) => {
  const [index, setIndex] = useState(0);

  const handlePrevClick = () => {
    if (index === 0) {
      setIndex(quantity - 1);
    } else {
      setIndex((prev) => prev - 1);
    }
  };
  const handleNextClick = () => {
    if (index === quantity - 1) {
      setIndex(0);
    } else {
      setIndex((prev) => prev + 1);
    }
  };
  return { index, handleNextClick, handlePrevClick };
};

export default useTurnabout;
