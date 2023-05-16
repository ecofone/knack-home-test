/*
 * This is the root app file which basically perform three steps:
 * 1) Read the file with the Mock Knack Application Schema data,
 * 2) Call the root logic which will sanitize the mock data (for this case only removes duplicates)
 * 3) Write the result in the output file
 */

import { readDBFromFile, writFileFromDB } from "./utilities/filesUtilities";
import { sanitizeDB } from "./core/sanitizeDB";
const config = require("../config.js");

const app = async () => {
  console.info("0. Starting script...");

  // Read the File with the data
  const data = await readDBFromFile(config.inputFile);
  if (!data) {
    process.exit(1); // We exit with error in case the file could not be read
  }
  console.info("1. DB read from file!");

  // Remove Field duplicates in Object
  sanitizeDB(data);
  console.info("2. DB Sanitized!");

  // write sanitized DB to a new file
  await writFileFromDB(config.outputFile, data);
  console.info("3. DB Exported to file!");
};

app();
