import { useEffect, useState } from "react"

export default function CooperPrice() {
  const [copperPrice, setCopperPrice] = useState(515);
  const [exchange,setExchange] = useState(38.26);
  const [coefficient, setCoefficient] = useState(21);
  const [discount, setDiscount] = useState(0);
  const [toggle, setToggle] = useState(false);
  const [f, setF] = useState(false);
  useEffect(()=>{
    setDiscount(Math.abs((((copperPrice / exchange) / coefficient) - 1) * 100).toFixed(2));
  },[copperPrice, exchange, coefficient, setDiscount]);

  return (
    <>
      <h2>Cooper Price</h2>
      <h3>Coefficient</h3>

      {!toggle && 
        <small>{coefficient}</small>
      }
      {toggle && 
        <input
          type="number"
          min="0"
          step="1"
          value={coefficient}
          onChange={(e)=>setCoefficient(e.currentTarget.value)}
        />}
      <button
        type="button"
        onClick={() => setToggle(!toggle)}
      >{toggle ? 'set' : 'change'}</button>
      <h3>Cooper</h3>
      <input
        type="number"
        min="0"
        step="1"
        value={copperPrice}
        onChange={(e)=>setCopperPrice(e.currentTarget.value)}
      />
      <h3>Exchange</h3>
      <input
        type="number"
        min="0"
        step=".01"
        value={exchange}
        onChange={(e)=>setExchange(e.currentTarget.value)}
      />
      <h3>discount</h3>
      <small>{discount}</small>
      <button
        type="button"
        onClick={(e) => {
          navigator.clipboard.writeText(`${discount}`).then(() => {
            setF(true);
            setTimeout(() => {
              setF(false);
            }, 2000);
          },() => {
            /* Rejected - clipboard failed */
          });
        }}
      >Copy</button> 
              { f && <div>copy</div>}  
    </>
  )
}