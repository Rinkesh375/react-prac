import logo from './logo.svg';
import './App.css';

function App() {
  function add(){
    alert(`Add has been clicked`)
  }
  function reduce(){
    alert(`Reduce has been clicked`)
  }
  return (
    <div className="App">
     <h1>Counter 0</h1>
     <button onClick={add}>ADD</button>
     <button onClick={reduce}>REDUCE</button>
    </div>
  );
}

export default App;
