export default function Manufacturer({setCapacitorManufacturer}) {

  const onChange = (e) => {
    setCapacitorManufacturer(e.currentTarget.value);
    }
  
  return(
    <>
      <select onChange={onChange}>
          <option value="RTR">RTR</option>
          <option value="ELECTRONICON">ELECTRONICON</option>
      </select>
    </>
  )
}