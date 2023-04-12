//COMPONENTS
import CopyButton from "shared/components/copyButton/CopyButton";
//HOOKS
import useCopperPrice from "../hooks/useCopperPrice";

const CopperPrice = () => {
  const { copperPrice, exchange, discount, setNewCopperPrice, setNewExchange } =
    useCopperPrice();

  return (
    <div className=" h-full flex flex-col justify-center items-center gap-2 rounded-md border border-orange-600 text-orange-600 ">
      <h3 className=" text-xl">Ціна міді</h3>
      <input
        className="w-20 text-orange-600 text-center rounded-sm"
        type="number"
        min="0"
        step="1"
        value={copperPrice}
        onChange={(e) => {
          setNewCopperPrice(e.currentTarget.value);
        }}
      />
      <h3 className=" text-xl">Курс</h3>
      <input
        className="w-20 text-orange-600 text-center rounded-sm"
        type="number"
        min="0"
        step="0.01"
        value={exchange}
        onChange={(e) => {
          setNewExchange(e.currentTarget.value);
        }}
      />

      <h3 className=" text-xl">Знижка</h3>
      <div className="flex justify-center gap-2">
        <p className="text-xl font-bold text-orange-400">{discount} %</p>
        <CopyButton itemIndex={discount} />
      </div>
    </div>
  );
};

export default CopperPrice;
