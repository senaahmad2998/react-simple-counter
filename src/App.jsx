import { useState } from "react";

import Counter from "./components/Counter/Counter.jsx";
import Header from "./components/Header.jsx";
import { log } from "./log.js";
import ConfigureCounter from "./components/Counter/ConfigureCounter.jsx";

function App() {
  log("<App /> rendered");

  const [chosenCount, setChosenCount] = useState(0);

  function handleChosenCount(newCount) {
    setChosenCount(newCount);
  }

  /*
    It's used chosenCount as a key because it will be used as reset
    if chosenCount key is change it will reset/re-render Counter Component function
    React will remove previous Component Function and create a new one with new key
    */
  return (
    <>
      <Header />
      <main>
        <ConfigureCounter onSet={handleChosenCount} />
        <Counter key={chosenCount} initialCount={chosenCount} />
      </main>
    </>
  );
}

export default App;
