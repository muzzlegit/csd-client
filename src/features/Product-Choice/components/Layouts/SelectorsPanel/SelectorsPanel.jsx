import { SwitchesSelector } from "../../Selectors/SwitchesSelector/SwitchesSelector";
import { SwitchesSelectorInput } from "../../Selectors/SwitchesSelector/SwitchesSelectorInput/SwitchesSelectorInput";
import { BackButton } from "./BackButton/BackButton";
import { Container, Selectors } from "./SelectorsPanel.styled";
import { useSelectorsPanel } from "./useSelectorsPanel";

const selectors = {
  switches: SwitchesSelector,
};

export const SelectorsPanel = () => {
  const { selector, handleSelectorClick } = useSelectorsPanel();

  const SelectorComponent = selectors[selector];

  return (
    <Container>
      <div
        onClick={() => {
          handleSelectorClick(null);
        }}
      >
        <BackButton />
      </div>
      <Selectors>
        {selector ? (
          <SelectorComponent />
        ) : (
          <div
            onClick={() => {
              handleSelectorClick("switches");
            }}
          >
            <SwitchesSelectorInput />
          </div>
        )}
      </Selectors>
    </Container>
  );
};
