import logo from './logo.svg';
import './App.css';
function Button ({text,onClick}){
  return <button onClick={onClick}>{text}</button>
}
function Header({text}){
    return <h1>{text}</h1>
}
function App() {

  return (
    <div className="App">
    <Header text="COUNTER - 0"/>
    <Button text="ADD" onClick={()=>alert(`ADD has been clicked`)}/>
    <Button text="REDUCE" onClick={()=>alert(`REDUCE has been clicked`)} />
    </div>
  );
}

export default App;
