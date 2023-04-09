import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Layout from './components/Layout/Layout';
import Main from './pages/Main/Main';
import Products from './pages/Products/Products'
import Branches from './pages/Branches/Branches'
import AboutUs from './pages/AboutUs/AboutUs'

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path='/' exact element={<Main />} />
          <Route path='/products' exact element={<Products />} />
          <Route path='/branches' exact element={<Branches />} />
          <Route path='/about' exact element={<AboutUs />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
