import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <p>First React Test Case</p>
      <input
        type="text"
        placeholder="Enter User Name"
        name="username"
        id="userId"
        value={"shiva"}
        readOnly
      />
    </div>
  );
}

export default App;