import { Link } from "react-router";

export default function NavBar () {
    
  return (
    <nav className="nav-bar">
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/projects">Projects</Link>
    </nav>
  );
}