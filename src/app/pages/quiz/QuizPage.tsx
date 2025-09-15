import { quizQuestions } from "@/app/shared/data/questions";
import { useNavigate, useParams } from "react-router";
import Question from "./components/Question";
import Button from "@/app/shared/components/Button";
import { ROUTES } from "@/app/shared/constants/routes";

export default function QuizPage() {
  const { questionId } = useParams<{ questionId: string }>();

  const navigate = useNavigate();

  const currentIndex = quizQuestions.findIndex((q) => q.id === questionId);

  const currentQuestion =
    currentIndex !== -1 ? quizQuestions[currentIndex] : null;

  if (!currentQuestion) return <div>Question not found.</div>;

  const hasNextQuestion = currentIndex < quizQuestions.length - 1;
  const hasPrevQuestion = currentIndex > 0;

  const handleNext = () => {
    if (hasNextQuestion) {
      navigate(`${ROUTES.quiz}/${quizQuestions[currentIndex + 1].id}`);
    }
  };

  const handlePrev = () => {
    if (hasPrevQuestion) {
      navigate(`${ROUTES.quiz}/${quizQuestions[currentIndex - 1].id}`);
    } else {
      navigate(ROUTES.home);
    }
  };

  const handleFinish = () => {
    navigate(ROUTES.results);
  };

  return (
    <section className="flex flex-col justify-center items-center h-screen space-y-8">
      <Question question={currentQuestion} />

      <div className="flex gap-4">
        <Button variant="ghost" onClick={handlePrev}>
          Back
        </Button>

        {hasNextQuestion ? (
          <Button onClick={handleNext}>Next question</Button>
        ) : (
          <Button onClick={handleFinish}>Discover your results</Button>
        )}
      </div>
    </section>
  );
}
