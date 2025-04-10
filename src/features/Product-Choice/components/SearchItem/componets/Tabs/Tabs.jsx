import { Container, Tab } from "./Tabs.styled";
import { useTabs } from "./useTabs";

export const Tabs = () => {
  const { TABS, activeTab, handleTabClick } = useTabs();

  return (
    <Container>
      {TABS.map((tab) => (
        <Tab
          key={tab}
          isActive={activeTab === tab}
          onClick={() => {
            handleTabClick(tab);
          }}
        >
          {tab}
        </Tab>
      ))}
    </Container>
  );
};
