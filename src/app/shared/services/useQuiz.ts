import { quizQuestions } from "@/app/shared/data/questions";
import { useNavigate, useParams } from "react-router";
import { ROUTES } from "@/app/shared/constants/routes";
import { useQuizStore } from "../store/quizStore";
import type { QuizProgress } from "../types";

export function useQuiz() {
  const { questionId } = useParams<{ questionId: string }>();

  const { answers, setAnswer } = useQuizStore();

  const navigate = useNavigate();

  const currentIndex = quizQuestions.findIndex((q) => q.id === questionId);

  const currentQuestion =
    currentIndex !== -1 ? quizQuestions[currentIndex] : null;

  const hasNextQuestion = currentIndex < quizQuestions.length - 1;
  const hasPrevQuestion = currentIndex > 0;

  const progress: QuizProgress = {
    current: currentIndex + 1,
    total: quizQuestions.length,
    percent: ((currentIndex + 1) / quizQuestions.length) * 100,
  };

  const isSelected = (optionId: string) =>
    questionId ? answers[questionId] === optionId : false;

  const nextQuestion = () => {
    if (hasNextQuestion) {
      navigate(`${ROUTES.quiz}/${quizQuestions[currentIndex + 1].id}`);
    }
  };

  const prevQuestion = () => {
    if (hasPrevQuestion) {
      navigate(`${ROUTES.quiz}/${quizQuestions[currentIndex - 1].id}`);
    } else {
      navigate(ROUTES.home);
    }
  };

  const finishQuiz = () => {
    navigate(ROUTES.results);
  };

  return {
    currentQuestion,
    currentIndex,
    hasNextQuestion,
    hasPrevQuestion,
    nextQuestion,
    prevQuestion,
    finishQuiz,
    progress,
    answers,
    setAnswer,
    isSelected,
  };
}
