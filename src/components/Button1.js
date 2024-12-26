import { useState } from "react";
import handleOtherMethod from "../helper";

const Button1 = () => {
  const [data, setData] = useState("");

  const handleClick = () => {
    setData("hello shiva");
  };

  return (
    <div className="App">
      <h1>Functional Component method testing</h1>
      <button data-testid="btn1" onClick={handleClick}>
        Update
      </button>
      <button onClick={handleOtherMethod}>Print</button>
      <h2>{data}</h2>
    </div>
  );
};

export default Button1;
