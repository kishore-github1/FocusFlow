import React from "react";
import { Routes, Route, BrowserRouter} from 'react-router-dom'; 
import Home from "./pages/Home";
import Tasks from "./pages/Tasks"
import Signup from "./pages/SignUp"
import Login from "./pages/Login";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/tasks" element = {<Tasks/>} />
        <Route path="/signup" element = {<Signup/>} />
        <Route path="/login" element = {<Login/>} />

      </Routes>
    </BrowserRouter>
    
    
  );
};

export default App;
