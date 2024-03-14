import { useState } from "react";

import "./App.css";

function App() {
  const [bgcolor, setBgcolor] = useState("olive");
  const colors = [
    "red",
    "green",
    "blue",
    "gray",
    "olive",
    "lavender",
    "purple",
    "yellow",
    "darkcyan",
    "darkviolet",
    "pink"
  ];
  return (
    <div
      className="w-full h-screen duration-500"
      style={{ backgroundColor: bgcolor}}
      
    >
      <div className="px-2 fixed bottom-12 flex flex-wrap justify-center   inset-x-0">
        <div className="flex flex-wrap px-3 py-2 justify-center shadow-lg gap-3 rounded-3xl bg-white">
          {colors.map((boxColor,index) => (
            <button
              className="outline-none px-4 py-1 rounded-full text-lg shadow-lg hover:scale-x-110 duration-200"
              style={{ backgroundColor: boxColor}}
              onClick={() => setBgcolor(colors[index])}
            >
              {boxColor}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
