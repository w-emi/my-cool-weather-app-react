import Search from "./Search.js";
import Temperature from "./Temperature.js";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Search />
        <h1>New York</h1>
        <ul>
          <li>Current weather</li>
          <li>Updated: 4:30 AM</li>
        </ul>
        <Temperature />
      </div>
      <div className="text-center">
        <a href="https://github.com/w-emi/my-cool-weather-app-react">
          Open-source code
        </a>
        , by{" "}
        <a href="https://wanaemi-amaegbe-portfolio.netlify.app/">
          Wanaemi Amaegbe
        </a>
      </div>
    </div>
  );
}

export default App;
