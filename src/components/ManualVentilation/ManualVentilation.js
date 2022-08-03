import { useEffect, useState } from "react"

export default function ManualVentilation() {
  const [value, setValue] = useState(0);
  const [ventilationValue, setVentilationValue] = useState(0);

  const onChange = (e) => {
    setValue(e.currentTarget.value);
  }

  useEffect(()=>{
    setVentilationValue(Math.ceil((3.1 * (.3 * value)) / .6));
  }, [value]);

  return(
    <>
      <h2>Manual ventilation</h2>
      <input
        type="number"
        value={value}
        onChange={onChange}
      />  
      <div>{ventilationValue} m3</div>
    </>
  )
}