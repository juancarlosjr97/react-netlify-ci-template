import logo from "./logo.svg";
import "./App.css";

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Learn more about</p>
        <a
          className="App-link"
          href="https://spongebob.fandom.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          SpongeBob SquarePants
        </a>
      </header>
    </div>
  );
};

export default App;
