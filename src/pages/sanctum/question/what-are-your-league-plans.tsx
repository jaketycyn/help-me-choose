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
