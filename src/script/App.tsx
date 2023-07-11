import React, { useState } from 'react';

import { Routes, Route } from 'react-router-dom';

// import { AppContextProvider } from './services/AppContext';

import { Footer } from './layout/Footer';
import { Aside } from './layout/Aside';

// import { ButtonUp } from './components/ButtonUp';

export function App(): JSX.Element {
  // const [source, getSource] = useState([]);
  // const [isLoadingSource, setLoadingSOurce] = useState(true);

  return (
    <div className="App">
      <div className="container">
        <Aside />
        <Footer />
        {/* <ButtonUp /> */}
      </div>
    </div>
  );
}
