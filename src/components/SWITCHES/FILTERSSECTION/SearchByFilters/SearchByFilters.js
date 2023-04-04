import { useState } from 'react';
//STORE
import useSwitchesStore from '../../../../data/STORE/useSwitchesStore';
//COMPONENTS
import FiltersBox from '../FiltersBox/FiltersBox';
import ItemsList from '../ItemsList/ItemsList';
import AccessoriesList from '../AccessoriesList/AccessoriesList';
import RelatedItems from '../RelatedItems/RelatedItems';
//HOOKS
import useItems from '../../../../hooks/SWITCHES/useItems';
import useSelectedItem from '../../../../hooks/SWITCHES/useSelectedItem';
//STYLES
import {
  FiltersContainer,
  ItemsContainer,
  AccessoriesListContainer,
  ItemsListContainer,
  RelatedItemsListContainer
} from './SearchByFilters.styled';




export default function SearchByFilters(){
  const itemsList = useSwitchesStore( ( state ) => state.itemsList );
  const [ selectedItem, onItemClick ] = useSelectedItem();
  useItems()
  return(
    <FiltersContainer>
      <FiltersBox />
      <ItemsContainer>
        <AccessoriesListContainer>
        {
          Object.keys( selectedItem ).length !== 0 ?
          <AccessoriesList accessories = { selectedItem.accessories } />
          : null
        }
        </AccessoriesListContainer>
        <ItemsListContainer>
          <ItemsList
            itemsList = { itemsList }
            onItemClick = { onItemClick }
          />
        </ItemsListContainer>
        <RelatedItemsListContainer>
        {
          Object.keys( selectedItem ).length !== 0 ?
          <RelatedItems
            relatedItems = { selectedItem.relatedItems }
          />
          : null
        }
        </RelatedItemsListContainer>
      </ItemsContainer>
    </FiltersContainer>
  )
}