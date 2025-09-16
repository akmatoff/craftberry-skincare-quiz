import Button from "@/shared/components/Button";
import { ROUTES } from "@/shared/constants/routes";
import { quizQuestions } from "@/shared/data/questions";
import HeroImage from "@/assets/images/hero-image.png";
import { useNavigate } from "react-router";

const firstQuestionId = quizQuestions[0].id;

export default function HeroSection() {
  const navigate = useNavigate();

  const handleStartQuiz = () => {
    if (quizQuestions.length === 0) return;

    navigate(`${ROUTES.quiz}/${firstQuestionId}`);
  };

  return (
    <section
      className="relative text-white h-[526px] bg-cover bg-center flex flex-col justify-center items-center"
      style={{ backgroundImage: `url(${HeroImage})` }}
    >
      <div className="absolute inset-0 bg-black opacity-35" />

      <div className="relative text-center max-w-[500px] space-y-4">
        <h1 className="text-[40px]/[40px]">
          Build a self care routine suitable for you
        </h1>
        <p>
          Take out test to get a personalised self care <br /> routine based on
          your needs.
        </p>

        <Button onClick={handleStartQuiz}>Start the quiz</Button>
      </div>
    </section>
  );
}
