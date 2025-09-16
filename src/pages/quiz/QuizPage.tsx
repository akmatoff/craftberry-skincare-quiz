import { useQuiz } from "@/shared/services/useQuiz";
import Question from "./components/Question";
import Button from "@/shared/components/Button";
import CircularProgressBar from "@/shared/components/CircularProgressBar";
import { useNavigation } from "react-router";

export default function QuizPage() {
  const navigation = useNavigation();

  const isNavigating = Boolean(navigation.location);

  const {
    currentQuestion,
    hasNextQuestion,
    nextQuestion,
    prevQuestion,
    finishQuiz,
    answers,
    progress,
  } = useQuiz();

  const isAnswered = currentQuestion ? !!answers[currentQuestion?.id] : false;

  if (!currentQuestion) return <div>Question not found.</div>;

  return (
    <section className="flex flex-col justify-center items-center h-screen space-y-8">
      <div className="flex space-x-32">
        <Question question={currentQuestion} />

        <CircularProgressBar
          progress={progress.percent}
          label={`${progress.current}/${progress.total}`}
        />
      </div>

      <div className="flex gap-4">
        <Button variant="ghost" onClick={prevQuestion}>
          Back
        </Button>

        {hasNextQuestion ? (
          <Button onClick={nextQuestion} disabled={!isAnswered}>
            Next question
          </Button>
        ) : (
          <Button
            onClick={finishQuiz}
            disabled={!isAnswered || isNavigating}
            isLoading={isNavigating}
          >
            Discover your results
          </Button>
        )}
      </div>
    </section>
  );
}
