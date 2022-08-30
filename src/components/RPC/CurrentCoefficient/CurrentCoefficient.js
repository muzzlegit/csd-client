import { IconContext } from "react-icons";
import { AiOutlineClear, AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai';

import checkOnNumber from "../../../helpers/checkOnNumber";

import {
  CurrentCoefficientSection,
  CurrentCoefficientTitle,
  CurrentCoefficientInput,
  IncrementButton,
  DecrementButton,
  ResetButton
} from "./CurrentCoefficient.styled"

export default function CurrentCoefficient({
  capacitorCoefficient,
  setCapacitorCoefficient,
  defaultCapacitorCoefficient
}) {

  return(
    <CurrentCoefficientSection>
      <CurrentCoefficientTitle>Fuses current coefficient</CurrentCoefficientTitle>
      <CurrentCoefficientInput
        type="text"
        value={capacitorCoefficient}
        onChange={(e)=>setCapacitorCoefficient(checkOnNumber(e.currentTarget.value, defaultCapacitorCoefficient))}
      />
      <IconContext.Provider value = {{size: '20px'}}>
        <IncrementButton
          type="button"
          onClick={()=>setCapacitorCoefficient(prev => {
            if(prev >= 2){
              return prev = 2;
            }
            return Number((prev + .1).toFixed(1));
          })}
        >
          <AiOutlinePlus/>
        </IncrementButton>
      </IconContext.Provider>
      <IconContext.Provider value = {{size: '20px'}}>
        <DecrementButton
          type="button"
          onClick={()=>setCapacitorCoefficient(prev => {
            if(prev <= 1){
              return prev = 1;
            }
            return Number((prev - .1).toFixed(1));
          })}
        >
          <AiOutlineMinus/>
        </DecrementButton>
      </IconContext.Provider>
      <IconContext.Provider value = {{size: '20px'}}>
        <ResetButton
          type="button"
          onClick={()=>setCapacitorCoefficient(defaultCapacitorCoefficient)}
        >
          <AiOutlineClear/>
        </ResetButton>
      </IconContext.Provider>
    </CurrentCoefficientSection>
  )
}