import Main from './components/main'
import Login from './components/login/login'
import Register from './components/register/register'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
export default function App(){
  return(
    <>
    <Router>
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
    </Router>
    </>
  )
}