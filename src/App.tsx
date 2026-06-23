import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Login from "./pages/login"
import Inicio from "./pages/inicio"
function App() {


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<Login />} />
          <Route path='/Inicio' element={<Inicio />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
