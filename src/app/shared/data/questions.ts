import type { Question } from "../types";

export const quizQuestions: Question[] = [
  {
    id: "q1",
    question: "What's your hair type or texture?",
    options: [
      { id: "a", text: "Straight" },
      { id: "b", text: "Curly" },
      { id: "c", text: "Wavy" },
      { id: "d", text: "Fine" },
    ],
  },
  {
    id: "q2",
    question: "How often do you wash your hair?",
    options: [
      { id: "a", text: "Daily" },
      { id: "b", text: "Every other day" },
      { id: "c", text: "Twice a week" },
      { id: "d", text: "Once a week" },
      { id: "e", text: "Once every two weeks" },
    ],
  },
  {
    id: "q3",
    question: "What benefit do you look for in your hair products?",
    options: [
      { id: "a", text: "Anti-breakage" },
      { id: "b", text: "Hydration" },
      { id: "c", text: "Soothing dry scalp" },
      { id: "d", text: "Repairs the appearance of damaged hair" },
      { id: "e", text: "Volume" },
      { id: "f", text: "Curl and coil enhancing" },
    ],
  },
  {
    id: "q4",
    question: "Is there anything troubling you about your hair?",
    options: [
      { id: "a", text: "Breakage" },
      { id: "b", text: "Frizz" },
      { id: "c", text: "Scalp dryness" },
      { id: "d", text: "Damage" },
      { id: "e", text: "Tangling" },
    ],
  },
  {
    id: "q5",
    question: "What is your natural hair color(s) today?",
    options: [
      { id: "a", text: "Black" },
      { id: "b", text: "Brown" },
      { id: "c", text: "Blonde" },
      { id: "d", text: "Red/Orange" },
      { id: "e", text: "Silver/Grey" },
    ],
  },
];
