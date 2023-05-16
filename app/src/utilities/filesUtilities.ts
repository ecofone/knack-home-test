// Read file and return its content
const fs = require("fs");

// Read Data form File and converts to JSON
export const readDBFromFile = async function (filename: string) {
  let data = null;
  try {
    data = await fs.promises.readFile(filename, "utf8");
  } catch (err) {
    console.log(err);
  }
  return data && JSON.parse(data);
};

// Write a file from a JSON Object
export const writFileFromDB = async function (filename: string, data: any) {
  try {
    await fs.promises.writeFile(filename, JSON.stringify(data));
  } catch (err) {
    console.log(err);
  }
};
