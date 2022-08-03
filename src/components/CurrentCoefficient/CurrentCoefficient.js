
export default function CurrentCoefficient({
  capacitorCoefficient,
  setCapacitorCoefficient,
  defaultCapacitorCoefficient
}) {

  return(
    <>
      <h2>Defense current coefficient</h2>
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