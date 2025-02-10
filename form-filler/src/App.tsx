import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  return (
    <>
      <div>
        <a href="#" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="#" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Form filler</h1>
      <div className="card">
        <p>Upload your resume here</p>
      </div>
      <p className="read-the-docs">Form to be added</p>
    </>
  );
}

export default App;
