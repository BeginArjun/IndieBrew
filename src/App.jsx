import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import SignUP from "./SignUp";
function App() {
  return (
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/sign-up" element={<SignUP/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App
