import { useState } from 'react'

//COMPONENTS
import CopyButton from '../../FILTERSSECTION/CopyButton/CopyButton';
import ItemsList from '../ItemsList/ItemsList';
import RelatedItems from '../RelatedItems/RelatedItems';

//STYLES
import { Item } from './QueryItem.styled';

export default function QueryItems({item}){
  const [accessoriesListToggle, setAccessoriesListToggle] = useState(false);

  const onItemClick = (e) => {
    if(e.target.nodeName !== 'DIV') return;
    setAccessoriesListToggle(!accessoriesListToggle);
  }  


  return(
    <>
      { item.code &&
        <Item
          onClick={onItemClick}
        >
          {item.code} {item.description}
          <CopyButton
            itemIndex={item.code}
          />
        </Item>
      }
      { accessoriesListToggle && Object.keys(item).length !== 0 &&
        <ItemsList
          itemsList={item.accessories}
        />
      }
      { accessoriesListToggle &&
        Object.keys(item).length !== 0 &&
        item.relatedItems.length !== 0 &&
        <RelatedItems
          relatedItems={item.relatedItems}
        />
      }
    </>
  )
}