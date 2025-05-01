import { useState } from "react";
import { SelectorKeyType } from "../Selectors/selectorsConfig";

export const useSelectorsPanel = () => {
  const [selector, setSelector] = useState<SelectorKeyType | null>(null);

  const handleSelectorClick = (selectorName: SelectorKeyType | null) => {
    setSelector(selectorName);
  };

  return { selector, handleSelectorClick };
};
