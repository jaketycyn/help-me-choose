import { useState, useEffect } from "react";
import { useRouter } from "next/router";

const QuestionPage = (props) => {
  const router = useRouter();
  const answerQuestionFunction = async (answer: string) => {
    if (answer === "Yes") {
      await router.push("/sanctum/builds/volcanic-fissure-berserker");
      console.log("Selected - Sure");
    }
    if (answer === "No, but I'll take cold garbage") {
      await router.push("/sanctum/builds/ice-crash-frozen-legion-slayer");
      console.log("Selected - Sure");
    }
  };

  const questionData = {
    question: "Are you okay with the build potentially being hot garbage?",
    answers: ["Yes", "No, but I'll take cold garbage"],
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
