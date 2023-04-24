
import './App.css';

const userDetails = {
  name:"Trump",
  image:"https://imgs.search.brave.com/38tUhye_CDwkS7kHOChf284Gq-GzoJTqZogYoVVAcJ8/rs:fit:1200:1200:1/g:ce/aHR0cHM6Ly93d3cu/Z2FubmV0dC1jZG4u/Y29tLy1tbS0vNzAz/NzM1MjBiZjI3YmY2/M2RiMTJhMjBjMjk4/ZjgxMjBlNzZmMmIx/OS9jPTAtMC01MTY1/LTI5MTgmcj14MTY4/MyZjPTMyMDB4MTY4/MC9sb2NhbC8tL21l/ZGlhLzIwMTcvMDUv/MzEvVVNBVE9EQVkv/VVNBVE9EQVkvNjM2/MzE4MTI2NzQwMjc1/NDM1LUFQLVRydW1w/LVVTLUc3LmpwZw"
}
function Avatar({image,name}){
  return(<>
  <img src={image} alt={name} />
  <p>{name}</p>
  </>)
}

function App() {

  return (
    <div className="App">
      <p>Rinkesh</p>
      <Avatar {...userDetails} />
    </div>
  );
}

export default App;
