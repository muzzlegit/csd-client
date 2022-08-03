import { useEffect, useState } from "react"
import useTotalCapacity from "../../hooks/useTotalCapacity";

export default function Ventilation({capacitors}) {
  const totalCapacity = useTotalCapacity(capacitors);
  const [ventilationValue, setVentilationValue] = useState(0);


  useEffect(()=>{
    setVentilationValue(Math.ceil((3.1 * (.3 * totalCapacity)) / .6));
  }, [totalCapacity]);

  return(
    <>
      <h2>Ventilation</h2>
      <div>{totalCapacity} kVAr</div>     
      <div>{ventilationValue} m3</div>
    </>
  )
}