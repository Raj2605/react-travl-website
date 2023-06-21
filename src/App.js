import React from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './components/pages/Home';
import Services from './components/pages/Services';
import Products from './components/pages/Products';
import SignUp from './components/pages/SignUp';

function App() {
  return (
    <div>
      <Router>
    <Navbar></Navbar>
    <Routes>
      <Route path='/' exact Component={Home}></Route>
      <Route path='services' Component={Services}></Route>
      <Route path='products' Component={Products}></Route>
      <Route path='sign-up' Component={SignUp}></Route>
    </Routes>
    </Router>
    </div>
  );
}

export default App;
