import { useEffect, useState } from "react";
//HOOKS
import useLocalStorage from "shared/hooks/useLocalStorage";

const useAluminumPrice = () => {
  const [aluminumPrice, setAluminumPrice] = useLocalStorage("алюміній", 260);
  const [price] = useState(400);
  const [discount, setDiscount] = useState(0);

  const setNewAluminumPrice = (price) => {
    setAluminumPrice(price);
  };

  useEffect(() => {
    setDiscount(Math.abs(100 - (aluminumPrice / price) * 100).toFixed(2));
  }, [aluminumPrice, price, setDiscount]);

  return {
    aluminumPrice,
    discount,
    setNewAluminumPrice,
  };
};

export default useAluminumPrice;
