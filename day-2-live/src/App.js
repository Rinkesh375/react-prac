
import './App.css';
import Avatar from './Avatar';



function App() {

  return (
    <>
     <Avatar userDetails={{name:"Trump",
  image:"https://imgs.search.brave.com/Cm9J5Bh4qDZLLrK0wr0YkhNLRhCm3-tbeNT6EO5EKEo/rs:fit:1200:1200:1/g:ce/aHR0cHM6Ly9hcGku/dGltZS5jb20vd3At/Y29udGVudC91cGxv/YWRzLzIwMTYvMDcv/cnR4Mmp2aTguanBn",
  rounded:true,
  hideName:false
}} />

<Avatar userDetails={{name:"Biden",
image:"https://imgs.search.brave.com/-VVKSiu2YLK_7HFZnXGCSKLcvgxNh-wHD-rMVPLpqtg/rs:fit:1200:1200:1/g:ce/aHR0cHM6Ly9pMS53/cC5jb20vdWVzaXdv/cmxkLm9yZy93cC1j/b250ZW50L3VwbG9h/ZHMvMjAyMC8xMS9C/SURFTi5qcGc_Zml0/PTEyMDAlMkMxMjAw/JnNzbD0x",
rounded:false,
hideName:true
}} />
    </>
 
  )
}

export default App;
