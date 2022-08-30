import setCapacitor from "../../../helpers/setCapacitors";
import { ControllerSteps } from "./Controller.styled";

export default function Controller({
    setSteps,
    setStepsPower,
    setCapacitors,
    capacitorVoltage,
    capacitorManufacturer
  }) {

  const onChange = (e) => {
    setSteps(e.currentTarget.value);
    switch (e.currentTarget.value) {
      case "6":
        setCapacitors(setCapacitor(6, capacitorManufacturer, capacitorVoltage));
        setStepsPower([...Array(6)].map(() => 0));
        break;
      case "8":
        setCapacitors(setCapacitor(8, capacitorManufacturer, capacitorVoltage));
        setStepsPower([...Array(8)].map(() => 0));        
        break;
      case "12":
        setCapacitors(setCapacitor(12, capacitorManufacturer, capacitorVoltage));
        setStepsPower([...Array(12)].map(() => 0));        
        break;
      case "14":
        setCapacitors(setCapacitor(14, capacitorManufacturer, capacitorVoltage));
        setStepsPower([...Array(14)].map(() => 0));        
        break;
      default:
        break;
    }
  }
  return(
    <ControllerSteps>
      <p>Set Steps Number </p>
      <select onChange={onChange}>
          <option value="6">6</option>
          <option value="8">8</option>
          <option value="12">12</option>
          <option value="14">14</option> 
      </select>
    </ControllerSteps>
  )
}