// @ts-nocheck
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Image from "next/image";

const QuestionPage = (props) => {
  const router = useRouter();
  const answerQuestionFunction = async (answer: string) => {
    if (answer === "Actually good") {
      await router.push("/sanctum/builds/seismic-trap");
    }
    if (answer === "Copium") {
      await router.push("/sanctum/builds/seismic-trap-2");
    }
  };

  const questionData = {
    question:
      "Are you actually good enough to catch up or are you just on the copium?",
    answers: ["Actually good", "Copium"],
  };

  return (
    <div className="flex h-screen flex-col bg-[#0f0f0f] text-center">
      <div className="pt-20 text-center text-4xl font-semibold  text-neutral-200">
        {questionData?.question}
      </div>

      <div className="mx-auto grid w-full grid-cols-1 items-center justify-center gap-10 py-20 lg:w-2/3 lg:grid-cols-2 xl:w-1/2 ">
        <div className="py-4">
          <button
            className="h-20 w-72 rounded-md bg-zinc-800 font-semibold text-neutral-200 hover:bg-zinc-700"
            onClick={() => answerQuestionFunction(questionData.answers[0])}
          >
            {questionData.answers[0]}
          </button>
        </div>

        {/* Copium */}

        <div className="py-4">
          <button
            className="h-20 w-72 rounded-md bg-zinc-800 font-semibold text-neutral-200 hover:bg-zinc-700"
            onClick={() => answerQuestionFunction("Copium")}
          >
            <div>
              <Image
                src="/copium.png"
                width={70}
                height={70}
                className="mx-auto flex"
              ></Image>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default QuestionPage;
