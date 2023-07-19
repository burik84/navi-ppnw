import React, { useState } from 'react';

import { Routes, Route } from 'react-router-dom';

import { AppContextProvider } from './services/AppContext';

import { Footer } from './layout/Footer';
import { Aside } from './layout/Aside';

import { Main } from './pages/Main';
import { About } from './pages/About';
import { Map } from './pages/Map';
// import { Asutp } from './pages/Asutp';
// import { Info } from './pages/Info';
import { Scheme } from './pages/Scheme';
// import { Uku } from './pages/Uku';
// import { Kip } from './pages/Kip';
import { Search } from './pages/Search';
// import { ButtonUp } from './components/ButtonUp';

export function App(): JSX.Element {
  // const [source, getSource] = useState([]);
  // const [isLoadingSource, setLoadingSOurce] = useState(true);

  return (
    <div className="App">
      <div className="container">
      <AppContextProvider>
          <Routes>
            <Route path="/about" element={<About/>} />
            <Route path="/map" element={<Map/>} />
            <Route path="/scheme/:section" element={<Scheme/>} />
            <Route path="/scheme/" element={<Scheme/>} />
            {/* <Route path="/kip/:section" component={Kip} /> */}
            {/* <Route path="/kip" component={Kip} /> */}
            {/* <Route path="/asutp/:section" component={Asutp} /> */}
            {/* <Route path="/asutp" component={Asutp} /> */}
            {/* <Route path="/info/:section" component={Info} /> */}
            {/* <Route path="/info" component={Info} /> */}
            <Route path="/search" element={<Search/>} />
            <Route path="/main" element={<Main/>}/>
            <Route path="/" element={<Main/>} />
            <Route path="*">Sorry, This page not found</Route>
          </Routes>
        </AppContextProvider>
        <Aside />
        <Footer />
        {/* <ButtonUp /> */}
      </div>
    </div>
  );
}
