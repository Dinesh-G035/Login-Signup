import LoginSignup from "./Login"
import Home from "./Home"
import "./App.css"
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Signup from "./Signup";

function App() {
  return (
    <>
     <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LoginSignup />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </BrowserRouter>
    </>
  )
}


export default App
