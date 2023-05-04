import './App.css';
import Home from './Pages/Home';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Register from "./Register"
import Login from './Login';
import Chat from './Pages/Chat';


function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Register />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Chat" element={<Chat />} />
          </Routes>
      </Router>

    </div>
  );
}

export default App;
