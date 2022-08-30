import { useEffect, useState } from "react"
import { IconContext } from "react-icons";
import { AiFillCopy } from 'react-icons/ai';

import {
    CopperContainer,
    CooperPriceInput,
    CooperDiscount,
    CopyButton,
    DiscountWrap
  } from "./CopperPrice.styled";

export default function CooperPrice() {
  const [copperPrice, setCopperPrice] = useState(515);
  const [exchange,setExchange] = useState(38.26);
  const [coefficient, setCoefficient] = useState(21);
  const [discount, setDiscount] = useState(0);
  const [toggle, setToggle] = useState(false);
  const [f, setF] = useState(false);

  useEffect(()=>{
    setDiscount(Math.abs((((copperPrice / exchange) / coefficient) - 1) * 100 + 0.01).toFixed(2));
  },[copperPrice, exchange, coefficient, setDiscount]);

  return (
    <CopperContainer>
      {/* <h3>Coefficient</h3>
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
      >{toggle ? 'set' : 'change'}</button> */}
      <h3>Cooper Price</h3>
      <CooperPriceInput
        type="number"
        min="0"
        step="1"
        value={copperPrice}
        onChange={(e)=>setCopperPrice(e.currentTarget.value)}
      />
      <h3>Exchange</h3>
      <CooperPriceInput
        type="number"
        min="0"
        step=".01"
        value={exchange}
        onChange={(e)=>setExchange(e.currentTarget.value)}
      />
      <h3>Discount</h3>
      <DiscountWrap>
        <CooperDiscount>{discount}</CooperDiscount>
        <IconContext.Provider value = {{size: '20px'}}>
          <CopyButton
            type="button"
            onClick={(e) => {
              navigator.clipboard.writeText(`${discount}`).then(() => {
                setF(true);
                setTimeout(() => {
                  setF(false);
                }, 1000);
              },() => {
                /* Rejected - clipboard failed */
              });
            }}
          >
            <AiFillCopy/>
          </CopyButton>
        </IconContext.Provider>
        { f && <div style={{'color': '#64eb0b'}} >Copied!</div>}  
      </DiscountWrap>

    </CopperContainer>
  )
}