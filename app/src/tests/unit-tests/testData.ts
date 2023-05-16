// Test Data
export const objectWithNoDuplicates = [
  {
    key: "key1",
    name: "name1",
    description: "description1",
    amount: 34,
  },
  {
    key: "key2",
    name: "name2",
    description: "description2",
    amount: 12,
  },
  {
    key: "key3",
    name: "name3",
    description: "description3",
    amount: 100,
  },
  {
    key: "key4",
    name: "name4",
    description: "description4",
    amount: 1,
  },
];

export const objectWithDuplicates = [
  {
    key: "key1",
    name: "name1",
    description: "description1",
    amount: 34,
  },
  {
    key: "key2",
    name: "name2",
    description: "description2",
    amount: 12,
  },
  {
    key: "key3",
    name: "name3",
    description: "description3",
    amount: 100,
  },
  {
    key: "key4",
    name: "name4",
    description: "description4",
    amount: 1,
  },
  {
    key: "key1",
    name: "name1",
    description: "description1",
    amount: 34,
  },
  {
    key: "key3",
    name: "name3",
    description: "description3",
    amount: 100,
  },
];
