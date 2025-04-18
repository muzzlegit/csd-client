import { SelectorInput } from "../Layouts/SelectorInput/SelectorInput";
import { selectorsConfigs } from "../Selectors";
import {
  Button,
  ClicableWrap,
  Container,
  ControlPanel,
  Selectors,
} from "./SelectorsPanel.styled";
import { useSelectorsPanel } from "./useSelectorsPanel";

import { IoReturnUpBack } from "react-icons/io5";
export const SelectorsPanel = () => {
  const { selector, handleSelectorClick } = useSelectorsPanel();

  const activeSelector = selectorsConfigs.find((cfg) => cfg.key === selector);

  return (
    <Container>
      <ControlPanel>
        {selector ? (
          <Button
            onClick={() => {
              handleSelectorClick(null);
            }}
          >
            <IoReturnUpBack size={20} />
          </Button>
        ) : null}
      </ControlPanel>
      <Selectors>
        {activeSelector ? (
          <activeSelector.component />
        ) : (
          selectorsConfigs.map(({ key, title }) => (
            <ClicableWrap
              key={key}
              onClick={() => {
                handleSelectorClick(key);
              }}
            >
              <SelectorInput title={title} />
            </ClicableWrap>
          ))
        )}
      </Selectors>
    </Container>
  );
};
