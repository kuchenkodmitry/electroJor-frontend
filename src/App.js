import './App.css';
import React from "react";
import Home from './pages/home';
import { Routes, Route } from "react-router-dom";
import AdminPanel from './pages/admin/admin';
import NotFound from './pages/notFound';


function App() {
  
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/admin' element={<AdminPanel/>}/>
        <Route path='/admin/:params' element={<AdminPanel/>}/>
        <Route path='*' element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
