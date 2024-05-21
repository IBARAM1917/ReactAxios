import React from 'react';
import Header from './components/Header';
import { UserContextProvider } from './components/context/usercontex';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import ListPages from './components/ListPages';
import Footer from './components/Footer';
import './App.css';

const App = () => {
  return (
    <div className='App bg-secondary'>
      <Header />
      <UserContextProvider>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/ListPages' element={<ListPages />} />
        </Routes>
      </UserContextProvider>
      <Footer />
    </div>
  );
};

export default App;