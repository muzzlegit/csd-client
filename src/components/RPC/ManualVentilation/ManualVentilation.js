import { useEffect, useState } from "react"

import checkOnNumber from "../../../helpers/checkOnNumber";

import {
  ManualVentilationSection,
  ManualVentilationTitle,
  ManualVentilationInput,
  ManualVentilationValue
} from "./ManualVentilation.styled";

export default function ManualVentilation() {
  const [value, setValue] = useState(0);
  const [ventilationValue, setVentilationValue] = useState(0);

  const onChange = (e) => {
    setValue(checkOnNumber(e.currentTarget.value, ''));
  }

  useEffect(()=>{
    setVentilationValue(Math.ceil((3.1 * (.3 * value)) / .6));
  }, [value]);

  return(
    <ManualVentilationSection>
      <ManualVentilationTitle>Manual ventilation</ManualVentilationTitle>
      <ManualVentilationInput
        type="text"
        value={value}
        onChange={onChange}
      />
      <ManualVentilationValue>{ventilationValue} m3</ManualVentilationValue>
    </ManualVentilationSection>
  )
}