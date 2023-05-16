const { removeDuplicates } = require("./removeDuplicates");

export const removeDuplicatedFields = (objects: any[]) => {
  console.info("starting to cleanup objects...");
  for (let i = 0; i < objects.length; i++) {
    console.info(
      `Reviewing duplicates for Object id: ${objects[i]._id} and name: ${objects[i].name}`
    );
    objects[i].fields = removeDuplicates(objects[i].fields, "key");
  }
};
