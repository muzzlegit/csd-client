import { VoltageSelector } from "./CapacitorsVoltage.styled"

export default function CapacitorsVoltage({setCapacitorVoltage}) {

  return(
    <VoltageSelector>
      <p>Set Voltage </p>
      <select onChange={(e)=>setCapacitorVoltage(Number(e.currentTarget.value))}>
          <option value="400">400</option>
          <option value="440">440</option>
      </select>
    </VoltageSelector>
  )
}