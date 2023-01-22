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
        <Route exact path="/about" element={<About />}></Route>
        <Route exact path="/login" element={<Login />}></Route>
        <Route exact path="/view" element={<PostView />}></Route>
        <Route exact path="/post-input" element={<PostInput />}></Route>
        <Route exact path="/profile" element={<Profile />}></Route>
        <Route exact path="/accpet" element={<Profile />}></Route>
        <Route exact path="/registration" element={<Register />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
