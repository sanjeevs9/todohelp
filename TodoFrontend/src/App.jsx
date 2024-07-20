
import { BrowserRouter, Router,Route, Routes } from 'react-router-dom'
import './App.css'
import LoginForm from './components/login'
import SignupForm from './components/Signup'
import Todo from './components/Todocomp'

function App() {


  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<LoginForm/>} />
        <Route path="/signup" element={<SignupForm/>}/>
        <Route path="/" element={<Todo/>}/>

      </Routes>
    </BrowserRouter>
      
    </>
  )
}

export default App
