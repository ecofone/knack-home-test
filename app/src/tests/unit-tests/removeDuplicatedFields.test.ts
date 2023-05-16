import "jest";

import { fieldsWithDuplicates, fieldsWithNoDuplicates } from "./testData";
import { removeDuplicatedFields } from "../../core/removeDuplicatedFields";

describe("Test Remove Fields Duplicates", () => {
  it("It should not change the list if there are no duplicates", async () => {
    removeDuplicatedFields(fieldsWithNoDuplicates.objects, false);
    expect(fieldsWithNoDuplicates.objects[0].fields.length).toBe(2);
    expect(fieldsWithNoDuplicates.objects[1].fields.length).toBe(2);
  });
  it("It should eliminate the duplicates in the fields array", async () => {
    expect(fieldsWithDuplicates.objects[0].fields.length).toBe(3);
    expect(fieldsWithDuplicates.objects[1].fields.length).toBe(4);
    removeDuplicatedFields(fieldsWithDuplicates.objects, false);
    expect(fieldsWithDuplicates.objects[0].fields.length).toBe(2);
    expect(fieldsWithDuplicates.objects[1].fields.length).toBe(2);
    expect(fieldsWithDuplicates).toStrictEqual(fieldsWithNoDuplicates);
  });
});
