//COMPONENTS
import CopyButton from "shared/components/copyButton/CopyButton";
import Header from "shared/components/Header/Header";
//STORE
import useSwitchesStore from "modules/switches/store/useSwitchesStore";

export default function AccessoriesList() {
  const queryItem = useSwitchesStore((state) => state.queryItem);
  const { accessories } = queryItem;

  return (
    <>
      <Header title={"Аксесуари"} />
      {accessories ? (
        <ul className="w-full mt-1 flex flex-col gap-2 overflow-y-auto h-460">
          {accessories.map((item) => {
            const { code, description } = item;
            return (
              <li
                key={code}
                className="flex justify-between p-1 bg-primaryDark rounded-md"
              >
                <div className=" w-11/12">
                  <span className="text-acent">{code}</span> {description}
                </div>
                <CopyButton itemIndex={code} />
              </li>
            );
          })}
        </ul>
      ) : null}
    </>
  );
}
