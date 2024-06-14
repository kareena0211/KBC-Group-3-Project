import { useState } from 'react';
import Quiz from './components/Quiz';
import questionsData from './questions.json';
import Signup from './components/signup';
import Login from './components/login';



function App() {
  const [isLogin, setIsLogin] = useState(false);

  const toggleForm = () => {
    setIsLogin(!isLogin);
  };
  const [start, setStart] = useState(false);

  return (
    <div className="app-container">
      <div>
        <div className="flex justify-center items-center h-16 bg-blue-400 text-white">
          <button onClick={toggleForm} className="px-4 py-2 bg-gray-800 rounded">Switch to {isLogin ? 'Signup' : 'Login'}</button>
        </div>
        <div className="container mx-auto py-8">
          {isLogin ? <Login /> : <Signup />}
        </div>
      </div>
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
