import { createBrowserRouter, redirect } from "react-router";
import RootLayout from "../layouts/RootLayout";
import HomePage from "../pages/home/HomePage";
import QuizPage from "../pages/quiz/QuizPage";
import ResultsPage from "../pages/results/ResultsPage";
import { getAllProducts } from "../shared/api/getAllProducts";
import { useQuizStore } from "../shared/store/quizStore";
import { ROUTES } from "../shared/constants/routes";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      {
        index: true,
        Component: HomePage,
        loader: () => {
          const isCompleted = useQuizStore.getState().isCompleted;

          if (isCompleted) {
            return redirect(ROUTES.results);
          }

          return null;
        },
      },
      {
        path: "quiz/:questionId",
        Component: QuizPage,
      },
      {
        path: "results",
        Component: ResultsPage,
        loader: () => {
          const isCompleted = useQuizStore.getState().isCompleted;

          if (!isCompleted) {
            return redirect(ROUTES.home);
          }

          const allProducts = getAllProducts();

          return { allProducts };
        },
      },
    ],
  },
]);
