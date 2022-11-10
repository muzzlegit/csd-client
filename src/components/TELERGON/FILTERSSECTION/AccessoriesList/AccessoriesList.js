//COMPONENTS
import CopyButton from "../CopyButton/CopyButton";
//HELPERS
import getOutlineForItems from "../../../../helpers/TELERGON/getOutlineForItems";
//STYLED
import { AccessoriesListBox, ListItem } from "./AccessoriesList.styled";

export default function AccessoriesList({accessoriesList}){
  return(
    <>
      <AccessoriesListBox>
      { accessoriesList.map((accessory) => {
          return (
            <ListItem
              key={accessory.code}
              outline={getOutlineForItems(accessory.vectorBase)}
            >
              {accessory.code} {accessory.description}
              <CopyButton
                itemIndex={accessory.code}
              />
            </ListItem>
          )
        })
      }
      </AccessoriesListBox>
    </>
  )
}