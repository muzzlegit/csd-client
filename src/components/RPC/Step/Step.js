import { useEffect, useState } from "react"
import useTotalCapacity from "../../../hooks/useTotalCapacity";
import { IconContext } from "react-icons";
import { AiOutlineClear } from 'react-icons/ai';
import { Steps, StepsList, StepsListItem, ResetButton, TotalCapacityBox, TotalCapacityTitle, TotalCapacityAmount } from "./Step.styled";

export default function Step({
  capacitors,
  steps,
  setStepsPower,
  defaultCapacitorCoefficient,
  capacitorCoefficient,
  setCapacitorCoefficient,
  defaultMainSwitchCoefficient,
  mainSwitchCoefficient,
  setMainSwitchCoefficient
}) {
  const [stepIndex, setStepIndex] = useState(1);
  const [power, setPower] = useState(0);
  const [isSelected, setIsSelected] = useState(false);
  const totalCapacity = useTotalCapacity(capacitors);

  const onChange = (e) => {
    setPower(Number(e.currentTarget.value));
    setStepIndex(Number(e.currentTarget.id));
    setIsSelected(false);
  }
  const onClick = () => {
    setIsSelected(true);
    setStepsPower([...Array(steps)].map(() => 0))
  }

  useEffect(() => {
    setIsSelected(true);
  },[steps]);

  useEffect(()=>{  
    setStepsPower(prev => {
      let powersArray = [...prev];
      powersArray[stepIndex - 1] = power;
      return powersArray;
    }
    )
  }, [power, stepIndex, setStepsPower]);
  
  return(
    <Steps>
      <StepsList>
        { capacitors.map((capacitor) => {
          return (
            <StepsListItem 
              key={`step${capacitor.step}`}
              value = {capacitor.power}
            >  
              <label htmlFor={capacitor.step}>{`Step ${capacitor.step} `}</label>
              <select id={capacitor.step} onChange={onChange}>
                <option
                  value="0"
                  selected = {isSelected}
                >0</option>
                <option value="2.5">2.5</option>
                <option value="5">5</option>
                <option value="7.5">7.5</option>
                <option value="10">10</option>
                <option value="12.5">12.5</option>
                <option value="15">15</option>
                <option value="20">20</option>
                <option value="25">25</option>
                <option value="30">30</option>
                <option value="40">40</option>
                <option value="50">50</option>
              </select>
            </StepsListItem>
          )
        })}
      </StepsList>
      <IconContext.Provider value = {{size: '20px'}}>
        <ResetButton onClick={onClick}>
          <AiOutlineClear/>
        </ResetButton>
      </IconContext.Provider>
      <TotalCapacityBox>
        <TotalCapacityTitle>Total capacity</TotalCapacityTitle>
        <TotalCapacityAmount>{totalCapacity}</TotalCapacityAmount>
      </TotalCapacityBox>
    </Steps>
  )
}