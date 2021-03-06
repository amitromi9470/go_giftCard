import "./App.css";
import { useState } from "react";
import ParentContainer from "./Components/ParentContainer/ParentContainer";
import Thanku from "./Components/Thanku/Thanku";

function App() {
  const [initialPhNumber, setInitialPhNumber] = useState(
    window.localStorage.getItem("phNumber")
  );

  const getPhNumber = () => {
    setInitialPhNumber(window.localStorage.getItem("phNumber"));
  };

  return (
    <div className="App">
      {initialPhNumber ? (
        <Thanku />
      ) : (
        <ParentContainer getPhNumber={getPhNumber} />
      )}
    </div>
  );
}

export default App;
