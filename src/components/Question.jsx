import { useState } from 'react';

function Question({ question, onNextQuestion, setPauseTimer }) {
  const [selectedOption, setSelectedOption] = useState(null);
  const [isCorrect, setIsCorrect] = useState(null);
  const [hasClicked, setHasClicked] = useState(false);

  const handleOptionClick = (index) => {
    if (!hasClicked) {
      setSelectedOption(index);
      setIsCorrect(index === question.correct);
      setPauseTimer(true);
      setHasClicked(true);
    }
  };

  const handleNext = () => {
    onNextQuestion(isCorrect);
    setSelectedOption(null);
    setIsCorrect(null);
    setHasClicked(false);
    setPauseTimer(false); 
  };

  return (
    <div>
      <h2 className="question">{question.question}</h2>
      <div className="options-container">
        {question.options.map((option, index) => (
          <button
            key={index}
            onClick={() => handleOptionClick(index)}
            className={`option-button ${selectedOption === index ? (isCorrect ? 'correct' : 'incorrect') : ''}`}
            disabled={hasClicked} 
          >
            {option}
          </button>
        ))}
      </div>
      {selectedOption !== null && (
        <button onClick={handleNext} className="next-button">
          Next
        </button>
      )}
    </div>
  );
}

export default Question;
