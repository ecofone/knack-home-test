/*
 * Remove existing duplicates in the objects array, looking at fields
 */

import { removeDuplicates } from "./removeDuplicates";

export const removeDuplicatedFields = (objects: any[], verbose = true) => {
  for (let i = 0; i < objects.length; i++) {
    if (verbose) {
      console.info(
        `Reviewing duplicates for Object id: ${objects[i]._id} and name: ${objects[i].name}`
      );
    }
    objects[i].fields = removeDuplicates(objects[i].fields, "key", verbose);
  }
};
