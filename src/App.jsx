import "./App.css";

import Home from "./Components/Home";
import About from "./Components/About";
import Login from "./Components/Login";
import PostView from "./Components/PostView";
import Profile from "./Components/Profile";
import Register from "./Components/Register";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PostInput from "./Components/PostInput";
function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/view" element={<PostView />}></Route>
        <Route path="/post-input" element={<PostInput />}></Route>
        <Route path="/profile" element={<Profile />}></Route>
        <Route path="/accpet" element={<Profile />}></Route>
        <Route path="/registration" element={<Register />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
