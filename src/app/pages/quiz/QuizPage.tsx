import { useQuiz } from "@/app/shared/services/useQuiz";
import Question from "./components/Question";
import Button from "@/app/shared/components/Button";
import CircularProgressBar from "@/app/shared/components/CircularProgressBar";

export default function QuizPage() {
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
      <div className="flex">
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
          <Button onClick={finishQuiz}>Discover your results</Button>
        )}
      </div>
    </section>
  );
}
