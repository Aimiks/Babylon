import React from 'react';
import './App.css';
import TopHeader from './components/TopHeader/TopHeader.js';
import {getMockLogo, getMockTabs} from './functions/mock';

const App = () => {
  const mockTabs = getMockTabs();
  const mockLogo = getMockLogo();
  return (
    <TopHeader tabs={mockTabs} logo={mockLogo}/>
  );
}

export default App;
