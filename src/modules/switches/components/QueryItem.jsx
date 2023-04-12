//COMPONENTS
import CopyButton from "shared/components/copyButton/CopyButton";
import Header from "shared/components/Header/Header";
//STORE
import useSwitchesStore from "modules/switches/store/useSwitchesStore";

export default function QueryItem() {
  const queryItem = useSwitchesStore((state) => state.queryItem);
  const { code, description, size, pole, series, manufacturer } = queryItem;

  return (
    <>
      <Header title={"Технічні дані"} />
      {code ? (
        <div className="w-full bg-primaryDark p-2 mt-1 rounded-md text-center">
          <div className="flex justify-between">
            <p className="text-acent font-bold">{description}</p>
            <CopyButton itemIndex={code} />
          </div>
          <div className="text-left">
            <p>
              Артикул: <span className="text-acent">{code}</span>
            </p>
            <p>
              Серія: <span className="text-acent">{series}</span>
            </p>
            <p>
              Кількість полюсів: <span className="text-acent">{pole}</span>
            </p>
            <p>
              Розмір: <span className="text-acent">{size}</span>
            </p>
            <p>
              Виробник: <span className="text-acent">{manufacturer}</span>
            </p>
          </div>
        </div>
      ) : null}
    </>
  );
}
