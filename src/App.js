import React from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Login from './components/login.component'
import Transfer from './components/transfer.component'
function App() {
  return (
    <Router>
      {/* <div className="App">
        <div className="auth-wrapper">
          <div className="auth-inner"> */}
            <Routes>
              <Route exact path="/" element={<Login />} />
              <Route path="/transfer" element={<Transfer />} />\
            </Routes>
          {/* </div>
        </div>
      </div> */}
    </Router>
  )
}
export default App