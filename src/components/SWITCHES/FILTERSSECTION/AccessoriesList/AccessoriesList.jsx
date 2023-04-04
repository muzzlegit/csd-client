//COMPONENTS
import CopyButton from "../CopyButton/CopyButton";
//HELPERS
import getOutlineForItems from "../../../../helpers/SWITCHES/getOutlineForItems";
//STYLED
import { AccessoriesListBox, ListItem } from "./AccessoriesList.styled";

export default function AccessoriesList({ accessories }) {
  console.log(accessories)

  return(
      <AccessoriesListBox>
      { 
        accessories.map(( item ) => {
        const { code, description, vectorBase } = item;
          return (
            <ListItem
              key = { code }
              outline = { getOutlineForItems( vectorBase ) }
            >
              { code } { description }
              <CopyButton itemIndex = { code } />
            </ListItem>
          )
        })
      }
      </AccessoriesListBox>
  )
}