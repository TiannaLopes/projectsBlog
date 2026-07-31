import React from 'react';
import Header from './components/core/Header';
import Footer from './components/core/Footer';
import HomePage from './components/HomePage';
import './styles/site.css';

function App() {
  return (
    <div className='app'>
      <Header />
      <HomePage />
      <Footer />
    </div>
  );
}

export default App;
