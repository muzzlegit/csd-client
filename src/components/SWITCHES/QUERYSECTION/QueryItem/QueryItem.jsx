//COMPONENTS
import CopyButton from '../../FILTERSSECTION/CopyButton/CopyButton';
//STYLES
import { QueryItemBox, Item } from './QueryItem.styled';

export default function QueryItem({ searchedItem }){
  const { code, description } = searchedItem;

  return(
    <QueryItemBox>
      <Item >
        { code } { description }
        <CopyButton itemIndex = { code } />
      </Item>      
    </QueryItemBox>
  )
}