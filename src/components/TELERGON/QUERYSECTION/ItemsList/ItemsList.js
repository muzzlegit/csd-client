//COMPONENTS
import CopyButton from "../../FILTERSSECTION/CopyButton/CopyButton";
//HELPERS
import getOutlineForItems from "../../../../helpers/TELERGON/getOutlineForItems";
//STYLED
import { ItemsListBox, ListItem } from "./ItemsList.styled";

export default function ItemsList({itemsList}){
  return(
    <>
      <ItemsListBox>
      { itemsList.map((item) => {
          return (
            <ListItem
              key={item.code}
              outline={getOutlineForItems(item.vectorBase)}
            >
              {item.code} {item.description}
              <CopyButton
                itemIndex={item.code}
              />
            </ListItem>
          )
        })
      }
      </ItemsListBox>
    </>
  )
}