import { useEffect, useState } from "react"

import Controller from "./components/Controller/Controller";
import Capacitors from "./components/Capacitors/Capacitors";
import Ventilation from "./components/Ventilation/Ventilation";
import CurrentCoefficient from "./components/CurrentCoefficient/CurrentCoefficient";
import MainSwitchCoefficient from "./components/MainSwitchCoefficient/MainSwitchCoefficient";
import Manufacturer from "./components/Manufacturer/Manufacturer";
import CapacitorsVoltage from "./components/CapacitorsVoltage/CapacitorsVoltage";
import MainSwitch from "./components/MainSwitch/MainSwitch";
import ManualVentilation from "./components/ManualVentilation/ManualVentilation";
import FusesCurrent from "./components/FusesCurrent/FusesCurrent";
import ItemsList from "./components/ItemsList/ItemsList";

import CopperPrice from "./components/Copper/CopperPrice";

import getCapacitor from "./helpers/getCapacitor";
import setCapacitor from "./helpers/setCapacitors";
import getFuses from "./helpers/getFuses";
import getContactors from "./helpers/getContactors";

import { CrpSection, CrpSetSection, VentilationSection } from "./App.styled";

const defaultMainSwitchCoefficient = 1.8;
const defaultCapacitorCoefficient = 1.6;

function App() {
  const [mainSwitchCoefficient, setMainSwitchCoefficient] = useState(defaultMainSwitchCoefficient);
  const [capacitorCoefficient, setCapacitorCoefficient] = useState(defaultCapacitorCoefficient);
  const [steps, setSteps] = useState(6);
  const [stepsPower, setStepsPower]= useState([...Array(steps)].map(() => 0))
  const [capacitorManufacturer, setCapacitorManufacturer] = useState("RTR");  
  const [capacitorVoltage, setCapacitorVoltage] = useState(400);
  const [сrp, setCrp] = useState(setCapacitor(6, "RTR", capacitorVoltage));

  useEffect(() => {
    setCrp(prev => {
      let crp = {...prev}
      let capacitorsArray = [...prev.capacitors];
      capacitorsArray = capacitorsArray.map((capacitor) => {
 
        return getCapacitor(stepsPower[capacitor.step - 1], capacitorVoltage, capacitorManufacturer, capacitor.step)
      });
      crp.capacitors = [...capacitorsArray];
      crp.fuses = getFuses(crp.capacitors, capacitorCoefficient);
      crp.contactors = getContactors(crp.capacitors);
      return crp;
    })

  },[stepsPower, capacitorVoltage, capacitorManufacturer, capacitorCoefficient, setCrp]);

  return (
    <>
      <CrpSection>
        <CrpSetSection>
          <Controller
            setSteps={setSteps}
            setStepsPower={setStepsPower}
            setCapacitors={setCrp}
            capacitorVoltage={capacitorVoltage}
            capacitorManufacturer={capacitorManufacturer}
          />
          <Manufacturer setCapacitorManufacturer={setCapacitorManufacturer}/>
          <CapacitorsVoltage setCapacitorVoltage={setCapacitorVoltage}/>
        </CrpSetSection>
        <Capacitors
          steps={steps}
          stepsPower={stepsPower}
          setStepsPower={setStepsPower}
          capacitors={сrp.capacitors}
        />
        <CurrentCoefficient
          defaultCapacitorCoefficient={defaultCapacitorCoefficient}
          capacitorCoefficient={capacitorCoefficient}
          setCapacitorCoefficient={setCapacitorCoefficient}
        />
        <MainSwitchCoefficient
          defaultMainSwitchCoefficient={defaultMainSwitchCoefficient}      
          mainSwitchCoefficient={mainSwitchCoefficient}      
          setMainSwitchCoefficient={setMainSwitchCoefficient}         
        />
      </CrpSection>
      <VentilationSection>
        <Ventilation
          capacitors={сrp.capacitors}
        />
        <ManualVentilation/>
      </VentilationSection>

      <MainSwitch
        capacitors={сrp.capacitors}
        defaultMainSwitchCoefficient={defaultMainSwitchCoefficient}      
        mainSwitchCoefficient={mainSwitchCoefficient}      
        setMainSwitchCoefficient={setMainSwitchCoefficient}     
      />
      <FusesCurrent
        fuses={сrp.fuses}
        capacitorCoefficient={capacitorCoefficient}
      />
      <ItemsList сrp={сrp} />

      <button
        type="button"
        // onClick={()=>{

        //   console.log(capacitorsPower.map((power) => {
        //     return getCapacitor(power, capacitorVoltage, capacitorManufacturer);
        //   }))}}
          onClick={()=>{
            console.log(сrp)
            console.log(сrp.capacitors)}}
      >
        capacitors
      </button>
      <CopperPrice/>
    </>
  )
}

export default App;
