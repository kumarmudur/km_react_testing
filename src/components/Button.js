import { useState } from "react";

const Button = () => {
  const [data, setData] = useState("");

  const handleClick = () => {
    setData("updated data");
  };

  return (
    <>
      <button onClick={handleClick}>Update Data</button>
      <h1>{data}</h1>
    </>
  );
}; 

export default Button;
