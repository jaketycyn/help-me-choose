import { useState, useEffect } from "react";
import { useRouter } from "next/router";

const QuestionPage = (props) => {
  const router = useRouter();
  const answerQuestionFunction = async (answer: string) => {
    if (answer === "Always") {
      await router.push("/sanctum/builds/flicker-strike-raider");
      console.log("Selected - Sure");
    }
    if (answer === "Kinda") {
      await router.push("/sanctum/builds/artillery-ballista-raider");
      console.log("Selected - Sure");
    }
    if (answer === "No") {
      await router.push("complicated-or-simple");
      console.log("Selected - No");
    }
  };

  const questionData = {
    question: "Do you want to do meme shit?",
    answers: ["Always", "Kinda", "No"],
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
