import React from 'react';
import './App.css';
import Home from './Home';

import { Routes ,Route} from 'react-router';
import About from './pages/About';
import Service from './pages/Service';
import Contact from './pages/Contact';
import Error404 from './Error404';



function App() {
  return (
    <>
      <Routes>

        <Route path="/" Component={Home}></Route>
        <Route exact path="/about" Component={About}></Route>
        <Route path="/service" Component={Service}></Route>
        <Route path="/contact" Component={Contact}></Route>
        <Route path="*" Component={Error404}></Route>
      </Routes>
    </>
  );
}

export default App;
