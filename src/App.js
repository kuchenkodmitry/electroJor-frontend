import './App.css';
import React, { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";

const Home = lazy(() => import('./pages/home'));
const AdminPanel = lazy(() => import('./pages/admin/admin'));
const NotFound = lazy(() => import('./pages/notFound'));


function App() {
  
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/admin' element={<AdminPanel/>}/>
        <Route path='/admin/:params' element={<AdminPanel/>}/>
        <Route path='*' element={<NotFound />} />
      </Routes>
    </Suspense>
  );
}

export default App;
