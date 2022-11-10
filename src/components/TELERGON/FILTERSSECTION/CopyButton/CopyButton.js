import { IconContext } from "react-icons";
import { AiOutlineCopy } from 'react-icons/ai';
//SYLES
import { CopyButn } from "./CopyButton.styled";

export default function CopyButton({itemIndex}){

  return(
    <IconContext.Provider value = {{size: '12px'}}>
      <CopyButn
        type="button"
        id={itemIndex}
        onClick={(e) => {
          navigator.clipboard.writeText(`${e.currentTarget.id}`).then(() => {
          },() => {
        /* Rejected - clipboard failed */
            });
        }}                
      >
        <AiOutlineCopy/>
      </CopyButn>
  </IconContext.Provider>
  )
}