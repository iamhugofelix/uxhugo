import ProjectCard from "../ProjectCard/ProjectCard";

export default function ProjectsList () {
  return (
    <div className="projects-list">
      <ProjectCard
        year={"2025"}
        type={"Case Study"}
        title={"This is the project title"}
        img={"public/images/test-1.jpg"}
      />
      <ProjectCard
        year={"2025"}
        type={"Case Study"}
        title={"This is the project title"}
        img={"public/images/test-2.jpg"}
      />
      <ProjectCard
        year={"2025"}
        type={"Case Study"}
        title={"This is the project title"}
        img={"public/images/test-3.jpg"}
      />
      <div className="coming-soon">
        <p className="text-md italic">More Projects Soon...</p>
      </div>
    </div>
  );
}