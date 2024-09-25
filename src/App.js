import React, { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import Secound from './secound.js'
import Header from './Header.js'
import First from './first.js'

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/first" exact element={<First />} />
          <Route path="/secound" exact element={<Secound />} />
          <Route path="/third" exact element={<Header />} />
          <Route path="*" exact element={<First />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
