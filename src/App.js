import './App.css';
import Login from './components/Login';
import Client from './components/Clientpage/Client';
import { Router, Routes, Route, BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <>
<BrowserRouter>
  <Routes>
    <Route exact path='/' element={<Login/>} />
    <Route  path ='/clientmaster' element={<Client/>} />
  </Routes>
  </BrowserRouter>  
    </>
  );
}

export default App;
