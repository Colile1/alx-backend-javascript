export default function appendToEachArrayValue(array, appendString) {
  for (let idx = 0; idx < array.length; idx += 1) {
    array[idx] = appendString + array[idx];
  }

  return array;
}
