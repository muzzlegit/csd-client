import { useEffect, useState } from "react"

import Controller from "../Controller/Controller";
import Capacitors from "../Capacitors/Capacitors";
import Ventilation from "../Ventilation/Ventilation";
import CurrentCoefficient from "../CurrentCoefficient/CurrentCoefficient";
import MainSwitchCoefficient from "../MainSwitchCoefficient/MainSwitchCoefficient";
import Manufacturer from "../Manufacturer/Manufacturer";
import CapacitorsVoltage from "../CapacitorsVoltage/CapacitorsVoltage";
import MainSwitch from "../MainSwitch/MainSwitch";
import ManualVentilation from "../ManualVentilation/ManualVentilation";
// import FusesCurrent from "../FusesCurrent/FusesCurrent";
import ItemsList from "../ItemsList/ItemsList";

import getCapacitor from "../../../helpers/getCapacitor";
import setCapacitor from "../../../helpers/setCapacitors";
import getFuses from "../../../helpers/getFuses";
import getContactors from "../../../helpers/getContactors";

import {
  CrpSection,
  CrpSetSection,
  VentilationSection,
  Container
} from "./Rpc.styled";

const defaultMainSwitchCoefficient = 1.8;
const defaultCapacitorCoefficient = 1.6;

export default function Rpc() {
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

  return(
    <Container>
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
        <MainSwitch
          capacitors={сrp.capacitors}
          defaultMainSwitchCoefficient={defaultMainSwitchCoefficient}      
          mainSwitchCoefficient={mainSwitchCoefficient}      
          setMainSwitchCoefficient={setMainSwitchCoefficient}     
        />
        <ManualVentilation/>
      </VentilationSection>
      <ItemsList сrp={сrp} />
            {/* <FusesCurrent
        fuses={сrp.fuses}
        capacitorCoefficient={capacitorCoefficient}
      /> */}
    </Container>    
  )
}