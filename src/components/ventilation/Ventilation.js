import { useEffect, useState } from "react"
import useTotalCapacity from "../../hooks/useTotalCapacity";

import {
  VentilationSection,
  VentilationTitle,
  VentilationText,
  VentilationValue
} from "./Ventilation.styled";

export default function Ventilation({capacitors}) {
  const totalCapacity = useTotalCapacity(capacitors);
  const [ventilationValue, setVentilationValue] = useState(0);

  useEffect(()=>{
    setVentilationValue(Math.ceil((3.1 * (.3 * totalCapacity)) / .6));
  }, [totalCapacity]);
  
  return(
    <VentilationSection>
      <VentilationTitle>Ventilation</VentilationTitle>
      <VentilationText>{totalCapacity} kVAr</VentilationText>     
      <VentilationValue>{ventilationValue} m3</VentilationValue>
    </VentilationSection>
  )
}