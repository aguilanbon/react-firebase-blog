import { useState } from 'react';
import { Route, Routes} from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import UserForm from './pages/UserForm';

function App() {
  const [formState, setFormState] = useState('login')

  return (
    <div className="App">
      <Navbar setFormState={setFormState}/>
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/user/login' element={<UserForm setFormState={setFormState} formState={formState} />}></Route>
        </Routes>
    </div>
  );
}

export default App;
