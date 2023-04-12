import { useState, useEffect } from "react";
//HOOKS
import useLocalStorage from "shared/hooks/useLocalStorage";

const useCopperPrice = () => {
  const [copperPrice, setCopperPrice] = useLocalStorage("мідь", 560);
  const [exchange, setExchange] = useLocalStorage("курс", 41.0);
  const [coefficient] = useState(21);
  const [discount, setDiscount] = useState(0);

  const setNewCopperPrice = (price) => {
    setCopperPrice(price);
  };
  const setNewExchange = (exchange) => {
    setExchange(exchange);
  };

  useEffect(() => {
    setDiscount(
      Math.abs((copperPrice / exchange / coefficient - 1) * 100 + 0.01).toFixed(
        2
      )
    );
  }, [copperPrice, exchange, coefficient, setDiscount]);

  return { copperPrice, exchange, discount, setNewCopperPrice, setNewExchange };
};

export default useCopperPrice;
