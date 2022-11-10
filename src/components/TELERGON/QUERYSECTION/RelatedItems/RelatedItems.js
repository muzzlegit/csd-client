import { useEffect, useState } from 'react'

//DATA
import VECTOR from '../../../../data/vector.json'
//COMPONENTS
import CopyButton from '../../FILTERSSECTION/CopyButton/CopyButton';
import ItemsList from '../ItemsList/ItemsList';
//STYLES
import { RelatedItemsBox, RelatedItemsTitle, ListsBox, RelatedItemsList, ListItem } from './RelatedItems.styled';

export default function RelatedItems({relatedItems}){
  const [relatedItemsToggle, setRelatedItemsToggle] = useState(false);
  const [items, setItems] = useState([]);
  const [currentRelatedItem, setCurrentRelatedItem] = useState({});

  const onItemClick = (e) => {
    if(e.target.nodeName !== 'LI') return;
    if(e.target.id !== currentRelatedItem.code){
      setCurrentRelatedItem(() => {
        const currentItem = items.find(item => {return item.code === e.target.id});
        return currentItem;
      });
      setRelatedItemsToggle(true);
    } else {
      setRelatedItemsToggle(!relatedItemsToggle);
    }
  }

  useEffect(() => {
    setCurrentRelatedItem({});
    setItems(() => {
        return relatedItems.map((item) => {
          return VECTOR[item.manufacturer][item.section][item.code];
        })
    });
  }, [relatedItems])


  return(
    <RelatedItemsBox>
      { items.length !== 0 && <RelatedItemsTitle>Можливі заміни</RelatedItemsTitle> }
      <ListsBox>
        <RelatedItemsList>
        { items.map((relatedItem) => {
            return (
              <ListItem
                key={relatedItem.code}
                onClick={onItemClick}
                id={relatedItem.code}
                color={relatedItemsToggle && relatedItem.code === currentRelatedItem.code ? '#00ff88' : '#3C4BF0'}
              >
                <CopyButton
                  itemIndex={relatedItem.code}
                />
                {relatedItem.code} {relatedItem.description} {`( ${relatedItem.manufacturer} )`}
              </ListItem>
            )
          })
        }
        </RelatedItemsList>
        { relatedItemsToggle && Object.keys(currentRelatedItem).length !== 0 &&
        <ItemsList
          itemsList={currentRelatedItem.accessories}
        />
      }
      </ListsBox>
    </RelatedItemsBox>
  )
}