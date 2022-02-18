const cards = [
  {
    id: "card-1",
    title: "Lorem Ipsum 1",
    image:
      "https://images.unsplash.com/photo-1490077476659-095159692ab5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=851&q=80",
  },
  {
    id: "card-2",
    title: "Lorem Ipsum 2",
  },
  {
    id: "card-3",
    title: "Lorem Ipsum 3",
  },
];

const data = {
  lists: {
    "list-1": {
      id: "list-1",
      title: "ToDo",
      cards,
    },
  },
  listIds: ["list-1"],
};

export default data;
