import { SearchItem } from "../../SearchItem/SearchItem";
import { SelectorsPanel } from "../../SelectorsPanel/SelectorsPanel";
import { Container, Section } from "./FeatureLayout.styled";

export const FeatureLayout = () => {
  return (
    <Container>
      <Section>
        <SearchItem />
      </Section>
      <Section>
        <SelectorsPanel />
      </Section>
    </Container>
  );
};
