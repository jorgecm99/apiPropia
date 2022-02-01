import './App.css';
import React from 'react';
import styled from '@emotion/styled';
import Header from './Componentes/Core/Header';
import { BrowserRouter as Router } from 'react-router-dom';
import DataProvider from './Componentes/Context/Context';
import Section from './Componentes/Section/Section';

const BodyStyle = styled('body')({
  background: 'blue'
})


function App() {
  return (
    <DataProvider>
      <Router>
      <BodyStyle>
        <Header/>
        <Section/>
      </BodyStyle>
    </Router>
    </DataProvider>  
   
  );
}

export default App;