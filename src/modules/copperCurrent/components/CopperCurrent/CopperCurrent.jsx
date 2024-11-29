import {
  getThicknessList,
  getWidthList,
} from "modules/copperCurrent/utils/helpers";

const CopperCurrent = () => {
  console.log(getThicknessList());
  console.log(getWidthList());
  return (
    <div>
      <div>Товщина</div>
      {getThicknessList().map((thickness) => {
        return (
          <div key={thickness}>
            <input type="radio" name="thickness" value={thickness} />
            <label>{thickness}</label>
          </div>
        );
      })}
      <div>Ширина</div>
      {getWidthList().map((width) => {
        return (
          <div key={width}>
            <input type="radio" name="width" value={width} />
            <label>{width}</label>
          </div>
        );
      })}
    </div>
  );
};

export default CopperCurrent;
