import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Loader from './components/loader';
import ScrollToTop from './components/scrollToTop';

const Home = lazy(() => import('./components/home'));
const OurTeam = lazy(() => import('./components/ourTeam/ourTeamLayout'));

const App = () => {
  return (
    <Router>
      <ScrollToTop>
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/our-team" element={<OurTeam />} />
          </Routes>
        </Suspense>
      </ScrollToTop>
    </Router>
  );
};

export default App;
