import './App.css';
import { Routes,Route } from 'react-router-dom';
import  Home  from './Pages/Home';
import Hackathon from './Pages/Hackathon';
import NavBar from './Pages/NavBar';
import MessageBox from './Components/ChatBox/MessageBox';

function App() {
  return (
    <div className="App h-fit  text-white">
      <NavBar/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/hackathon' element={<Hackathon/>} />
      </Routes>



      
    </div>
  );
}

export default App;
