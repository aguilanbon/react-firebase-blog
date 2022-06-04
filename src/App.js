import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import UserForm from './pages/UserForm';

function App() {
  return (
    <div className="App">
      <Navbar />
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/user/login' element={<UserForm />}></Route>
        </Routes>
    </div>
  );
}

export default App;
