const {
  readDBFromFile,
  writFileFromDB,
} = require("./utilities/filesUtilities");
const { sanitizeDB } = require("./core/sanitizeDB");

const app = async () => {
  console.info("0. Starting script...");

  // Read the File with the data
  const data = await readDBFromFile("../mock_application_work.json");
  console.info("1. DB read from file!");

  // Remove Field duplicates in Object
  sanitizeDB(data);
  console.info("2. DB Sanitized!");

  // write sanitized DB to a new file
  await writFileFromDB("../mock_application_output.json", data);
  console.info("3. DB Exported to file!");
};

app();
