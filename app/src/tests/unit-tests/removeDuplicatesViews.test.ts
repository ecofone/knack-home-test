import "jest";

import { viewsWithDuplicates, viewsWithNoDuplicates } from "./testData";
import { removeDuplicatedViews } from "../../core/removeDuplicatedViews";

describe("Test Remove Views Duplicates", () => {
  it("It should not change the list if there are no duplicates", async () => {
    removeDuplicatedViews(viewsWithNoDuplicates.scenes, false);
    expect(viewsWithNoDuplicates.scenes[0].views.length).toBe(1);
  });
  it("It should eliminate the duplicates in the fields array", async () => {
    expect(viewsWithDuplicates.scenes[0].views.length).toBe(2);
    removeDuplicatedViews(viewsWithDuplicates.scenes, false);
    expect(viewsWithDuplicates.scenes[0].views.length).toBe(1);
    expect(viewsWithDuplicates).toStrictEqual(viewsWithNoDuplicates);
  });
});
