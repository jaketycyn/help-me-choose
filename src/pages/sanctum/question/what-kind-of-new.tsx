import { useState, useEffect } from "react";
import { useRouter } from "next/router";

const QuestionPage = (props) => {
  const router = useRouter();
  const answerQuestionFunction = async (answer: string) => {
    if (answer === "Newly Buffed Skills") {
      await router.push("/sanctum/builds/blade-flurry-raider");
      console.log("Selected -idk just play Poe");
    }
    if (answer === "New Skills") {
      await router.push("are-you-okay-with-the-build");
      console.log("Selected - New Skills");
    }
  };

  const questionData = {
    id: 2,
    question: "What kind of new?",
    answers: ["Newly Buffed Skills", "New Skills"],
  };

  return (
    <div className="flex h-screen flex-col bg-pink-300 text-center">
      <div>{questionData?.question}</div>

      <div className="grid  w-full  gap-3 bg-green-800 p-2 ">
        {questionData?.answers.map((answer, index) => (
          <div key={index}>
            <button
              className="h-20 w-72 bg-slate-400 hover:bg-yellow-400"
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
