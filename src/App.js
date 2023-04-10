import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Hackathon from './Pages/Hackathon';
import NavBar from './Pages/NavBar';
// import MessageBox from './Components/ChatBox/MessageBox';
import Login from './Pages/Login'
import Register from './Pages/Register'

function App() {
  return (
    <div className="App h-fit w-full  text-white overflow-x-hidden">
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/hackathon' element={<Hackathon />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
      </Routes>




    </div>
  );
}

export default App;
