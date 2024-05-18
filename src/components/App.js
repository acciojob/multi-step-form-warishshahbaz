import React, { useState } from "react";
import Step from "./Step"; // Make sure to adjust the import path
import "./App.css";

const MultiStepForm = () => {
  const [currentStep, setCurrentStep] = useState(1);

  const nextStep = () => {
    // rftgb35htg34
    if (currentStep < 3) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    alert("Form submitted successfully!");
    // You can add AJAX or other logic for form submission here
  };

  return (
    // fvt4gt4wg4dedcdcw
    <form id="multiStepForm" onSubmit={handleSubmit}>
      <Step
        stepNumber={1}
        currentStep={currentStep}
        onNext={nextStep}
        onPrev={prevStep}
      />
      <Step
        stepNumber={2}
        currentStep={currentStep}
        onNext={nextStep}
        onPrev={prevStep}
      />
      <Step
        stepNumber={3}
        currentStep={currentStep}
        onNext={nextStep}
        onPrev={prevStep}
      />
    </form>
  );
};

export default MultiStepForm;
