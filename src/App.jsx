import { useState } from 'react';
import Quiz from './components/Quiz';
import questionsData from './questions.json';
import "./index.css"

function App() {
  const [start, setStart] = useState(false);

  return (
    <div className="app-container">
      {!start ? (
        <button onClick={() => setStart(true)} className="start-button">
          Start KBC Game
        </button>
      ) : (
        <Quiz questions={questionsData} />
      )}
    </div>
  );
}

export default App;
