import logo from './logo.svg';
import './App.css';
function formatData(date){
return new Intl.DateTimeFormat("en-US",
    {weekday:"long"}
).format(date)
}

function App() {

  return (
    <div className="App">
     <h1>Date {formatData(new Date())}</h1>
    </div>
  );
}

export default App;
