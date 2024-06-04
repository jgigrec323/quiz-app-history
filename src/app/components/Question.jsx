"use client";
import React, { useEffect, useState } from "react";

function Question({ question, propositions, correctAnswer, onAnswer }) {
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [isCorrect, setIsCorrect] = useState(null);
  const [showOutline, setShowOutline] = useState(false);

  const handleSubmit = (option) => {
    setSelectedAnswer(option);

    const correct = option === correctAnswer;
    setIsCorrect(correct);

    if (!correct) {
      setShowOutline(true);
    }

    setTimeout(() => {
      onAnswer(correct);
    }, 2500);
  };
  useEffect(() => {
    setSelectedAnswer(null);
    setShowOutline(false);
    setIsCorrect(null); // Reset isCorrect when a new question is displayed
  }, [question]);
  return (
    <div>
      <h2 className="text-xl font-semibold mb-12">{question}</h2>
      <div className="space-y-3 flex flex-col">
        {propositions.map((proposition, index) => (
          <button
            key={index}
            onClick={() => handleSubmit(proposition)}
            className={`btn h-full py-2 leading-snug text-start justify-start ${
              selectedAnswer === proposition
                ? isCorrect === null
                  ? "btn-outline"
                  : isCorrect
                  ? "btn-success"
                  : "btn-error"
                : "btn-outline"
            }
            ${
              proposition === correctAnswer && !isCorrect && showOutline
                ? "btn-success"
                : ""
            }
            ${
              // Add custom disabled styles
              selectedAnswer !== null ? "cursor-not-allowed" : ""
            }
            `}
          >
            {proposition}
          </button>
        ))}
      </div>
      {isCorrect === false && (
        <p className="mt-4 text-lg font-semibold text-red-500">
          The correct answer is: {correctAnswer}
        </p>
      )}
    </div>
  );
}

export default Question;
