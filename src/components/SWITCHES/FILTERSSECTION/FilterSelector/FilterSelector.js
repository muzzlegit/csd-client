//STYLES
import useFilters from "../../../../hooks/SWITCHES/useFilters";
import useSelectorOptionsList from "../../../../hooks/SWITCHES/useSelectorOptionsList"
import { FilterSelectorBox } from "./FilterSelector.styled"

export default function FilterSelector({ filterProperty }){
  const optionsList = useSelectorOptionsList( filterProperty );
  const setFilter = useFilters( filterProperty );

  return(
    <FilterSelectorBox>
      <select onChange = { setFilter } >
        <option
          value = {''}
        > ---Виберіть категорію--- </option>
        {
          optionsList.map( value => {
            return (
              <option
                key = { value }
                value = { value }
              >
                { value }
              </option>
            )
          })
        }
      </select>
    </FilterSelectorBox>
  )
}