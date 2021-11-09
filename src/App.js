import { useState } from "react";
import Greeting from "./components/Greeting";

function App() {
  const [age, setAge] = useState(36);

  return (
    <div>
      <Greeting
        firstName="Vladimir"
        lastName="Tomic"
        age={age}
        onAgeUp={(x) => setAge(age + x)}
      />
    </div>
  );
}

export default App;
