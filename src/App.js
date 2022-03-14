import './App.css';
import React from 'react';
import styled from '@emotion/styled';
import Header from './Componentes/Core/Header';
import { BrowserRouter as Router } from 'react-router-dom';
import DataProvider from './Componentes/Context/Context';
import Footer from './Componentes/Core/Footer';

import Routes from './routes';

const BodyStyle = styled('body')({
  background: 'lightblue'
})


function App() {

  return (
    <DataProvider>
      <Router>
      <BodyStyle>
        <Header/>
        <Routes/>
        <Footer/>
      </BodyStyle>
    </Router>
    </DataProvider>

  );
}

export default App;
