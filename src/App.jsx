import { useState } from "react";

function App() {
  const [color, setColor] = useState("grey");

  return (
    <div
      className="w-full h-screen duration-300"
      style={{ backgroundColor: color }}
    >
      <h1 className="fixed flex flex-wrap justify-center top-10 inset-x-0 px-2 text-xl font-bold">
        Please Click the color button for the Change the backgroud
      </h1>
      <div className="fixed flex flex-wrap justify-center top-20 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-4 py-2 rounded-xl">
          <button
            onClick={() => {
              setColor("red");
            }}
            className="outline-none px-4 py-1 rounded-lg text-white"
            style={{ backgroundColor: "red" }}
          >
            Red
          </button>
          <button
            onClick={() => setColor("orange")}
            className="outline-none px-4 py-1 rounded-lg text-white"
            style={{ backgroundColor: "orange" }}
          >
            Orange
          </button>
          <button
            onClick={() => setColor("yellow")}
            className="outline-none px-4 py-1 rounded-lg text-black"
            style={{ backgroundColor: "yellow" }}
          >
            Yellow
          </button>
          <button
            onClick={() => setColor("green")}
            className="outline-none px-4 py-1 rounded-lg text-black"
            style={{ backgroundColor: "green" }}
          >
            Green
          </button>
          <button
            onClick={() => setColor("blue")}
            className="outline-none px-4 py-1 rounded-lg text-white"
            style={{ backgroundColor: "blue" }}
          >
            Blue
          </button>
          <button
            onClick={() => setColor("indigo")}
            className="outline-none px-4 py-1 rounded-lg text-white"
            style={{ backgroundColor: "indigo" }}
          >
            Indigo
          </button>
          <button  
            onClick={() => setColor("violet")}
            className="outline-none px-4 py-1 rounded-lg text-white"
            style={{ backgroundColor: "violet" }}
          >
            Violet
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
