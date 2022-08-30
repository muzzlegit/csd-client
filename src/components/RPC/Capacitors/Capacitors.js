import Step from '../Step/Step';

export default function Capacitors({
  steps,
  stepsPower,
  setStepsPower,
  capacitors
}) {

  return(
    <>
      <Step
        steps={steps}
        capacitors={capacitors}
        stepsPower={stepsPower}
        setStepsPower={setStepsPower}
      />
    </>
  )
}