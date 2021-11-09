import { useState } from "react";
import Greeting from "./components/Greeting";

function App() {
  const [age, setAge] = useState(36);

  const incrementAge = () => {
    setAge(age + 1);
  }

  return (
    <div>
      <Greeting firstName="Vladimir" lastName="Tomic" age={age} onAgeIncremented={incrementAge} />
    </div>
  );
}

export default App;
