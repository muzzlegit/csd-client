import { ManufacturerSelector } from "./Manufacturer.styled";

export default function Manufacturer({setCapacitorManufacturer}) {

  const onChange = (e) => {
    setCapacitorManufacturer(e.currentTarget.value);
    }
  
  return(
    <ManufacturerSelector>
      <p>Set Manufacturer </p>
      <select onChange={onChange}>
          <option value="RTR">RTR</option>
          <option value="ELECTRONICON">ELECTRONICON</option>
      </select>
    </ManufacturerSelector>
  )
}