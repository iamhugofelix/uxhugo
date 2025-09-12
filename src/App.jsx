import './index.css'
import { BrowserRouter, Link, Route, Routes } from 'react-router'
import Home from './pages/Home/Home';
import ProjectDetails from "./pages/ProjectDetails/ProjectDetails";
import NavBar from './components/NavBar/NavBar';
import Footer from './components/Footer/Footer';
import NotFound from './pages/NotFound/NotFound';
import ScrollToTop from './services/ScrollToTop';

export default function App() {
  return (
    <BrowserRouter>
      <div className="vertical-lines"></div>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/project-details" element={<ProjectDetails />} />
        <Route path="/projects/:id/:slug" element={<ProjectDetails />} />

        <Route path="*" element={<NotFound />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}