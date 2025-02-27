import BusbarsLayout from "./components/BusbarsLayout/BusbarsLayout";
import BusbarsOptionsList from "./components/BusbarsOptionsList/BusbarsOptionsList";
import copperData from "./data/copper.json";
import { DataSchema } from "./dataSchema";

const CopperBusBars = () => {
  const parsedData = DataSchema.safeParse(copperData);
  if (!parsedData.success) {
    console.warn("Invalid data:", parsedData.error.message);
  }

  return (
    <BusbarsLayout busbarsMaterial="copper">
      {parsedData.success ? (
        <BusbarsOptionsList busbarsData={copperData} />
      ) : (
        <></>
      )}
    </BusbarsLayout>
  );
};

export default CopperBusBars;
