//COMPONENTS
import CopyButton from "shared/components/copyButton/CopyButton";
//HOOKS
import useCopperPrice from "../hooks/useCopperPrice";

const CopperPrice = () => {
  const {
    standartCopperPrice,
    irregularCopperPrice,
    standartDiscount,
    irregularDiscount,
    handleIrregularPrice,
    handleStandartPrice,
  } = useCopperPrice();

  return (
    <div className="h-full p-5  rounded-md border border-orange-600 text-orange-600 ">
      <h2 className="mb-6 text-xl text-center">Ціна міді</h2>
      <div className=" flex justify-around items-start gap-2">
        <div className=" h-full flex flex-col justify-center items-center gap-2 ">
          <h3 className=" text-xl"> Стандарт</h3>
          <input
            className="w-20 text-orange-600 text-center rounded-sm"
            type="number"
            min="0"
            step="1"
            value={standartCopperPrice}
            onChange={(e) => {
              handleStandartPrice(e.currentTarget.value);
            }}
          />
          <h3 className=" text-xl">Знижка</h3>
          <div className="flex justify-center gap-2">
            <p className="text-xl font-bold text-orange-400">
              {standartDiscount} %
            </p>
            <CopyButton itemIndex={standartDiscount} />
          </div>
        </div>
        <div className=" h-full flex flex-col justify-center items-center gap-2  ">
          <h3 className=" text-xl"> Нестандарт</h3>
          <input
            className="w-20 text-orange-600 text-center rounded-sm"
            type="number"
            min="0"
            step="1"
            value={irregularCopperPrice}
            onChange={(e) => {
              handleIrregularPrice(e.currentTarget.value);
            }}
          />
          <h3 className=" text-xl">Знижка</h3>
          <div className="flex justify-center gap-2">
            <p className="text-xl font-bold text-orange-400">
              {irregularDiscount} %
            </p>
            <CopyButton itemIndex={irregularDiscount} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CopperPrice;
