import { useRouter } from "next/router";

const QuestionPage = () => {
  const router = useRouter();
  const answerQuestionFunction = async (answer: string) => {
    if (answer === "I want something very simple to play") {
      await router.push("/crucible/question/how-simple");
    }
    if (answer === "Just give me the smooth meta builds") {
      await router.push("/crucible/question/what-do-you-mean-by-smooth");
    }
    if (answer === "I want to finally play hit-based bows") {
      await router.push("/crucible/question/do-you-want-to-compete-for-gear");
    }
    if (answer === "I want something that got nerfed") {
      await router.push("/crucible/question/why");
    }
    if (answer === "I want the jank") {
      await router.push("/crucible/question/what-kind-of-jank");
    }
  };

  const questionData = {
    id: 0,
    question: "What are your league start plans?",
    answers: [
      "I want something very simple to play",
      "Just give me the smooth meta builds",
      "I want to finally play hit-based bows",
      "I want something that got nerfed",
      "I want the jank",
      "melee.... good?",
    ],
  };

  return (
    <div className="flex h-screen flex-col bg-[#0f0f0f] text-center">
      <div className="pt-20 text-center text-4xl font-semibold  text-neutral-200">
        {questionData?.question}
      </div>

      <div className="mx-auto grid w-full grid-cols-1 items-center justify-center gap-10 py-20 lg:w-2/3 lg:grid-cols-2 xl:w-1/2 ">
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
