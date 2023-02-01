const data = [
  {
    id: 1,
    question: "The joker is the archenemy of what superhero?",
    answers: [
      {
        text: "Captain America",
        correct: false,
      },
      {
        text: "Wonder Woman",
        correct: false,
      },
      {
        text: "Batman",
        correct: true,
      },
      {
        text: "Superman",
        correct: false,
      },
    ],
  },
  {
    id: 2,
    question: "what company is also the name of one of the longest rivers in the world?",
    answers: [
      {
        text: "Amazon",
        correct: true,
      },
      {
        text: "Google",
        correct: false,
      },
      {
        text: "Ebay",
        correct: false,
      },
      {
        text: "Apple",
        correct: false,
      },
    ],
  },
  {
    id: 3,
    question:
      "Which indian cricketer has most double hunderd in test ?",
    answers: [
      {
        text: "Virat kohli",
        correct: true,
      },
      {
        text: "Sachin Tendulkar",
        correct: false,
      },
      {
        text: "Rahul Dravid",
        correct: false,
      },
      {
        text: "Virender Sehwag",
        correct: false,
      },
    ],
  },
  {
    id: 4,
    question: "the wall of cricket?",
    answers: [
      {
        text: "Steve Smith",
        correct: false,
      },
      {
        text: "Rahul Dravid",
        correct: true,
      },
      {
        text: "Jeo Root",
        correct: false,
      },
      {
        text: "Cheteshwar Pujara",
        correct: false,
      },
    ],
  },
  {
    id: 5,
    question: "who is the first indian test captain to win a test in gabba ?",
    answers: [
      {
        text: "Virat Kohli",
        correct: false,
      },
      {
        text: "Rohit Sharma",
        correct: false,
      },
      {
        text: "Ajinkya Rahane",
        correct: true,
      },
      {
        text: "MS Dhoni",
        correct: false,
      },
    ],
  },
];

const prizeMoney = [
  { id: 1, amount: "₹ 5000" },
  { id: 2, amount: "₹ 15000" },
  { id: 3, amount: "₹ 30000" },
  { id: 4, amount: "₹ 60000" },
  { id: 5, amount: "₹ 100000" },
  { id: 6, amount: "₹ 150000" },
  { id: 7, amount: "₹ 250000" },
  { id: 8, amount: "₹ 400000" },
  { id: 9, amount: "₹ 600000" },
  { id: 10, amount: "₹ 1000000" },
  { id: 11, amount: "₹ 5000000" },
  { id: 12, amount: "₹ 100000000" },
  { id: 13, amount: "₹ 300000000" },
  { id: 14, amount: "₹ 500000000" },
  { id: 15, amount: "₹ 1000000000" },
].reverse();

export { prizeMoney, data };
