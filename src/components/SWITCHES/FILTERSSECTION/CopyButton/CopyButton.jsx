import { IconContext } from "react-icons";
import { AiOutlineCopy } from "react-icons/ai";
//SYLES
import { CopyButn } from "../../../../shared/components/copyButton/styles/CopyButton.styled";

export default function CopyButton({ itemIndex }) {
  return (
    <IconContext.Provider value={{ size: "12px" }}>
      <CopyButn
        type="button"
        title="Скопіювати артикул"
        id={itemIndex}
        onClick={(e) => {
          navigator.clipboard.writeText(`${e.currentTarget.id}`).then(
            () => {},
            () => {
              /* Rejected - clipboard failed */
            }
          );
        }}
      >
        <AiOutlineCopy />
      </CopyButn>
    </IconContext.Provider>
  );
}
