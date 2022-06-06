import { useState } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import UserForm from './pages/UserForm';
import {signOut} from 'firebase/auth'
import { auth } from './firebase-config'
import Create from './pages/Create';


function App() {
  const [formState, setFormState] = useState('login')
  const [isAuth, setIsAuth] = useState(false)
  const navigate = useNavigate()

  const userSignOut = () => {
      signOut(auth).then(res => {
          localStorage.setItem("auth", false)
          navigate('/')
      })
  }


  return (
    <div className="App">
      <Navbar setFormState={setFormState} setIsAuth={setIsAuth} userSignOut={userSignOut} isAuth={isAuth} />
        <Routes>
          <Route path='/' element={<Home />}></Route>
          {!isAuth && <Route path='/blog/create' element={<Create />}></Route>}
          <Route path='/user/login' element={<UserForm setFormState={setFormState} formState={formState} setIsAuth={setIsAuth}/>}></Route>
        </Routes>
    </div>
  );
}

export default App;
