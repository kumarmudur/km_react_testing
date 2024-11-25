import { useState } from "react";

const TextInput = () => {
  const [data, setData] = useState("");

  const handleChange = (event) => setData(event.target.value);

  return (
    <>
      <h1>Test OnChange Event with Input Text</h1>
      <input type="text" value={data} onChange={handleChange} />
    </>
  );
};

export default TextInput;
