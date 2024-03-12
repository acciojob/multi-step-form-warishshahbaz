import React, { useState } from "react";

function Step(props) {
  const { activeStep, handlePrev, handleNext } = props;
  const [inputFileds, setInputFileds] = useState({
    fname: "",
    lname: "",
    modal: "",
    price: "",
    info: "",
    expire_date: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputFileds({ ...inputFileds, [name]: value });
  };

  const handleSubmit = () => {
    console.log("Submit", inputFileds);
  };
  return (
    <>
      <p>Step {activeStep}</p>
      {activeStep === 1 && (
        <div className="box">
          <input
            id="firt_name"
            name="fname"
            onChange={handleChange}
            placeholder="First Name"
            type="text"
          />
          <input
            id="last_name"
            name="lname"
            onChange={handleChange}
            placeholder="Last Name"
            type="text"
          />
        </div>
      )}
      {activeStep === 2 && (
        <div className="box">
          <input
            id="modal"
            name="modal"
            onChange={handleChange}
            placeholder="Modal"
            type="text"
          />
          <input
            id="car_price"
            name="price"
            onChange={handleChange}
            placeholder="Car Price"
            type="text"
          />
        </div>
      )}
      {activeStep === 3 && (
        <div className="box">
          <input
            id="card_info"
            name="info"
            onChange={handleChange}
            placeholder="Infomation"
            type="text"
          />
          <input
            id="expiry_date"
            name="expire_date"
            onChange={handleChange}
            placeholder="Expire Date"
            type="date"
          />
        </div>
      )}

      <div className="btn_box">
        <button onClick={handlePrev}>Prev</button>
        {activeStep !== 3 && <button onClick={handleNext}>Next</button>}
        {activeStep === 3 && <button onClick={handleSubmit}>Submit</button>}
      </div>
    </>
  );
}

export default Step;