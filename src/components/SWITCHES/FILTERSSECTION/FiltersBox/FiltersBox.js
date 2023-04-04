//COMPONENTS
import FilterSelector from "../FilterSelector/FilterSelector";
//STYLES
import {
  FiltersBoxTitle,
  RelatedFiltersBox,
  FiltersWrap,
} from "./FiltersBox.styled";

export default function FiltersBox({ setElements }) {
  return (
    <FiltersWrap>
      <FiltersBoxTitle>Пошук по фільтрам</FiltersBoxTitle>
      <FilterSelector filterProperty={"section"} />
      <RelatedFiltersBox>
        <FilterSelector filterProperty={"manufacturer"} />
        <FilterSelector filterProperty={"pole"} />
        <FilterSelector filterProperty={"current"} />
      </RelatedFiltersBox>
    </FiltersWrap>
  );
}
