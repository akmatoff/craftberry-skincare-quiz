import { createBrowserRouter } from "react-router";
import RootLayout from "./layouts/RootLayout";
import HomePage from "./pages/home/HomePage";
import QuizPage from "./pages/quiz/QuizPage";
import ResultsPage from "./pages/results/ResultsPage";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      {
        index: true,
        Component: HomePage,
      },
      {
        path: "quiz/:questionId",
        Component: QuizPage,
      },
      {
        path: "results",
        Component: ResultsPage,
      },
    ],
  },
]);
