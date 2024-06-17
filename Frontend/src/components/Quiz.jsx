import { useState, useEffect } from "react";
import Question from "./Question";
import Timer from "./Timer";
import Lifelines from "./Lifelines";

const questionsData = [
  {
    question: "What is the capital of France?",
    options: ["Berlin", "Madrid", "Paris", "Rome"],
    correct: 2,
  },
  {
    question: "Who wrote 'To Kill a Mockingbird'?",
    options: [
      "Harper Lee",
      "Mark Twain",
      "Ernest Hemingway",
      "F. Scott Fitzgerald",
    ],
    correct: 0,
  },
  // Add more questions as needed
];

function Quiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [amount, setAmount] = useState(0);
  const [timer, setTimer] = useState(30);
  const [gameOver, setGameOver] = useState(false);
  const [pauseTimer, setPauseTimer] = useState(false);

  useEffect(() => {
    if (timer === 0) {
      setGameOver(true);
    }
  }, [timer]);

  useEffect(() => {
    if (!pauseTimer && timer > 0) {
      const interval = setInterval(() => {
        setTimer((prev) => prev - 1);
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [timer, pauseTimer]);

  const handleNextQuestion = (isCorrect) => {
    if (!isCorrect) {
      setAmount((prevAmount) => Math.max(prevAmount - 1000, 0));
      setGameOver(true);
      return;
    }

    if (currentQuestion + 1 < questionsData.length) {
      setCurrentQuestion(currentQuestion + 1);
      setAmount(amount + 1000);
      setTimer(30);
      setPauseTimer(false);
    } else {
      setGameOver(true);
    }
  };

  if (gameOver) {
    return (
      <div className="text-center mt-5 text-2xl text-red-500">
        <h2>Game Over</h2>
        <p>Final Amount: ${amount}</p>
      </div>
    );
  }

  return (
    <section className="flex justify-center items-center h-screen">
      <div className="bg-white p-5 rounded-lg shadow-lg  w-[50%]flex justify-center items-center flex-col">
        <div className="flex justify-between mb-5">
          <Timer timer={timer} />
          <Lifelines setPauseTimer={setPauseTimer} />
        </div>
        <Question
          question={questionsData[currentQuestion]}
          onNextQuestion={handleNextQuestion}
          setPauseTimer={setPauseTimer}
        />
        <div className="mt-5 text-lg font-bold">
          <h2>Amount: ${amount}</h2>
        </div>
      </div>
    </section>
  );
}

export default Quiz;
