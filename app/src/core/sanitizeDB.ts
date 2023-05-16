/*
 * This is the root logic to sanitize the Mock Knack Application Schema data.
 * It iterate over the versions array and pass down the object and scenes objects to the specific routines which review them
 * Since objects are passed as reference in JS, the changes are done directly in the original object
 */

import { removeDuplicatedFields } from "./removeDuplicatedFields";
import { removeDuplicatedViews } from "./removeDuplicatedViews";

export const sanitizeDB = function (data: any) {
  if (data?.versions) {
    for (let i = 0; i < data.versions.length; i++) {
      if (data.versions[i]?.objects) {
        console.log("Analyzing Objects array............................");
        removeDuplicatedFields(data.versions[i].objects);
      }
      if (data.versions[i]?.scenes) {
        console.log("Analyzing Scenes array............................");
        removeDuplicatedViews(data.versions[i].scenes);
      }
    }
  }
};
