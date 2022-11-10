export default function PoleSelector({poleElements, setPoleFilter}){

  const onChange = (e) => {
    setPoleFilter(e.currentTarget.value)
  }
  
  return(
    <>
      <select onChange={onChange} >
        <option
          value={''}
        > ---Виберіть кількість полюсів--- </option>
        {
          poleElements.map(current => {
            return (
              <option
                key={current}
                value={current}
              >{current}п</option>
            )
          })
        }
      </select>
    </>
  )
}