import React, { useState, useCallback } from "react";

import "./App.css";
import Button from "./components/UI/Button/Button";
import Demo from "./components/Demo/Demo";

function App() {
  console.log("APP RUNNING");

  const [showPara, setShowPara] = useState(false);
  
  const togglePara = useCallback(function () {
    setShowPara((pre) => !pre);
  }, []);

  return (
    <div className="app">
      <h1>Hi there!</h1>
      <Demo show={false} />
      {/* React.memo seems not work with Button here -> b/c when App is 
      re-executed by React, the function togglePara will be a brand new function */}
      <Button onClick={togglePara}>Click</Button>
    </div>
  );
}

export default App;
