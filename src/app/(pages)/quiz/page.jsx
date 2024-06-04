"use client";
import Question from "@/app/components/Question";
import React, { useEffect, useState } from "react";
import { questions } from "@/app/utils/Data";
import { shuffle } from "@/app/utils/shuffle";
import { useRouter } from "next/navigation";

function Quiz() {
  const router = useRouter();
  const [shuffledQuestions, setShuffledQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);

  const handleAnswer = (isCorrect) => {
    if (isCorrect) {
      let step = 100 / shuffledQuestions.length;

      setScore(score + step);
    }
    const nextQuestionIndex = currentQuestionIndex + 1;
    if (nextQuestionIndex < shuffledQuestions.length) {
      setCurrentQuestionIndex(nextQuestionIndex);
    } else {
      sessionStorage.setItem("score", score);
      router.push("/result");
    }
  };

  useEffect(() => {
    const limit =
      parseInt(sessionStorage.getItem("numberOfQuestions"), 10) ||
      questions.length;
    const shuffled = shuffle([...questions]);
    setShuffledQuestions(shuffled.slice(0, limit));
  }, []);

  return (
    <div className="h-screen">
      <div className="space-y-4">
        <h2 className="btn bg-green-500 text-white">Score : {score} / 100 </h2>
        <h2 className=" ml-2 btn bg-green-500 text-white">
          Question : {currentQuestionIndex + 1} / {shuffledQuestions.length}
        </h2>
      </div>
      <div className="mt-10">
        {currentQuestionIndex < shuffledQuestions.length && (
          <Question
            {...shuffledQuestions[currentQuestionIndex]}
            onAnswer={handleAnswer}
          />
        )}
      </div>
    </div>
  );
}

export default Quiz;
