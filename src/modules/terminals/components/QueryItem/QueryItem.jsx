import { COLORS } from "modules/terminals/utils/constants";
import { CopyButton } from "shared/ui";
import { Container, Item, Wrap } from "./QueryItem.styled";
import { useQueryItem } from "./useQueryItem";

export const QueryItem = () => {
  const { queryItem } = useQueryItem();
  if (!queryItem) return <div>NoN</div>;
  return (
    <Container>
      <Wrap>
        <span>Артикул:</span>
        <Item>{queryItem.article}</Item>
        <CopyButton size="16" value={queryItem.article} />
        <p title="Артикул з каталогу">({queryItem.catalog_article})</p>
        <CopyButton size="16" value={queryItem.catalog_article} />
      </Wrap>
      <Wrap>
        <span>Тип:</span>
        <Item>{queryItem.type}</Item>
        <span>Серія:</span>
        <Item>{queryItem.series}</Item>
      </Wrap>
      <Wrap>
        <span>
          Номінальний переріз провідника, мм<sup>2</sup>:
        </span>
        <Item>{queryItem.cross_section}</Item>
      </Wrap>
      <Wrap>
        <span>Колір:</span>
        <Item color={COLORS[queryItem.color].color}>
          {COLORS[queryItem.color].label}
        </Item>
      </Wrap>
      <Wrap>
        <span>Напруга, В:</span>
        <Item>{queryItem.voltage}</Item>
      </Wrap>
      <Wrap>
        <span>Струм, А:</span>
        <Item>{queryItem.current}</Item>
      </Wrap>
      <Wrap title="Ширина х Довжина х Висота">
        <span>Розмір (ШхДхВ), мм:</span>
        <Item>
          {queryItem.size.width +
            "x" +
            queryItem.size.length +
            "x" +
            queryItem.size.height}
        </Item>
      </Wrap>
    </Container>
  );
};
