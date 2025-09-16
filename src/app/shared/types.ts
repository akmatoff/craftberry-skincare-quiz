export type Question = {
  id: string;
  question: string;
  options: QuestionOption[];
};

export type QuestionOption = {
  id: string;
  text: string;
};

export type QuizProgress = {
  current: number;
  total: number;
  percent: number;
};
