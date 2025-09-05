import { Link } from "react-router";

export default function ProjectCard({title, year, type, img, url}) {
  return (
    <div className="project-card-wrapper">
      <Link to={url} className="project-card">
        <div className="project-card-content">
          <div className="project-card-metadata">
            <span>{year}</span>
            <span>&middot;</span>
            <span>{type}</span>
          </div>
          <h2 className="bold text-dark">{title}</h2>
        </div>
        <div className="project-card-image">
          <img src={`${img}`} alt={title} />
        </div>
      </Link>
    </div>
  );
}