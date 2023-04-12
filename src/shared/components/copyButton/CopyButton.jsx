import { useState } from "react";
import { IconContext } from "react-icons";
import { AiOutlineCopy } from "react-icons/ai";
import { BsCheck2All } from "react-icons/bs";

export default function CopyButton({ itemIndex }) {
  const [checker, setChecker] = useState(false);

  return (
    <IconContext.Provider value={{ size: "18px" }}>
      <button
        className="w-6 h-6 bg-primaryLight flex justify-center items-center rounded hover:text-pink "
        type="button"
        title="Скопіювати артикул"
        id={itemIndex}
        onClick={(e) => {
          navigator.clipboard.writeText(`${e.currentTarget.id}`).then(
            () => {
              setChecker(true);
              setTimeout(() => {
                setChecker(false);
              }, 1000);
            },
            () => {
              /* Rejected - clipboard failed */
            }
          );
        }}
      >
        {checker ? <BsCheck2All /> : <AiOutlineCopy />}
      </button>
    </IconContext.Provider>
  );
}
