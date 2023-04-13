import React from "react";
import Introduction from "./components/Introduction";
import Question from "./components/Question";
import { nanoid } from "nanoid";
import ReactConfetti from "react-confetti";

function App() {
  return (
    <div className="App">
      <Introduction />
    </div>
  );
}

export default App;
