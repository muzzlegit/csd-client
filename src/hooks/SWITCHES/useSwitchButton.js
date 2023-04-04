import { useState } from "react";

export default function SwitchButton( defaultValue ){
  const [ windowToggle, setWindowToggle ] = useState( defaultValue );

  const onWindowToggle = () => {
    setWindowToggle( prev => !prev);
  };

  return [ windowToggle, onWindowToggle ];
}