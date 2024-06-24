import React, { useState, useEffect } from "react";
import Question from "../Questions/Question";
import Timer from "../Timer/Timer";
import Lifelines from "../LifeLine/Lifelines";

function Quiz({ questions }) {
  const [currentQuestion, setCurrentQuestion] = useState(0); // index of the current question being displayed.
  const [amount, setAmount] = useState(0);
  const [timer, setTimer] = useState(30);
  const [gameOver, setGameOver] = useState(false);
  const [pauseTimer, setPauseTimer] = useState(false);
  const [showFinalScore, setShowFinalScore] = useState(false); // State to control showing final score

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
      setShowFinalScore(true); // Show final score when answer is incorrect
      setPauseTimer(true); // Pause timer
      setGameOver(true); // Game over
      return;
    }

    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion(currentQuestion + 1);
      setAmount(amount + 1000);
      setTimer(30);
      setPauseTimer(false);
    } else {
      setGameOver(true);
    }
  };

  return (
    <div className="rounded-lg w-11/12 h-5/6 m-0 flex flex-col items-center justify-center">
      {!gameOver && (
        <div>
          <Lifelines />
          <Timer timer={timer} />
        </div>
      )}
      {!gameOver ? (
        <Question
          question={questions[currentQuestion]}
          onNextQuestion={handleNextQuestion}
          setPauseTimer={setPauseTimer}
        />
      ) : (
        <div className="text-center mb-3 ml-7 text-3xl text-black bg-white p-4 rounded-lg shadow-lg w-full max-w-xl">
          <h2>Game Over</h2>
          {showFinalScore && <p>Final Amount: ₹ {amount}</p>}
        </div>
      )}
      {(!gameOver || showFinalScore) && (
        <span className="p-1 text-xl font-bold text-black bg-blue-400 rounded ml-8 mb-3">
          <span>
            Every Question Amount( Per Q./1000 ) = ( {currentQuestion}*1000 ): ₹{" "}
            {amount} Win
          </span>
        </span>
      )}
    </div>
  );
}

export default Quiz;
