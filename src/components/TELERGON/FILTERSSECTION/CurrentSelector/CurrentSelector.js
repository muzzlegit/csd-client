export default function CurrentSelector({currentElements, setCurrentFilter}){

  const onChange = (e) => {
    setCurrentFilter(e.currentTarget.value)
  }

  return(
    <>
      <select onChange={onChange} >
        <option
          value={''}
        > ---Виберіть струм--- </option>
        {
          currentElements.map(current => {
            return (
              <option
                key={current}
                value={current}
              >{current} A</option>
            )
          })
        }
      </select>
    </>
  )
}