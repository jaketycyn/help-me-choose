import { useState, useEffect } from "react";
import { useRouter } from "next/router";

const QuestionPage = (props) => {
  const router = useRouter();
  const answerQuestionFunction = async (answer: string) => {
    if (answer === "I can catch up with the right build") {
      //!
      await router.push("/sanctum/question/are-you-actually-good");
    }
    if (answer === "Chill") {
      await router.push("/sanctum/question/do-you-mean-that-literally");
    }
  };

  const questionData = {
    question:
      "Do you want a good build to catch up, or a chill one since you're missing the early economy anyway?",
    answers: ["I can catch up with the right build", "Chill"],
  };

  return (
    <div className="flex h-screen flex-col bg-[#0f0f0f] text-center">
      <div className="px-2 pt-20 text-center text-4xl font-semibold text-neutral-200 md:px-10 lg:px-40 xl:px-72">
        {questionData?.question}
      </div>

      <div className="mx-auto grid w-full grid-cols-1 items-center justify-center gap-10 py-20 lg:w-full lg:grid-cols-2 xl:w-2/5 ">
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
