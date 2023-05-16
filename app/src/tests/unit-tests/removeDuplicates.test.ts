import "jest";

import { objectWithNoDuplicates, objectWithDuplicates } from "./testData";
import { removeDuplicates } from "../../core/removeDuplicates";

describe("Test Remove Duplicates", () => {
  it("It should not change an object with no duplicates", async () => {
    const result = removeDuplicates(objectWithNoDuplicates, "key", false);
    expect(objectWithNoDuplicates.length).toBe(4);
    expect(result.length).toBe(4);
    expect(result).toStrictEqual(objectWithNoDuplicates);
  });
  it("It should eliminate the duplicates", async () => {
    const result = removeDuplicates(objectWithDuplicates, "key", false);
    expect(objectWithDuplicates.length).toBe(6);
    expect(result.length).toBe(4);
    expect(result).toStrictEqual(objectWithNoDuplicates);
  });
});
