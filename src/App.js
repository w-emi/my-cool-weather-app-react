import Weather from "./Weather.js";

import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather />
      </div>
      <div className="footer">
        <a
          href="https://github.com/w-emi/my-cool-weather-app-react"
          target="_blank"
          rel="noreferrer"
        >
          Open-source code
        </a>
        , by{" "}
        <a
          href="https://wanaemi-amaegbe-portfolio.netlify.app/"
          target="_blank"
          rel="noreferrer"
        >
          Wanaemi Amaegbe
        </a>
      </div>
    </div>
  );
}

export default App;
