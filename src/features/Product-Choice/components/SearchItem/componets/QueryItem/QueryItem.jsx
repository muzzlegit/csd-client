import { Turnabout } from "shared/ui";

import { useSearchItemStore } from "../../store";
import { Tabs } from "../Tabs/Tabs";
import { AccesoriesList } from "./AccesoriesList/AccesoriesList";
import { FeaturesList } from "./FeaturesList/FeaturesList";
import { FilesList } from "./FilesList/FilesList";
import {
  Container,
  FlexWrap,
  FlexWrapCol,
  ImageWrap,
  OnStock,
  Title,
} from "./QueryItem.styled";

const activeLists = {
  Характеристики: <FeaturesList />,
  Документи: <FilesList />,
  Аксесуари: <AccesoriesList />,
};

export const QueryItem = () => {
  const item = useSearchItemStore((state) => state.item);
  const activeTab = useSearchItemStore((state) => state.activeTab);
  if (!item) return null;

  return (
    <Container>
      <Title>
        {item.description}
        <OnStock
          title={item.balance}
          isOnStock={item.balance === "в наявності"}
        />
      </Title>

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
