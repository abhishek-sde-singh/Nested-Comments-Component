export const initialData = [
  {
    id: "1",
    text: "Hello there",
    depth: 0,
    children: [
      {
        id: 2,
        text: "I am Abhishek",
        depth: 1,
        children: [
          {
            id: 5,
            text: "i am nested",
            depth: 2,
          },
        ],
      },
      {
        id: 3,
        text: "Glad to meet you",
        depth: 1,
        children: [],
      },
    ],
  },
  {
    id: 10,
    text: "just chill",
    depth: 0,
    children: [],
  },
];
