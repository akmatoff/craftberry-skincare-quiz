import { create } from "zustand";

export type QuizState = {
  answers: Record<string, string>;
  setAnswer: (questionId: string, optionId: string) => void;
  clear: () => void;
};

export const useQuizStore = create<QuizState>((set) => ({
  answers: {},
  setAnswer: (questionId, optionId) =>
    set((state) => ({
      answers: {
        ...state.answers,
        [questionId]: optionId,
      },
    })),
  clear: () => set({ answers: {} }),
}));
