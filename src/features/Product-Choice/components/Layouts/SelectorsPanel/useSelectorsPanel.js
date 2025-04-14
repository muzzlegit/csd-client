import { useState } from "react";

export const useSelectorsPanel = () => {
  const [selector, setSelector] = useState("");

  const handleSelectorClick = (selectorName) => {
    console.log(selectorName);
    setSelector(selectorName);
  };

  return { selector, handleSelectorClick };
};
