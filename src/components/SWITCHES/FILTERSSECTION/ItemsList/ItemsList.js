import { useState } from 'react'

//COMPONENTS
import AccessoriesList from '../AccessoriesList/AccessoriesList';
import RelatedItems from '../RelatedItems/RelatedItems';
import CopyButton from '../CopyButton/CopyButton';
//HELPERS
import getOutlineForItems from '../../../../helpers/SWITCHES/getOutlineForItems';
//STYLES
import { ItemListBox, ItemListBoxTitle, ListBox, ListItem } from './ItemsList.styled';

export default function ItemsList({ itemsList, onItemClick }){
  const toggle = false

  return(
    <ItemListBox>
      <ItemListBoxTitle> { itemsList.length === 1 ? 'Елемент' : 'Елементи' } </ItemListBoxTitle>
      <ListBox>
      {
        itemsList.map( item => {
          const { code, description } = item;
          return(
            <ListItem
              key = { code }
              onClick = { onItemClick }
              id = { code }
              color={toggle && item.code === code ? '#00ff88' : '#3C4BF0'}
              selected={toggle && item.code === code ? true : false}
            >
              { code } { description }
            <CopyButton itemIndex = { code } />
            </ListItem>
          )
        })
      }
      </ListBox>
    </ItemListBox>
  )
}