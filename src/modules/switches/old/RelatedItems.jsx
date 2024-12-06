//COMPONENTS
import CopyButton from "shared/components/copyButton/CopyButton";
import Header from "shared/components/Header/Header";
//HOOKS
import useQueryItem from "modules/switches/old/hooks/useQueryItem";
import useSwitchesData from "modules/switches/old/hooks/useSwitchesData";

export default function RelatedItems({ onChange }) {
  const { queryItem } = useQueryItem();
  const { getItemById } = useSwitchesData();

  const { relatedItems } = queryItem;

  return (
    <>
      <Header title={"Можливі заміни"} />
      {relatedItems ? (
        <ul className="w-full  mt-1 flex flex-col gap-2">
          {relatedItems.map((relatedItem) => {
            const { code } = relatedItem;
            const currentItem = getItemById(code);
            if (!currentItem) return <></>;
            return (
              <li
                key={code}
                className="flex justify-between p-1 bg-primaryDark rounded-md hover:cursor-pointer"
              >
                <div
                  onClick={() => {
                    onChange(code);
                  }}
                  id={code}
                >
                  <span className="text-acent">{currentItem.series} </span>
                  {currentItem.description}
                  <span className="text-acent">
                    {` ( ${currentItem.manufacturer} )`}
                  </span>
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
