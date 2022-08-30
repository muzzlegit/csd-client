import { useEffect, useState } from "react"

import { MainSwitchSection, MainSwitchCurrent } from "./MainSwitch.styled";

import switches from '../../../data/switches.json';

export default function MainSwitch({
    mainSwitchCoefficient,
    capacitors
  }){
    const [totalCurrent, setTotalCurrent] = useState(0);
    const [totalSwitchCurrent, setTotalSwitchCurrent] = useState(0);
    const [switchCurrent, setSwitchCurrent] = useState(0);

    useEffect(()=>{
      setTotalCurrent(0);
      setTotalSwitchCurrent(0);
      capacitors.forEach(capacitor => {
        if(capacitor.current){
          setTotalCurrent(prev => Math.ceil(prev + capacitor.current));
        }
      });
      setTotalSwitchCurrent(Math.ceil(totalCurrent * mainSwitchCoefficient));
    }, [capacitors, totalCurrent, mainSwitchCoefficient, setTotalSwitchCurrent]);

    useEffect(()=>{
      setSwitchCurrent(0);
      if(!totalSwitchCurrent){return}
      const switchesCurrentArray = [];
      switches.forEach((step) => {
        switchesCurrentArray.push(step.current);
      });
      setSwitchCurrent(switchesCurrentArray.find(current => current > totalSwitchCurrent));

    }, [totalSwitchCurrent, setSwitchCurrent]);  

  return(
    <MainSwitchSection>
      <h2>Main Switch</h2>
      <p>Capacitors Current {totalCurrent} A</p> 
      <p>Capacitors Current With Coefficient {totalSwitchCurrent} A</p>
      <p>Switch Current <MainSwitchCurrent>{switchCurrent}</MainSwitchCurrent> A</p> 
    </MainSwitchSection>
  )
}