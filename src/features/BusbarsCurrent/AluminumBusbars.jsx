import BusbarsLayout from "./components/BusbarsLayout/BusbarsLayout";
import BusbarsOptionsList from "./components/BusbarsOptionsList/BusbarsOptionsList";
import aluminumData from "./data/aluminum.json";
import { DataSchema } from "./dataSchema";

const AluminumBusbars = () => {
  const parsedData = DataSchema.safeParse(aluminumData);
  if (!parsedData.success) {
    console.warn("Invalid data:", parsedData.error.message);
  }

  return (
    <BusbarsLayout busbarsMaterial="aluminum">
      {parsedData.success ? (
        <BusbarsOptionsList busbarsData={aluminumData} />
      ) : (
        <></>
      )}
    </BusbarsLayout>
  );
};

export default AluminumBusbars;
