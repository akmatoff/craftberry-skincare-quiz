import { create } from "zustand";
import type { QuestionAnswer } from "../types";

export type QuizState = {
  answers: Record<string, QuestionAnswer | undefined>;
  setAnswer: (questionId: string, answer: QuestionAnswer) => void;
  clear: () => void;
};

export const useQuizStore = create<QuizState>((set) => ({
  answers: {},
  setAnswer: (questionId, answer) =>
    set((state) => ({
      answers: {
        ...state.answers,
        [questionId]: answer,
      },
    })),
  clear: () => set({ answers: {} }),
}));
