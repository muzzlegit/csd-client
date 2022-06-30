import { useEffect, useState } from "react"

export default function CurrentCoefficient({
  mainSwitchCoefficient,
  capacitorCoefficient,
  setMainSwitchCoefficient,
  setCapacitorCoefficient,
  defaultMainSwitchCoefficient,
  defaultCapacitorCoefficient
}) {

  return(
    <>
      <input
        type="number"
        value={mainSwitchCoefficient}
        onChange={(e)=>setMainSwitchCoefficient(e.currentTarget.value)}
      />
      <button 
        type="button"
        onClick={()=>setMainSwitchCoefficient(defaultMainSwitchCoefficient)}
      >
        Reset
      </button>
      <input
        type="number"
        value={capacitorCoefficient}
        onChange={(e)=>setCapacitorCoefficient(e.currentTarget.value)}
      />
      <button
        type="button"
        onClick={()=>setCapacitorCoefficient(defaultCapacitorCoefficient)}
      >
        Reset
      </button>
    </>
  )
}