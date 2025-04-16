import { SwitchesSelector } from "../../Selectors/SwitchesSelector/SwitchesSelector";
import { SwitchesSelectorInput } from "../../Selectors/SwitchesSelector/SwitchesSelectorInput/SwitchesSelectorInput";
import { SelectorInput } from "../SelectorInput/SelectorInput";
import { BackButton } from "./BackButton/BackButton";
import { ClicableWrap, Container, Selectors } from "./SelectorsPanel.styled";
import { useSelectorsPanel } from "./useSelectorsPanel";

const selectors = {
  switches: SwitchesSelector,
  changeoverSwitches: SwitchesSelector,
};

export const SelectorsPanel = () => {
  const { selector, handleSelectorClick } = useSelectorsPanel();

  const SelectorComponent = selectors?.[selector];

  return (
    <Container>
      {selector ? (
        <div
          onClick={() => {
            handleSelectorClick(null);
          }}
        >
          <BackButton />
        </div>
      ) : null}
      <Selectors>
        {selector ? (
          <SelectorComponent />
        ) : (
          <>
            <ClicableWrap
              onClick={() => {
                handleSelectorClick("switches");
              }}
            >
              <SwitchesSelectorInput />
            </ClicableWrap>
            <ClicableWrap
              onClick={() => {
                handleSelectorClick("changeoverSwitches");
              }}
            >
              <SelectorInput title="Перемикачі навантаження" />
            </ClicableWrap>
          </>
        )}
      </Selectors>
    </Container>
  );
};
