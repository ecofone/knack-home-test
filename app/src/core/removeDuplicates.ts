// Remove duplicated objects in a array of objects provided based on the content of "key" parameter provided
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
