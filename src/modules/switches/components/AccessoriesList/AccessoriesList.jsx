import useSwitchesStore from "modules/switches/store/useSwitchesStore";
import { CopyButton } from "shared/ui";
import Layout from "../Layout/Layout";
import { Code, Container, Description, Wrap } from "./AccessoriesList.styled";

const AccessoriesList = () => {
  const queryItem = useSwitchesStore((state) => state.queryItem);

  return (
    <Layout title="Аксесуари">
      <Container>
        {queryItem?.accessories
          ? queryItem.accessories.map((accessory) => (
              <Wrap key={accessory.code}>
                <Code>{accessory.code}</Code>
                <Description>{accessory.description}</Description>
                <CopyButton size="14" value={accessory.code} />
              </Wrap>
            ))
          : null}
      </Container>
    </Layout>
  );
};

export default AccessoriesList;
