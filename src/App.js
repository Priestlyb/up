import React from 'react';
import Home from './components/pages/homepage/home';
import Detail from './components/pages/detailpage/detail';
import Finish from './components/pages/finishpage/finish';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      < Router>
        <Routes>
          <Route path='/' exact element={<Home />} />
          <Route path='/detail' exact element={<Detail />} />
          <Route path='/finish' exact element={<Finish />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
