import { useState } from "react";
import Quiz from "./components/Quiz";
import questionsData from "./questions.json";
import "./index.css";

function App() {
  const [start, setStart] = useState(false);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      {!start ? (
        <button
          onClick={() => setStart(true)}
          className="px-6 py-3 text-lg font-bold text-white bg-pink-500 rounded cursor-pointer"
        >
          Start KBC Game
        </button>
      ) : (
        <Quiz questions={questionsData} />
      )}
    </div>
  );
}

export default App;
