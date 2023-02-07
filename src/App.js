import logo from './logo.svg';
import './App.css';
import {useNavigate} from 'react-router-dom'

function App() {
  const navigate = useNavigate();
  return (
    <div className="container text-center">
     <h1 style={{textAlign:"center"}}>Home</h1>
      <button className='btn btn-primary btn-lg' style={{textAlign:"center",width:"90%"}} onClick={()=>{navigate("createpost")}}   >Next</button>
    </div>
    
  );
}

export default App;
