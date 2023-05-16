/*
 * Remove duplicated objects in an array of objects (list) using parameter "key" as primary key for the comparison
 * Duplicates will be removed and put in a clean array.
 * The input list is not changed
 */
export const removeDuplicates = function (
  list: any[],
  key: string,
  verbose = true
) {
  const cleanList = [];
  const set = new Set();
  for (const element of list) {
    if (element[key] && !set.has(element[key])) {
      cleanList.push(element);
      set.add(element[key]);
    }
  }
  if (verbose) {
    console.info(
      `Removed ${
        list.length - cleanList.length
      } duplicated elements based on key field: ${key}`
    );
  }
  return cleanList;
};
