import { TABS } from "../../data/constants";
import { useSearchItemStore } from "../../store";

export const useTabs = () => {
  const activeTab = useSearchItemStore((state) => state.activeTab);
  const setActiveTab = useSearchItemStore((state) => state.setActiveTab);

  const handleTabClick = (tabName) => {
    if (!tabName || !TABS.includes(tabName)) return;
    setActiveTab(tabName);
  };

  return { TABS, activeTab, handleTabClick };
};
