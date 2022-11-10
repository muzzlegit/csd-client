import { useEffect, useState } from 'react'

//DATA
import VECTOR from '../../../../data/vector.json'
//COMPONENTS
import AccessoriesList from '../AccessoriesList/AccessoriesList';
import CopyButton from '../CopyButton/CopyButton';
//STYLES
import { RelatedItemsBox, RelatedItemsTitle, ListsBox, RelatedItemsList, ListItem } from './RelatedItems.styled';

export default function RelatedItems({relatedItems}){
  const [toggle, setToggle] = useState(false);
  const [currentItem, setCurrentItem] = useState(false);

  const onItemClick = (e) => {
    if(e.target.nodeName !== 'LI') return;
    if(e.target.id !== currentItem.code){
      setCurrentItem(relatedItems.find(item => {return item.code === e.target.id}));
      setToggle(true);
    } else {
      setToggle(!toggle);
    }
  }

  useEffect(() => {
    if(relatedItems.length === 0) setCurrentItem(false)
  }, [relatedItems])

  return(
    <>
      { relatedItems.length !== 0 ?
        <RelatedItemsBox>
          <RelatedItemsTitle>Можливі заміни</RelatedItemsTitle>
          <ListsBox>
            <RelatedItemsList>
            { relatedItems.map((relatedItem) => {
                return (
                  <ListItem
                    key={relatedItem.code}
                    onClick={onItemClick}
                    id={relatedItem.code}
                    color={toggle && relatedItem.code === currentItem.code ? '#00ff88' : '#3C4BF0'}
                    selected={toggle && relatedItem.code === currentItem.code ? true : false}
                  >
                    <CopyButton
                      itemIndex={relatedItem.code}
                    />
                    {VECTOR[relatedItem.manufacturer][relatedItem.section][relatedItem.code].code} {VECTOR[relatedItem.manufacturer][relatedItem.section][relatedItem.code].description}                 {`( ${relatedItem.manufacturer} )`}
                  </ListItem>
                )
              })
            }
            </RelatedItemsList>
            { toggle && currentItem && 
                <AccessoriesList
                  accessoriesList={VECTOR[currentItem.manufacturer][currentItem.section][currentItem.code].accessories}
                />
            }
          </ListsBox>
        </RelatedItemsBox>
      : null
      }
    </>
  )
}