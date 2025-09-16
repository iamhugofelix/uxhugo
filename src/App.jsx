import './index.css'
import { BrowserRouter, Link, Route, Routes } from 'react-router'
import Home from './pages/Homepage/Home';
import ProjectDetails from "./pages/ProjectDetails/ProjectDetails";
import Footer from './components/Footer/Footer';
import NotFound from './pages/NotFound/NotFound';
import ScrollToTop from './services/ScrollToTop';
import EmptyPage from './pages/Empty/EmptyPage';
import NotePad from './components/NotePad/NotePad';

export default function App() {
  return (
    <BrowserRouter>
      <div className="vertical-lines"></div>
      <ScrollToTop />
      <NotePad />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/project-details" element={<ProjectDetails />} />
        <Route path="/projects/:id/:slug" element={<ProjectDetails />} />
        <Route path="/empty" element={<EmptyPage />} />

        <Route path="*" element={<NotFound />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}