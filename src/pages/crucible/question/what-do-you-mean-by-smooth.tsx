import { useRouter } from "next/router";

const QuestionPage = () => {
  const router = useRouter();
  const answerQuestionFunction = async (answer: string) => {
    if (answer === "Smooth Progression") {
      await router.push("/crucible/builds/fire-trap-elementalist");
    }
    if (answer === "Smooth Gameplay") {
      await router.push("/crucible/builds/cold-dot");
    }
    if (answer === "I actually just want to kill bosses easily") {
      await router.push("/crucible/builds/explosive-arrow-ignite-elementalist");
    }
  };

  const questionData = {
    question: "What do you mean by smooth?",
    answers: [
      "Smooth Progression",
      "Smooth Gameplay",
      "I actually just want to kill bosses easily",
    ],
  };

  return (
    <div className="flex h-screen flex-col bg-[#0f0f0f] text-center">
      <div className="pt-20 text-center text-4xl font-semibold  text-neutral-200">
        {questionData?.question}
      </div>

      <div className="mx-auto grid w-full grid-cols-1 items-center justify-center gap-10 py-20 lg:w-2/3 lg:grid-cols-1 xl:w-1/2 ">
        {questionData?.answers.map((answer, index) => (
          <div key={index} className="py-4">
            <button
              className="h-20 w-72 rounded-md bg-zinc-800 font-semibold text-neutral-200 hover:bg-zinc-700"
              onClick={() => answerQuestionFunction(answer)}
            >
              {answer}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default QuestionPage;
