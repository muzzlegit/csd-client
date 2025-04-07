import { TABS } from "features/SearchItem/data/constants";
import { useSearchItemStore } from "features/SearchItem/store";

export const useTabs = () => {
  const activeTab = useSearchItemStore((state) => state.activeTab);
  const setActiveTab = useSearchItemStore((state) => state.setActiveTab);

  const handleTabClick = (tabName) => {
    if (!tabName || !TABS.includes(tabName)) return;
    setActiveTab(tabName);
  };

  return { TABS, activeTab, handleTabClick };
};
