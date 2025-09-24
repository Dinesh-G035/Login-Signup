import Login from "./Login"
import "./App.css"
import { BrowserRouter, Routes, Route, Link, useNavigate } from 'react-router-dom';

function App() {
  return (
    <>
     <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </BrowserRouter>
    </>
  )
}
function Home() {
  return (
    <div>
      <h2>Welcome Home 🎉</h2>
      <p>You are logged in successfully.</p>
    </div>
  );
}

export default App
