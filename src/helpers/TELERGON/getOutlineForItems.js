
export default function getOutlineForItems(item) {
  switch (item) {
    case 0:
      return 'none';
    case 1:
      return '1px dashed yellow';
    case 2:
      return '1px dashed green';
    default:
      break;
  }
}