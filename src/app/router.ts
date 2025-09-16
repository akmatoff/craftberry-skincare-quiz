import { createBrowserRouter } from "react-router";
import RootLayout from "./layouts/RootLayout";
import HomePage from "./pages/home/HomePage";
import QuizPage from "./pages/quiz/QuizPage";
import ResultsPage from "./pages/results/ResultsPage";
import { getAllProducts } from "./shared/api/getAllProducts";

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
        loader: async () => {
          const allProducts = await getAllProducts();

          return { allProducts };
        },
      },
    ],
  },
]);
