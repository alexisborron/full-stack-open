import Button from "./Button";
import Statistics from "./Statistics";
import { useState } from "react";

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const [total, setTotal] = useState(0);

  const handleClick = (option, setter) => () => {
    setter(option + 1);
    setTotal(total + 1);
  };

  return (
    <div>
      <h1>Unicafe</h1>
      <h2>Please share your feedback</h2>
      <Button onClick={handleClick(good, setGood)} option="good" />
      <Button onClick={handleClick(neutral, setNeutral)} option="neutral" />
      <Button onClick={handleClick(bad, setBad)} option="bad" />
      <Statistics total={total} good={good} neutral={neutral} bad={bad} />
    </div>
  );
};

export default App;
