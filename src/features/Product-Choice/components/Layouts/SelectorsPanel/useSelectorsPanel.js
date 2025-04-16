import { useState } from "react";

export const useSelectorsPanel = () => {
  const [selector, setSelector] = useState("");

  const handleSelectorClick = (selectorName) => {
    setSelector(selectorName);
  };

  return { selector, handleSelectorClick };
};
