import { TabType, TabsType } from "features/Product-Choice/data/constants";
import { ReactNode } from "react";
import { Container, Content, Tab, TabsPanel } from "./TabsLayout.styled";

type TabsLayoutProps = {
  tabs: TabsType;
  activeTab: TabType;
  onTabChange: (tab: TabType) => void;
  children: ReactNode;
};

export const TabsLayout = ({
  tabs,
  activeTab,
  onTabChange,
  children,
}: TabsLayoutProps) => {
  return (
    <Container>
      <TabsPanel>
        {Object.entries(tabs).map(([tab, label]) => (
          <Tab
            key={tab}
            isActive={activeTab === tab}
            onClick={() => {
              onTabChange(tab as TabType);
            }}
          >
            {label}
          </Tab>
        ))}
      </TabsPanel>
      <Content>{children}</Content>
    </Container>
  );
};
