import './App.css';
import React from 'react';
import Navbar from './components/Navbar';
import Video from './components/Video';
import Content1 from './components/Content1';
import Content2 from './components/Content2';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <div className="-mt-[170px] sticky top-0">
        <Navbar />
      </div>

      <Video />
      <Content1 />
      <Content2 />
      <Footer />
    </div>
  );
}

export default App;
