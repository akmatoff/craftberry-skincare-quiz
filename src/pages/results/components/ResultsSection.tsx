import Button from "@/shared/components/Button";
import { useQuiz } from "@/shared/services/useQuiz";
import ResultsImage from "@/assets/images/result-image.png";

export function ResultsSection() {
  const { retakeQuiz } = useQuiz();

  return (
    <section
      style={{ backgroundImage: `url(${ResultsImage})` }}
      className="relative text-white h-[549px] bg-cover bg-center flex flex-col justify-center items-center"
    >
      <div className="absolute inset-0 bg-black opacity-55" />

      <div className="relative max-w-[580px] flex flex-col items-center justify-center text-center space-y-8">
        <h1 className="text-[40px]/[40px]">
          Build you everyday self care routine.
        </h1>

        <p>
          Perfect for if you're looking for soft, nourished skin, our
          moisturizing body washes are made with skin-natural nutrients that
          work with your skin to replenish moisture. With a light formula, the
          bubbly lather leaves your skin feeling cleansed and cared for. And by
          choosing relaxing fragrances you can add a moment of calm to the end
          of your day.
        </p>

        <Button variant="outline" className="border-white" onClick={retakeQuiz}>
          Retake the quiz
        </Button>
      </div>
    </section>
  );
}
