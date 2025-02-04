import PropTypes from "prop-types";
import { CiViewList } from "react-icons/ci";
import { MdFavoriteBorder, MdOutlineTimer } from "react-icons/md";
import { Container, Content, Tab, TabsPanel } from "./Tabs.styled";
import { useTabs } from "./useTabs";

export const Tabs = ({ contentLists }) => {
  const { activeTab, handleTabClick } = useTabs();

  const list = contentLists?.[activeTab];

  return (
    <Container>
      <TabsPanel>
        <Tab
          isActive={activeTab === "common"}
          onClick={() => {
            handleTabClick("common");
          }}
        >
          <CiViewList size="24" />
        </Tab>
        <Tab
          isActive={activeTab === "favorite"}
          onClick={() => {
            handleTabClick("favorite");
          }}
        >
          <MdFavoriteBorder size="24" />
        </Tab>
        <Tab
          isActive={activeTab === "temporary"}
          onClick={() => {
            handleTabClick("temporary");
          }}
        >
          <MdOutlineTimer size="24" />
        </Tab>
      </TabsPanel>
      <Content>{list}</Content>
    </Container>
  );
};

Tabs.propTypes = {
  contentLists: PropTypes.shape({
    common: PropTypes.element,
    favorite: PropTypes.element,
    temporary: PropTypes.element,
  }),

  // activeTab: PropTypes.oneOf[("common", "favorite", "temporary")].isRequired,
  // onTabClick: PropTypes.func.isRequired,
};
