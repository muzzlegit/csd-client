import { useEffect, useState } from "react"

export default function useTotalCapacity(capacitors){
  const [totalCapacity, setTotalCapacity] = useState(0);

  useEffect(()=>{
    setTotalCapacity(0);
    capacitors.forEach(capacitor => {
      if(capacitor.power){
        setTotalCapacity(prev => prev + capacitor.power);
      }
    });
  }, [capacitors]);
  
  return totalCapacity;
}