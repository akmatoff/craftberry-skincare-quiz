import { useNavigate } from "react-router";
import ProductRecommendations from "./components/ProductRecommendations";
import { ResultsSection } from "./components/ResultsSection";
import { useEffect } from "react";
import { useQuiz } from "@/app/shared/services/useQuiz";
import { ROUTES } from "@/app/shared/constants/routes";

export default function ResultsPage() {
  const navigate = useNavigate();

  const { answers } = useQuiz();

  useEffect(() => {
    if (Object.values(answers).length === 0) {
      navigate(ROUTES.home);
    }
  }, []);

  return (
    <>
      <div>
        <ResultsSection />
      </div>
      <div className="-mt-16 relative">
        <ProductRecommendations />
      </div>
    </>
  );
}
