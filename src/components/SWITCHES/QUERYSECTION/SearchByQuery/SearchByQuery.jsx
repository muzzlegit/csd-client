//STORE
import useSwitchesStore from "../../../../data/STORE/useSwitchesStore";
//COMPONENTS
import SearchBar from "../SearchBar/SearchBar";
import QueryItem from "../QueryItem/QueryItem";
import AccessoriesList from "../AccessoriesList/AccessoriesList";
import RelatedItems from "../RelatedItems/RelatedItems";
//HOOKS
import useRelatedItemAccessoriesList from "../../../../hooks/SWITCHES/useRelatedItemAccessoriesList";
//STYLES
import {
  SearchContainer,
  ItemContainer,
  RelatedItemContainer,
} from "./SearchByQuery.styled";

export default function SearchByQuery() {
  const searchedItem = useSwitchesStore((state) => state.item);
  const selectedRelatedItem = useSwitchesStore(
    (state) => state.selectedRelatedItem
  );
  const { accessories, relatedItems } = searchedItem;

  const onItemClick = useRelatedItemAccessoriesList();

  return (
    <SearchContainer>
      <SearchBar />
      <ItemContainer>
        {Object.keys(searchedItem).length !== 0 ? (
          <QueryItem searchedItem={searchedItem} />
        ) : null}
        {Object.keys(searchedItem).length !== 0 && accessories.length !== 0 ? (
          <AccessoriesList accessories={accessories} />
        ) : null}
      </ItemContainer>
      <RelatedItemContainer>
        {Object.keys(searchedItem).length !== 0 && relatedItems.length !== 0 ? (
          <RelatedItems
            relatedItems={relatedItems}
            onItemClick={onItemClick}
            selectedRelatedItem={selectedRelatedItem.code}
          />
        ) : null}
        {/* {
        Object.keys( selectedRelatedItem ).length !== 0 ?
        <AccessoriesList accessories = { selectedRelatedItem.accessories } />
        : null
      } */}
      </RelatedItemContainer>
    </SearchContainer>
  );
}
