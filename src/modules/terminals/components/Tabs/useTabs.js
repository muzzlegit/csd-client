import { useState } from "react";

export const useTabs = () => {
  const [activeTab, setActiveTab] = useState("common");

  const handleTabClick = (tabName) => {
    if (!tabName) return;
    setActiveTab(tabName);
  };

  return { activeTab, handleTabClick };
};
