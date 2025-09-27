import LoginSignup from "./LoginSignup"
import Home from "./Home"
import "./App.css"
import { BrowserRouter, Routes, Route } from 'react-router-dom';


function App() {
  return (
    <>
     <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LoginSignup />} />
      </Routes>
    </BrowserRouter>
    </>
  )
}


export default App
