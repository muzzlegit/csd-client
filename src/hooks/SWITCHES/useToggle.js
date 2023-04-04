import { useState } from "react";

export default function useToggle( defaultValue ) {
  const [ toggle, setToggle ] = useState( defaultValue );

  const handleToggle = () => {
    setToggle( prev => !prev );
  };

  return [ toggle, handleToggle ];
}