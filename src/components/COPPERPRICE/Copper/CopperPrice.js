import { useEffect, useState } from "react"
import { IconContext } from "react-icons";
import { AiOutlineCopy } from 'react-icons/ai';
import useLocalStorage from "../../../hooks/SWITCHES/useLocalStorage";

import {
    CopperContainer,
    CooperPriceInput,
    CooperDiscount,
    CopyButton,
    DiscountWrap
  } from "./CopperPrice.styled";

export default function CooperPrice() {
  const [copperPrice, setCopperPrice] = useLocalStorage('price', 525);
  const [exchange,setExchange] = useLocalStorage('exchange', 38.22);
  const [coefficient] = useState(21);
  const [discount, setDiscount] = useState(0);
  const [f, setF] = useState(false);

  useEffect(()=>{
    setDiscount(Math.abs((((copperPrice / exchange) / coefficient) - 1) * 100 + 0.01).toFixed(2));
  },[copperPrice, exchange, coefficient, setDiscount]);

  return (
    <CopperContainer>
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
            <AiOutlineCopy/>
          </CopyButton>
        </IconContext.Provider>
        { f && <div style={{'color': '#64eb0b'}} >Copied!</div>}  
      </DiscountWrap>

    </CopperContainer>
  )
}