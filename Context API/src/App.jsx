import React from "react";

const ORIGINAL_TEXT =
  "Call me Ishmael. Some years ago—never mind how long precisely—having little or no money in my purse, and nothing particular to interest me on shore, I thought I would sail about a little and see the watery part of the world.";

const splitText = (text, from, to) => [
  text.slice(0, from),
  text.slice(from, to),
  text.slice(to)
];

const HighlightedText = ({ text, from, to }) => {
  const [start, highlight, finish] = splitText(text, from, to);
  return (
    <p>
      {start}
      <span style={{ backgroundColor: "yellow" }}>{highlight}</span>
      {finish}
    </p>
  );
};

export default function App() {
  const [highlightSection, setHighlightSection] = React.useState({
    from: 0,
    to: 0
  });
  const [synth, setSynth] = React.useState(window.speechSynthesis);

  const speakText = () => {
    if (!synth) {
      console.error("no tts");
      return;
    }

    let utterance = new SpeechSynthesisUtterance(ORIGINAL_TEXT);
    utterance.addEventListener("boundary", (event) => {
      const { charIndex, charLength } = event;
      setHighlightSection({ from: 0, to: charIndex + charLength });
    });
    synth.speak(utterance);
  };

  const handleStartClick = () => {
    // const newSynth = window.speechSynthesis;
    // if (!newSynth) {
    //   console.error("no tts");
    //   return;
    // }

    // setSynth(newSynth);
    synth.cancel();
    speakText();
  };

  const handlePauseClick = () => {
    if (synth) {
      synth.pause();
    }
  };

  const handleResumeClick = () => {
    if (synth) {
      synth.resume();
    }
  };

  const handleRefreshClick = () => {
    if (synth) {
      synth.cancel();
      speakText();
    }
  };

  return (
    <div className="App">
      <HighlightedText text={ORIGINAL_TEXT} {...highlightSection} />
      <button onClick={handleStartClick}>Start</button>
      <button onClick={handlePauseClick}>Pause</button>
      <button onClick={handleResumeClick}>Resume</button>
      <button onClick={handleRefreshClick}>Refresh</button>
    </div>
  );
}


// import { useState } from 'react'
// import './App.css'
// import Login from './Components/login'
// import Profile from './Components/profile'
// import UserContextProvider from './Context API/UserContextProvider'

// function App() {

//   return (
//     <div>
//       <UserContextProvider>
//         <h1>Hello World</h1>
//         <Login />
//         <Profile />
//       </UserContextProvider>
//     </div>
//   )
// }

// export default App
