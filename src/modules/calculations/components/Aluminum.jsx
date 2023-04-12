//COMPONENTS
import CopyButton from "shared/components/copyButton/CopyButton";
//HOOKS
import useAluminumPrice from "../hooks/useAluminumPrice";

const Aluminum = () => {
  const { aluminumPrice, discount, setNewAluminumPrice } = useAluminumPrice();

  return (
    <div className=" h-full flex flex-col justify-center items-center gap-2 rounded-md border border-slate-400 text-slate-300 ">
      <h3 className=" text-xl">Ціна алюмінію</h3>
      <input
        className="w-20 text-slate-600 text-center rounded-sm"
        type="number"
        min="0"
        step="1"
        value={aluminumPrice}
        onChange={(e) => {
          setNewAluminumPrice(e.currentTarget.value);
        }}
      />
      <h3 className=" text-xl">Знижка</h3>
      <div className="flex justify-center gap-2">
        <p className="text-xl font-bold text-slate-200">{discount} %</p>
        <CopyButton itemIndex={discount} />
      </div>
    </div>
  );
};

export default Aluminum;
