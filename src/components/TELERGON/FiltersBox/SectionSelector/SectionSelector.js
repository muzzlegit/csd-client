//STYLES
import { SectionSelectorBox } from "./SectionSelector.styled"

export default function SectionSelector({sectionElements, setSectionFilter}){

  const onChange = (e) => {
    setSectionFilter(e.currentTarget.value)
  }

  return(
    <SectionSelectorBox>
      <select onChange={onChange} >
        <option
          value={''}
        > ---Виберіть категорію--- </option>
        {
          sectionElements.map(section => {
            return (
              <option
                key={section}
                value={section}
              >{section}</option>
            )
          })
        }
      </select>
    </SectionSelectorBox>
  )
}