import logo from './logo.svg';
import './App.css';
import Welcome from './apps/Welcome';

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Welcome - Expenses - Siva
        </a>
      </header> */}
      <Welcome />
    </div>
  );
}

export default App;
