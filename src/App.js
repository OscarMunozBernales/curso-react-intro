import logo from './platzi.webp';
import './App.css';

function App() {
  return (
    <div className="App">

      <TodoItem
        item={3}
      />
      <TodoItem/>
      <TodoItem/>


      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edita el archivo <code>src/App.js</code> y guarda para recargar.
        </p>
        <a
          className="App-link"
          href="https://platzi.com/reactjs"
          target="_blank"
          rel="noopener noreferrer"
        >
          Aprendamos React
        </a>
      </header>
    </div>
  );
}

function TodoItem(prom) {
  return (
    <li>
      {prom.item}
      <span>V</span>
      <p>Llorar con la llorona</p>
      <span>X</span>
    </li>
  );
}

export default App;
