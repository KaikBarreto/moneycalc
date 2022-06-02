import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Home } from './Components/Pages/Home';
import { Calculator } from './Components/Pages/Calculator';
import { Contact } from './Components/Pages/Contact';
import "./app.css"

function App() {
  return (
      <Router>
          <Routes>
              <Route path="/" element={<Home /> } />
              <Route path="/calculator" element={<Calculator /> } />
              <Route path="/contact" element={<Contact /> } />
          </Routes>
      </Router>
  )
}

export default App;
