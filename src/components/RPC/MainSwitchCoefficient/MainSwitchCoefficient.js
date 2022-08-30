import { IconContext } from "react-icons";
import { AiOutlineClear, AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai';

import checkOnNumber from "../../../helpers/checkOnNumber";

import { 
  MainSwitchCoefficientSection,
  MainSwitchCoefficientTitle,
  MainSwitchInput,
  ResetButton,
  IncrementButton,
  DecrementButton
} from "./MainSwitchCoefficient.styled";

export default function MainSwitchCoefficient({
    mainSwitchCoefficient,
    setMainSwitchCoefficient,
    defaultMainSwitchCoefficient
  }){

  return(
    <MainSwitchCoefficientSection>
      <MainSwitchCoefficientTitle>Main Switch Coefficient</MainSwitchCoefficientTitle>
      <MainSwitchInput
        type="text"
        value={mainSwitchCoefficient}
        onChange={(e)=>setMainSwitchCoefficient(checkOnNumber(e.currentTarget.value, defaultMainSwitchCoefficient))}
      />
      <IconContext.Provider value = {{size: '20px'}}>
        <IncrementButton
          type="button"
          onClick={()=>setMainSwitchCoefficient(prev => {
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
          onClick={()=>setMainSwitchCoefficient(prev => {
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
          onClick={()=>setMainSwitchCoefficient(defaultMainSwitchCoefficient)}
        >
          <AiOutlineClear/>          
        </ResetButton>
      </IconContext.Provider>
    </MainSwitchCoefficientSection>
  )
}