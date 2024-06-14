import { useState, useEffect } from 'react';
import Question from './Question';
import Timer from './Timer';
import Lifelines from './Lifelines';

function Quiz({ questions }) {
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
    <div className="quiz-container">
      <div className="top-section">
        <Timer timer={timer} />
        <Lifelines />
      </div>
      {!gameOver ? (
        <Question question={questions[currentQuestion]} onNextQuestion={handleNextQuestion} setPauseTimer={setPauseTimer} />
      ) : (
        <div className="final-amount">
          <h2>Game Over</h2>
          <p>Final Amount: ${amount}</p>
        </div>
      )}
      <div className="amount-display">
        <h2>Amount: ₹{amount}</h2>
      </div>
    </div>
  );
}

export default Quiz;
