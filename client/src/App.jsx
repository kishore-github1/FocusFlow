import React from "react";
import { Routes, Route, BrowserRouter} from 'react-router-dom'; 
import Home from "./Home";
import Tasks from "./Tasks"

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/tasks" element = {<Tasks/>} />
      </Routes>
    </BrowserRouter>
    
    
  );
};

export default App;
