import { useState } from "react";
// import Quiz from "./components/Quiz";
// import questionsData from "./questions.json";
import "./index.css";
import Login from "./components/Login";
import Signup from "./components/Signup";

function App() {

  const [start, setStart] = useState(false);
  const [isLogin, setIsLogin] = useState(false);

    const toggleForm = () => {
        setIsLogin(!isLogin);
    };

  return (
    // <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
    //   {!start ? (
    //     <button
    //       onClick={() => setStart(true)}
    //       className="px-6 py-3 text-lg font-bold text-white bg-pink-500 rounded cursor-pointer"
    //     >
    //       Start KBC Game
    //     </button>
    //   ) : (
    //     <Quiz questions={questionsData} />
    //   )}
    // </div>

    // ----------------------------------------------------------------

    <div>
            <div className="flex justify-center items-center h-16 bg-blue-400 text-white">
                <button onClick={toggleForm} className="px-4 py-2 bg-gray-800 rounded">Switch to {isLogin ? 'Signup' : 'Login'}</button>
            </div>
            <div className="container mx-auto py-8">
                {isLogin ? <Login /> : <Signup />}
            </div>
        </div>
  );
}

export default App;
