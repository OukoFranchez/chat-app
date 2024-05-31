import { Routes, Route } from 'react-router-dom';
import './App.css';
import Chat from './pages/chat/Chat.jsx';
import Login from './pages/login/Login.jsx';
import SignUp from './pages/signup/SignUp.jsx';
function App() {
  return (
    <div className='p-4 h-screen flex items-center justify-center'>
      <Routes>
        <Route path='/' element={<Chat />} />
        <Route path='/login' element={<Login />} />
		<Route path='/signup' element={<SignUp />} />
      </Routes>
    </div>
  );
}

export default App;
