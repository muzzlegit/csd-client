import { useEffect, useState } from "react"

import switches from '../../switches.json';

export default function MainSwitch({
    mainSwitchCoefficient,
    setMainSwitchCoefficient,
    defaultMainSwitchCoefficient,
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
      <input
        type="number"
        min="1"
        step=".1"
        value={mainSwitchCoefficient}
        onChange={(e)=>setMainSwitchCoefficient(e.currentTarget.value)}
      />
      <button 
        type="button"
        onClick={()=>setMainSwitchCoefficient(defaultMainSwitchCoefficient)}
      >
        Reset
      </button>
      <p>{totalCurrent} A</p> 
      <p>{totalSwitchCurrent} A</p>
      <p>Switch Current {switchCurrent} A</p> 
    </>
  )
}