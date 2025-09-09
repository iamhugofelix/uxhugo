import './index.css'
import { BrowserRouter, Link, Route, Routes } from 'react-router'
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import ProjectDetails from './pages/ProjectDetails';
import NavBar from './components/NavBar/NavBar';
import Footer from './components/Footer/Footer';
import ScrollToTop from './components/ScrollToTop/ScrollToTop';

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="vertical-lines"></div>
      <NavBar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/projects/:title" element={<ProjectDetails />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}