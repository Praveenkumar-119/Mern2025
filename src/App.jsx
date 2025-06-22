import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from "./pages/Home";
import About from './pages/About';
import Contact from './pages/Contact';
import Hooks from './Hooks/Hooks';
import State from './Hooks/State';
import Effect from './Hooks/Effect';
import Effect2 from './Hooks/Effect2';
import Login from './Pages/Login';
import Ref from './Hooks/Ref';
import './App.css';

const App = () => {
  const fruits = ['Apple', 'Banana', 'Orange'];

  return (
    <div>
      <h2>My Counter App</h2>
      <Navbar />

      <Routes>
        <Route path="/home" element={<Home items={fruits} />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/hooks" element={<Hooks />} />
        <Route path="/state" element={<State />} />
        <Route path="/effect" element={<Effect/>}/>
        <Route path="/effect2" element={<Effect2/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path='/ref' element={<Ref/>}/>
      </Routes>
    </div>
  );
};

export default App;
