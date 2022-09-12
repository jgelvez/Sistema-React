import { useState } from "react";
import "./App.css";

function App() {
  const merried = false;
  const persona = {
    firstName: "David",
    lastName: "Gallo",
  };
// min 49
  return (
    <div>
      <h1 className="text-3xl font-bold underline text-red-500">
        {merried ? "Estoy casado" : "No estoy casado"}
      </h1>
      <h1 className="text-3xl font-bold underline text-yellow-500"> {persona.firstName} </h1>
      <h2 className="text-3xl font-bold underline text-blue-500"> {persona.lastName} </h2>
    </div>
  );
}

export default App;
