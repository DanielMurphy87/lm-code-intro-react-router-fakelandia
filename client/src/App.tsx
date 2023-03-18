import { useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/home';
import Confession from './components/confession';
import Misdemeanour from './components/misdemeanour';
import NotFound from './components/not_found';

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/confession" element={<Confession />} />
        <Route path="/misdemeanour" element={<Misdemeanour />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );

}

export default App
