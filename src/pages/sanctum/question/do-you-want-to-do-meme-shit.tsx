import { useRouter } from "next/router";

const QuestionPage = () => {
  const router = useRouter();
  const answerQuestionFunction = async (answer: string) => {
    if (answer === "Always") {
      await router.push("/sanctum/builds/flicker-strike-raider");
    }
    if (answer === "Kinda") {
      await router.push("/sanctum/builds/artillery-ballista-raider");
    }
    if (answer === "No") {
      await router.push("complicated-or-simple");
    }
  };

  const questionData = {
    question: "Do you want to do meme shit?",
    answers: ["Always", "Kinda", "No"],
  };

  return (
    <div className="flex h-screen flex-col bg-[#0f0f0f] text-center">
      <div className="pt-20 text-center text-4xl font-semibold  text-neutral-200">
        {questionData?.question}
      </div>

      <div className="mx-auto grid w-full grid-cols-1 items-center justify-center gap-10 py-20 lg:w-full lg:grid-cols-1 xl:w-2/5 ">
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
