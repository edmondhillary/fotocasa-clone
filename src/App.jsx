import React, {useEffect, useState} from 'react';
import './App.css'
import Header from './components/Header/Header';

import Footer from './components/Footer/Footer';
import Main from './components/Main/Main';




function App() {
    return (
      <div className="App">
        <Header style={{height:'677px'}}/>
        <Main/>
        <>
        <Footer/>
        </>
      </div>
    );
  }
  
  export default App;
  