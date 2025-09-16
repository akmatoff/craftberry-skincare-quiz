import { create } from "zustand";
import type { QuestionAnswer } from "../types";
import { persist } from "zustand/middleware";

export type QuizState = {
  answers: Record<string, QuestionAnswer | undefined>;
  setAnswer: (questionId: string, answer: QuestionAnswer) => void;
  clear: () => void;
  isCompleted: boolean;
  setIsCompleted: (isCompleted: boolean) => void;
};

export const useQuizStore = create(
  persist<QuizState>(
    (set) => ({
      answers: {},
      setAnswer: (questionId, answer) =>
        set((state) => ({
          answers: {
            ...state.answers,
            [questionId]: answer,
          },
        })),
      clear: () => set({ answers: {}, isCompleted: false }),
      isCompleted: false,
      setIsCompleted: (isCompleted) => set({ isCompleted }),
    }),
    { name: "quiz" }
  )
);
