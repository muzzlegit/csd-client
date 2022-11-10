import { useState } from 'react'

//COMPONENTS
import AccessoriesList from '../AccessoriesList/AccessoriesList';
import RelatedItems from '../RelatedItems/RelatedItems';
import CopyButton from '../CopyButton/CopyButton';
//HELPERS
import getOutlineForItems from '../../../../helpers/TELERGON/getOutlineForItems';
//STYLES
import { ItemListBox, ItemListBoxTitle, ListBox, ListItem } from './ItemsList.styled';

export default function ItemsList({itemsList}){
  const [toggle, setToggle] = useState(false);
  const [currentItem, setCurrentItem] = useState(false);

  const onItemClick = (e) => {
    if(e.target.nodeName !== 'LI') return;
    if(e.target.id !== currentItem.code){
      setCurrentItem(itemsList.find(item => {return item.code === e.target.id}));
      setToggle(true);
    } else {
      setToggle(!toggle);
    }
  }

  return(
    <>
    { itemsList.length !== 0 ?
      <ItemListBox>
        { itemsList.length !== 0 && <ItemListBoxTitle>{itemsList.length === 1 ? 'Елемент' : 'Елементи' }</ItemListBoxTitle> }
        <ListBox>
          {itemsList.map(item => {
            return(
              <ListItem
                key={item.code}
                onClick={onItemClick}
                id={item.code}
                color={toggle && item.code === currentItem.code ? '#00ff88' : '#3C4BF0'}
                selected={toggle && item.code === currentItem.code ? true : false}
                outline={getOutlineForItems(item.vectorBase)}
              >
                {item.code} {item.description}
                <CopyButton
                  itemIndex={item.code}
                />
              </ListItem>
            )
          })}
        </ListBox>
      </ItemListBox>
      : null
    }
    { toggle ?
      <>
        {currentItem.accessories.length !==0 ?
          <AccessoriesList
            accessoriesList={currentItem.accessories}
          />
          : null
        }
        
        {currentItem.relatedItems.length !==0 ?
          <RelatedItems
            relatedItems={currentItem.relatedItems}
          />
          : null
        }
      </>
      : null
    }
    </>
  )
}