import { useState } from "react";

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const Button = () => {};

  return (
    <div>
      <h1>Give Feedback</h1>
    </div>
  );
};

export default App;
