import { useSearchItemStore } from "features/SearchItem/store";
import { Turnabout } from "shared/ui";
import { Tabs } from "../Tabs/Tabs";
import { AccesoriesList } from "./AccesoriesList/AccesoriesList";
import { FeaturesList } from "./FeaturesList/FeaturesList";
import { FilesList } from "./FilesList/FilesList";
import {
  Container,
  FlexWrap,
  FlexWrapCol,
  ImageWrap,
  Title,
} from "./QueryItem.styled";

const activeLists = {
  Опис: <FeaturesList />,
  Документи: <FilesList />,
  Аксесуари: <AccesoriesList />,
};

export const QueryItem = () => {
  const item = useSearchItemStore((state) => state.item);
  const activeTab = useSearchItemStore((state) => state.activeTab);
  if (!item) return null;

  return (
    <Container>
      <Title>{item.description}</Title>
      <FlexWrap>
        <ImageWrap>
          <Turnabout imagesList={item.mediaFiles} imageSize="200" />
        </ImageWrap>
        <FlexWrapCol>
          <Tabs />
          {activeLists?.[activeTab] ?? null}
        </FlexWrapCol>
      </FlexWrap>
    </Container>
  );
};
