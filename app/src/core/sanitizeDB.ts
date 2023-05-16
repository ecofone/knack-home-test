const { removeDuplicatedFields } = require("./removeDuplicatedFields");
const { removeDuplicatedViews } = require("./removeDuplicatedViews");

export const sanitizeDB = function (data: any) {
  if (data?.versions) {
    for (let i = 0; i < data.versions.length; i++) {
      if (data.versions[i]?.objects) {
        removeDuplicatedFields(data.versions[i].objects);
      }
      if (data.versions[i]?.scenes) {
        removeDuplicatedViews(data.versions[i].scenes);
      }
    }
  }
};
