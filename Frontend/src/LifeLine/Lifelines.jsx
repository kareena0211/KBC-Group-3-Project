import React, { useState, useEffect } from "react";
import axios from "axios";

function Lifelines() {
  const handleLifelineClick = (type) => {
    alert(`Lifeline ${type} used!`);
  };

  const [lifelines, setLifelines] = useState([]);
  console.log("Get All Lifelines:- ", lifelines);

  useEffect(() => {
    const fetchLifelines = async () => {
      try {
        const response = await axios.get(
          "http://localhost:3000/GetAll/Lifelines"
        );
        setLifelines(response.data.lifelines);
        console.log("*******", response.data.lifelines); 
        // Assuming the data structure is { lifelines: [...] }
      } catch (error) {
        console.error("Failed to fetch lifelines:", error);
      }
    };

    fetchLifelines();
  }, []);

  return (
    <div className="flex gap-2">
      {lifelines.map((lifeline) => (
        <button
          key={lifeline.id}
          onClick={() => handleLifelineClick(lifeline.type)}
          className="px-4 py-2 text-2xl mb-3 font-bold text-white bg-pink-400 rounded cursor-pointer"
        >
          {lifeline.name}
        </button>
      ))}
    </div>
  );
}

export default Lifelines;
