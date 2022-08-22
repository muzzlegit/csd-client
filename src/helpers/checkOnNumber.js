export default function checkOnNumber(value, defaultValue) {
  return isNaN(parseInt(value)) ? defaultValue : value;
}