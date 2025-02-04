import { useIsFavoriteTerminal } from "modules/terminals/hooks/useIsFavoriteTerminal";
import { useTerminal } from "modules/terminals/hooks/useTerminal";
import { getTerminalColorData } from "modules/terminals/utils/helpers/getTerminalColor";
import { CopyButton } from "shared/ui";
import { CellLayout } from "shared/ui/components/CellLayout/CellLayout";
import { Separator } from "shared/ui/components/Separator/Separator";
import { AddFavorite } from "../Favorite/AddFavorite/AddFavorite";
import { Container, Item, Wrap } from "./Terminal.styled";

export const Terminal = () => {
  const { terminal } = useTerminal();
  const { isFavorite, handleFavorite } = useIsFavoriteTerminal(
    terminal?.article
  );
  if (!terminal) return <CellLayout title="Технічні дані" />;
  const { article, catalog_article, features } = terminal;
  if (!article)
    return <CellLayout title="Технічні дані">Немає даних</CellLayout>;

  const renderFeature = (name, feature) => {
    if (!feature) return null;
    const colorData =
      name === "color" ? getTerminalColorData(feature.value) : null;

    return (
      <Wrap key={name}>
        <span>{feature?.label}:</span>
        <Wrap>
          <Item color={colorData?.hex || null}>
            {name === "color" ? colorData?.label : feature?.value}
          </Item>
          {feature?.unit ? <Item>{feature?.unit}</Item> : null}
        </Wrap>
      </Wrap>
    );
  };

  return (
    <CellLayout title="Технічні дані">
      <Container>
        <Wrap>
          <span>Артикул:</span>
          <Item>{article}</Item>
          <CopyButton size="16" value={article} />
          <p title="Артикул з каталогу">({catalog_article})</p>
          <CopyButton size="16" value={catalog_article} />
        </Wrap>
        {Object.keys(features).length
          ? Object.entries(terminal?.features)
              .filter(([_, feature]) => feature?.value)
              .map(([name, feature]) => renderFeature(name, feature))
          : null}
        <Separator />
        <AddFavorite isFavorite={isFavorite} onFavoriteClick={handleFavorite} />
      </Container>
    </CellLayout>
  );
};
