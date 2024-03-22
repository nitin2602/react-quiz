import React, { useState } from "react";
import "./App.css";

const App = () => {
  const [showResults, setShowResults] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);

  const questions = [
    {
      text: "What is the capital of India?",
      options: [
        { id: 0, text: "Mumbai", isCorrect: false },
        { id: 1, text: "Lucknow", isCorrect: false },
        { id: 2, text: "New Delhi", isCorrect: true },
        { id: 3, text: "Kanpur", isCorrect: false },
      ],
    },
    {
      text: "Republic Day of India ?",
      options: [
        { id: 0, text: "26 January", isCorrect: true },
        { id: 1, text: "29 January", isCorrect: false },
        { id: 2, text: "24 January", isCorrect: false },
        { id: 3, text: "22 January", isCorrect: false },
      ],
    },
    {
      text: "Who was the first president of the India?",
      options: [
        { id: 0, text: "Dr. Rajendra prasad", isCorrect: true },
        { id: 1, text: "Jawaharlal Nehru", isCorrect: false },
        { id: 2, text: "Indira Gandhi", isCorrect: false },
        { id: 3, text: "Bhimrao Ambedkar", isCorrect: false },
      ],
    },
    {
      text: "What is the largest state in the India?",
      options: [
        { id: 0, text: "Uttar Pradesh", isCorrect: false },
        { id: 1, text: "Rajhasthan", isCorrect: true },
        { id: 2, text: "Madhaya Pradesh", isCorrect: false },
        { id: 3, text: "Goa", isCorrect: false },
      ],
    },
    {
      text: "Which of the following countries DO NOT border the India?",
      options: [
        { id: 0, text: "Pakistan", isCorrect: false },
        { id: 1, text: "Japan", isCorrect: true },
        { id: 2, text: "Russia", isCorrect: true },
        { id: 3, text: "Nepal", isCorrect: false },
      ],
    },
  ];

  const optionClicked = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }

    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResults(true);
    }
  };

  const restartGame = () => {
    setScore(0);
    setCurrentQuestion(0);
    setShowResults(false);
  };
  return (
    <div className=" flex-col justify-center items-center ">
      <div>
        <h1 className=" mt-5 font-bold text-center text-5xl">
          India Quiz Game
        </h1>
        <h2 className=" mt-3 font-bold text-center text-2xl">Score: {score}</h2>
      </div>

      <div className="flex justify-center item-center">
        {showResults ? (
          <div className=" flex-col justify-center items-center w-1/2 h-auto mt-16 bg-gray-600 p-4 text-white">
            <h1 className=" mt-5 font-bold text-center text-5xl">
              Final Results
            </h1>
            <h2 className=" mt-3 font-bold text-center text-2xl">
              {score} out of {questions.length} correct - (
              {(score / questions.length) * 100}%)
            </h2>

            <div className="flex justify-center items-center mt-3">
              <button
                className="bg-red-700 text-white text-center no-underline inline-block text-base font-bold p-2 rounded-lg right-0"
                onClick={() => restartGame()}
              >
                Restart game
              </button>
            </div>
          </div>
        ) : (
          <div className=" rounded-xl w-1/2 h-auto mt-16 bg-gray-600 p-4 text-white">
            <h2 className=" mt-3 font-bold text-center text-2xl">
              Question: {currentQuestion + 1} out of {questions.length}
            </h2>
            <h3 className=" mt-3 font-bold italic text-center text-3xl">
              {questions[currentQuestion].text}
            </h3>

            <ul>
              {questions[currentQuestion].options.map((option) => {
                return (
                  <li
                    className=" border rounded-md mt-4  p-4 text-xl cursor-pointer"
                    key={option.id}
                    onClick={() => optionClicked(option.isCorrect)}
                  >
                    {option.text}
                  </li>
                );
              })}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default App;
