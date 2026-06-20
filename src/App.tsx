import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import GreenFees from './pages/GreenFees';
import Membership from './pages/Membership';
import Clubhouse from './pages/Clubhouse';
import ProShop from './pages/ProShop';
import GroupsSocieties from './pages/GroupsSocieties';
import Contact from './pages/Contact';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [pathname]);
  return null;
}

function AppInner() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <ScrollToTop />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/green-fees" element={<GreenFees />} />
          <Route path="/membership" element={<Membership />} />
          <Route path="/clubhouse" element={<Clubhouse />} />
          <Route path="/pro-shop" element={<ProShop />} />
          <Route path="/groups-societies" element={<GroupsSocieties />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <AppInner />
    </BrowserRouter>
  );
}
