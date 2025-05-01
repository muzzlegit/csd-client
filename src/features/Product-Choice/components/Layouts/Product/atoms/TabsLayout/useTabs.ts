import { TABS, TabType } from "features/Product-Choice/data/constants";
import {
  AccesoriesListType,
  AnalogsListType,
  FeaturesListType,
  FilesListType,
} from "lib/api/createProductDTO";
import { useState } from "react";
import { AccesoriesList } from "../AccesoriesList/AccesoriesList";
import { AnalogsList } from "../AnalogsList/AnalogsList";
import { FeaturesList } from "../FeaturesList/FeaturesList";
import { FilesList } from "../FilesList/FilesList";

type TabsPropsMap = {
  features: { featuresList: FeaturesListType };
  files: { filesList: FilesListType };
  accesories: { accesoriesList: AccesoriesListType };
  analogs: { analogsList: AnalogsListType };
};

type TabComponent<T> = React.ComponentType<T>;

export const tabsConfigs: {
  [K in keyof TabsPropsMap]: TabComponent<TabsPropsMap[K]>;
} = {
  features: FeaturesList,
  files: FilesList,
  accesories: AccesoriesList,
  analogs: AnalogsList,
};

export const useTabs = () => {
  const [activeTab, setActiveTab] = useState<TabType>("features");

  const ActiveTabComponent = tabsConfigs[activeTab];

  const handleTabChange = (tab: TabType) => {
    if (!tab) return;
    setActiveTab(tab);
  };

  return {
    tabs: TABS,
    activeTab,
    handleTabChange,
    ActiveTabComponent: ActiveTabComponent as TabComponent<
      TabsPropsMap[typeof activeTab]
    >,
  };
};
