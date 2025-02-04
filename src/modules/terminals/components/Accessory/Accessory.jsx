import { useAccessory } from "modules/terminals/hooks/useAccessory";
import PropTypes from "prop-types";
import { CopyButton } from "shared/ui";
import { CellLayout } from "shared/ui/components/CellLayout/CellLayout";
import { Container, Item, Wrap } from "./Accessory.styled";

export const Accessory = () => {
  const { accessory } = useAccessory();
  if (!accessory) return <CellLayout title="Технічні дані" />;

  const { article, catalog_article, features } = accessory;
  if (!article)
    return <CellLayout title="Технічні дані">Немає даних;</CellLayout>;

  const renderFeature = (name, feature) => {
    if (!feature) return null;

    return (
      <Wrap key={name}>
        <span>{feature?.label}:</span>
        <Wrap>
          <Item>{feature?.value}</Item>
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
          ? Object.entries(accessory?.features)
              .filter(([_, feature]) => feature?.value)
              .map(([name, feature]) => renderFeature(name, feature))
          : null}
      </Container>
    </CellLayout>
  );
};

Accessory.propTypes = {
  accessory: PropTypes.object,
};
