//HOOKS
import { useEffect, useState } from "react";
import useLocalStorage from "shared/hooks/useLocalStorage";

const useCopperPrice = () => {
  const [standartCopperPrice, setStandartCopperPrice] = useState(555);
  const [irregularCopperPrice, setIrregularCopperPrice] = useState(565);

  const [standartPrice, setStandartPrice] = useLocalStorage(
    "мідь_стандарт_прайс",
    854
  );
  const [irregularPrice, setIrregularPrice] = useLocalStorage(
    "мідь_нестандарт_прайс",
    869
  );
  const [standartDiscount, setStandartDiscount] = useState(0);
  const [irregularDiscount, setIrregularDiscount] = useState(0);

  const handleStandartPrice = (value) => {
    setStandartCopperPrice(value);
  };
  const handleIrregularPrice = (value) => {
    setIrregularCopperPrice(value);
  };

  useEffect(() => {
    setStandartDiscount(
      (100 - (standartCopperPrice * 100) / standartPrice).toFixed(1)
    );
  }, [standartCopperPrice, standartPrice]);

  useEffect(() => {
    setIrregularDiscount(
      (100 - (irregularCopperPrice * 100) / irregularPrice).toFixed(1)
    );
  }, [irregularCopperPrice, irregularPrice]);

  return {
    standartCopperPrice,
    irregularCopperPrice,
    standartDiscount,
    irregularDiscount,
    handleIrregularPrice,
    handleStandartPrice,
  };
};

export default useCopperPrice;
