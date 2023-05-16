/*
 * This is the root app file which basically perform three steps:
 * 1) Read the file with the Mock Knack Application Schema data,
 * 2) Call the root logic which will sanitize the mock data (for this case only removes duplicates)
 * 3) Write the result in the output file
 */

import { readDBFromFile, writFileFromDB } from "./utilities/filesUtilities";
import { sanitizeDB } from "./core/sanitizeDB";

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
