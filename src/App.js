import { useEffect, useState } from "react"

import Controller from "./components/Controller/Controller";
import Capacitors from "./components/Capacitors/Capacitors";
import Ventilation from "./components/Ventilation/Ventilation";
import CurrentCoefficient from "./components/CurrentCoefficient/CurrentCoefficient";
import Manufacturer from "./components/Manufacturer/Manufacturer";
import MainSwitch from "./components/MainSwitch/MainSwitch";
import ManualVentilation from "./components/ManualVentilation/ManualVentilation";
import FusesCurrent from "./components/FusesCurrent/FusesCurrent";

import CopperPrice from "./components/Copper/CopperPrice";

import getCapacitor from "./helpers/getCapacitor";
import setCapacitor from "./helpers/setCapacitors";

const defaultMainSwitchCoefficient = 1.8;
const defaultCapacitorCoefficient = 1.6;

function App() {
  const [mainSwitchCoefficient, setMainSwitchCoefficient] = useState(defaultMainSwitchCoefficient);
  const [capacitorCoefficient, setCapacitorCoefficient] = useState(defaultCapacitorCoefficient);
  const [steps, setSteps] = useState(6);
  const [stepsPower, setStepsPower]= useState([...Array(steps)].map(() => 0))
  const [capacitorManufacturer, setCapacitorManufacturer] = useState("RTR");  
  const [capacitorVoltage, setCapacitorVoltage] = useState(400);
  const [capacitors, setCapacitors] = useState(setCapacitor(6, "RTR", capacitorVoltage));

  useEffect(() => {
    setCapacitors(prev => {

      let capacitorsArray = [...prev];

      capacitorsArray = capacitorsArray.map((capacitor) => {
        console.log(getCapacitor(stepsPower[capacitor.step - 1], capacitorVoltage, capacitorManufacturer, capacitor.step));
        return getCapacitor(stepsPower[capacitor.step - 1], capacitorVoltage, capacitorManufacturer, capacitor.step)
      });
      console.log('array',capacitorsArray);
      return capacitorsArray;
    })
  },[stepsPower, capacitorVoltage, capacitorManufacturer, setCapacitors]);


  return (
    <>
      <Controller
        setSteps={setSteps}
        setStepsPower={setStepsPower}
        setCapacitors={setCapacitors}
        capacitorVoltage={capacitorVoltage}
        capacitorManufacturer={capacitorManufacturer}
      />
      <Manufacturer setCapacitorManufacturer={setCapacitorManufacturer}/>
      <Capacitors
        steps={steps}
        setCapacitorVoltage={setCapacitorVoltage}
        stepsPower={stepsPower}
        setStepsPower={setStepsPower}
        capacitors={capacitors}
      />
      <Ventilation
        capacitors={capacitors}
      />
      <CurrentCoefficient
        defaultCapacitorCoefficient={defaultCapacitorCoefficient}
        capacitorCoefficient={capacitorCoefficient}
        setCapacitorCoefficient={setCapacitorCoefficient}
      />
      <MainSwitch
        capacitors={capacitors}
        defaultMainSwitchCoefficient={defaultMainSwitchCoefficient}      
        mainSwitchCoefficient={mainSwitchCoefficient}      
        setMainSwitchCoefficient={setMainSwitchCoefficient}     
      />
      <FusesCurrent
        capacitors={capacitors}
        capacitorCoefficient={capacitorCoefficient}
      />
      <ManualVentilation/>
      <button
        type="button"
        // onClick={()=>{

        //   console.log(capacitorsPower.map((power) => {
        //     return getCapacitor(power, capacitorVoltage, capacitorManufacturer);
        //   }))}}
          onClick={()=>{
            console.log(stepsPower)
            console.log(capacitors)}}
      >
        capacitors
      </button>
      <CopperPrice/>
    </>
  )
}

export default App;
