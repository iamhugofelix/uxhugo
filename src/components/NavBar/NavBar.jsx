import { Link } from "react-router";

export default function NavBar () {
    
  return (
    <nav className="nav-bar">
      <Link to="/">Home</Link>
      <Link to="/project-details">Project Page</Link>
    </nav>
  );
}