import logo from './logo.svg';
import './App.css';
import sharingan from './imagenes/mangekyou_sharingan_kakashi.png';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={sharingan} className="App-logo" alt="logo" />
        <p>
          {/* Edit <code>src/App.js</code> and save to reload. */}
          KAKASHI SUPREMACY
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
