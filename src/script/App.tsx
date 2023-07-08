import React from 'react';
import { Routes, Route } from 'react-router-dom';

import { Main } from './pages/Main';
import { About } from './pages/About';
import { Map } from './pages/Map';
import { Asutp } from './pages/Asutp';
import { Info } from './pages/Info';
import { Scheme } from './pages/Scheme';
import { Uku } from './pages/Uku';
import { Kip } from './pages/Kip';
import { Search } from './pages/Search';

import { Footer } from './layout/Footer';
import { Aside } from './layout/Aside';

import { ButtonUp } from './components/ButtonUp';

import { AppContextProvider } from './services/AppContext';

export function App(): JSX.Element {

  return (
    <div className="App">
      <div className="container">
        <AppContextProvider>
          <Routes>
            <Route path="/about" element={<About/>} />
            <Route path="/map" element={<Map/>} />
            <Route path="/scheme/:section" element={<Scheme/>} />
            <Route path="/scheme/" element={<Scheme/>} />
            <Route path="/uku/:section" element={<Uku/>} />
            <Route path="/uku" element={<Uku/>} />
            <Route path="/kip/:section" element={<Kip/>} />
            <Route path="/kip" element={<Kip/>} />
            <Route path="/asutp/:section" element={<Asutp/>} />
            <Route path="/asutp" element={<Asutp/>} />
            <Route path="/info/:section" element={<Info/>} />
            <Route path="/info" element={<Info/>} />
            <Route path="/search" element={<Search/>} />
            <Route path="/main" element={<Main/>} />
            <Route path="/" element={<Main/>} />
            <Route path="*">Sorry, This page not found</Route>
          </Routes>
        </AppContextProvider>
        <Aside />
        <Footer />
        <ButtonUp />
      </div>
    </div>
  );
}
