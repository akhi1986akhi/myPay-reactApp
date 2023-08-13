import React from 'react';
import './App.css';
import Home from './Home';

import { Routes ,Route} from 'react-router';
import About from './pages/About';
import Service from './pages/Service';
import Contact from './pages/Contact';

function App() {
  return (
    <>
      <Routes>

        <Route path="/" Component={Home}></Route>
        <Route exact path="/about" Component={About}></Route>
        <Route path="/service" Component={Service}></Route>
        <Route path="/contact" Component={Contact}></Route>
        <Route path="/error" Component={Error}></Route>
      </Routes>
    </>
  );
}

export default App;
