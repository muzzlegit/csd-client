import { useEffect, useState } from "react"

import switches from '../../data/switches.json';

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
    <>
      <h2>Main Switch</h2>
      <p>{totalCurrent} A</p> 
      <p>{totalSwitchCurrent} A</p>
      <p>Switch Current {switchCurrent} A</p> 
    </>
  )
}