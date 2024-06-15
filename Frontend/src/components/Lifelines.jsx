function Lifelines() {
  const handleLifelineClick = (type) => {
    alert(`Lifeline ${type} used!`);
  };

  return (
    <div className="flex gap-2">
      <button
        onClick={() => handleLifelineClick("50-50")}
        className="px-4 py-2 text-sm text-white bg-pink-400 rounded cursor-pointer"
      >
        50-50
      </button>
      <button
        onClick={() => handleLifelineClick("Phone a Friend")}
        className="px-4 py-2 text-sm text-white bg-pink-400 rounded cursor-pointer"
      >
        Phone a Friend
      </button>
      <button
        onClick={() => handleLifelineClick("Ask the Audience")}
        className="px-4 py-2 text-sm text-white bg-pink-400 rounded cursor-pointer"
      >
        Ask the Audience
      </button>
      <button
        onClick={() => handleLifelineClick("Flip the Question")}
        className="px-4 py-2 text-sm text-white bg-pink-400 rounded cursor-pointer"
      >
        Flip the Question
      </button>
    </div>
  );
}

export default Lifelines;
