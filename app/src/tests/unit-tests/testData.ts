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

export const viewsWithNoDuplicates = {
  scenes: [
    {
      _id: "61e8666b010a37023e3d99a5",
      name: "Home",
      slug: "home",
      key: "scene_1",
      views: [
        {
          columns: [],
          links: [
            {
              name: "Products",
              type: "scene",
              scene: "products",
            },
            {
              name: "Orders",
              type: "scene",
              scene: "orders",
            },
          ],
          inputs: [],
          _id: "61e86a5d1137bc002545ff11",
          groups: [],
          format: "none",
          label: "Menu",
          name: "Menu",
          type: "menu",
          title: "",
          description: "",
          source: {
            criteria: {
              match: "all",
              rules: [],
              groups: [],
            },
            limit: "",
            sort: [],
            type: "database",
          },
          key: "view_4",
        },
      ],
      parent: "home-login",
    },
  ],
};

export const viewsWithDuplicates = {
  scenes: [
    {
      _id: "61e8666b010a37023e3d99a5",
      name: "Home",
      slug: "home",
      key: "scene_1",
      views: [
        {
          columns: [],
          links: [
            {
              name: "Products",
              type: "scene",
              scene: "products",
            },
            {
              name: "Orders",
              type: "scene",
              scene: "orders",
            },
          ],
          inputs: [],
          _id: "61e86a5d1137bc002545ff11",
          groups: [],
          format: "none",
          label: "Menu",
          name: "Menu",
          type: "menu",
          title: "",
          description: "",
          source: {
            criteria: {
              match: "all",
              rules: [],
              groups: [],
            },
            limit: "",
            sort: [],
            type: "database",
          },
          key: "view_4",
        },
        {
          columns: [],
          links: [
            {
              name: "Products",
              type: "scene",
              scene: "products",
            },
            {
              name: "Orders",
              type: "scene",
              scene: "orders",
            },
          ],
          inputs: [],
          _id: "61e86a5d1137bc002545ff11",
          groups: [],
          format: "none",
          label: "Menu",
          name: "Menu",
          type: "menu",
          title: "",
          description: "",
          source: {
            criteria: {
              match: "all",
              rules: [],
              groups: [],
            },
            limit: "",
            sort: [],
            type: "database",
          },
          key: "view_4",
        },
      ],
      parent: "home-login",
    },
  ],
};

export const fieldsWithNoDuplicates = {
  objects: [
    {
      _id: "id1",
      name: "Products",
      fields: [
        {
          type: "short_text",
          required: true,
          unique: false,
          user: false,
          conditional: false,
          rules: [],
          validation: [],
          _id: "61e869d51137bc002545fede",
          key: "field_1",
          name: "Products Name",
        },
        {
          type: "auto_increment",
          required: false,
          unique: false,
          user: false,
          conditional: false,
          rules: [],
          validation: [],
          _id: "61e869d51137bc002545fedf",
          name: "Product ID",
          key: "field_2",
        },
      ],
    },
    {
      _id: "id2",
      name: "Sales",
      fields: [
        {
          type: "number",
          required: true,
          unique: false,
          user: false,
          conditional: false,
          rules: [],
          validation: [],
          _id: "61e869d51137bc002545fede",
          key: "field_1",
          name: "Sales Amount",
        },
        {
          type: "number",
          required: false,
          unique: false,
          user: false,
          conditional: false,
          rules: [],
          validation: [],
          _id: "61e869d51137bc002545fedf",
          name: "Sales Margin",
          key: "field_2",
        },
      ],
    },
  ],
};

export const fieldsWithDuplicates = {
  objects: [
    {
      _id: "id1",
      name: "Products",
      fields: [
        {
          type: "short_text",
          required: true,
          unique: false,
          user: false,
          conditional: false,
          rules: [],
          validation: [],
          _id: "61e869d51137bc002545fede",
          key: "field_1",
          name: "Products Name",
        },
        {
          type: "auto_increment",
          required: false,
          unique: false,
          user: false,
          conditional: false,
          rules: [],
          validation: [],
          _id: "61e869d51137bc002545fedf",
          name: "Product ID",
          key: "field_2",
        },
        {
          type: "short_text",
          required: true,
          unique: false,
          user: false,
          conditional: false,
          rules: [],
          validation: [],
          _id: "61e869d51137bc002545fede",
          key: "field_1",
          name: "Products Name",
        },
      ],
    },
    {
      _id: "id2",
      name: "Sales",
      fields: [
        {
          type: "number",
          required: true,
          unique: false,
          user: false,
          conditional: false,
          rules: [],
          validation: [],
          _id: "61e869d51137bc002545fede",
          key: "field_1",
          name: "Sales Amount",
        },
        {
          type: "number",
          required: false,
          unique: false,
          user: false,
          conditional: false,
          rules: [],
          validation: [],
          _id: "61e869d51137bc002545fedf",
          name: "Sales Margin",
          key: "field_2",
        },
        {
          type: "number",
          required: true,
          unique: false,
          user: false,
          conditional: false,
          rules: [],
          validation: [],
          _id: "61e869d51137bc002545fede",
          key: "field_1",
          name: "Sales Amount",
        },
        {
          type: "number",
          required: false,
          unique: false,
          user: false,
          conditional: false,
          rules: [],
          validation: [],
          _id: "61e869d51137bc002545fedf",
          name: "Sales Margin",
          key: "field_2",
        },
      ],
    },
  ],
};
