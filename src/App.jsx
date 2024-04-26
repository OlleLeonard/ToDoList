
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from "./Header";
import Home from "./Home";
import ToDo from "./ToDo";
import About from "./About";
import React from 'react'

function App() {
  return (
<BrowserRouter>
  <Header></Header>    
  <Routes>
  <Route  path="/Home" element={<Home />} />
  <Route  path="/to-do-list" element={<ToDo />} />
  <Route  path="/About" element={<About />} />
  </Routes>
</BrowserRouter>
  );
}

export default App