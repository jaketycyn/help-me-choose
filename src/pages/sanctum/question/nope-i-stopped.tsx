import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Image from "next/image";

const QuestionPage = (props: any) => {
  const router = useRouter();
  const answerQuestionFunction = async (answer: string) => {
    if (answer === "Soooooo what build?") {
      //!
      await router.push("/sanctum/builds/caustic-arrow");
    }
  };

  const questionData = {
    question: "Nope, I stopped taking time off and doing meal prep",
    answers: ["Soooooo what build?"],
  };

  return (
    <div className="flex h-screen flex-col bg-[#0f0f0f] text-center">
      <div className="flex flex-row items-center justify-center px-2 pt-20 text-center text-4xl font-semibold text-neutral-200 md:px-10 lg:px-40 xl:px-72">
        <div>{questionData?.question}</div>
        <div>
          {" "}
          <Image
            src="/pepelaugh.png"
            width={70}
            height={70}
            className="mx-auto flex pl-2 "
          />
        </div>
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
