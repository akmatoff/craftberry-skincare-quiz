import { filterProductsByAnswers } from "../lib/filterProductsByAnswers";
import { useQuizStore } from "../store/quizStore";
import type { Product, QuestionAnswer } from "../types";

export function useProductRecommendations(allProducts: Product[]) {
  const answersFromStore = useQuizStore((state) => state.answers);

  const answers = Object.values(answersFromStore) as QuestionAnswer[];

  const productRecommendations = filterProductsByAnswers(allProducts, answers);

  return productRecommendations;
}
