
function Lifelines() {
    const handleLifelineClick = (type) => {
  
      // Handle lifeline logic write here
      alert(`Lifeline ${type} used!`);
    };
  
    return (
      <div className="lifelines-container">
        <button onClick={() => handleLifelineClick('50-50')} className="lifeline-button">
          50-50
        </button>
        <button onClick={() => handleLifelineClick('Phone a Friend')} className="lifeline-button">
          Phone a Friend
        </button>
        <button onClick={() => handleLifelineClick('Ask the Audience')} className="lifeline-button">
          Ask the Audience
        </button>
        <button onClick={() => handleLifelineClick('Flip the Question')} className="lifeline-button">
          Flip the Question
        </button>
      </div>
    );
  }
  
  export default Lifelines;
  