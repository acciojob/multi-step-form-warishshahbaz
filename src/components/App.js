import React, { useState } from "react";
import "./../styles/App.css";
import Step from "./Step";

const App = () => {
  const [activeStep, setActiveStep] = useState(1);

  const handlePrev = () => {
    if (activeStep > 1) {
      setActiveStep((pre) => pre - 1);
    }
  };

  const handleNext = (e) => {
    e.preventDefault();
    if (activeStep < 3) {
      setActiveStep((pre) => pre + 1);
    }
  };
  console.log("jii");
  return (
    <div className="main">
      <Step
        activeStep={activeStep}
        handlePrev={handlePrev}
        handleNext={handleNext}
        setActiveStep={setActiveStep}
      />
    </div>
  );
};

export default App;
