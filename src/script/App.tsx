import React  from 'react';
// import  { useState } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

import { AppContextProvider } from './services/AppContext';
import { StaticURL } from './services/getStaticURL';

import { Footer } from './layout/Footer';
import { Aside } from './layout/Aside';

import { Main } from './pages/Main';
import { About } from './pages/About';
import { Map } from './pages/Map';
import { Asutp } from './pages/Asutp';
import { Info } from './pages/Info';
import { Scheme } from './pages/Scheme';
import { Kip } from './pages/Kip';
import { Search } from './pages/Search';
import { ButtonUp } from './components/ButtonUp';

export function App(): JSX.Element {
// const [source, getSource] = useState([]);
  // const [isLoadingSource, setLoadingSOurce] = useState(true);
  const isStatic=StaticURL("app")
  console.log(isStatic);

  return (
    <div className="App">
      <div className="container">
        <AppContextProvider>
          <Routes>
            <Route path="/about" element={<About/>} />
            <Route path="/map" element={<Map/>} />
            <Route path="/diagrams/:section" element={<Scheme/>} />
            <Route path="/diagrams/" element={<Scheme/>} />
            <Route path="/kip/:section" element={<Kip/>} />
            <Route path="/kip" element={<Kip/>} />
            <Route path="/asutp/:section" element={<Asutp/>} />
            <Route path="/asutp" element={<Asutp/>} />
            <Route path="/info/:section" element={<Info/>} />
            <Route path="/info" element={<Info/>} />
            <Route path="/search" element={<Search/>} />
            <Route path="/main" element={<Main/>}/>
            {isStatic && <Route path={isStatic} element={<Main/>} />}
            <Route path="/" element={<Main/>} />
            <Route path="*" element={<Navigate to="/main" replace />} />
          </Routes>
        </AppContextProvider>
        <Aside />
        <Footer />
        <ButtonUp />
      </div>
    </div>
  );
}
