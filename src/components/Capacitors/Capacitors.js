import Step from "../Step/Step";

export default function Capacitors({
  steps,
  stepsPower,
  setStepsPower,
  capacitors,
  setCapacitorVoltage
}) {

  return(
    <>
      <select onChange={(e)=>setCapacitorVoltage(Number(e.currentTarget.value))}>
          <option value="400">400</option>
          <option value="440">440</option>
      </select>
      <Step
        steps={steps}
        capacitors={capacitors}
        stepsPower={stepsPower}
        setStepsPower={setStepsPower}
      />
    </>
  )
}