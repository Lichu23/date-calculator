import { useState } from "react";
import "./App.css";

function App() {
  const [input1, setInput1] = useState<Date>(new Date());
  const [input2, setInput2] = useState<Date>(new Date());
  const [difference, setDifferenceDay] = useState<number>(0);

  function handleDateChange(e: React.ChangeEvent<HTMLInputElement>) {
    const newDate = new Date(e.target.value);
    if (!isNaN(newDate.getTime())) {
      // Validate input as a valid date
      setInput1(input1 === null ? newDate : input2); // Update correct state
      setInput2(input1 === null ? null : newDate); // Update other state if needed
    }
  }

  function calculateDifference() {
    const millisecondsDiff = input2.getTime() - input1.getTime();
    const daysDiff = Math.floor(millisecondsDiff / (1000 * 60 * 60 * 24));

    if (millisecondsDiff === 0) {
      setDifferenceDay(0);
      return;
    }
    setDifferenceDay(daysDiff);
  }

  return (
    <>
      <div>
        <h1>Calculator Dates</h1>
        <input type="date" onChange={handleDateChange} />
        <input type="date" onChange={handleDateChange} />
        <button onClick={calculateDifference}>calcular</button>
        {<p>The difference is: {difference} days</p>}
      </div>
    </>
  );
}

export default App;
