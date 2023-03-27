import { useState, useEffect } from "react";
import { useRouter } from "next/router";

const QuestionPage = (props) => {
  const router = useRouter();
  const answerQuestionFunction = async (answer: string) => {
    if (answer === "idk just play POE") {
      await router.push("/sanctum/question/wanna-try-the-new-stuff");
      console.log("Selected -idk just play POE");
    }
  };

  const questionData = {
    id: 0,
    question: "What are your league start plans?",
    answers: [
      "idk just play POE",
      "I want to go off-meta",
      "I have to work :(",
      "I want a build that got nerfed but will still be fine",
      "I want a build that's fun but kinda mid so I can blame that for being slow",
      "I took time off and prepared a weeks worth of healthy meals",
    ],
  };

  return (
    <div className="flex h-screen flex-col bg-[#0f0f0f] text-center">
      <div className="pt-20 text-center text-4xl font-semibold  text-neutral-200">
        {questionData?.question}
      </div>

      <div className="mx-auto grid w-full grid-cols-1 items-center justify-center gap-10 py-20 lg:w-2/3 lg:grid-cols-2 xl:w-1/2 ">
        {questionData?.answers.map((answer, index) => (
          <div key={index}>
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
