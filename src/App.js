import React from 'react';
import Home from './components/pages/homepage/home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      < Router>
        <Routes>
          <Route path='/' exact element={<Home />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
