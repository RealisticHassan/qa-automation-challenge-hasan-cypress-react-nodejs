import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/Login';

//import City from './components/City';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        {/* <Route path="/city" element={<City />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
