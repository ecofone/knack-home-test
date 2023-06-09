/*
 * Remove existing duplicates in the scenes array, looking at views
 */

import { removeDuplicates } from "./removeDuplicates";

export const removeDuplicatedViews = (scenes: any[], verbose = true) => {
  for (let i = 0; i < scenes.length; i++) {
    if (verbose) {
      console.info(
        `Reviewing duplicates for Scene id: ${scenes[i]._id} and name: ${scenes[i].name}`
      );
    }
    scenes[i].views = removeDuplicates(scenes[i].views, "key", verbose);
  }
};
