//COMPONENTS
import CopyButton from '../../FILTERSSECTION/CopyButton/CopyButton';
//HELPERS
import getItemFromBaseByCode from '../../../../helpers/SWITCHES/getItemFromBaseByCode';

//STYLES
import { RelatedItemsBox, RelatedItemsTitle, RelatedItemsList, ListItem } from './RelatedItems.styled';

export default function RelatedItems({ relatedItems, onItemClick, selectedRelatedItem }){
  const items = relatedItems.map( element => getItemFromBaseByCode( element.code ));
  
  return(
    <RelatedItemsBox>
      { items.length !== 0 && <RelatedItemsTitle>Можливі заміни</RelatedItemsTitle> }
      <RelatedItemsList>
      { 
        items.map(( relatedItem ) => {
          const { code, description, manufacturer } = relatedItem;
          return (
            <ListItem
              key = { code }
              onClick = { onItemClick }
              id = { code }
              isSelected = { code === selectedRelatedItem }
            >
              <CopyButton itemIndex = { code } />
                { code } { description } {`( ${ manufacturer } )`}
            </ListItem>
          )
        })
      }
      </RelatedItemsList>
    </RelatedItemsBox>
  )
}