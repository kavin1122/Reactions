import React, { useState } from "react";
import "./App.css";
import MoodDisplay from "./MoodDisplay";

function App() {
  const [mood, setMood] = useState("");

  return (
    <center>
    <div className={'Container $(mood)'}>
      <h1>How are you Feeling today?</h1>

      <div className="buttons">
        <button onClick={()=>setMood("happy")}>😊 Happy</button>
        <button onClick={()=>setMood("sad")}>😔 Sad</button>
        <button onClick={()=>setMood("angry")}>😡 Angry</button>
        <button onClick={()=>setMood("calm")}>😌 Calm</button>
      </div>
      <MoodDisplay mood={mood} />
    </div>
    </center>
  );
}

export default App;